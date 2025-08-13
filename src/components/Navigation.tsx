import { useState, useEffect } from 'react';
import { List, X, GithubLogo, LinkedinLogo } from 'phosphor-react';
import { gsap } from 'gsap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animation for mobile menu
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        '.mobile-menu',
        { x: '100%' },
        { x: '0%', duration: 0.5, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.mobile-menu-item',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, delay: 0.2 }
      );
    }
  }, [isOpen]);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass-card backdrop-blur-md' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-medium gradient-text">AP</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-neon-purple transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-purple transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 glass-card neon-glow"
            >
              {isOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu fixed top-0 right-0 h-screen w-80 bg-card/95 backdrop-blur-md z-50 p-8 flex flex-col justify-center">
          <div className="space-y-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="mobile-menu-item block text-2xl font-light hover:text-neon-purple transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mobile-menu-item flex space-x-6 pt-8">
              <a
                href="https://github.com/vulture02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubLogo
                  size={28}
                  className="hover:text-neon-purple transition-colors cursor-pointer"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/amith-p-b99884282/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinLogo
                  size={28}
                  className="hover:text-neon-blue transition-colors cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
