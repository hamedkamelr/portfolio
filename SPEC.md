# Portfolio Website — Complete Tutorial

A comprehensive guide to understanding, running, customising, and deploying your **Hamed Kamel Rahimi** portfolio website built with Next.js 14, Tailwind CSS, and a local AI chatbot.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Getting Started](#4-getting-started)
5. [Design System](#5-design-system)
6. [Page Sections — How Each Works](#6-page-sections--how-each-works)
7. [The Chatbot](#7-the-chatbot)
8. [Customising Your Content](#8-customising-your-content)
9. [Adding New Sections](#9-adding-new-sections)
10. [Upgrading the Chatbot to Claude AI](#10-upgrading-the-chatbot-to-claude-ai)
11. [Deploying to Production](#11-deploying-to-production)
12. [Troubleshooting](#12-troubleshooting)

---

## 1. Project Overview

This is a single-page portfolio website designed with an **"enterprise meets edgy"** aesthetic — dark navy background, electric cyan and purple accents, glassmorphism cards, and smooth scroll animations. It is:

- **Fully local** — works offline with no external API dependencies
- **Static-first** — pre-rendered HTML for fast load times and SEO
- **Responsive** — works on mobile, tablet, and desktop
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation

### Sections at a Glance

| Section | Purpose |
|---|---|
| Navigation | Fixed top bar with smooth-scroll links |
| Hero | Full-screen introduction with typing animation |
| About | Bio and four highlight cards |
| Skills | Tabbed skill browser across four categories |
| Journey | Animated career timeline |
| Portfolio | Project showcase cards |
| Education | Degrees and certifications |
| Contact | Contact info and CTA |
| Chatbot | Floating AI assistant (no API key needed) |

---

## 2. Tech Stack

| Technology | Version | Role |
|---|---|---|
| **Next.js** | 14.2.5 | React framework (App Router) |
| **React** | 18.3 | UI component library |
| **TypeScript** | 5 | Type-safe JavaScript |
| **Tailwind CSS** | 3.4 | Utility-first CSS framework |
| **PostCSS** | 8 | CSS processing pipeline |
| **Autoprefixer** | 10 | Cross-browser CSS prefixes |
| **@anthropic-ai/sdk** | latest | Optional: Claude AI chatbot |

### Why Next.js App Router?

The App Router (introduced in Next.js 13) allows mixing **Server Components** (zero client JS) with **Client Components** (interactive). In this project:

- `app/page.tsx` and `app/layout.tsx` are Server Components — rendered on the server, no JS sent to browser
- Components with `'use client'` at the top (Navigation, Hero, Skills, Chatbot, etc.) are Client Components — they use `useState`/`useEffect` for interactivity

---

## 3. Project Structure

```
d:/SITE/
├── app/
│   ├── layout.tsx              # Root layout: metadata + Google Fonts
│   ├── page.tsx                # Main page: imports all sections
│   ├── globals.css             # Global styles, animations, utility classes
│   ├── api/
│   │   └── chat/
│   │       └── route.ts        # Optional Claude AI API endpoint
│   └── components/
│       ├── Navigation.tsx      # Fixed top navigation bar
│       ├── Hero.tsx            # Full-screen hero section
│       ├── About.tsx           # Bio + highlight cards
│       ├── Skills.tsx          # Tabbed skills section
│       ├── Timeline.tsx        # Career journey timeline
│       ├── Portfolio.tsx       # Project showcase grid
│       ├── Education.tsx       # Degrees + certifications
│       ├── Contact.tsx         # Contact info + footer
│       └── Chatbot.tsx         # Floating AI chatbot widget
├── public/                     # Static assets (images, icons, etc.)
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind theme customisation
├── tsconfig.json               # TypeScript compiler options
├── next.config.js              # Next.js configuration
├── postcss.config.js           # PostCSS plugins
├── .env.local.example          # Example environment variables
└── TUTORIAL.md                 # This file
```

### Key Relationships

```
app/layout.tsx
  └── app/page.tsx
        ├── Navigation.tsx    (client — scroll detection)
        ├── Hero.tsx          (client — typing animation)
        ├── About.tsx         (client — scroll reveal)
        ├── Skills.tsx        (client — tab state)
        ├── Timeline.tsx      (client — scroll reveal)
        ├── Portfolio.tsx     (client — scroll reveal)
        ├── Education.tsx     (client — scroll reveal)
        ├── Contact.tsx       (client — scroll reveal)
        └── Chatbot.tsx       (client — chat state)
```

---

## 4. Getting Started

### Prerequisites

- **Node.js** v18 or higher — download from [nodejs.org](https://nodejs.org)
- A terminal (PowerShell, Command Prompt, or Windows Terminal)

### Check your Node.js version

```bash
node --version   # should be v18.x.x or higher
npm --version    # should be 9.x.x or higher
```

### Install dependencies

```bash
cd d:/SITE
npm install
```

This installs all packages listed in `package.json` into the `node_modules/` folder.

### Start the development server

```bash
npm run dev
```

The site will open at **http://localhost:3000** (or 3001/3002/3003 if those ports are in use).

You will see output like:

```
▲ Next.js 14.2.5
- Local: http://localhost:3000
✓ Ready in 1.9s
```

### Available Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimised production bundle |
| `npm start` | Run the production build locally |
| `npm run lint` | Check code for linting errors |

### Hot Reload

While the dev server is running, any change you save to a file is **instantly reflected** in the browser — no restart needed. The only exception is changes to `next.config.js` or environment variables (`.env.local`), which require a server restart.

---

## 5. Design System

All global design tokens are defined in `app/globals.css`. Understanding these is key to customising the look.

### Colour Palette

| Variable | Hex | Usage |
|---|---|---|
| Background | `#020b18` | Page background |
| Card surface | `rgba(10, 31, 53, 0.6)` | Glassmorphism cards |
| Cyan (primary) | `#00d4ff` | Accents, links, borders |
| Purple (secondary) | `#7c3aed` | Gradients, tags |
| Neon green | `#00ff88` | Status dots, highlights |
| Text primary | `#e2e8f0` | Body text |
| Text muted | `#94a3b8` | Secondary text |

To change the colour scheme, update these values in `globals.css`:

```css
:root {
  --bg:     #020b18;   /* ← change page background here */
  --cyan:   #00d4ff;   /* ← change primary accent here */
  --purple: #7c3aed;   /* ← change secondary accent here */
  --green:  #00ff88;   /* ← change highlight colour here */
}
```

### Typography

| Font | Weight | Usage |
|---|---|---|
| **Space Grotesk** | 400–800 | Headings (`.font-heading`) |
| **Inter** | 300–700 | Body text (default) |

Both fonts are loaded from Google Fonts in `app/layout.tsx`.

To change the heading font, update the Google Fonts URL in `app/layout.tsx` and the `fontFamily.heading` value in `tailwind.config.js`.

### Utility Classes (globals.css)

These custom classes are used throughout components:

| Class | Effect |
|---|---|
| `.gradient-text` | Cyan → purple → green gradient text |
| `.glass-card` | Glassmorphism card with backdrop blur |
| `.btn-primary` | Gradient fill button (cyan → purple) |
| `.btn-outline` | Transparent button with cyan border |
| `.skill-badge` | Pill badge for skill tags |
| `.section-label` | Small uppercase pill label above headings |
| `.stat-number` | Large gradient statistic number |
| `.nav-link` | Nav link with animated underline on hover |
| `.dot-grid` | Subtle dot grid background pattern |
| `.orb` | Blurred floating orb effect |
| `.reveal` | Hidden element (used with IntersectionObserver) |
| `.reveal.visible` | Revealed element (fades up into view) |

### Scroll Reveal Animations

Every section uses `IntersectionObserver` to animate elements into view as the user scrolls. The pattern is:

```tsx
// 1. Add ref to section
const sectionRef = useRef<HTMLElement>(null)

// 2. Set up observer in useEffect
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    },
    { threshold: 0.1 }  // trigger when 10% of element is visible
  )
  const elements = sectionRef.current?.querySelectorAll('.reveal')
  elements?.forEach((el) => observer.observe(el))
  return () => observer.disconnect()
}, [])

// 3. Add .reveal class + optional delay to elements
<h2 className="reveal" style={{ transitionDelay: '0.1s' }}>...</h2>
```

To add the animation to a new element, simply add `className="reveal"` to it. The CSS handles the rest.

---

## 6. Page Sections — How Each Works

### Navigation (`Navigation.tsx`)

- Uses `useState` to track `scrolled` (boolean) and `menuOpen` (boolean)
- `useEffect` adds a scroll listener — when `window.scrollY > 50`, sets `scrolled = true`, which applies the glassmorphism style
- All nav links use `href="#section-id"` for smooth scrolling (configured in `globals.css` via `scroll-behavior: smooth`)
- Mobile menu toggles with the hamburger button

**To add a new nav link:**
```tsx
const navLinks = [
  // ... existing links
  { label: 'My New Section', href: '#my-section' },  // ← add here
]
```

### Hero (`Hero.tsx`)

- Uses a `useEffect` with `setTimeout` to implement the typing animation
- Cycles through the `roles` array, typing and deleting each string
- The blinking cursor is a `<span className="cursor" />` (animated in CSS)
- Background orbs are absolutely-positioned `<div>` elements with `.orb .orb-cyan` etc. classes

**To change the typing roles:**
```tsx
const roles = [
  'IT Specialist',              // ← edit these
  'AI & Automation Enthusiast',
  'Cloud Solutions Expert',
  'Data Analytics Expert',
]
```

**To change the stats:**
```tsx
const stats = [
  { value: '5+', label: 'Years Experience' },  // ← edit these
  { value: '98%', label: 'Model Accuracy' },
  { value: '5+', label: 'Certifications' },
]
```

### Skills (`Skills.tsx`)

- Uses `useState` for the active category tab
- The `skillCategories` array defines all categories and their skills
- Clicking a category button updates `activeCategory`, which filters the displayed skills

**To add a new skill or category:**
```tsx
const skillCategories = [
  // ... existing categories
  {
    id: 'newcat',
    label: 'My New Category',
    icon: '🔧',
    skills: ['Skill One', 'Skill Two', 'Skill Three'],
  },
]
```

### Timeline (`Timeline.tsx`)

- The `experiences` array drives the entire timeline
- Each entry has a `color` property (`'cyan'`, `'purple'`, or `'green'`) which controls dot and tag colours
- The `current: true` flag on an entry adds the pulsing "Current Role" badge
- On desktop (`lg:`), cards alternate left/right. On mobile, they stack left-aligned

**To add a new role:**
```tsx
const experiences: TimelineItem[] = [
  {
    company: 'New Company Name',
    role: 'Your Role Title',
    period: 'Jan 2025 – Present',
    location: 'City, Country',
    bullets: [
      'Key achievement or responsibility',
      'Another responsibility',
    ],
    tags: ['Tag1', 'Tag2'],
    color: 'cyan',     // 'cyan' | 'purple' | 'green'
    current: true,     // omit if not current role
  },
  // ... rest of experiences
]
```

### Portfolio (`Portfolio.tsx`)

- The `projects` array drives the grid
- Each card has a `gradient` for the header background and a `statusColor` for the badge
- Cards are in a 3-column grid on desktop, 2-column on tablet, 1-column on mobile

**To add a new project:**
```tsx
const projects: Project[] = [
  {
    icon: '🚀',
    title: 'My New Project',
    description: 'A brief description of what this project does and why it matters.',
    tags: ['React', 'TypeScript', 'API'],
    status: 'Live',
    statusColor: 'text-[#00ff88] bg-[rgba(0,255,136,0.1)] border-[rgba(0,255,136,0.3)]',
    gradient: 'from-[#00d4ff] to-[#7c3aed]',
    highlight: 'New',  // optional badge in the card header
  },
  // ...
]
```

### Education (`Education.tsx`)

Two subsections — **Education** cards and **Certifications** badges.

**To add a new degree:**
```tsx
const education = [
  {
    institution: 'My University',
    degree: 'Bachelor of Science — Computer Science',
    period: '2018 – 2022',
    icon: '🎓',
    color: 'cyan',   // 'cyan' | 'purple' | 'green' | 'orange'
    highlights: ['Key subject 1', 'Key subject 2'],
  },
  // ...
]
```

**To add a new certification:**
```tsx
const certifications = [
  { name: 'AWS Solutions Architect', org: 'Amazon', icon: '☁️' },
  // ...
]
```

### Contact (`Contact.tsx`)

- Contains the three contact cards (email, LinkedIn, location)
- Also renders the site footer
- To change contact details, update the `contactCards` array at the top of the component

---

## 7. The Chatbot

The chatbot (`app/components/Chatbot.tsx`) runs **entirely in the browser** — no server, no API key, no internet connection required.

### How the Matching Engine Works

```
User types a message
        ↓
Input is lowercased and trimmed
        ↓
For each Intent in the Knowledge Base:
  For each pattern in that intent:
    If the user input CONTAINS that pattern:
      Score = number of words in pattern × 2
      (longer phrases score higher than single words)
        ↓
Best-scoring intent wins
        ↓
A response is picked from that intent's responses[]
(rotates through variations using a counter)
        ↓
A typing delay is calculated based on response length
(short = 600ms, medium = 900ms, long = 1200ms)
        ↓
Response appears after the delay
```

### Knowledge Base Structure

Each intent in the `KB` object has:

```typescript
{
  patterns: string[],   // phrases to match in user input
  responses: string[],  // possible replies (rotated for variety)
}
```

### Adding a New Intent

Open `app/components/Chatbot.tsx` and add a new entry to the `KB` object:

```typescript
const KB: Record<string, Intent> = {
  // ... existing intents

  hobbies: {
    patterns: ['hobby', 'hobbies', 'free time', 'outside work', 'interests', 'passion'],
    responses: [
      "Outside of work, Hamed enjoys reading about AI research, contributing to open-source projects, and exploring Brisbane's tech meetup scene.",
      "Hamed is passionate about staying current with AI trends and enjoys experimenting with new tools in his personal lab setup.",
    ],
  },
}
```

**Tips for good patterns:**
- Use lowercase only (input is lowercased before matching)
- Prefer 2–3 word phrases over single words for precision
- Add both formal (`curriculum vitae`) and informal (`cv`, `resume`) variants
- Short words (< 4 characters) are skipped in the secondary matching pass

### Suggestion Chips

The four quick-start suggestions shown when the chat first opens:

```typescript
const SUGGESTIONS = [
  "What's his current role?",       // ← edit these
  "Tell me about his AI projects",
  "What are his top skills?",
  "How can I contact Hamed?",
]
```

### Fallback Responses

When no intent matches, the chatbot uses one of these (rotated):

```typescript
const FALLBACK_RESPONSES = [
  "I don't have specific information on that...",
  // ← add more fallback responses here
]
```

---

## 8. Customising Your Content

### Changing Personal Details

All personal data is stored directly inside each component. Here is where to find each piece:

| Data | File | What to change |
|---|---|---|
| Name, title, location | `Hero.tsx` | `<h1>` and tagline text |
| Bio paragraphs | `About.tsx` | The three `<p>` elements |
| LinkedIn URL | `About.tsx`, `Contact.tsx` | `href` attributes |
| Email address | `Contact.tsx`, `app/api/chat/route.ts` | `href="mailto:..."` |
| Roles (typing) | `Hero.tsx` | `roles` array |
| Stats | `Hero.tsx` | `stats` array |
| Skills | `Skills.tsx` | `skillCategories` array |
| Experience | `Timeline.tsx` | `experiences` array |
| Projects | `Portfolio.tsx` | `projects` array |
| Education | `Education.tsx` | `education` array |
| Certifications | `Education.tsx` | `certifications` array |
| Chatbot knowledge | `Chatbot.tsx` | `KB` object |
| Page title/meta | `app/layout.tsx` | `metadata` export |

### Adding a Profile Photo

1. Place your image in the `public/` folder, e.g. `public/profile.jpg`
2. In `About.tsx`, replace the highlight cards column with:

```tsx
import Image from 'next/image'

// Inside the component JSX, replace the right column:
<div className="flex items-center justify-center">
  <div className="relative w-80 h-80">
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] blur-2xl opacity-30" />
    <Image
      src="/profile.jpg"
      alt="Hamed Kamel Rahimi"
      width={320}
      height={320}
      className="relative rounded-full object-cover border-4 border-[rgba(0,212,255,0.3)]"
    />
  </div>
</div>
```

### Updating the Page Metadata

In `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your custom meta description for search engines.',
  // Add more Open Graph tags for social sharing:
  openGraph: {
    title: 'Your Name | Portfolio',
    description: 'Your description',
    url: 'https://yoursite.com',
    images: [{ url: '/og-image.png' }],
  },
}
```

---

## 9. Adding New Sections

Here is the full template for a new section:

### Step 1 — Create the component file

Create `app/components/MySection.tsx`:

```tsx
'use client'

import { useEffect, useRef } from 'react'

export default function MySection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 },
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="my-section" ref={sectionRef} className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="text-center mb-16">
          <div className="section-label reveal inline-flex">
            <span>◈</span> My Section
          </div>
          <h2 className="reveal font-heading font-bold text-4xl sm:text-5xl text-white mt-2">
            Section <span className="gradient-text">Title</span>
          </h2>
        </div>

        {/* Content */}
        <div className="glass-card p-8 reveal">
          <p className="text-slate-400">Your content here...</p>
        </div>

      </div>
    </section>
  )
}
```

### Step 2 — Add to the main page

In `app/page.tsx`:

```tsx
import MySection from './components/MySection'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Portfolio />
      <MySection />     {/* ← add here */}
      <Education />
      <Contact />
      <Chatbot />
    </main>
  )
}
```

### Step 3 — Add a nav link

In `app/components/Navigation.tsx`:

```tsx
const navLinks = [
  // ... existing links
  { label: 'My Section', href: '#my-section' },
]
```

---

## 10. Upgrading the Chatbot to Claude AI

The site includes a full Claude AI API route at `app/api/chat/route.ts`. To activate it:

### Step 1 — Get an API key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create an account or sign in
3. Navigate to **API Keys** → **Create Key**
4. Copy the key (it starts with `sk-ant-...`)

### Step 2 — Create the environment file

Create `d:/SITE/.env.local`:

```
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

**Important:** Never commit this file to Git. It is already in `.gitignore` by default in Next.js projects.

### Step 3 — Restore API-based Chatbot

Replace the `sendMessage` function in `Chatbot.tsx` with the streaming API version:

```typescript
const sendMessage = useCallback(async (text?: string) => {
  const content = (text ?? input).trim()
  if (!content || isLoading) return

  const userMsg: Message = { role: 'user', content }
  const newMessages = [...messages, userMsg]
  setMessages(newMessages)
  setInput('')
  setIsLoading(true)

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMessages }),
    })

    const reader = response.body?.getReader()
    const decoder = new TextDecoder()
    let accumulated = ''

    while (reader) {
      const { done, value } = await reader.read()
      if (done) break
      const lines = decoder.decode(value).split('\n')
      for (const line of lines) {
        if (!line.startsWith('data: ')) continue
        const data = line.slice(6).trim()
        if (data === '[DONE]') continue
        try {
          const parsed = JSON.parse(data)
          if (parsed.text) { accumulated += parsed.text; setStreamText(accumulated) }
        } catch { /* ignore */ }
      }
    }

    setMessages([...newMessages, { role: 'assistant', content: accumulated }])
    setStreamText('')
  } finally {
    setIsLoading(false)
  }
}, [input, messages, isLoading])
```

### Step 4 — Restart the dev server

```bash
# Stop the current server (Ctrl+C), then:
npm run dev
```

Environment variables are only loaded at server startup.

---

## 11. Deploying to Production

### Option A — Vercel (Recommended, Free)

Vercel is built by the creators of Next.js and offers the best integration.

1. **Push to GitHub first:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy:**
   - Go to [vercel.com](https://vercel.com) → Sign up with GitHub
   - Click **New Project** → Import your repository
   - Vercel auto-detects Next.js — no configuration needed
   - Click **Deploy**

3. **Add environment variables (if using Claude AI):**
   - In Vercel dashboard → Project → Settings → Environment Variables
   - Add `ANTHROPIC_API_KEY` = your key

4. **Custom domain:**
   - In Vercel dashboard → Project → Settings → Domains
   - Add your domain and follow DNS instructions

### Option B — Build and Serve Locally

```bash
npm run build     # creates the .next/out production bundle
npm start         # serves it at http://localhost:3000
```

### Option C — Static Export

If you don't need the API chatbot (using the local rule-based version), you can export as pure static HTML:

Add to `next.config.js`:
```js
const nextConfig = {
  output: 'export',
}
module.exports = nextConfig
```

Then:
```bash
npm run build
# Static files will be in the 'out/' folder
# Upload to any static host: Netlify, GitHub Pages, Cloudflare Pages
```

**Note:** Static export removes the `/api/chat` route. Only use this if you're running the local chatbot.

---

## 12. Troubleshooting

### Port already in use

Next.js will automatically try the next port (3001, 3002, etc.). To force a specific port:

```bash
npm run dev -- --port 4000
```

### Changes not showing up

The dev server uses hot module replacement (HMR). If changes aren't reflecting:

1. Hard refresh the browser: `Ctrl + Shift + R`
2. Restart the dev server: `Ctrl + C` then `npm run dev`
3. Delete the Next.js cache: `rm -rf .next` then `npm run dev`

### 500 Error on startup

This usually means a syntax error in a component. Check the terminal for the error message. Common causes:

- Missing `'use client'` directive on a component that uses hooks
- TypeScript type error (run `npm run build` to see all errors)
- Import path typo

### Tailwind classes not applying

Tailwind only includes CSS for classes that appear in your source files. If you're building class names dynamically (e.g. with template literals), Tailwind won't detect them. Instead, use full class names:

```tsx
// ❌ Won't work — Tailwind can't detect this at build time
const color = 'cyan'
<div className={`text-${color}-400`} />

// ✅ Works — full class name present in source
const colorClass = 'text-cyan-400'
<div className={colorClass} />
```

### Chatbot doesn't respond to my question

The local chatbot uses keyword matching. If your question isn't being matched:

1. Check what keywords you used against the `patterns` arrays in `KB` in `Chatbot.tsx`
2. Add your phrase as a new pattern to the most relevant intent
3. Or add a new intent entirely (see [Section 7](#7-the-chatbot))

### Build failing

Run `npm run build` to see all TypeScript and linting errors. Common fixes:

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Windows path issues

If you see errors about `d:\SITE` vs `D:\SITE` (case sensitivity), this is a known Windows/webpack quirk. It's a warning, not an error, and won't affect the site.

---

## Quick Reference Card

```bash
# Start development
cd d:/SITE && npm run dev

# Check for errors
npm run build

# Add a dependency
npm install package-name

# Key files to edit
app/components/Hero.tsx        # name, roles, stats
app/components/Timeline.tsx    # experience entries
app/components/Portfolio.tsx   # project cards
app/components/Skills.tsx      # skill categories
app/components/Education.tsx   # degrees, certs
app/components/Contact.tsx     # contact details
app/components/Chatbot.tsx     # KB object for chatbot
app/globals.css                # colours, animations
app/layout.tsx                 # page title, metadata
```

---

*Built with Next.js 14 · Tailwind CSS · TypeScript · Claude AI (optional)*
