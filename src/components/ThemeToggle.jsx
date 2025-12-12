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
      // Modern dark theme with warm tones
      root.style.setProperty('--bg', '#0f1419')
      root.style.setProperty('--bg-soft', '#1a1f2e')
      root.style.setProperty('--surface', '#1e2432')
      root.style.setProperty('--text', '#e8edf3')
      root.style.setProperty('--muted', '#8b95a7')
      root.style.setProperty('--primary', '#6366f1')
      root.style.setProperty('--primary-600', '#4f46e5')
      root.style.setProperty('--accent', '#10b981')
      root.style.setProperty('--card', 'rgba(255, 255, 255, 0.05)')
      root.style.setProperty('--border', 'rgba(255, 255, 255, 0.1)')
    } else {
      // Modern light theme with soft colors
      root.style.setProperty('--bg', '#fafbfc')
      root.style.setProperty('--bg-soft', '#f5f7fa')
      root.style.setProperty('--surface', '#ffffff')
      root.style.setProperty('--text', '#1a202c')
      root.style.setProperty('--muted', '#64748b')
      root.style.setProperty('--primary', '#6366f1')
      root.style.setProperty('--primary-600', '#4f46e5')
      root.style.setProperty('--accent', '#059669')
      root.style.setProperty('--card', 'rgba(15, 20, 25, 0.04)')
      root.style.setProperty('--border', 'rgba(15, 20, 25, 0.08)')
    }

    // Update body background with new theme colors
    document.body.style.background = isDark
      ? 'radial-gradient(1200px 800px at 90% -10%, rgba(99, 102, 241, 0.15), transparent 60%), radial-gradient(900px 700px at -10% 10%, rgba(16, 185, 129, 0.1), transparent 60%), #0f1419'
      : 'radial-gradient(1200px 800px at 90% -10%, rgba(99, 102, 241, 0.06), transparent 60%), radial-gradient(900px 700px at -10% 10%, rgba(5, 150, 105, 0.06), transparent 60%), #fafbfc'
    
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


