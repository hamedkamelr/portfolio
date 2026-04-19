'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
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
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-400 ${
        scrolled
          ? 'bg-[rgba(14,10,26,0.6)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-heading font-bold text-xl text-[#e8e0f0] no-underline tracking-tight">
          HKR<span className="gradient-text">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#e8e0f0] rounded-sm transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#e8e0f0] rounded-sm transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#e8e0f0] rounded-sm transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col gap-1 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 rounded-lg text-[rgba(232,224,240,0.6)] hover:text-[#e8e0f0] transition-colors font-heading text-sm font-medium no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
