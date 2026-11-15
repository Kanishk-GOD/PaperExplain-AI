# PaperExplain AI (Paperless AI)
### *Your Personal AI Document Understanding Assistant*

> **"Upload any document. Understand everything."**

PaperExplain AI is a comprehensive, AI-powered document understanding platform built with **React, TypeScript, Tailwind CSS, Google Gemini API, Supabase, and PDF.js**. It helps everyday people dissect, comprehend, and navigate complex paperwork—from employment contracts and triple-net commercial leases to health insurance policies, clinical pathology reports, and enterprise SaaS agreements.

---

## 🌟 Key Features

### 1. Universal Document Understanding
- **12 Supported Categories**: Legal Agreements, Employment Contracts, Commercial & Residential Property Leases, Insurance Policies, Medical & Oncology Reports, Academic Research Papers, Business MSAs & SLAs, Financial Statements, Invoices & Receipts, Government Compliance Notices, SaaS Terms of Service, and General Documents.
- **Automatic Category & Purpose Identification**: Evaluates semantic keywords, heading structures, and legal/medical nomenclature to classify uploaded documents automatically.

### 2. Comprehensive 6-Tab Analysis Interface
1. **Overview & Purpose**:
   - Explains document type, issuer, target audience, primary purpose, overall subject, and key takeaway in plain English.
   - **Practical Implications Matrix**: Explains *What does this document require me to do?*, *What am I agreeing to?*, *What rights do I receive?*, *What are my responsibilities?*, and *Consequences of non-compliance*.
2. **Full Section-by-Section Explanation**:
   - Breaks down every clause and paragraph.
   - Shows original text quote (collapsible), simple English translation, why it matters, what it means for you, and fine-print details not to overlook.
   - **Interactive Table of Contents**: Jump directly to any section.
   - **Text-to-Speech (TTS)**: Listen to explanations read aloud hands-free.
3. **Important Details**:
   - Structured cards and tables extracting Key Parties & Entities, Dates & Deadlines (with urgency badges), Financial Amounts & Milestone Schedules, Rights & Obligations, and Validity/Cancellation Periods.
4. **Terminology Glossary**:
   - Clarifies difficult words, Latin legal phrases, medical acronyms, and industry jargon with simple definitions, document context, and practical everyday analogies.
5. **Risks and Warnings**:
   - Scans for unusual conditions, uncapped financial liabilities, strict notice windows, and restrictive covenants.
   - Categorized by severity (`Critical`, `High`, `Medium`, `Low`) with page references and actionable mitigation recommendations.
   - Prominent professional disclaimer notice.
6. **Ask AI Assistant**:
   - Grounded conversational document assistant.
   - Suggested prompts for quick answers.
   - Factual responses with clickable **Page Citation Badges** that automatically jump the original document preview to that exact page.

### 3. Dynamic Explanation Modes
Switch between 4 comprehension styles at any time:
- **Simple Mode**: Plain, accessible everyday English without jargon.
- **Detailed Mode**: Comprehensive explanations with background and regulatory context.
- **Professional Mode**: Accurate formal terminology and statutory standards.
- **Beginner Mode**: Real-world analogies and step-by-step metaphors.

### 4. Interactive Split-Screen Layout & Document Navigation
- **Left Side**: Original Document Preview with page navigation, zoom controls, keyword search, and page thumbnail strip.
- **Floating Text-Selection Explainer**: Highlight any sentence or paragraph in the original document to instantly trigger *"✨ Explain This"* or *"❓ Ask AI"*.
- **Flexible Layout Controls**:
  - `50 / 50` Split
  - `70 / 30` Expanded Explanation Area (for reading lengthy sections)
  - `Full AI` Full Screen Explanation
  - `Full Doc` Full Screen Original Document Preview

### 5. Multi-Source Upload & Export
- **File Upload**: Drag and drop `.pdf`, `.txt`, `.md`, `.docx`, or scanned images.
- **Paste Text**: Paste raw document clauses directly.
- **Export Report**: Download full analysis in GitHub-flavored Markdown or print.

---

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Lucide React, Canvas Confetti.
- **Document Engine**: PDF.js (`pdfjs-dist`) for page-by-page extraction and canvas rendering.
- **AI Engine**: Google Gemini API (`gemini-2.5-flash`, `gemini-1.5-pro`, `gemini-2.0-flash`) + Smart Semantic Heuristic Fallback Engine.
- **Database & Auth**: Supabase Client (`@supabase/supabase-js`) with automatic LocalStorage & IndexedDB offline resilience.

---

## 🚀 Getting Started

The project is located at:
```bash
cd /Users/kanishkjadhav/.gemini/antigravity/scratch/paperexplain-ai
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
npm run preview
```

---

## 📚 Pre-Loaded Sample Documents

PaperExplain AI comes pre-loaded with 6 rich, realistic, real-world documents ready for instant exploration:
1. **Senior Staff Software Engineer Employment Agreement & IP Assignment** (Employment)
2. **Commercial Office Triple-Net (NNN) Lease Deed** (Property)
3. **Premier Global Health Shield Insurance Policy** (Insurance)
4. **Phase II Clinical Diagnostic & Oncology Genomic Report** (Medical)
5. **Autonomous Multi-Agent Collaboration for Verified Software Synthesis** (Academic Research)
6. **Enterprise Cloud SaaS Master Services Agreement & 99.9% SLA** (Business / SaaS)
