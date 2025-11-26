import { motion } from 'framer-motion'

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
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
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
            className="glass" 
            style={{ padding: 18 }}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <h3>Bachelor of Computer Application, Manipal University, Jaipur</h3>
            <div className="tag" style={{ marginTop: 6 }}>2023 – Present</div>
          </motion.article>
          <motion.article 
            className="glass" 
            style={{ padding: 18 }}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <h3>10+2, D.S. College, Katihar, Bihar</h3>
            <div className="tag" style={{ marginTop: 6 }}>2016 – 2019</div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}


