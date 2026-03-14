'use client'

import { useEffect, useRef } from 'react'

const contactCards = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: 'Email',
    value: 'hamed.kamel35@gmail.com',
    href: 'mailto:hamed.kamel35@gmail.com',
    color: 'cyan',
    border: 'border-[rgba(79,142,247,0.2)] hover:border-[rgba(79,142,247,0.5)]',
    iconBg: 'bg-[rgba(79,142,247,0.1)] text-[#4f8ef7]',
    glow: 'hover:shadow-[0_0_30px_rgba(79,142,247,0.12)]',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/hamedkamel',
    href: 'https://linkedin.com/in/hamedkamel',
    color: 'blue',
    border: 'border-[rgba(59,130,246,0.2)] hover:border-[rgba(59,130,246,0.5)]',
    iconBg: 'bg-[rgba(59,130,246,0.1)] text-[#60a5fa]',
    glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: 'Location',
    value: 'Greater Brisbane Area, QLD',
    href: '#',
    color: 'purple',
    border: 'border-[rgba(212,168,67,0.2)] hover:border-[rgba(212,168,67,0.5)]',
    iconBg: 'bg-[rgba(212,168,67,0.1)] text-[#d4a843]',
    glow: 'hover:shadow-[0_0_30px_rgba(212,168,67,0.12)]',
  },
]

export default function Contact() {
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
    <>
      <section id="contact" ref={sectionRef} className="py-28 px-6 bg-[rgba(79,142,247,0.015)]">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="section-label reveal inline-flex">
              <span>◈</span> Contact
            </div>
            <h2 className="reveal font-heading font-extrabold text-5xl sm:text-6xl text-white mt-3 mb-5 leading-tight">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="reveal text-slate-400 max-w-lg mx-auto text-base leading-relaxed">
              Whether you have a role to discuss, a project to collaborate on, or just want to talk
              about AI and automation — I&apos;m always open to a good conversation.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {contactCards.map((card, i) => (
              <a
                key={i}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`reveal glass-card p-6 border ${card.border} ${card.glow} hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center gap-3 no-underline`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${card.iconBg}`}>
                  {card.icon}
                </div>
                <div>
                  <div className="text-slate-400 text-xs uppercase tracking-widest font-medium mb-1">
                    {card.label}
                  </div>
                  <div className="text-white font-medium text-sm break-all">{card.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Main CTA */}
          <div className="reveal text-center">
            <a
              href="mailto:hamed.kamel35@gmail.com"
              className="btn-primary text-lg px-10 py-4 inline-flex"
            >
              <span>Send Me a Message</span>
              <svg
                className="w-5 h-5 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[rgba(79,142,247,0.08)] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-heading font-bold text-xs text-white bg-gradient-to-br from-[#4f8ef7] to-[#d4a843]">
              HKR
            </div>
            <span className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Hamed Kamel Rahimi. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:hamed.kamel35@gmail.com"
              className="text-slate-500 hover:text-[#4f8ef7] text-sm transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/hamedkamel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#4f8ef7] text-sm transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-600 text-sm">Brisbane, QLD</span>
          </div>
        </div>
      </footer>
    </>
  )
}
