import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Scalable Web Application',
    description: 'Designed and developed a high-availability web app with REST APIs and OAuth authentication, improving scalability and security.',
    tech: ['React', 'Redux Toolkit', 'TypeScript', 'OAuth'],
    github: 'https://github.com/rakeshkumar/project1',
    demo: 'https://demo.example/project1',
    image: '/project-1-placeholder.svg',
  },
  {
    title: 'Custom UI Library',
    description: 'Built a reusable component library that increased developer productivity and code reuse across multiple apps.',
    tech: ['React', 'CSS', 'Storybook'],
    github: 'https://github.com/rakeshkumar/project2',
    demo: 'https://demo.example/project2',
    image: '/project-2-placeholder.svg',
  },
  {
    title: 'Microservices-Based App',
    description: 'Implemented a modular microservices architecture reducing interdependencies and enabling independent deployment.',
    tech: ['React', 'GraphQL', 'TypeScript'],
    github: 'https://github.com/rakeshkumar/project3',
    demo: 'https://demo.example/project3',
    image: '/project-3-placeholder.svg',
  },
  {
    title: 'Automation Scripts Suite',
    description: 'Developed automation scripts to simplify common tasks and reduce manual effort across the team.',
    tech: ['JavaScript', 'Node.js'],
    github: 'https://github.com/rakeshkumar/project4',
    demo: 'https://demo.example/project4',
    image: '/project-4-placeholder.svg',
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
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={p.image} alt={`${p.title} mockup`} loading="lazy" />
                <div className="project-overlay" />
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
                  {p.tech.map((t) => (
                    <motion.span 
                      key={t} 
                      className="tag"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
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
                  <motion.a 
                    className="btn" 
                    href={p.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    aria-label="Live demo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


