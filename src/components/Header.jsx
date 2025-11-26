import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [atTop, setAtTop] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className="page-header" style={{ borderBottomColor: atTop ? 'transparent' : 'var(--border)' }}>
      <div className="container nav">
        <a href="#home" className="brand" aria-label="Go to home" onClick={closeMenu}>
          <span className="name">Rakesh Kumar</span>
          <span className="tag tag--sm">Passionate React.js Frontend Developer</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="nav-links desktop-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="mobile-nav-links" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href}
                  onClick={closeMenu}
                  className="mobile-nav-link"
                >
                  {item.label}
                </a>
              ))}
              <div className="mobile-theme-toggle">
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


