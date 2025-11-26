import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub,
  FaTwitter,
  FaPaperPlane,
  FaUser,
  FaComment
} from 'react-icons/fa'

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

const contactMethods = [
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    content: 'Thubarahalli, Bangalore',
    link: 'https://maps.google.com/?q=Thubarahalli+Bangalore',
    color: '#7c5cff',
  },
  {
    icon: <FaPhone />,
    title: 'Phone',
    content: '+91 7488967469',
    link: 'tel:7488967469',
    color: '#22d3ee',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    content: 'r.rakesh2001k@gmail.com',
    link: 'mailto:r.rakesh2001k@gmail.com',
    color: '#f59e0b',
  },
]

const socialLinks = [
  {
    icon: <FaLinkedin />,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rakesh-kr-7370831b5/',
    color: '#0077b5',
  },
  {
    icon: <FaGithub />,
    name: 'GitHub',
    url: 'https://github.com/Rakesh19k',
    color: '#333',
  },
  {
    icon: <FaTwitter />,
    name: 'Twitter',
    url: 'https://x.com/RakeshK19007004',
    color: '#1da1f2',
  },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      // Replace with your EmailJS details
      // Create service, template, and public key at https://dashboard.emailjs.com/
      const SERVICE_ID = 'your_service_id'
      const TEMPLATE_ID = 'your_template_id'
      const PUBLIC_KEY = 'your_public_key'

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('sent')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 3000)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '32px' }}
        >
          <h2 className="section-title">Get in <span className="accent">Touch</span></h2>
          <p style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: 0, fontSize: '18px' }}>
            Let's connect and discuss how we can work together
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div 
          className="contact-methods-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noreferrer' : undefined}
              className="contact-method-card glass"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="contact-icon-wrapper"
                style={{ background: `${method.color}20`, borderColor: `${method.color}40` }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div style={{ color: method.color, fontSize: '24px' }}>
                  {method.icon}
                </div>
              </motion.div>
              <div className="contact-method-content">
                <h4>{method.title}</h4>
                <p>{method.content}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Main Contact Section */}
        <motion.div 
          className="contact-main-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ marginTop: '24px' }}
        >
          {/* Contact Info Card */}
          <motion.div
            className="contact-info-wrapper"
            variants={cardVariants}
          >
            <motion.article 
              className="glass contact-info-card"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <h3 style={{ marginBottom: '24px', fontSize: '24px' }}>Let's Connect</h3>
              <p style={{ color: 'var(--muted)', marginBottom: '32px', lineHeight: 1.6 }}>
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your visions. Feel free to reach out through any of these channels.
              </p>

              {/* Social Links */}
              <div className="social-links-section">
                <p style={{ marginBottom: '16px', fontWeight: 600, color: 'var(--text)' }}>Follow me on:</p>
                <div className="social-links-grid">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link-btn"
                      style={{ '--social-color': social.color }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="social-icon" style={{ color: social.color }}>
                        {social.icon}
                      </div>
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Action */}
              <motion.a 
                className="btn secondary" 
                href="#projects"
                style={{ marginTop: '32px', width: '100%', justifyContent: 'center' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects
              </motion.a>
            </motion.article>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            ref={formRef} 
            onSubmit={onSubmit} 
            className="glass contact-form-enhanced"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.2 }
            }}
          >
            <div className="form-header">
              <FaComment style={{ fontSize: '24px', color: 'var(--accent)', marginBottom: '8px' }} />
              <h3 style={{ margin: 0, fontSize: '24px' }}>Send a Message</h3>
              <p style={{ color: 'var(--muted)', margin: '8px 0 0', fontSize: '14px' }}>
                Fill out the form below and I'll get back to you as soon as possible
              </p>
            </div>

            <div className="form-fields">
              <div className="field-enhanced">
                <label htmlFor="name">
                  <FaUser style={{ marginRight: '8px' }} />
                  Your Name
                </label>
                <motion.input 
                  id="name" 
                  name="user_name" 
                  className="input-enhanced" 
                  type="text" 
                  required 
                  placeholder="John Doe"
                  whileFocus={{ scale: 1.02, borderColor: 'var(--primary)' }}
                />
              </div>

              <div className="field-enhanced">
                <label htmlFor="email">
                  <FaEnvelope style={{ marginRight: '8px' }} />
                  Email Address
                </label>
                <motion.input 
                  id="email" 
                  name="user_email" 
                  className="input-enhanced" 
                  type="email" 
                  required 
                  placeholder="john@example.com"
                  whileFocus={{ scale: 1.02, borderColor: 'var(--primary)' }}
                />
              </div>

              <div className="field-enhanced">
                <label htmlFor="message">
                  <FaComment style={{ marginRight: '8px' }} />
                  Your Message
                </label>
                <motion.textarea 
                  id="message" 
                  name="message" 
                  className="textarea-enhanced" 
                  required 
                  placeholder="Hello, I'd like to discuss..."
                  rows="5"
                  whileFocus={{ scale: 1.01, borderColor: 'var(--primary)' }}
                />
              </div>
            </div>

            <motion.button 
              className="btn form-submit-btn" 
              type="submit" 
              disabled={status === 'sending'}
              whileHover={{ scale: status !== 'sending' ? 1.05 : 1 }}
              whileTap={{ scale: status !== 'sending' ? 0.95 : 1 }}
            >
              {status === 'sending' ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    style={{ display: 'inline-block', marginRight: '8px' }}
                  >
                    ⏳
                  </motion.span>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane style={{ marginRight: '8px' }} />
                  Send Message
                </>
              )}
            </motion.button>

            {status === 'sent' && (
              <motion.div 
                className="form-status success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div 
                className="form-status error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✗ Something went wrong. Please try again or contact me directly.
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}


