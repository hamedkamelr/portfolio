'use client'

import { useEffect, useRef } from 'react'

type TimelineItem = {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  tags: string[]
  color: 'cyan' | 'purple' | 'green'
  current?: boolean
}

const experiences: TimelineItem[] = [
  {
    company: 'Dept of Transport and Main Roads',
    role: 'IT Support Analyst',
    period: 'Feb 2025 – Present',
    location: 'Brisbane, QLD',
    bullets: [
      'Providing Tier 2 IT support across enterprise systems and infrastructure',
      'Managing Microsoft Intune, Azure AD and endpoint configuration',
      'Driving service improvement initiatives within Agile delivery frameworks',
    ],
    tags: ['Intune', 'Azure AD', 'M365', 'Agile'],
    color: 'cyan',
    current: true,
  },
  {
    company: 'Tech Mahindra',
    role: 'ICT Solution Analyst',
    period: 'Jul 2024 – Jan 2025',
    location: 'Brisbane, QLD',
    bullets: [
      'Analysed ICT requirements and designed tailored solutions for enterprise clients',
      'Delivered integration and automation solutions using APIs and cloud services',
      'Collaborated with cross-functional teams to ensure on-time delivery',
    ],
    tags: ['Solution Design', 'APIs', 'Cloud', 'Enterprise IT'],
    color: 'purple',
  },
  {
    company: 'University of Southern Queensland',
    role: 'ICT Student Services Officer',
    period: 'Aug 2022 – Apr 2024',
    location: 'Brisbane, QLD',
    bullets: [
      'Troubleshot Azure AD, SharePoint, and Office 365 issues for students and staff',
      'Managed Oracle Service Cloud ticketing and escalation workflows',
      'Supported identity management and access provisioning across university systems',
    ],
    tags: ['Azure AD', 'SharePoint', 'Oracle Service Cloud', 'O365'],
    color: 'cyan',
  },
  {
    company: 'University of Southern Queensland',
    role: 'Student Success Advisor',
    period: 'Jan 2023 – Dec 2023',
    location: 'Brisbane, QLD',
    bullets: [
      'Provided academic advising and student success coaching to enrolled students',
      'Developed support frameworks to improve retention and academic outcomes',
      'Coordinated with academic and administrative teams on student progression',
    ],
    tags: ['Student Services', 'Academic Advising', 'Communication'],
    color: 'green',
  },
  {
    company: 'University of Southern Queensland',
    role: 'Student Researcher',
    period: 'Jan 2023 – Nov 2023',
    location: 'Brisbane, QLD',
    bullets: [
      'Conducted thesis research on deep learning for Alzheimer\'s disease prediction',
      'Built and trained convolutional neural networks on MRI imaging datasets',
      'Achieved 98% classification accuracy — published as academic research',
    ],
    tags: ['Deep Learning', 'Computer Vision', 'Python', 'TensorFlow'],
    color: 'purple',
  },
  {
    company: 'Taban Infrastructure Co.',
    role: 'Business Development Associate',
    period: 'Feb 2021 – Jan 2022',
    location: 'Remote',
    bullets: [
      'Researched market KPIs and competitive landscape to support growth strategy',
      'Produced detailed reports and documentation for senior leadership',
      'Supported business development activities across target verticals',
    ],
    tags: ['Business Development', 'KPI Research', 'Reporting'],
    color: 'purple',
  },
]

const colorMap = {
  cyan: {
    dot: 'bg-[#00d4ff] shadow-[0_0_12px_rgba(0,212,255,0.6)]',
    border: 'border-[rgba(0,212,255,0.25)]',
    badge: 'bg-[rgba(0,212,255,0.1)] text-[#00d4ff] border-[rgba(0,212,255,0.3)]',
    tag: 'bg-[rgba(0,212,255,0.06)] text-[#00d4ff] border-[rgba(0,212,255,0.2)]',
  },
  purple: {
    dot: 'bg-[#7c3aed] shadow-[0_0_12px_rgba(124,58,237,0.6)]',
    border: 'border-[rgba(124,58,237,0.25)]',
    badge: 'bg-[rgba(124,58,237,0.1)] text-[#a78bfa] border-[rgba(124,58,237,0.3)]',
    tag: 'bg-[rgba(124,58,237,0.06)] text-[#a78bfa] border-[rgba(124,58,237,0.2)]',
  },
  green: {
    dot: 'bg-[#00ff88] shadow-[0_0_12px_rgba(0,255,136,0.6)]',
    border: 'border-[rgba(0,255,136,0.25)]',
    badge: 'bg-[rgba(0,255,136,0.1)] text-[#00ff88] border-[rgba(0,255,136,0.3)]',
    tag: 'bg-[rgba(0,255,136,0.06)] text-[#00ff88] border-[rgba(0,255,136,0.2)]',
  },
}

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="journey" ref={sectionRef} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-label reveal inline-flex">
            <span>◈</span> Experience
          </div>
          <h2 className="reveal font-heading font-bold text-4xl sm:text-5xl text-white mt-2 mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="reveal text-slate-400 max-w-xl mx-auto text-base">
            A career spanning enterprise IT, applied AI research, and data analytics across government,
            tech, and academia.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - desktop only */}
          <div className="hidden lg:block timeline-line" />

          {/* Mobile left line */}
          <div className="lg:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff] via-[#7c3aed] to-[#00ff88]" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const c = colorMap[exp.color]
              const isLeft = i % 2 === 0
              return (
                <div
                  key={i}
                  className={`reveal relative flex flex-col lg:flex-row ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-start lg:items-center gap-6 lg:gap-0`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Card */}
                  <div
                    className={`w-full lg:w-[calc(50%-2.5rem)] ml-10 lg:ml-0 ${
                      isLeft ? 'lg:pr-10' : 'lg:pl-10'
                    }`}
                  >
                    <div
                      className={`glass-card p-6 border ${c.border} hover:-translate-y-1 hover:border-opacity-60 transition-all duration-300`}
                    >
                      {/* Top Row */}
                      <div className="flex flex-wrap items-start gap-2 mb-3">
                        {exp.current && (
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${c.badge} flex items-center gap-1.5`}
                          >
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75" />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-current" />
                            </span>
                            Current Role
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading font-bold text-white text-lg mb-1">{exp.role}</h3>
                      <p className="text-[#00d4ff] font-semibold text-sm mb-1">{exp.company}</p>
                      <div className="flex flex-wrap gap-3 text-slate-500 text-xs mb-4">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {exp.location}
                        </span>
                      </div>
                      <ul className="space-y-1.5 mb-4">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="flex gap-2 text-slate-400 text-sm leading-relaxed">
                            <span className="text-[#00d4ff] mt-0.5 shrink-0">›</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs px-2.5 py-0.5 rounded-full border ${c.tag}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Dot - desktop */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-5 h-5 z-10">
                    <div
                      className={`w-4 h-4 rounded-full ${c.dot} ring-4 ring-[#020b18]`}
                    />
                  </div>

                  {/* Mobile Dot */}
                  <div className="lg:hidden absolute left-4 -translate-x-1/2 top-7 z-10">
                    <div className={`w-3 h-3 rounded-full ${c.dot} ring-2 ring-[#020b18]`} />
                  </div>

                  {/* Empty side spacer for desktop */}
                  <div className="hidden lg:block w-[calc(50%-2.5rem)]" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
