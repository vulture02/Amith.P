import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GithubLogo, LinkedinLogo, Heart } from "phosphor-react";
import { Square } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    // Floating particles animation
    gsap.to(".footer-particle", {
      y: -30,
      opacity: 0.7,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.3,
    });

    // Footer content animation
    gsap.fromTo(
      ".footer-content",
      { opacity: 0, y: 60, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-section",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section relative py-16 px-6 border-t border-muted/20">
      {/* Floating Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="footer-particle absolute w-1 h-1 bg-neon-purple rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="footer-content max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="text-3xl font-medium gradient-text mb-4">AP</div>
          <p className="text-muted-foreground max-w-md mx-auto">
            Creating digital experiences that inspire and engage through
            innovative design and technology.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-neon-purple transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/vulture02"
            className="glass-card p-3 neon-glow hover:scale-110 hover:neon-glow transition-all duration-300"
          >
            <GithubLogo size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/amith-p-b99884282/"
            className="glass-card p-3 neon-glow-blue hover:scale-110 hover:neon-glow-blue transition-all duration-300"
          >
            <LinkedinLogo size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-muted-foreground border-t border-muted/20 pt-8">
          <p className="flex items-center justify-center space-x-2">
            <span>© {currentYear} Amith P | All Rights Reserved</span>
            <span className="flex items-center space-x-1">
              <Square size={16} className="text-red-500 animate-pulse" />
              <span>Crafted with passion & coffee</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
