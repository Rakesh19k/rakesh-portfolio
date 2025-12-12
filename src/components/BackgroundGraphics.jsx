import { useEffect, useRef } from 'react'

const BackgroundGraphics = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create particles
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        // Alternate colors for variety
        const color = Math.random() > 0.5 
          ? `rgba(124, 92, 255, ${this.opacity})`
          : `rgba(34, 211, 238, ${this.opacity})`
        ctx.fillStyle = color
        ctx.fill()
      }
    }

    // Initialize particles - more for better effect
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            const opacity = 0.1 * (1 - distance / 150)
            // Alternate connection colors
            const color = Math.random() > 0.5 
              ? `rgba(124, 92, 255, ${opacity})`
              : `rgba(34, 211, 238, ${opacity})`
            ctx.strokeStyle = color
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <div className="background-graphics">
        {/* Animated Blob Shapes */}
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
        <div className="blob blob-5"></div>
        <div className="blob blob-6"></div>
        
        {/* Grid Pattern */}
        <div className="grid-pattern"></div>
        
        {/* Light Rays */}
        <div className="light-ray ray-1"></div>
        <div className="light-ray ray-2"></div>
        <div className="light-ray ray-3"></div>
        <div className="light-ray ray-4"></div>
        
        {/* Floating Orbs */}
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        
        {/* Geometric Shapes */}
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
        
        {/* Wave Patterns */}
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        
        {/* Gradient Mesh */}
        <div className="gradient-mesh mesh-1"></div>
        <div className="gradient-mesh mesh-2"></div>
        
        {/* Floating Rings */}
        <div className="ring ring-1"></div>
        <div className="ring ring-2"></div>
        <div className="ring ring-3"></div>
        
        {/* Floating Hexagons */}
        <div className="hexagon hexagon-1"></div>
        <div className="hexagon hexagon-2"></div>
        <div className="hexagon hexagon-3"></div>
        <div className="hexagon hexagon-4"></div>
        
        {/* Rotating Stars */}
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        
        {/* Pulsing Circles */}
        <div className="pulse-circle pulse-1"></div>
        <div className="pulse-circle pulse-2"></div>
        <div className="pulse-circle pulse-3"></div>
        
        {/* Animated Lines */}
        <div className="animated-line line-1"></div>
        <div className="animated-line line-2"></div>
        <div className="animated-line line-3"></div>
        
        {/* DNA Helix Structure */}
        <div className="dna-helix helix-1"></div>
        <div className="dna-helix helix-2"></div>
        
        {/* Floating Particles (SVG) */}
        <svg className="floating-particles" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <circle className="particle-svg p1" cx="100" cy="200" r="2"/>
          <circle className="particle-svg p2" cx="300" cy="400" r="1.5"/>
          <circle className="particle-svg p3" cx="500" cy="100" r="1.8"/>
          <circle className="particle-svg p4" cx="700" cy="600" r="2"/>
          <circle className="particle-svg p5" cx="900" cy="300" r="1.6"/>
          <circle className="particle-svg p6" cx="200" cy="800" r="2.2"/>
          <circle className="particle-svg p7" cx="600" cy="900" r="1.5"/>
          <circle className="particle-svg p8" cx="850" cy="700" r="1.8"/>
        </svg>
        
        {/* Animated Gradient Orbs */}
        <div className="gradient-orb gorb-1"></div>
        <div className="gradient-orb gorb-2"></div>
        <div className="gradient-orb gorb-3"></div>
        
        {/* Mesh Network Lines */}
        <div className="mesh-network network-1"></div>
        <div className="mesh-network network-2"></div>
      </div>
      
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="particle-canvas"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
    </>
  )
}

export default BackgroundGraphics

