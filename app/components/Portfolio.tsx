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
  link?: string
  linkLabel?: string
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
      'End-to-end voice agent powered by LLMs, RAG architecture, and ElevenLabs for realistic speech synthesis. Orchestrated with n8n workflows to automate dynamic conversational flows and integrate with external APIs and Webhooks for enterprise automation.',
    tags: ['LLMs', 'RAG', 'ElevenLabs', 'n8n', 'Voice AI', 'APIs', 'Webhooks', 'Python'],
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
    icon: '📄',
    title: 'DocChat — AI Document Assistant',
    description:
      'RAG chatbot that answers questions about PDFs, CSVs, and images using hybrid search (vector + keyword). Built with Azure AI Search, GPT-4o, Document Intelligence, and Streamlit. Includes source citations and streaming responses.',
    tags: ['Python', 'RAG', 'Azure OpenAI', 'GPT-4o', 'Azure AI Search', 'Streamlit'],
    status: 'Live Demo',
    statusColor: 'text-[#4f8ef7] bg-[rgba(79,142,247,0.1)] border-[rgba(79,142,247,0.3)]',
    gradient: 'from-[#4f8ef7] to-[#1d4ed8]',
    link: 'https://huggingface.co/spaces/hamed-kamelrh/doc-chat',
    linkLabel: 'Live Demo',
  },
  {
    icon: '🎧',
    title: 'IT Helpdesk Ticket Automation',
    description:
      'AI-powered helpdesk triage system that automatically classifies, prioritises, and drafts responses for IT support tickets. Built with FastAPI and the Anthropic API — eliminating manual triage and ensuring consistent urgency scoring across all incoming requests.',
    tags: ['Python', 'FastAPI', 'Anthropic API', 'LLMs', 'SQLite', 'REST API', 'Vanilla JS'],
    status: 'Portfolio Project',
    statusColor: 'text-[#a78bfa] bg-[rgba(167,139,250,0.1)] border-[rgba(167,139,250,0.3)]',
    gradient: 'from-[#4f46e5] to-[#7c3aed]',
    link: 'https://github.com/hamed-kamelr/helpdesk-triage',
    linkLabel: 'GitHub',
  },
  {
    icon: '🎁',
    title: 'Power Apps — Gifts & Benefits Register',
    description:
      'End-to-end Power Platform solution for managing staff gift declarations and compliance approvals. Built with a Canvas App for submissions, a Power Automate approval flow triggered when gift value exceeds $300, a Model-driven app for management review, and Dataverse as the data backbone.',
    tags: ['Power Apps', 'Power Automate', 'Dataverse', 'Canvas App', 'Model-Driven App', 'Microsoft 365'],
    status: 'Portfolio Project',
    statusColor: 'text-[#db2777] bg-[rgba(219,39,119,0.1)] border-[rgba(219,39,119,0.3)]',
    gradient: 'from-[#be185d] to-[#db2777]',
    link: 'https://github.com/hamed-kamelr/power-apps-project',
    linkLabel: 'GitHub',
  },
  {
    icon: '📋',
    title: 'Kanban Board',
    description:
      'Single-board drag-and-drop task manager built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth DnD interactions, column management, and a clean productivity-focused UI.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Drag & Drop'],
    status: 'Open Source',
    statusColor: 'text-[#94a3b8] bg-[rgba(148,163,184,0.1)] border-[rgba(148,163,184,0.3)]',
    gradient: 'from-[#94a3b8] to-[#475569]',
    link: 'https://github.com/hamed-kamelr/kanban',
    linkLabel: 'GitHub',
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
              className="reveal glass-card overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-350 flex flex-col"
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
                <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#4f8ef7] hover:text-white transition-colors group/link"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {project.linkLabel}
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">↗</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
