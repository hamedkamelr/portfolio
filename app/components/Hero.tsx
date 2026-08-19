'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
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
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pt-[120px] pb-[80px]"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="hero-card glass reveal text-center py-[60px] px-[50px] max-w-[720px] mx-auto relative">
          {/* Photo */}
          <img
            src="/photo.jpg"
            alt="Hamed Kamel Rahimi"
            className="hero-photo"
          />

          {/* Greeting */}
          <p className="font-heading text-[0.95rem] font-medium text-[#0d9488] tracking-[0.15em] uppercase mb-4">
            Hello, I&apos;m
          </p>

          {/* Name */}
          <h1
            className="font-heading font-extrabold leading-[1.1] mb-2"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              letterSpacing: '-0.03em',
              background: 'linear-gradient(135deg, #ffffff 0%, #e8e0f0 40%, #c4b5d8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Hamed Kamel
            <span className="block">Rahimi</span>
          </h1>

          {/* Title */}
          <p
            className="font-heading font-normal mt-4 mb-6"
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
              color: 'rgba(232, 224, 240, 0.65)',
              letterSpacing: '0.01em',
            }}
          >
            AI Developer &amp; <em className="not-italic font-semibold gradient-text">IT Specialist</em>
          </p>

          {/* Tagline */}
          <p className="text-[1.05rem] text-[rgba(232,224,240,0.9)] max-w-[500px] mx-auto mb-9 leading-[1.7]">
            Turning AI into real workflows — embedding automation into everyday business operations. I turn complex IT and AI into simple, scalable systems that teams rely on every day.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://github.com/hamed-kamelr"
              
              
              className="inline-flex items-center gap-2 py-2.5 px-[22px] rounded-xl font-heading text-[0.85rem] font-medium no-underline text-[#e8e0f0] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] backdrop-blur-[10px] transition-all duration-300 hover:bg-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.2)] hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hamedkamel"
              
              
              className="inline-flex items-center gap-2 py-2.5 px-[22px] rounded-xl font-heading text-[0.85rem] font-medium no-underline text-[#e8e0f0] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] backdrop-blur-[10px] transition-all duration-300 hover:bg-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.2)] hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.836 0-9.753h3.554v1.383c.43-.664 1.199-1.61 2.919-1.61 2.135 0 3.74 1.398 3.74 4.402v5.578zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.914-1.715.145 0 .287.01.424.03 1.144 0 1.914.76 1.914 1.715 0 .953-.771 1.715-1.915 1.715zm1.6 11.597H3.738V9.567h3.199v10.885zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Scroll Hint */}
          <div
            className="absolute -bottom-[60px] left-1/2 flex flex-col items-center gap-2 text-[rgba(232,224,240,0.55)] text-[0.75rem] font-heading tracking-[0.1em]"
            style={{ animation: 'scrollHint 2.5s ease-in-out infinite' }}
          >
            <span>SCROLL</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
