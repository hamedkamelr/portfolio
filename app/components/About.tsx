'use client'

import { useEffect, useRef } from 'react'

const highlights = [
  {
    icon: '🤖',
    title: 'AI Engineering',
    desc: 'Building RAG chatbots, voice agents, and GPT-4o powered tools — from Azure AI Search to production Streamlit apps.',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    desc: 'Power BI dashboards, DAX modelling, and KPI frameworks that turn raw data into actionable insight.',
  },
  {
    icon: '🧠',
    title: 'Deep Learning',
    desc: "Developed a 98% accurate Alzheimer's prediction model using MRI imaging and convolutional networks.",
  },
  {
    icon: '⚙️',
    title: 'Power Automate',
    desc: 'Turning manual approvals, inbox triage, and lead routing into self-running flows across SharePoint, Dynamics 365, and Teams — backed by hands-on Azure AD, Intune, and M365 administration.',
  },
]

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Completed' },
  { value: '5+', label: 'Certifications' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-28 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div>
          <div className="section-label reveal">
            <span>◈</span> About Me
          </div>
          <h2 className="reveal font-heading font-bold text-4xl sm:text-5xl text-white mb-6 leading-tight">
            AI Developer &amp;
            <br />
            <span className="gradient-text">IT Specialist</span>
          </h2>
          <p className="reveal text-slate-400 leading-relaxed mb-5 text-base">
            I'm an AI developer focused on building practical, production-ready AI systems that improve how organisations operate. My work centres on turning AI from a concept into something teams can reliably use — embedding it into real workflows to reduce manual effort, improve consistency, and unlock better decision-making.
          </p>
          <p className="reveal text-slate-400 leading-relaxed mb-5 text-base">
            I design and deliver end-to-end AI solutions, including{' '}
            <span className="text-slate-200 font-medium">retrieval-augmented generation (RAG) systems</span>,
            conversational agents, and AI-assisted automation. My recent work includes building a RAG document chatbot using{' '}
            <span className="text-slate-200 font-medium">Azure OpenAI (GPT-4o)</span>, developing voice-enabled agents, and applying machine learning models to solve real-world problems. I focus on making these systems usable, scalable, and aligned with business needs — not just technically sound.
          </p>
          <p className="reveal text-slate-400 leading-relaxed mb-5 text-base">
            Alongside my AI work, I bring a strong foundation in enterprise IT infrastructure through my current role as a{' '}
            <span className="text-slate-200 font-medium">System Analyst at Container for Exchange (COEX)</span>, building on prior experience at the Department of Transport and Main Roads. I love turning clunky, manual processes into seamless automation —{' '}
            <span className="text-slate-200 font-medium">designing Power Automate flows</span> that stitch together SharePoint, Dynamics 365, Teams, and shared mailboxes across the Microsoft ecosystem. Whether it's auto-routing leads from an inbox straight into Dynamics 365 or firing off an approval the second a form is submitted, I build automations that just work.
            This allows me to bridge the gap between experimentation and production — ensuring AI solutions are secure, reliable, and fit within real-world environments.
          </p>
          <p className="reveal text-slate-400 leading-relaxed mb-8 text-base">
            I hold a <span className="text-slate-200 font-medium">Master of Data Science from USQ</span> and
            take a hands-on, iterative approach to building with AI — rapidly prototyping, validating outputs, and refining systems based on real usage. I'm particularly interested in{' '}
            <span className="text-[#4f8ef7] font-semibold">workflow automation</span>, AI adoption, and designing systems that people actually trust and use.
          </p>

          {/* Links */}
          <div className="reveal flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/hamedkamel"
              
              
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card border border-[rgba(79,142,247,0.2)] text-[#4f8ef7] text-sm font-medium hover:border-[#4f8ef7] hover:bg-[rgba(79,142,247,0.08)] transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/hamed-kamelr"
              
              
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card border border-[rgba(148,163,184,0.2)] text-slate-300 text-sm font-medium hover:border-[rgba(148,163,184,0.5)] hover:bg-[rgba(148,163,184,0.06)] transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="mailto:hamed.kamel35@gmail.com"
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card border border-[rgba(212,168,67,0.25)] text-[#d4a843] text-sm font-medium hover:border-[#d4a843] hover:bg-[rgba(212,168,67,0.08)] transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              hamed.kamel35@gmail.com
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Highlight Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="reveal glass-card p-5 hover:border-[rgba(79,142,247,0.3)] hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl mb-3">{h.icon}</div>
                <h3 className="font-heading font-semibold text-white text-sm mb-1.5">{h.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="reveal glass-card p-6 grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="stat-number text-3xl">{s.value}</div>
                <div className="text-slate-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
