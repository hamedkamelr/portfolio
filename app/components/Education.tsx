'use client'

import { useEffect, useRef } from 'react'

const education = [
  {
    school: 'University of Southern Queensland',
    degree: 'Master of Data Science',
    period: 'Feb 2022 – Jan 2024',
    location: 'Brisbane, QLD',
    note: 'Thesis: Deep Learning for Alzheimer\'s Prediction (98% accuracy)',
    gradient: 'from-[#4f8ef7]/20 to-[#d4a843]/10',
    border: 'border-[rgba(79,142,247,0.2)]',
    badge: 'bg-[rgba(79,142,247,0.1)] text-[#4f8ef7]',
    icon: '🎓',
  },
  {
    school: 'Northeastern University',
    degree: "Master's in Analytics",
    period: 'Sep 2021 – Dec 2021',
    location: 'Online',
    note: 'Advanced analytics and quantitative methods',
    gradient: 'from-[#d4a843]/20 to-[#94a3b8]/10',
    border: 'border-[rgba(212,168,67,0.2)]',
    badge: 'bg-[rgba(212,168,67,0.1)] text-[#d4a843]',
    icon: '📐',
  },
  {
    school: 'Islamic Azad University (IAU)',
    degree: 'MBA International Business',
    period: '2014 – 2016',
    location: 'Iran',
    note: 'Published research on SME entrepreneurial skills',
    gradient: 'from-[#94a3b8]/20 to-[#4f8ef7]/10',
    border: 'border-[rgba(148,163,184,0.2)]',
    badge: 'bg-[rgba(148,163,184,0.1)] text-[#94a3b8]',
    icon: '💼',
  },
  {
    school: 'ITI Istanbul',
    degree: 'CELTA Certification',
    period: '2017',
    location: 'Istanbul, Turkey',
    note: 'Certificate in English Language Teaching to Adults',
    gradient: 'from-[#fb923c]/20 to-[#d4a843]/10',
    border: 'border-[rgba(251,146,60,0.2)]',
    badge: 'bg-[rgba(251,146,60,0.1)] text-[#fb923c]',
    icon: '🌐',
  },
]

const certifications = [
  {
    name: 'Power BI Data Analyst',
    code: 'PL-300',
    org: 'Microsoft',
    icon: '📊',
    color: 'bg-[rgba(251,146,60,0.08)] border-[rgba(251,146,60,0.25)] text-[#fb923c]',
  },
  {
    name: 'Azure Fundamentals',
    code: 'AZ-900',
    org: 'Microsoft',
    icon: '☁️',
    color: 'bg-[rgba(79,142,247,0.08)] border-[rgba(79,142,247,0.25)] text-[#4f8ef7]',
  },
  {
    name: 'Power BI Cert Prep',
    code: 'Series I',
    org: 'Microsoft Learn',
    icon: '📈',
    color: 'bg-[rgba(79,142,247,0.08)] border-[rgba(79,142,247,0.25)] text-[#4f8ef7]',
  },
  {
    name: 'Power BI Cert Prep',
    code: 'Series II',
    org: 'Microsoft Learn',
    icon: '📉',
    color: 'bg-[rgba(79,142,247,0.08)] border-[rgba(79,142,247,0.25)] text-[#4f8ef7]',
  },
  {
    name: 'Power BI Cert Prep',
    code: 'Series III',
    org: 'Microsoft Learn',
    icon: '🗂️',
    color: 'bg-[rgba(79,142,247,0.08)] border-[rgba(79,142,247,0.25)] text-[#4f8ef7]',
  },
  {
    name: 'Deep Learning Specialisation',
    code: 'Research',
    org: 'USQ',
    icon: '🧠',
    color: 'bg-[rgba(212,168,67,0.08)] border-[rgba(212,168,67,0.25)] text-[#d4a843]',
  },
]

export default function Education() {
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
    <section id="education" ref={sectionRef} className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label reveal inline-flex">
            <span>◈</span> Education & Credentials
          </div>
          <h2 className="reveal font-heading font-bold text-4xl sm:text-5xl text-white mt-2 mb-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="reveal text-slate-400 max-w-xl mx-auto text-base">
            Multi-disciplinary academic foundations in data science, analytics, business, and AI
            research — spanning three continents.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {education.map((edu, i) => (
            <div
              key={i}
              className={`reveal glass-card p-6 border ${edu.border} bg-gradient-to-br ${edu.gradient} hover:-translate-y-1 transition-all duration-300`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-0.5">{edu.icon}</div>
                <div className="flex-1">
                  <div
                    className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border mb-2 ${edu.badge}`}
                    style={{ borderColor: 'currentColor', borderWidth: '1px', borderStyle: 'solid' }}
                  >
                    {edu.period}
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">{edu.degree}</h3>
                  <p className="text-slate-300 font-medium text-sm mb-1">{edu.school}</p>
                  <p className="text-slate-500 text-xs mb-2 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {edu.location}
                  </p>
                  {edu.note && (
                    <p className="text-slate-400 text-xs italic leading-relaxed">{edu.note}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-10">
          <h3 className="reveal font-heading font-bold text-2xl text-white mb-2">
            Certifications & <span className="gradient-text">Credentials</span>
          </h3>
          <p className="reveal text-slate-500 text-sm">
            Industry certifications validating cloud, data, and analytics expertise.
          </p>
        </div>

        <div className="reveal flex flex-wrap justify-center gap-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border glass-card ${cert.color} hover:scale-105 transition-all duration-200 cursor-default`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="text-2xl">{cert.icon}</span>
              <div>
                <div className="font-semibold text-sm text-white">{cert.name}</div>
                <div className="text-xs text-slate-500">
                  {cert.code} · {cert.org}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Publications Note */}
        <div className="reveal mt-16 glass-card p-6 border border-[rgba(79,142,247,0.2)] max-w-3xl mx-auto text-center">
          <div className="text-2xl mb-3">📄</div>
          <h4 className="font-heading font-semibold text-white mb-2">Publication</h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            &ldquo;Effects of Entrepreneurial Skills of Small and Medium-sized Enterprises in the Carpet
            Industry&rdquo;
          </p>
          <p className="text-slate-500 text-xs mt-2">Academic Research · Islamic Azad University</p>
        </div>
      </div>
    </section>
  )
}
