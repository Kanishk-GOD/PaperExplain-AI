#!/usr/bin/env node
/**
 * PaperExplain AI - Automated Secret Scanning Script
 * Runs pre-commit or in CI to ensure no secrets or API keys are ever committed to Git.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

const SECRET_PATTERNS = [
  // Gemini / Google AI Keys (AIzaSy..., AQ....)
  /AIza[0-9A-Za-z-_]{35}/,
  /AQ\.[0-9A-Za-z-_]{40,}/,
  // OpenAI Keys
  /sk-[a-zA-Z0-9]{32,}/,
  // Supabase Service / JWT Secrets
  /eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\.[a-zA-Z0-9_-]{30,}/,
  // Generic Private Keys / Tokens
  /-----BEGIN (?:RSA |EC |DSA |OPENSSH )?PRIVATE KEY-----/,
  /ghp_[a-zA-Z0-9]{36}/
];

const IGNORED_PATHS = [
  'node_modules',
  '.git',
  'dist',
  'dist-ssr',
  '.env.example',
  '.env.local',
  'scripts/check-secrets.js'
];

function shouldScanFile(filePath) {
  const rel = path.relative(PROJECT_ROOT, filePath);
  if (IGNORED_PATHS.some((ign) => rel.startsWith(ign))) return false;
  
  // Do not allow committing actual .env files (except local uncommitted env)
  const baseName = path.basename(filePath);
  if (baseName.startsWith('.env') && baseName !== '.env.example' && baseName !== '.env.local') {
    console.error(`\x1b[31m[SECURITY ALERT] Dangerous file staged: ${rel}\x1b[0m`);
    console.error('Do NOT commit environment files to Git. Keep them in .gitignore.\n');
    return 'DANGEROUS_ENV';
  }

  // Scan code, text, json, yaml, config files
  return /\.(ts|tsx|js|jsx|json|html|css|md|yaml|yml|env)$/i.test(baseName);
}

function scanDirectory(dir, issues = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const rel = path.relative(PROJECT_ROOT, fullPath);

    if (IGNORED_PATHS.some((ign) => rel.startsWith(ign))) continue;

    if (entry.isDirectory()) {
      scanDirectory(fullPath, issues);
    } else if (entry.isFile()) {
      const scanDecision = shouldScanFile(fullPath);
      if (scanDecision === 'DANGEROUS_ENV') {
        issues.push({ file: rel, line: 0, reason: 'Environment variable file detected' });
        continue;
      }
      if (!scanDecision) continue;

      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        const lines = content.split('\n');

        lines.forEach((lineText, idx) => {
          for (const pattern of SECRET_PATTERNS) {
            if (pattern.test(lineText)) {
              issues.push({
                file: rel,
                line: idx + 1,
                reason: `Matches suspected secret pattern: ${pattern.toString()}`
              });
              break;
            }
          }
        });
      } catch (e) {
        // Skip unreadable files
      }
    }
  }

  return issues;
}

console.log('\x1b[36m[PaperExplain Security] Scanning codebase for exposed API keys and secrets...\x1b[0m');

const detectedIssues = scanDirectory(PROJECT_ROOT);

if (detectedIssues.length > 0) {
  console.error('\x1b[31m========================================================\x1b[0m');
  console.error('\x1b[31m[CRITICAL] COMMIT BLOCKED: Secrets detected in codebase!\x1b[0m');
  console.error('\x1b[31m========================================================\x1b[0m');
  detectedIssues.forEach((issue) => {
    console.error(` -> \x1b[33m${issue.file}:${issue.line}\x1b[0m - ${issue.reason}`);
  });
  console.error('\nPlease remove the secrets from the files above before committing.');
  process.exit(1);
} else {
  console.log('\x1b[32m[PASS] Codebase is 100% clean! Zero API keys or secrets detected.\x1b[0m\n');
  process.exit(0);
}
