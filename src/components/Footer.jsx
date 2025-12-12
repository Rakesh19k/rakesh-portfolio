/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaLightbulb, FaClock } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const startYear = 2021
  const yearsOfExperience = currentYear - startYear


  const quickStats = [
    { label: 'Years of Experience', value: `${yearsOfExperience}+`, icon: <FaRocket /> },
    { label: 'Projects Delivered', value: '15+', icon: <FaCode /> },
    { label: 'Performance Boost', value: '30%', icon: <FaLightbulb /> },
  ]

  const currentFocus = [
    'Exploring React Native for mobile development',
    'Deep diving into TypeScript patterns',
    'Building scalable component libraries',
  ]

  return (
    <footer className="footer container">
      <div className="footer-content">
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer-brand">
            <motion.div
              className="footer-name"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <FaCode style={{ marginRight: '8px', color: 'var(--primary)' }} />
              Rakesh Kumar
            </motion.div>
            <p className="footer-tagline">Frontend Developer • React.js Specialist</p>
            <p className="footer-location">📍 Thubarahalli, Bangalore, India</p>
          </div>
        </motion.div>


        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="footer-heading">Currently</h4>
          <div className="footer-currently">
            {currentFocus.map((item, index) => (
              <motion.div
                key={index}
                className="footer-currently-item"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <span className="footer-currently-bullet">▸</span>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="footer-availability"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <FaClock style={{ marginRight: '6px', fontSize: '12px' }} />
            <span>Available for new opportunities</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="footer-heading">Quick Stats</h4>
          <div className="footer-stats">
            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="footer-stat-item"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <div className="footer-stat-icon" style={{ color: 'var(--primary)' }}>
                  {stat.icon}
                </div>
                <div className="footer-stat-content">
                  <div className="footer-stat-value">{stat.value}</div>
                  <div className="footer-stat-label">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      

      </div>

      <motion.div
        className="footer-copyright"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="footer-divider" />
        <p>© {currentYear} Rakesh Kumar. All rights reserved.</p>
        <p className="footer-note">Passionate about building exceptional user experiences</p>
      </motion.div>
    </footer>
  )
}




