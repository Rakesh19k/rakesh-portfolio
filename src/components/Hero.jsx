import { FaCode, FaLaptopCode, FaArrowRight } from 'react-icons/fa'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

export default function Hero() {
  return (
    <section id="home" className="section hero-section">
      <span className="anchor-offset" aria-hidden="true" />
      {/* Animated Background Elements */}
      <div className="hero-bg-elements">
        <motion.div
          className="hero-bg-circle hero-bg-circle-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="hero-bg-circle hero-bg-circle-2"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="container hero">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="tag" 
            aria-label="Location"
            variants={textVariants}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              style={{ display: 'inline-block', marginRight: '8px' }}
            >
              🇮🇳
            </motion.span>
            Thubarahalli, Bangalore
          </motion.div>
          <motion.h1 
            variants={textVariants}
            className="hero-title"
          >
            Building fast, accessible{' '}
            <motion.span
              className="gradient-text"
              animate={{
                backgroundPosition: ['0%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            >
              React apps
            </motion.span>{' '}
            with delightful UX
          </motion.h1>
          <motion.p 
            variants={textVariants}
            className="hero-description"
          >
            Frontend Developer (React.js) passionate about building smooth, responsive, and user-friendly web experiences. Strong in modern JavaScript, UI design principles, and writing clean, maintainable code. Always learning, exploring, and pushing for better user experiences.
          </motion.p>
          <motion.div 
            className="cta"
            variants={textVariants}
          >
            <motion.a 
              className="btn hero-cta-primary" 
              href="#projects"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLaptopCode /> 
              <span>View My Work</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight style={{ marginLeft: '8px' }} />
              </motion.span>
            </motion.a>
            <motion.a 
              className="btn secondary hero-cta-secondary" 
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                borderColor: "var(--accent)",
                color: "var(--accent)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div 
          className="avatar-wrapper"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }} 
          animate={{ opacity: 1, scale: 1, rotate: 0 }} 
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.div 
            className="avatar glass"
            whileHover={{ 
              scale: 1.08, 
              rotate: 3,
              boxShadow: "0 30px 80px rgba(99, 102, 241, 0.3)"
            }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <div className="avatar-bg-glow" />
            <motion.img 
              src="/profile-placeholder.svg" 
              alt="Rakesh Kumar - Frontend Developer" 
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="floating-icon floating-icon-1"
              animate={{ 
                y: [0, -15, 0], 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <FaCode />
            </motion.div>
            <motion.div 
              className="floating-icon floating-icon-2"
              animate={{ 
                y: [0, -12, 0], 
                rotate: [0, -360],
                scale: [1, 1.15, 1]
              }}
              transition={{ 
                duration: 3.5, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: 0.5 
              }}
            >
              <FaCode />
            </motion.div>
            <motion.div 
              className="floating-icon floating-icon-3"
              animate={{ 
                y: [0, -10, 0], 
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: 1 
              }}
            >
              <FaCode />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


