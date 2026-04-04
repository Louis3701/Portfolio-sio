# GitHub Portfolio Analysis: victorgms3/Portfolio
**Analyzed:** https://github.com/victorgms3/Portfolio  
**Date:** March 2026  
**Portfolio Type:** Static HTML Single-Page Application (SPA)  
**Deployment:** GitHub Pages

---

## 📁 Complete Folder Structure

```
Portfolio/
├── docs/                          # Main website content (GitHub Pages root)
│   ├── index.html                # Main portfolio page (primary entry point)
│   ├── style.css                 # Complete styling (responsive design)
│   ├── script.js                 # JavaScript interactivity & modal handlers
│   ├── assets/                   # PDFs, CV, reports
│   │   ├── cv.pdf
│   │   ├── Rapport_Stage_1A_Victor_GOMES_SILVA.pdf
│   │   ├── Rapport_Stage_2A_Victor_GOMES_SILVA.pdf
│   │   └── Fiche_Projet_Stage_D8.pdf
│   ├── save/                     # Backup/previous version
│   │   ├── index.html
│   │   └── style.css
│   └── test/                     # Testing version
│       ├── index.html
│       └── index-variations
└── (docs/ is the GitHub Pages deployment folder)
```

**Note:** Repository is deployed directly from `/docs/` folder using GitHub Pages. No source files (no src/, no config files) visible - this is a static-first deployment.

---

## 🛠️ Technology Stack

### **Frontend:**
- **HTML5** — Semantic markup, meta tags for SEO & social sharing
- **CSS3** — Custom properties (CSS variables), responsive grid/flexbox layout
- **Vanilla JavaScript** — No frameworks; modal popups, animations, scroll effects
- **CSS Animation** — Reveal animations on scroll, smooth transitions, gradient effects

### **Backend (Project References):**
- **Python** — MCP Server, Docker containerization, AI integration, scripting
- **PHP** — Backend for web applications (Arkania, GeoWorld projects)
- **Kotlin** — Desktop/mobile applications (Bataille Navale, KotlinMonster)
- **SQL/PL-SQL** — Oracle 19c, MySQL, query optimization

### **Databases (Referenced):**
- **Oracle 19c** — Enterprise RDBMS with schema "VEGA"
- **MySQL/MariaDB** — Web application databases
- **Oracle SQL Developer** — Database administration

### **Infrastructure & DevOps:**
- **GitHub Pages** — Static site hosting & deployment
- **Docker** — Containerization (references to LM Studio, MCP servers)
- **Git/GitHub** — Version control & CI/CD
- **Oracle Instant Client** — Thick Mode connectivity

### **AI/ML Stack:**
- **LLMs:** Llama 3.1 8B, Llama 3.1 7B-Q4 (quantized)
- **LM Studio** — Local LLM inference engine
- **AnythingLLM** — RAG (Retrieval-Augmented Generation) orchestration
- **MCP Servers** — Model Context Protocol with Python/FastAPI
- **SSE (Server-Sent Events)** — Real-time streaming responses

### **Design & Styling:**
- Google Fonts (Roboto, Fira Mono implied from meta)
- CSS Grid & Flexbox
- Custom color scheme with CSS variables (dark theme with accent colors)
- Responsive breakpoints for mobile, tablet, desktop

---

## 📋 Key Site Files & Content Organization

### **Root Files**
```
docs/
├── index.html (main portfolio)
├── style.css (styling)
├── script.js (interactions)
└── assets/ (PDFs, images, CV)
```

### **HTML Structure (Single Page App)**

#### **Hero Section**
- Profile introduction with terminal-style presentation
- "Victor Gomes Silva — BTS SIO SLAM" headline
- Stack badges: Python, SQL Oracle, Kotlin, PHP, Docker, LLM/RAG
- Call-to-action buttons (Projects, Download CV)
- Terminal-style code window (about section)

#### **Main Sections**
1. **About (#about)** — Terminal-themed bio, languages, interests
2. **BTS SIO Training (#bts)** — Educational timeline, SLAM specialization
3. **Internship Timeline (#parcours)** — Interactive timeline with milestones:
   - Formation entry (2024)
   - Stage 1 (May-June 2025): SQL Reporting, Oracle
   - Stage 2 (Jan-Feb 2026): AI On-Premise, Docker, LLM
   - Diploma (June 2026, future)
4. **Projects (#projects)** — Grid of featured work with modal popups
5. **Skills (#skills)** — Technical stack organized by category
6. **Technology Watch (#veille)** — Monitoring trends (IA, GPU, VRAM)
7. **Footer** — Contact info, copyright

#### **Project Modals** (Triggered by JavaScript)
Each project has detailed modal popup including:
- Problem statement
- Technical architecture
- Implementation details
- Technologies used (stacked badges)
- GitHub links
- PDF reports/documentation

**Featured Projects:**
- IA Générative On-Premise (Stage 2)
- Reporting Logistique SQL (Stage 1)
- Suite Applicative Kotlin (2 projects)
- GeoWorld (PHP/SQL geopolitical app)
- Arkania (PHP/MySQL RPG game interface)

---

## ⚙️ Configuration & Asset Files

### **No Traditional Config Files**
Unlike framework-based portfolios, this repository has:
- ✅ **NO package.json** (not Node.js/npm)
- ✅ **NO webpack/build config**
- ✅ **NO tsconfig.json** (not TypeScript)
- ✅ **NO .gitignore or env files**

### **Asset Management**
```
docs/assets/
├── cv.pdf               # Resume
├── Rapport_Stage_1A...  # Stage 1 report
├── Rapport_Stage_2A...  # Stage 2 report
├── Fiche_Projet_Stage_D8.pdf
└── (images likely inline as SVG/base64)
```

### **HTML Meta Tags (SEO/Social)**
```html
<meta name="author" content="Victor Gomes Silva">
<meta name="keywords" content="portfolio, développeur, BTS SIO, SLAM, python, kotlin, oracle, IA">
<meta property="og:title" content="Victor Gomes Silva — Portfolio BTS SIO">
<meta property="og:description" content="Portfolio étudiant BTS SIO SLAM...">
<meta property="og:type" content="website">
<meta property="og:url" content="https://victorgms3.github.io/testPortfolio/">
```

---

## 🎨 Design System & Styling Approach

### **CSS Organization**
- **Color Scheme:** Dark theme with accent colors
- **CSS Variables:** `--bg-1`, `--bg-2`, `--bg-3`, `--accent`, `--text`, `--text-muted`, `--border`
- **Typography:** Sans-serif + monospace fonts for code sections
- **Layout:** Container-based max-width design

### **Component Structure**
- `.section` — Major content blocks
- `.section-dark` — Alternating dark background sections
- `.container` — Max-width wrapper
- `.grid` classes — Responsive layouts
- `.card` — Reusable card components
- `.modal` — Popup windows with semantic structure
- `.reveal` — Scroll-triggered animations

### **Responsive Features**
- Mobile-first design approach
- Media queries for tablets & desktop
- Flexible grids that adapt layout
- Touch-friendly button sizes

---

## 📊 Content Organization Philosophy

### **Single-Page Application Model**
- All navigation via anchor links (#about, #projects, #skills, etc.)
- Modals for project details (no separate pages)
- JavaScript handles show/hide of popup content
- Smooth scroll navigation

### **Data Structure (Hardcoded in HTML)**
```html
<!-- Projects stored as article elements + modals -->
<article class="project-card" onclick="openModal('modal-ia')">
  <h3>Project Title</h3>
  <div class="project-stack">
    <span>Tech1</span><span>Tech2</span>
  </div>
</article>

<!-- Details in hidden modals -->
<div id="modal-ia" class="modal">
  <div class="modal-content">
    <!-- Detailed sections -->
  </div>
</div>
```

### **Timeline Structure (Parcours)**
- Interactive education/internship timeline
- CSS-based vertical timeline with dots and connectors
- Icons for different milestone types
- Color-coded tags (Formation, Stage, Future)

---

## 🚀 Build & Deployment Setup

### **Current Deployment Strategy**
```
✅ Static HTML Hosting
├── GitHub Pages (automatic from /docs)
├── No build process required
├── Direct HTML/CSS/JS delivery
└── No server-side rendering needed
```

### **Deployment Configuration**
- **Repository:** victorgms3/Portfolio (public)
- **Deployment Source:** `/docs` folder
- **Branch:** main
- **URL:** https://victorgms3.github.io/Portfolio/ (or custom domain)
- **Build Tool:** None (static content)

### **File Serving**
```
Raw file requests work directly:
- https://raw.githubusercontent.com/victorgms3/Portfolio/main/docs/index.html
- https://raw.githubusercontent.com/victorgms3/Portfolio/main/docs/style.css
- https://raw.githubusercontent.com/victorgms3/Portfolio/main/docs/script.js
```

### **Performance Optimization (Observed)**
- Single CSS file (no splitting)
- Inline SVG for icons (no image requests)
- Vanilla JS (no framework overhead)
- CSS animations (GPU-accelerated)
- Responsive images (future improvement area)

### **Asset Pipeline**
- PDFs linked directly from /assets/
- No CDN or external asset optimization
- Google Fonts linked via `<link>` tag
- Minimal external dependencies

---

## 📱 Content Categories & Information Architecture

### **Primary Navigation Sections:**
1. **Hero/Home** — Introduction & CTA
2. **About** — Terminal-style biography
3. **Formation** — BTS SIO details
4. **Timeline** — Education & internships (Parcours)
5. **Projects** — Featured work (Réalisations)
6. **Skills** — Technical stack by category
7. **Tech Watch** — Industry monitoring (Veille)
8. **Footer** — Contact & copyright

### **Project Information Stored:**
- **Title & description**
- **Timeline** (dates, duration)
- **Problem statement**
- **Technical architecture**
- **Implementation details**
- **Stack tags** (languages, frameworks, tools)
- **Links** (GitHub repos, PDFs)
- **Metrics** (budget, impact, complexity)

### **Skills Categorization:**
- Backend & Data (PHP, SQL, Python, MCP)
- Development (Spring Boot, MVC, Kotlin, POO)
- AI & Innovation (RAG, LLM, Prompt Engineering)
- Infrastructure & DevOps (Docker, GitHub, Oracle)
- Web & Tools (HTML/CSS/JS, Git, Agile)

---

## 🔍 Unique Structure Elements

### **Terminal-Styled Components**
- Interactive terminal window in about section
- Shows `whoami`, programming languages, interests, availability
- Simulates command-line interface with cursor animation

### **Timeline Visualization**
- Vertical timeline with colored dots
- Stage markers with different colors (formation, internship, future)
- Connected with CSS lines
- Expandable cards with mission details

### **Modal System**
- Triggered by JavaScript `openModal()` function
- Displays project details without page navigation
- Includes architecture diagrams (ASCII/text-based)
- Links to external GitHub repos and PDF reports

### **Scroll Reveal Animations**
- Elements animate in on scroll
- CSS classes: `.reveal` with intersection observer (likely in script.js)
- Staggered animations for visual interest
- Accessible as no critical content depends on animation

---

## 📈 Key Statistics & Metrics (From Content)

**Victor's Profile:**
- **Education:** BTS SIO SLAM (2024-2026) at Lycée Léonard de Vinci, Melun
- **Experience:** 2 internships at D8 Espresso Excellence
- **Projects:** 4+ documented applications
- **Languages:** Portuguese, Spanish, English
- **Availability:** June 2026 (graduation)
- **Budget Managed:** ~€4,000 (AI infrastructure project)

**Technologies Mastered:**
- 6+ programming languages/frameworks
- 2+ database systems
- Docker containerization
- LLM/RAG integration
- Enterprise SQL optimization

---

## 🎯 Comparison to Your Workspace

### **Similarities to Your Repository:**
- ✅ Static site structure with `/docs/` deployment folder
- ✅ HTML/CSS/JS approach (no framework)
- ✅ GitHub Pages deployment
- ✅ Educational/portfolio focus
- ✅ Content in markdown-like structure (though HTML-rendered)

### **Key Differences:**
- victorgms3 uses **pure HTML**, you use **Pelican** (static site generator)
- victorgms3 has **modals** for details, you have **separate pages**
- victorgms3 is **single-page app**, you have **multi-page structure**
- victorgms3 uses **vanilla JS**, you use **Pelican + theme templating**

---

## 💡 Replication Considerations for Your Portfolio

To recreate a similar structure with your content:

1. **Decide on Architecture:**
   - Keep Pelican (recommended) for dynamic content generation
   - Or switch to handwritten HTML like victorgms3

2. **Adopt Similar Pattern:**
   - One-page design with sections (hero, about, timeline, projects, skills)
   - Modal popups for project details via CSS + JS
   - Scroll-reveal animations throughout

3. **Tech Stack to Consider:**
   - Keep your Pelican setup (more maintainable)
   - Use a theme with modal support
   - Add custom JS for reveal animations
   - Custom CSS for terminal-styled components if desired

4. **Content Organization:**
   - Move from separate pages to anchors (#about, #projects, etc.)
   - Create Pelican article templates that generate modal HTML
   - Use metadata in front matter for architecture & stack info

5. **Design Elements to Borrow:**
   - Dark theme with accent colors (CSS variables)
   - Timeline component for education/experience
   - Terminal-styled sections for personality
   - Card-based layout for projects & skills
   - Scroll animations for engagement

---

## 📚 Files & Code Patterns to Reference

### **JavaScript Patterns Used:**
```javascript
// Modal handling
function openModal(modalId) { ... }
function closeModal(modalId) { ... }

// Scroll reveal (likely Intersection Observer)
document.querySelectorAll('.reveal').forEach(el => { ... })
```

### **HTML Patterns:**
```html
<!-- Project cards trigger modals -->
<article class="project-card" onclick="openModal('modal-id')">

<!-- Modal structure -->
<div id="modal-id" class="modal">
  <div class="modal-content">
    <button class="modal-close">✕</button>
    <!-- Sections -->
  </div>
</div>
```

### **CSS Patterns:**
```css
/* Color scheme via variables */
:root {
  --bg-1: #0a0f1a;
  --text: #e5e7eb;
  --accent: #00d9ff;
}

/* Dark theme alternating */
.section-dark { background: var(--bg-1); }

/* Responsive grid */
.grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
}
```

---

## 🔗 Repository Summary

| Aspect | Details |
|--------|---------|
| **Type** | Single-Page Static Portfolio |
| **Technology** | HTML5, CSS3, Vanilla JS |
| **Back References** | Python, PHP, Kotlin, Oracle, Docker |
| **Deployment** | GitHub Pages from `/docs/` |
| **Content** | Education, Internships, Projects, Technology Watch |
| **Unique Features** | Terminal UI, Timeline, Modal Projects, Scroll Animations |
| **Language** | French (educational content is French-focused) |
| **Accessibility** | Semantic HTML, responsive design, no critical animation dependency |

---

**End of Analysis**  
*This portfolio demonstrates best practices for a modern, static student/developer portfolio with interactive elements and professional presentation of technical projects.*
