import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo('.contact-title', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
    .fromTo('.contact-info', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.4'
    );
  }, []);

  return (
    <section id="contact" className="contact-section py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="contact-title text-4xl lg:text-5xl font-light mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Drop me a message and let's create something amazing together.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Info - Centered */}
          <div className="contact-info max-w-2xl">
            <div className="glass-card p-8 text-center">
              <h3 className="text-3xl font-medium mb-6 gradient-text">
                Let's Create Something Amazing
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you're looking for a developer to join your team or need help 
                bringing your ideas to life, I'd love to hear from you.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center neon-glow">
                    📧
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">amithp0210@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center neon-glow">
                    📱
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 7204213097</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center neon-glow">
                    📍
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Puttur/Manglore</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/vulture02" className="glass-card p-3 neon-glow hover:scale-110 transition-all duration-300">
                  <GithubLogo size={24} />
                </a>
                <a href="https://www.linkedin.com/in/amith-p-b99884282/" className="glass-card p-3 neon-glow-blue hover:scale-110 transition-all duration-300">
                  <LinkedinLogo size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
