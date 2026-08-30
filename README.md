# Mahmoud Elbahi — Career Website

> Personal professional portfolio showcasing Mahmoud Elbahi's experience in Special Education, Autism, Speech & Language, Technical Supervision, Digital Transformation, Educational Systems, Technology, AI, and Sales.

---

## 🌟 Overview

This web application serves as the comprehensive, interactive career portfolio and system showcase for **Mahmoud Elbahi**. It highlights an interdisciplinary career bridging frontline special education clinical practice with technical supervision, school-wide digital transformation, and educational software development.

---

## 🎯 Main Areas

* **Special Education**: Hands-on pedagogical design, Individualized Education Programs (IEP), and evidence-based interventions.
* **Autism (ASD)**: Specialized classroom instruction, behavioral modification (ABA principles), and developmental milestone tracking.
* **Speech & Language**: Communication rehabilitation, phonological assessments, and therapeutic protocols.
* **Technical Supervision**: Managing school technology infrastructure, standardizing educational workflows, and supporting staff adoption.
* **Digital Transformation**: Translating operational challenges into structured digital workflows, automating attendance, IEP logs, and session reporting.
* **Educational Systems**: Architecting student management systems, IEP workflows, and real-time operational dashboards (e.g., *Miyar 360* concept).
* **Applied AI**: Implementing generative AI workflows for IEP draft acceleration, documentation pipelines, and operational productivity.
* **Sales & Business Development**: Technical consulting, customer onboarding, and human-centered relationship management.

---

## 🛠️ Tech Stack

Built with a modern, high-performance web stack:

* **React 19** — Functional UI components, hooks, and reactive state management
* **TypeScript** — Strict type safety across content models and view states
* **Vite 6** — Ultra-fast build tool and development server
* **Tailwind CSS v4** — High-contrast, responsive styling and typography
* **Lucide React** — Consistent icon library
* **Motion (`motion/react`)** — Smooth layout transitions and interactive animations

---

## 📂 Project Structure

```text
mahmoud-elbahi-career/
├── public/
│   ├── Mahmoud-Elbahi-CV.pdf         # Primary ATS & Executive CV (PDF)
│   ├── Mahmoud_Elbahi_ATS_CV.pdf     # Alternative formatted ATS CV
│   └── assets/                       # Static public assets
├── src/
│   ├── components/                   # Modular UI components & section views
│   │   ├── dashboard/                # Command-center dashboard & views
│   │   │   ├── views/                # Education, Technology, Sales, Executive views
│   │   │   ├── AppSidebar.tsx        # Navigation sidebar & drawer controls
│   │   │   ├── ExperienceDetailDrawer.tsx # Rich slide-out role drawer
│   │   │   └── ...
│   │   ├── paths/                    # Specialized deep-dive pathway views
│   │   ├── visuals/                  # Animated telemetry and system diagrams
│   │   ├── CvModal.tsx               # Embedded PDF CV viewer & downloader
│   │   ├── Navbar.tsx                # Top navigation & language switcher
│   │   └── ...
│   ├── data/
│   │   └── content.ts                # Bilingual (EN/AR) structured data & portfolio content
│   ├── App.tsx                       # Main application shell & routing state
│   ├── main.tsx                      # React root entry point
│   ├── index.css                     # Global Tailwind CSS entry
│   └── types.ts                      # Shared TypeScript data interfaces
├── .env.example                      # Template for environment variables (no secrets)
├── .gitignore                        # Comprehensive ignore rules
├── index.html                        # Application entry HTML with localized meta tags
├── metadata.json                     # Application manifest & capabilities
├── package.json                      # Project dependencies and npm scripts
├── tsconfig.json                     # TypeScript compiler configuration
├── vite.config.ts                    # Vite build configuration
└── README.md                         # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
* Node.js (version 18 or higher recommended)
* npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mahmoud-elbahi-career.git
   cd mahmoud-elbahi-career
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables (optional):
   ```bash
   cp .env.example .env
   ```

4. Start the local development server:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000`.

### Production Build

To build the static production bundle:
```bash
npm run build
```
The compiled assets will be output to the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## ✨ Key Features

* **Bilingual Support (EN / AR)**: Full bidirectional support with seamless English (LTR) and Arabic (RTL) switching.
* **Dual-Role Career Architecture**: Clear presentation of active roles at Al-Furqan Private Schools (Special Education Teacher + Technical Supervisor).
* **Multi-View Portfolio Hub**: Interactive exploration modes (Dashboard View, Specialized Paths, Recruiter Snapshot, Case Studies).
* **Integrated PDF CV Viewer**: In-app modal viewer and one-click direct download for Mahmoud Elbahi's CV.
* **Verified Links**: Direct links to LinkedIn profile, verified Google Drive certificate repositories, and project case studies.
* **Zero Secret Exposure**: Fully secured repository configuration with `.gitignore` and `.env.example`.

---

## 📄 License

Private personal portfolio of **Mahmoud Elbahi**. All rights reserved.
