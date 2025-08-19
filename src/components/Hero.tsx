import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const particlesRef = useRef(null);

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

    // Solar system animations
    // Orbiting planets
    gsap.to('.planet-orbit-1', {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none'
    });

    gsap.to('.planet-orbit-2', {
      rotation: 360,
      duration: 35,
      repeat: -1,
      ease: 'none'
    });

    gsap.to('.planet-orbit-3', {
      rotation: 360,
      duration: 50,
      repeat: -1,
      ease: 'none'
    });

    gsap.to('.planet-orbit-4', {
      rotation: 360,
      duration: 80,
      repeat: -1,
      ease: 'none'
    });

    // Asteroid belt rotation
    gsap.to('.asteroid-belt', {
      rotation: 360,
      duration: 100,
      repeat: -1,
      ease: 'none'
    });

    // Floating asteroids
    const asteroids = document.querySelectorAll('.floating-asteroid');
    asteroids.forEach((asteroid, i) => {
      // Random floating movement
      gsap.to(asteroid, {
        x: `+=${Math.random() * 300 - 150}`,
        y: `+=${Math.random() * 300 - 150}`,
        duration: 10 + Math.random() * 15,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 5
      });

      // Rotation
      gsap.to(asteroid, {
        rotation: 360,
        duration: 8 + Math.random() * 12,
        repeat: -1,
        ease: 'none',
        delay: Math.random() * 3
      });

      // Scale pulsing
      gsap.to(asteroid, {
        scale: 0.8 + Math.random() * 0.4,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 2
      });
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Solar System Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {/* Central Sun */}
        <div className="absolute w-16 h-16 rounded-full opacity-20" style={{
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, rgba(255, 140, 0, 0.6) 50%, rgba(255, 69, 0, 0.4) 100%)',
          boxShadow: '0 0 60px rgba(255, 215, 0, 0.4)',
          filter: 'blur(1px)'
        }} />
        
        {/* Planet Orbits */}
        {/* Mercury Orbit */}
        <div className="planet-orbit-1 absolute w-32 h-32 border border-purple-500/10 rounded-full">
          <div className="absolute w-2 h-2 rounded-full -top-1 left-1/2 transform -translate-x-1/2" style={{
            background: 'radial-gradient(circle, rgba(169, 169, 169, 0.8) 0%, rgba(105, 105, 105, 0.6) 100%)',
            boxShadow: '0 0 8px rgba(169, 169, 169, 0.4)'
          }} />
        </div>

        {/* Venus Orbit */}
        <div className="planet-orbit-2 absolute w-48 h-48 border border-purple-500/10 rounded-full">
          <div className="absolute w-3 h-3 rounded-full -top-1.5 left-1/2 transform -translate-x-1/2" style={{
            background: 'radial-gradient(circle, rgba(255, 198, 73, 0.8) 0%, rgba(255, 165, 0, 0.6) 100%)',
            boxShadow: '0 0 12px rgba(255, 198, 73, 0.4)'
          }} />
        </div>

        {/* Earth Orbit */}
        <div className="planet-orbit-3 absolute w-64 h-64 border border-purple-500/10 rounded-full">
          <div className="absolute w-4 h-4 rounded-full -top-2 left-1/2 transform -translate-x-1/2" style={{
            background: 'radial-gradient(circle, rgba(100, 149, 237, 0.8) 0%, rgba(34, 139, 34, 0.6) 50%, rgba(30, 144, 255, 0.4) 100%)',
            boxShadow: '0 0 15px rgba(100, 149, 237, 0.4)'
          }} />
        </div>

        {/* Mars Orbit */}
        <div className="planet-orbit-4 absolute w-80 h-80 border border-purple-500/10 rounded-full">
          <div className="absolute w-3 h-3 rounded-full -top-1.5 left-1/2 transform -translate-x-1/2" style={{
            background: 'radial-gradient(circle, rgba(205, 92, 92, 0.8) 0%, rgba(139, 69, 19, 0.6) 100%)',
            boxShadow: '0 0 12px rgba(205, 92, 92, 0.4)'
          }} />
        </div>

        {/* Asteroid Belt */}
        <div className="asteroid-belt absolute w-96 h-96">
          {[...Array(20)].map((_, i) => {
            const angle = (360 / 20) * i;
            const radius = 192; // Half of w-96
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <div
                key={`belt-${i}`}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  background: 'rgba(169, 169, 169, 0.6)',
                  boxShadow: '0 0 4px rgba(169, 169, 169, 0.3)'
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Floating Asteroids */}
      <div className="absolute inset-0 z-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={`asteroid-${i}`}
            className="floating-asteroid absolute"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              width: `${3 + Math.random() * 6}px`,
              height: `${3 + Math.random() * 6}px`,
              background: `radial-gradient(circle, 
                rgba(${100 + Math.random() * 100}, ${100 + Math.random() * 100}, ${120 + Math.random() * 100}, 0.7) 0%, 
                rgba(${80 + Math.random() * 80}, ${80 + Math.random() * 80}, ${100 + Math.random() * 80}, 0.4) 100%
              )`,
              borderRadius: `${40 + Math.random() * 60}%`,
              boxShadow: '0 0 8px rgba(169, 169, 169, 0.2)',
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      {/* Distant Stars */}
      <div className="absolute inset-0 z-1">
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              background: `rgba(255, 255, 255, ${0.2 + Math.random() * 0.4})`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
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