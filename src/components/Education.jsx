/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { FaGraduationCap, FaUniversity } from 'react-icons/fa'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title"><span className="accent">Education</span></h2>
        <motion.div 
          className="grid" 
          style={{ gap: 16 }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.article 
            className="glass education-card" 
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03, 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="education-icon"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <FaGraduationCap />
            </motion.div>
            <div className="education-content">
              <h3>Bachelor of Computer Application, Manipal University, Jaipur</h3>
              <motion.div 
                className="education-year-tag" 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className="year-text">2022 – Present</span>
              </motion.div>
            </div>
          </motion.article>
          <motion.article 
            className="glass education-card" 
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03, 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="education-icon"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <FaUniversity />
            </motion.div>
            <div className="education-content">
              <h3>10+2, D.S. College, Katihar, Bihar</h3>
              <motion.div 
                className="education-year-tag" 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className="year-text">2016 – 2019</span>
              </motion.div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}


