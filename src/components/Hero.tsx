import { useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Hero animations
    tl.fromTo('.hero-title', 
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out' }
    )
    .fromTo('.hero-subtitle', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.6'
    )
    .fromTo('.hero-cta', 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.4'
    )
    .fromTo('.spline-container', 
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }, '-=0.8'
    );

    // Floating orbs animation
    gsap.to('.floating-orb', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.5
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Spline 3D */}
      <div className="spline-container absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/orb-jiFaCaB0747M6Z2CJGkxCLXK/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          style={{ pointerEvents: 'none' }}
        />
      </div>

      {/* Floating Background Orbs */}
      <div className="absolute inset-0 z-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="floating-orb absolute w-2 h-2 bg-neon-purple rounded-full opacity-30 blur-sm"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight">
          Hi, I'm <span className="gradient-text text-glow">Amith P</span>
          <br />
          <span className="text-4xl md:text-6xl lg:text-7xl text-muted-foreground">
            Software Engineer
          </span>
        </h1>
        
        <p className="hero-subtitle text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting digital experiences that inspire and engage through innovative design and cutting-edge technology.
        </p>
        
        <a
          href="#projects"
          className="hero-cta glass-card px-12 py-4 text-lg font-medium neon-glow hover:scale-105 transition-all duration-300 pulse-glow"
        >
          View My Work
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-purple rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
