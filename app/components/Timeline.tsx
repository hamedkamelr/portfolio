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
    company: 'Container for Exchange (COEX)',
    role: 'System Analyst',
    period: 'May 2026 – Current',
    location: 'Brisbane, QLD',
    bullets: [
      'Partner with business stakeholders to identify process inefficiencies and design automated solutions using Microsoft Forms and Power Automate.',
      'Develop AI-powered knowledge solutions using Azure AI services, Copilot, and SharePoint, improving self-service access to information while maintaining secure, role-based access.',
      'Design and implement automated workflows integrating shared mailboxes with Dynamics 365 — using business rules and Power Automate to capture enquiries and automatically create and route leads, improving process efficiency and response times.',
      'Establish and maintain Confluence as a central source of truth for documentation, workflows, and solution designs, improving knowledge sharing and consistency across enterprise implementations.',
    ],
    tags: ['Power Automate', 'Azure AI', 'Copilot', 'SharePoint', 'Dynamics 365', 'Confluence'],
    color: 'cyan',
    current: true,
  },
  {
    company: 'Dept of Transport and Main Roads',
    role: 'IT Support Analyst',
    period: 'Feb 2025 – Mar 2026',
    location: 'Brisbane, QLD',
    bullets: [
      'Designed and deployed Power Automate flows to automate repetitive IT tasks — including user provisioning, access requests, and notification workflows — reducing manual effort across the support team.',
      'Leveraged Microsoft Copilot to accelerate incident documentation, knowledge base drafting, and email triage, improving response consistency and cutting handling time.',
      'Administer Microsoft 365, Entra ID, and Active Directory for hundreds of users across Queensland, managing access control, group permissions, and endpoint configuration at scale.',
    ],
    tags: ['Power Automate', 'Microsoft Copilot', 'M365', 'Entra ID', 'Automation', 'AI Tools'],
    color: 'purple',
  },
  {
    company: 'Tech Mahindra',
    role: 'ICT Solution Analyst',
    period: 'Jun 2024 – Jan 2025',
    location: 'Brisbane, QLD',
    bullets: [
      'Applied Gen AI tools to triage and categorise ServiceNow incidents, cutting average resolution time and reducing backlog across L1/L2 queues.',
      'Identified repetitive support patterns and proposed automation solutions to eliminate recurring manual tasks, improving team efficiency across deployments.',
      'Resolved over 95% of incidents within 24 hours — boosting user satisfaction by 30% over 5 months through structured troubleshooting and AI-assisted documentation.',
    ],
    tags: ['ServiceNow', 'Gen AI', 'Automation', 'L1/L2 Support', 'AI Tools'],
    color: 'purple',
  },
  {
    company: 'University of Southern Queensland',
    role: 'ICT Student Services Officer',
    period: 'Aug 2022 – Apr 2024',
    location: 'Brisbane, QLD',
    bullets: [
      'Troubleshot Azure AD, SharePoint, and Office 365 issues for students and staff across the university.',
      'Streamlined ticketing and escalation workflows in Oracle Service Cloud, identifying automation opportunities to reduce manual triage effort.',
      'Supported identity management and access provisioning — contributing to process documentation used to inform future automation initiatives.',
    ],
    tags: ['Azure AD', 'SharePoint', 'Oracle Service Cloud', 'O365', 'Process Automation'],
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
    role: 'Business Analyst',
    period: 'Feb 2021 – Jan 2022',
    location: 'Remote',
    bullets: [
      'Led discovery and feasibility analysis for an ERP implementation, mapping existing business processes and workflows across the organisation to identify system requirements and gaps.',
      'Evaluated ERP solution options against business needs, weighing cost, scalability, and integration fit, and packaged the findings into a feasibility report and recommendation for senior leadership.',
      'Recommendation was adopted by leadership — establishing the business case and roadmap that kicked off the organisation\'s ERP adoption.',
    ],
    tags: ['ERP', 'Feasibility Study', 'Business Process Mapping', 'Business Analysis', 'Stakeholder Management'],
    color: 'purple',
  },
]

const colorMap = {
  cyan: {
    dot: 'bg-[#4f8ef7] shadow-[0_0_12px_rgba(79,142,247,0.6)]',
    border: 'border-[rgba(79,142,247,0.25)]',
    badge: 'bg-[rgba(79,142,247,0.1)] text-[#4f8ef7] border-[rgba(79,142,247,0.3)]',
    tag: 'bg-[rgba(79,142,247,0.06)] text-[#4f8ef7] border-[rgba(79,142,247,0.2)]',
  },
  purple: {
    dot: 'bg-[#d4a843] shadow-[0_0_12px_rgba(212,168,67,0.6)]',
    border: 'border-[rgba(212,168,67,0.25)]',
    badge: 'bg-[rgba(212,168,67,0.1)] text-[#d4a843] border-[rgba(212,168,67,0.3)]',
    tag: 'bg-[rgba(212,168,67,0.06)] text-[#d4a843] border-[rgba(212,168,67,0.2)]',
  },
  green: {
    dot: 'bg-[#94a3b8] shadow-[0_0_12px_rgba(148,163,184,0.6)]',
    border: 'border-[rgba(148,163,184,0.25)]',
    badge: 'bg-[rgba(148,163,184,0.1)] text-[#94a3b8] border-[rgba(148,163,184,0.3)]',
    tag: 'bg-[rgba(148,163,184,0.06)] text-[#94a3b8] border-[rgba(148,163,184,0.2)]',
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
        <div className="relative max-w-3xl mx-auto">

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const c = colorMap[exp.color]
              return (
                <div
                  key={i}
                  className="reveal relative flex items-start gap-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Card */}
                  <div className="w-full pt-2">
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
                      <p className="text-[#4f8ef7] font-semibold text-sm mb-1">{exp.company}</p>
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
                            <span className="text-[#4f8ef7] mt-0.5 shrink-0">›</span>
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
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
