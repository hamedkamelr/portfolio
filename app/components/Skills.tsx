'use client'

import { useEffect, useRef, useState } from 'react'

const categories = [
  {
    id: 'cloud',
    label: 'Cloud & Infrastructure',
    icon: '☁️',
    color: 'cyan',
    skills: [
      'Microsoft Azure',
      'Azure Active Directory',
      'Microsoft Intune',
      'Microsoft Exchange',
      'SharePoint',
      'Azure Fundamentals (AZ-900)',
      'Microsoft 365',
    ],
  },
  {
    id: 'ai',
    label: 'AI & Machine Learning',
    icon: '🤖',
    color: 'purple',
    skills: [
      'LLMs',
      'RAG Architecture',
      'Deep Learning',
      'Computer Vision',
      'Voice Agents',
      'Python',
      'TensorFlow / Keras',
      'API Integration',
      'Webhooks',
    ],
  },
  {
    id: 'data',
    label: 'Data Analytics',
    icon: '📊',
    color: 'green',
    skills: [
      'Power BI',
      'DAX',
      'Data Modelling',
      'KPI Analysis',
      'Data Pipelines',
      'Oracle Service Cloud',
      'Statistical Analysis',
    ],
  },
  {
    id: 'ops',
    label: 'IT Operations',
    icon: '⚙️',
    color: 'orange',
    skills: [
      'IT Support',
      'Incident Management',
      'Requirements Analysis',
      'Agile / Scrum',
      'Project Management',
      'WordPress',
      'Network Troubleshooting',
    ],
  },
]

const colorMap: Record<string, { badge: string; card: string; dot: string }> = {
  cyan: {
    badge: 'bg-[rgba(79,142,247,0.08)] border-[rgba(79,142,247,0.25)] text-[#4f8ef7] hover:bg-[rgba(79,142,247,0.16)] hover:border-[rgba(79,142,247,0.5)]',
    card: 'border-[rgba(79,142,247,0.25)] hover:border-[rgba(79,142,247,0.5)] hover:shadow-[0_0_20px_rgba(79,142,247,0.1)]',
    dot: 'bg-[#4f8ef7]',
  },
  purple: {
    badge: 'bg-[rgba(212,168,67,0.08)] border-[rgba(212,168,67,0.25)] text-[#d4a843] hover:bg-[rgba(212,168,67,0.16)] hover:border-[rgba(212,168,67,0.5)]',
    card: 'border-[rgba(212,168,67,0.25)] hover:border-[rgba(212,168,67,0.5)] hover:shadow-[0_0_20px_rgba(212,168,67,0.1)]',
    dot: 'bg-[#d4a843]',
  },
  green: {
    badge: 'bg-[rgba(148,163,184,0.08)] border-[rgba(148,163,184,0.25)] text-[#94a3b8] hover:bg-[rgba(148,163,184,0.16)] hover:border-[rgba(148,163,184,0.5)]',
    card: 'border-[rgba(148,163,184,0.25)] hover:border-[rgba(148,163,184,0.5)] hover:shadow-[0_0_20px_rgba(148,163,184,0.1)]',
    dot: 'bg-[#94a3b8]',
  },
  orange: {
    badge: 'bg-[rgba(251,146,60,0.08)] border-[rgba(251,146,60,0.25)] text-[#fb923c] hover:bg-[rgba(251,146,60,0.16)] hover:border-[rgba(251,146,60,0.5)]',
    card: 'border-[rgba(251,146,60,0.25)] hover:border-[rgba(251,146,60,0.5)] hover:shadow-[0_0_20px_rgba(251,146,60,0.1)]',
    dot: 'bg-[#fb923c]',
  },
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('cloud')
  const sectionRef = useRef<HTMLElement>(null)

  const active = categories.find((c) => c.id === activeTab)!

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
    <section id="skills" ref={sectionRef} className="py-28 px-6 bg-[rgba(79,142,247,0.015)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label reveal inline-flex">
            <span>◈</span> Skills & Expertise
          </div>
          <h2 className="reveal font-heading font-bold text-4xl sm:text-5xl text-white mt-2 mb-4">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="reveal text-slate-400 max-w-xl mx-auto text-base">
            A multi-disciplinary toolkit spanning cloud infrastructure, AI engineering, data analytics,
            and enterprise IT operations.
          </p>
        </div>

        {/* Category Tab Buttons */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-[#4f8ef7] to-[#d4a843] text-white border-transparent shadow-[0_0_16px_rgba(79,142,247,0.3)]'
                  : 'glass-card text-slate-400 hover:text-white hover:border-[rgba(79,142,247,0.3)]'
              }`}
            >
              <span>{cat.icon}</span>
              <span className="hidden sm:inline">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Active Skills Badges */}
        <div className="reveal glass-card p-8 mb-12 min-h-[160px]">
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-2.5 h-2.5 rounded-full ${colorMap[active.color].dot}`} />
            <span className="font-heading font-semibold text-white">{active.label}</span>
            <span className="text-slate-500 text-sm">({active.skills.length} skills)</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {active.skills.map((skill) => (
              <span
                key={skill}
                className={`skill-badge ${colorMap[active.color].badge}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Category Summary Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`reveal glass-card p-5 text-left border transition-all duration-300 cursor-pointer ${colorMap[cat.color].card} ${
                activeTab === cat.id ? 'scale-[1.02]' : ''
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-2xl mb-3">{cat.icon}</div>
              <h3 className="font-heading font-semibold text-white text-sm mb-2">{cat.label}</h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10"
                  >
                    {s}
                  </span>
                ))}
                {cat.skills.length > 3 && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-500 border border-white/10">
                    +{cat.skills.length - 3} more
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
