"use client";
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { label: 'Home',       href: '#home'       },
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Education',  href: '#education'  },
  { label: 'Contact',    href: '#contact'    },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle Scroll to apply frosted glass effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for active link detection
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact']
    const observers = sections.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { 
          if (entry.isIntersecting) setActiveSection(id) 
        },
        { threshold: 0.4 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  // Smooth scroll handler
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(targetId)
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed top-0 w-full z-50 h-16 flex items-center transition-all duration-500 ${
          isScrolled
            ? 'bg-[rgba(8,8,16,0.85)] backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
          
          {/* LOGO (LEFT) */}
          <Link href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center gap-3 cursor-pointer group hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.5)] transition-all">
            <div 
              className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm text-white"
              style={{
                background: 'linear-gradient(135deg, #38bdf8, #6366f1)',
                boxShadow: '0 0 16px rgba(56,189,248,0.3)',
              }}
            >
              RK
            </div>
            <div className="flex items-center gap-1">
              <span className="text-white font-semibold text-sm">Rajneesh</span>
              <span className="text-cyan-400 font-semibold text-sm">Kumar</span>
            </div>
          </Link>

          {/* NAV LINKS (CENTER) */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace('#', '')
              
              return (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`group relative block px-3 py-1.5 text-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'bg-[rgba(56,189,248,0.1)] border border-[rgba(56,189,248,0.25)] rounded-full text-[#38bdf8]' 
                        : 'text-slate-400 hover:text-white border border-transparent'
                    }`}
                  >
                    {link.label}
                    {/* Hover Underline (Only shows if inactive) */}
                    {!isActive && (
                      <span className="absolute left-3 right-3 bottom-1 h-[1px] bg-[#38bdf8] scale-x-0 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    )}
                  </Link>
                </motion.li>
              )
            })}
          </ul>

          {/* CTA BUTTON (RIGHT) */}
          <div className="hidden md:flex items-center">
            <a 
              href="#contact"
              onClick={(e) => handleScrollTo(e as any, '#contact')}
              className="px-4 py-1.5 text-sm font-semibold rounded-full border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.2)] transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* MOBILE HAMBURGER ICON */}
          <button 
            className="md:hidden text-slate-400 hover:text-white transition-colors" 
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </motion.nav>

      {/* MOBILE HAMBURGER MENU DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: 280 }} 
              animate={{ x: 0 }} 
              exit={{ x: 280 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="fixed top-0 right-0 h-full w-[280px] z-50 md:hidden flex flex-col p-6 shadow-2xl"
              style={{
                background: 'rgba(8,8,16,0.97)',
                backdropFilter: 'blur(20px)',
                borderLeft: '1px solid rgba(255,255,255,0.06)'
              }}
            >
              <div className="flex justify-end mb-8">
                <button className="text-slate-400 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <ul className="flex flex-col gap-4">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.replace('#', '')
                  return (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06, duration: 0.4 }}
                    >
                      <Link 
                        href={link.href} 
                        onClick={(e) => handleScrollTo(e, link.href)}
                        className={`block text-lg font-medium transition-colors ${
                          isActive ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                        }`}
              >
                        {link.label}
                      </Link>
                    </motion.li>
                  )
                })}
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.06, duration: 0.4 }}
                  className="mt-6"
                >
                  <a 
                    href="#contact"
                    onClick={(e) => handleScrollTo(e as any, '#contact')}
                    className="block w-full text-center px-4 py-2.5 text-sm font-semibold rounded-full border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                  >
                    Hire Me
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
