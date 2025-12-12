import { FaCode, FaLaptopCode } from 'react-icons/fa'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="section">
      <span className="anchor-offset" aria-hidden="true" />
      <div className="container hero">
        <motion.div 
          initial={{ opacity: 0, y: 12 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="tag" 
            aria-label="Location"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            🇮🇳 Thubarahalli, Bangalore
          </motion.div>
          <h1>Building fast, accessible React apps with delightful UX</h1>
          <p>
            Frontend Developer (React.js) passionate about building smooth, responsive, and user-friendly web experiences. Strong in modern JavaScript, UI design principles, and writing clean, maintainable code. Always learning, exploring, and pushing for better user experiences.          </p>
          <div className="cta">
            <motion.a 
              className="btn" 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLaptopCode /> View My Work
            </motion.a>
            <motion.a 
              className="btn secondary" 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
        <motion.div 
          className="avatar-wrapper"
          initial={{ opacity: 0, scale: 0.95, rotate: -5 }} 
          animate={{ opacity: 1, scale: 1, rotate: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="avatar glass"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="avatar-bg-glow" />
            <img src="/profile-placeholder.svg" alt="Rakesh Kumar - Frontend Developer" loading="lazy" />
            <motion.div 
              className="floating-icon floating-icon-1"
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaCode />
            </motion.div>
            <motion.div 
              className="floating-icon floating-icon-2"
              animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <FaCode />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


