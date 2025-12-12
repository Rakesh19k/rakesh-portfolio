import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Calculate scroll percentage
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = (scrollTop / scrollHeight) * 100

      // Show button when scrolled 20% or more
      if (scrollPercentage >= 20) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.3, y: 50 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: [0, -8, 0],
            transition: {
              opacity: {
                duration: 0.3
              },
              scale: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 0.8
              },
              y: {
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.3, 
            y: 50,
            transition: { duration: 0.2 }
          }}
          whileHover={{ 
            scale: 1.1,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="scroll-to-top-btn"
          aria-label="Scroll to top"
        >
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ 
              y: [0, -3, 0],
              transition: {
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.1
              }
            }}
          >
            <path d="M18 15l-6-6-6 6" />
          </motion.svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop

