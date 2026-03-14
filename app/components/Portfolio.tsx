'use client'

import { useEffect, useRef } from 'react'

type Project = {
  icon: string
  title: string
  description: string
  tags: string[]
  status: string
  statusColor: string
  gradient: string
  highlight?: string
}

const projects: Project[] = [
  {
    icon: '🧠',
    title: "Alzheimer's AI Prediction Model",
    description:
      'Deep learning model leveraging convolutional neural networks to classify Alzheimer\'s disease stages from MRI brain scans. Built as part of a USQ research thesis with production-level accuracy.',
    tags: ['Python', 'TensorFlow', 'Keras', 'Computer Vision', 'Deep Learning', 'MRI Imaging'],
    status: 'Published Research',
    statusColor: 'text-[#d4a843] bg-[rgba(212,168,67,0.1)] border-[rgba(212,168,67,0.3)]',
    gradient: 'from-[#d4a843] to-[#4f8ef7]',
    highlight: '98% Accuracy',
  },
  {
    icon: '🎙️',
    title: 'AI Voice Agent System',
    description:
      'End-to-end voice agent powered by LLMs and RAG architecture. Integrates with external APIs and Webhooks to handle dynamic conversational flows for enterprise automation use cases.',
    tags: ['LLMs', 'RAG', 'Voice AI', 'APIs', 'Webhooks', 'Python'],
    status: 'Live Project',
    statusColor: 'text-[#4f8ef7] bg-[rgba(79,142,247,0.1)] border-[rgba(79,142,247,0.3)]',
    gradient: 'from-[#4f8ef7] to-[#94a3b8]',
  },
  {
    icon: '📊',
    title: 'Power BI Call Centre Dashboard',
    description:
      'Interactive Power BI reporting suite tracking call centre KPIs — including AHT, FCR, SLA adherence and agent performance — with advanced DAX calculations and real-time drill-through.',
    tags: ['Power BI', 'DAX', 'KPI Analysis', 'Data Modelling', 'Business Intelligence'],
    status: 'Delivered',
    statusColor: 'text-[#fb923c] bg-[rgba(251,146,60,0.1)] border-[rgba(251,146,60,0.3)]',
    gradient: 'from-[#fb923c] to-[#d4a843]',
  },
  {
    icon: '🔄',
    title: 'Automated Data Pipeline',
    description:
      'Scalable ETL pipeline ingesting, transforming, and loading structured and unstructured data from multiple sources into analytical stores for downstream BI reporting and ML workflows.',
    tags: ['Python', 'ETL', 'Data Pipelines', 'Automation', 'Azure'],
    status: 'Operational',
    statusColor: 'text-[#94a3b8] bg-[rgba(148,163,184,0.1)] border-[rgba(148,163,184,0.3)]',
    gradient: 'from-[#94a3b8] to-[#4f8ef7]',
  },
  {
    icon: '🏢',
    title: 'Enterprise IT Infrastructure',
    description:
      'Designed and maintained enterprise Microsoft 365 environments — including Azure AD, Intune MDM, Exchange Online, and SharePoint — for education and government sector clients.',
    tags: ['Azure AD', 'Intune', 'Exchange Online', 'SharePoint', 'M365', 'IT Operations'],
    status: 'Ongoing',
    statusColor: 'text-[#60a5fa] bg-[rgba(96,165,250,0.1)] border-[rgba(96,165,250,0.3)]',
    gradient: 'from-[#1d4ed8] to-[#4f8ef7]',
  },
  {
    icon: '🚀',
    title: 'Next Project Coming Soon',
    description:
      'Currently exploring agentic AI workflows, multi-modal LLM applications, and intelligent process automation. Watch this space for the next release.',
    tags: ['Agentic AI', 'Multimodal', 'Automation', 'LLMs'],
    status: 'In Progress',
    statusColor: 'text-slate-400 bg-slate-800 border-slate-600',
    gradient: 'from-slate-700 to-slate-600',
  },
]

export default function Portfolio() {
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
    <section id="portfolio" ref={sectionRef} className="py-28 px-6 bg-[rgba(212,168,67,0.015)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label reveal inline-flex">
            <span>◈</span> Portfolio
          </div>
          <h2 className="reveal font-heading font-bold text-4xl sm:text-5xl text-white mt-2 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="reveal text-slate-400 max-w-xl mx-auto text-base">
            A selection of projects spanning AI research, data engineering, enterprise IT, and
            automation — each built to solve real problems.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="reveal glass-card overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-350 cursor-default flex flex-col"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {/* Gradient Header */}
              <div
                className={`bg-gradient-to-br ${project.gradient} p-6 flex items-start justify-between relative overflow-hidden`}
              >
                <div className="text-4xl z-10 relative">{project.icon}</div>
                {project.highlight && (
                  <div className="z-10 relative bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white border border-white/20">
                    {project.highlight}
                  </div>
                )}
                <div className="absolute inset-0 bg-[#060912] opacity-30" />
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[rgba(6,9,18,0.8)] to-transparent" />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Status Badge */}
                <span
                  className={`self-start px-2.5 py-0.5 rounded-full text-xs font-semibold border mb-3 ${project.statusColor}`}
                >
                  {project.status}
                </span>

                <h3 className="font-heading font-bold text-white text-base mb-2 group-hover:text-[#4f8ef7] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
