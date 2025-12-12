// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { FaReact, FaJsSquare, FaSass, FaCss3Alt, FaHtml5, FaGit, FaGithub, FaBootstrap, FaPlug } from 'react-icons/fa'
import { SiNextdotjs, SiRedux, SiGraphql, SiTypescript, SiFirebase, SiExpo, SiExpress, SiSupabase, SiVite, SiTailwindcss, SiBitbucket, SiMui, SiVercel } from 'react-icons/si'

const skills = [
  { name: 'React.js', level: 90, icon: <FaReact />, desc: 'Building dynamic UIs with component architecture' },
  { name: 'Next.js', level: 85, icon: <SiNextdotjs />, desc: 'SSR/SSG for performance and SEO' },
  { name: 'React Native', level: 70, icon: <FaReact />, desc: 'Cross-platform mobile apps' },
  { name: 'Redux', level: 85, icon: <SiRedux />, desc: 'Predictable state management patterns' },
  { name: 'Redux Toolkit', level: 80, icon: <SiRedux />, desc: 'Modern Redux with less boilerplate' },
  { name: 'JavaScript', level: 90, icon: <FaJsSquare />, desc: 'ES2023+, clean functional patterns' },
  { name: 'Zustand', level: 75, icon: <FaReact />, desc: 'Lightweight state without boilerplate' },
  { name: 'GraphQL', level: 70, icon: <SiGraphql />, desc: 'Typed APIs and efficient data fetching' },
  { name: 'TypeScript', level: 80, icon: <SiTypescript />, desc: 'Type-safe React and tooling' },
  { name: 'Firebase', level: 70, icon: <SiFirebase />, desc: 'Auth, hosting, and functions' },
  { name: 'Firebase Database', level: 65, icon: <SiFirebase />, desc: 'Realtime data with rules' },
  { name: 'HTML', level: 95, icon: <FaHtml5 />, desc: 'Semantic, accessible markup' },
  { name: 'Bootstrap', level: 75, icon: <FaBootstrap />, desc: 'Popular CSS framework for responsive design' },
  { name: 'Material UI', level: 70, icon: <SiMui />, desc: 'React component library implementing Material Design' },
  { name: 'CSS', level: 90, icon: <FaCss3Alt />, desc: 'Responsive layouts with Flexbox/Grid' },
  { name: 'SASS', level: 75, icon: <FaSass />, desc: 'Structured styles and variables' },
  { name: 'Expo', level: 75, icon: <SiExpo />, desc: 'React Native framework for building mobile apps' },
  { name: 'Express.js', level: 40, icon: <SiExpress />, desc: 'Node.js web framework for REST APIs' },
  { name: 'Supabase', level: 65, icon: <SiSupabase />, desc: 'Open-source Firebase alternative with PostgreSQL' },
  { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss />, desc: 'Utility-first CSS framework for rapid UI development' },
  { name: 'WebSocket', level: 75, icon: <FaPlug />, desc: 'Real-time bidirectional communication protocol' },
  { name: 'Git', level: 85, icon: <FaGit />, desc: 'Distributed version control system' },
  { name: 'GitHub', level: 80, icon: <FaGithub />, desc: 'Git repository hosting and collaboration platform' },
  { name: 'Bitbucket', level: 75, icon: <SiBitbucket />, desc: 'Git-based source code repository hosting' },
  { name: 'Vite', level: 80, icon: <SiVite />, desc: 'Next-generation frontend build tool and dev server' },
  { name: 'Vercel', level: 75, icon: <SiVercel />, desc: 'Serverless platform for static and dynamic websites' }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
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

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title"><span className="accent">Skills</span> & Expertise</h2>
        <motion.div 
          className="grid cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((s, index) => (
            <motion.article 
              key={s.name} 
              className="glass skill-card" 
              aria-label={`${s.name} skill`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                style={{ fontSize: 28, color: 'var(--accent)' }}
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                {s.icon}
              </motion.div>
              <div>
                <div className="skill-title">{s.name}</div>
                <div className="skill-desc">{s.desc}</div>
                <div className="skill-meter" aria-hidden="true">
                  <motion.span 
                    style={{ width: `${s.level}%` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  />
                </div>
                <div className="sr-only">Proficiency {s.level} percent</div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


