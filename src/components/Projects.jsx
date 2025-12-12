/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Plex Player',
    description: 'Plex Player is a cross-platform media player made with React Native. It allows you to stream your media files to your device.',
    tech: ['React Native', 'TypeScript', 'OAuth','Expo', 'Expo Router', 'Rapidapi'],
    github: 'https://github.com/Rakesh19k/plex-player',
    image: 'https://www.plex.tv/wp-content/uploads/2023/05/pms-devices-image.png',
  },
  {
    title: 'Food Recipe App',
    description: 'A mobile application created with React Native to browse, save, and share recipes. Features include recipe search, ingredient filters, and user authentication.',
    tech: ['React Native', 'TypeScript', 'Expo', 'Expo Router', 'Rapidapi'],
    github: 'https://github.com/Rakesh19k/food-recipe-app',
    image: 'https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/750af423600603e1823e6a776589eb3b?_a=AQAEufR',
  },
  {
    title: 'Job Search App',
    description: 'Created with React Native, this app helps users search and apply for jobs, featuring secure authentication and real-time job listings.',
    tech: ['React Native', 'TypeScript', 'Expo', 'Expo Router', 'Rapidapi'],
    github: 'https://github.com/Rakesh19k/find-job-app',
    image: 'https://camo.githubusercontent.com/148e311fc3dd4df2a0f35f558978be8660af975cf1a9ad5efede3bd15f2c72a5/68747470733a2f2f692e6962622e636f2f56574d78675a7a2f46696c652d636f7665722d382e706e67',
  },
]

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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
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

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Selected <span className="accent">Projects</span></h2>
        <motion.div 
          className="grid" 
          style={{ gap: 24 }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((p, index) => (
            <motion.article 
              key={p.title} 
              className="glass project-card" 
              aria-label={p.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="project-media"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={p.image} 
                  alt={`${p.title} mockup`} 
                  loading="lazy" 
                  style={{ 
                    width: '100%', 
                    height: '250px',
                    objectFit: 'cover',
                    borderRadius: '12px'
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="project-overlay-content"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-overlay-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub /> View Code
                  </motion.a>
                </motion.div>
              </motion.div>
              <div className="project-body">
                <motion.div 
                  className="project-title"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {p.title}
                </motion.div>
                <p className="project-desc">{p.description}</p>
                <div className="tech-list">
                  {p.tech.map((t, techIndex) => (
                    <motion.span 
                      key={t} 
                      className="tag tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      whileHover={{ 
                        scale: 1.15,
                        y: -3,
                        boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)"
                      }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
                <div className="links">
                  <motion.a 
                    className="btn secondary" 
                    href={p.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    aria-label="GitHub repository"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> GitHub
                  </motion.a>
                  {/* <motion.a 
                    className="btn" 
                    href={p.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    aria-label="Live demo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Demo
                  </motion.a> */}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


