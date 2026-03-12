'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-[rgba(2,11,24,0.85)] border-b border-[rgba(0,212,255,0.12)] shadow-[0_4px_30px_rgba(0,212,255,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo + Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-heading font-bold text-sm text-white bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] shadow-[0_0_16px_rgba(0,212,255,0.35)] transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(0,212,255,0.55)] group-hover:scale-105">
              HKR
            </div>
            <span className="hidden sm:block font-heading font-semibold text-white text-base">
              Hamed Kamel Rahimi
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          {/* Hire Me CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="mailto:hamed.kamel35@gmail.com"
              className="btn-primary py-2.5 px-6 text-sm"
            >
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors hover:bg-white/5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#00d4ff] transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#00d4ff] transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#00d4ff] transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-[rgba(0,212,255,0.1)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 rounded-lg text-slate-300 hover:text-[#00d4ff] hover:bg-[rgba(0,212,255,0.06)] transition-all font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hamed.kamel35@gmail.com"
              className="mt-3 btn-primary text-sm py-2.5"
            >
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
