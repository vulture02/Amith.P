
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Preloader from '@/components/Preloader';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Locomotive Scroll (simplified version)
    const initSmoothScroll = () => {
      // Basic smooth scrolling behavior
      document.documentElement.style.scrollBehavior = 'smooth';
    };

    if (!loading) {
      initSmoothScroll();
      
      // Main content fade in animation
      gsap.fromTo('main', 
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out' }
      );
    }
  }, [loading]);

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  if (loading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Index;
