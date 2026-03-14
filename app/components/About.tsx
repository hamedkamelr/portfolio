'use client'

import { useEffect, useRef } from 'react'

const highlights = [
  {
    icon: '🤖',
    title: 'AI & Automation',
    desc: 'Building voice agents, RAG pipelines, and LLM-powered tools that automate complex workflows.',
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
    icon: '☁️',
    title: 'Cloud & Azure',
    desc: 'Azure AD, Intune, Exchange and M365 — managing enterprise environments at scale.',
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
            Where Enterprise IT
            <br />
            <span className="gradient-text">Meets AI Innovation</span>
          </h2>
          <p className="reveal text-slate-400 leading-relaxed mb-5 text-base">
            I'm an IT Specialist and AI enthusiast based in Brisbane, currently with the{' '}
            <span className="text-slate-200 font-medium">Department of Transport and Main Roads</span>,
            where I support enterprise infrastructure and drive continuous improvements in IT service
            delivery.
          </p>
          <p className="reveal text-slate-400 leading-relaxed mb-5 text-base">
            My background spans cloud infrastructure, data science, and applied AI. I hold a{' '}
            <span className="text-slate-200 font-medium">Master of Data Science from USQ</span> and
            have published research on entrepreneurial skills in SMEs, while building production AI
            systems that include voice agents, RAG architectures, and a deep learning model for
            Alzheimer's prediction achieving{' '}
            <span className="text-[#4f8ef7] font-semibold">98% accuracy</span>.
          </p>
          <p className="reveal text-slate-400 leading-relaxed mb-8 text-base">
            I thrive at the intersection of structured IT operations and exploratory AI experimentation
            — bringing rigour, creativity, and a results-first mindset to every project.
          </p>

          {/* Links */}
          <div className="reveal flex flex-wrap gap-4">
            <a
              href="https://linkedin.com/in/hamedkamel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card border border-[rgba(79,142,247,0.2)] text-[#4f8ef7] text-sm font-medium hover:border-[#4f8ef7] hover:bg-[rgba(79,142,247,0.08)] transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
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
