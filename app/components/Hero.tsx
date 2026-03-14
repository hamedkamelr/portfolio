'use client'

import { useState, useEffect } from 'react'

const roles = [
  'IT Specialist',
  'AI & Automation Enthusiast',
  'Cloud Solutions Expert',
  'Data Analytics Expert',
]

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '98%', label: 'Model Accuracy' },
  { value: '5+', label: 'Certifications' },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]

    if (typing) {
      if (displayed.length < current.length) {
        const timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, 60)
        return () => clearTimeout(timeout)
      } else {
        const pause = setTimeout(() => setTyping(false), 2200)
        return () => clearTimeout(pause)
      }
    } else {
      if (displayed.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 35)
        return () => clearTimeout(timeout)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Dot Grid Background */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      {/* Animated Orbs */}
      <div
        className="orb orb-blue w-[600px] h-[600px] top-[-10%] left-[-15%]"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="orb orb-gold w-[500px] h-[500px] top-[20%] right-[-10%]"
        style={{ animationDelay: '2.5s' }}
      />
      <div
        className="orb orb-silver w-[350px] h-[350px] bottom-[5%] left-[30%]"
        style={{ animationDelay: '5s' }}
      />
      <div
        className="orb orb-blue w-[280px] h-[280px] bottom-[15%] right-[15%]"
        style={{ animationDelay: '1.5s', animationDuration: '10s' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-32">
        {/* Available Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card mb-10 border border-[rgba(148,163,184,0.2)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#94a3b8] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#94a3b8]" />
          </span>
          <span className="text-sm font-medium text-slate-300">
            Available for opportunities&nbsp;&middot;&nbsp;Brisbane, QLD
          </span>
        </div>

        {/* Name */}
        <h1 className="font-heading font-extrabold text-5xl sm:text-7xl lg:text-8xl leading-[1.05] mb-6">
          <span className="text-white">Hamed </span>
          <span className="gradient-text">Kamel</span>
          <br />
          <span className="text-white">Rahimi</span>
        </h1>

        {/* Typing Role */}
        <div className="h-10 flex items-center justify-center mb-6">
          <p className="text-xl sm:text-2xl font-heading font-semibold text-[#4f8ef7]">
            {displayed}
            <span className="cursor" />
          </p>
        </div>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
          Bridging enterprise IT infrastructure and cutting-edge AI — from cloud
          orchestration to deep learning models, I build solutions that{' '}
          <span className="text-slate-200 font-medium">actually work</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <a href="#portfolio" className="btn-primary">
            <span>Explore My Work</span>
            <svg
              className="w-4 h-4 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="stat-number">{stat.value}</div>
              <div className="text-slate-500 text-sm mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#4f8ef7] to-transparent animate-pulse" />
      </div>
    </section>
  )
}
