import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // Initialize from localStorage or system preference
    const stored = localStorage.getItem('theme')
    if (stored) return stored
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    const isDark = theme === 'dark'
    
    // Set color scheme
    root.style.colorScheme = isDark ? 'dark' : 'light'
    
    // Set CSS custom properties based on theme
    if (isDark) {
      root.style.setProperty('--bg', '#0b0f17')
      root.style.setProperty('--bg-soft', '#0f1624')
      root.style.setProperty('--surface', '#121826')
      root.style.setProperty('--text', '#e6eaf2')
      root.style.setProperty('--muted', '#9aa4b2')
      root.style.setProperty('--primary', '#7c5cff')
      root.style.setProperty('--primary-600', '#6b46ff')
      root.style.setProperty('--accent', '#22d3ee')
      root.style.setProperty('--card', 'rgba(255, 255, 255, 0.06)')
      root.style.setProperty('--border', 'rgba(255, 255, 255, 0.12)')
    } else {
      root.style.setProperty('--bg', '#ffffff')
      root.style.setProperty('--bg-soft', '#f6f8fb')
      root.style.setProperty('--surface', '#ffffff')
      root.style.setProperty('--text', '#0e1420')
      root.style.setProperty('--muted', '#57607a')
      root.style.setProperty('--primary', '#5a48ff')
      root.style.setProperty('--primary-600', '#4636e6')
      root.style.setProperty('--accent', '#06b6d4')
      root.style.setProperty('--card', 'rgba(10, 12, 16, 0.06)')
      root.style.setProperty('--border', 'rgba(3, 7, 18, 0.1)')
    }

    // Update body background
    document.body.style.background = isDark
      ? 'radial-gradient(1200px 800px at 90% -10%, rgba(124, 92, 255, 0.16), transparent 60%), radial-gradient(900px 700px at -10% 10%, rgba(34, 211, 238, 0.12), transparent 60%), #0b0f17'
      : 'radial-gradient(1200px 800px at 90% -10%, rgba(124, 92, 255, 0.08), transparent 60%), radial-gradient(900px 700px at -10% 10%, rgba(34, 211, 238, 0.08), transparent 60%), #ffffff'
    
    // Save to localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <button aria-label="Toggle theme" className="btn ghost" onClick={toggle} title="Toggle theme">
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}


