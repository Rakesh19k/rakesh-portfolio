import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Professional <span className="accent">Experience</span></h2>
        <motion.div 
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="timeline-item"
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="timeline-bullet"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.3 }}
            />
            <motion.div 
              className="timeline-content glass"
              style={{ padding: '20px', marginLeft: '14px' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3>Software Engineer, BitCot Technology Private Limited</h3>
              <div className="tag" style={{ margin: '6px 0 10px' }}>Aug 2021 – Present</div>
              <ul>
                <li>Developed REST APIs and implemented authentication (OAuth) to securely expose data.</li>
                <li>Designed and developed a scalable, high-availability web application.</li>
                <li>Built a custom UI library increasing developer productivity and code reuse.</li>
                <li>Delivered and maintained software in React.js, Next.js, and JavaScript.</li>
                <li>Implemented microservices architecture improving modularity and reducing dependencies.</li>
                <li>Conducted code reviews and mentored junior developers for best practices.</li>
                <li>Optimized frontend performance, achieving <strong>30% reduction in page load times</strong> through code splitting and lazy loading.</li>
                <li>Collaborated closely with cross-functional teams including design and QA to ensure smooth delivery of product features.</li>
                <li>Integrated third-party APIs such as Stripe and Firebase for payments and backend services.</li>
              </ul>
            </motion.div>
          </motion.div>
          <motion.div 
            className="timeline-item"
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="timeline-bullet"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.3 }}
            />
            <motion.div 
              className="timeline-content glass"
              style={{ padding: '20px', marginLeft: '14px' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3>Learning Platform, Navgurukul Foundation</h3>
              <div className="tag" style={{ margin: '6px 0 10px' }}>1-year residential course</div>
              <p>Foundational training program in software development with hands-on learning and peer mentorship.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


