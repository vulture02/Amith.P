import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette } from 'phosphor-react';
import { Database, Laptop } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo(
      '.about-image',
      { opacity: 0, x: -100, filter: 'blur(10px)' },
      { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1, ease: 'power2.out' }
    )
      .fromTo(
        '.about-content',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      )
      .fromTo(
        '.skill-icon',
        { opacity: 0, y: 30, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' },
        '-=0.4'
      );

    // Profile image hover effect
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
      profileImage.addEventListener('mouseenter', () => {
        gsap.to(profileImage, { rotation: 5, scale: 1.05, duration: 0.3, ease: 'power2.out' });
      });
      profileImage.addEventListener('mouseleave', () => {
        gsap.to(profileImage, { rotation: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    }
  }, []);

  const skills = [
    { icon: <Code size={32} />, name: 'Frontend', color: 'neon-blue' },
    { icon: <Palette size={32} />, name: 'UI/UX Design', color: 'neon-purple' },
    { icon: <Database size={32} />, name: 'Backend & Database', color: 'neon-cyan' },
    { icon: <Laptop size={32} />, name: 'Java Development', color: 'neon-green' }
  ];

  const techStack = [
    'React', 'Node.js', 'MongoDB', 'Express', 'Java', 'SQL',
    'Python', 'AI', 'HTML', 'JavaScript', 'Git', 'GitHub',
    'TailwindCSS', 'C'
  ];

  return (
    <section id="about" className="about-section py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Profile Image */}
          <div className="about-image flex justify-center lg:justify-start">
            <div className="relative">
              <div className="profile-image w-80 h-80 rounded-full overflow-hidden glass-card neon-glow cursor-pointer">
                <img
                  src="assets/portfolio.jpg"
                  alt="Amith P - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-neon-purple rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-neon-blue/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="about-content space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hi, I'm <strong>Amith P</strong> — a passionate full-stack developer with strong expertise in both frontend and backend technologies. 
                I enjoy crafting clean, user-friendly interfaces while building robust, scalable backend systems. 
                My mission is to create impactful digital experiences using modern development practices.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in the <strong>MERN stack</strong> and also work extensively with Java, SQL, Python, Tailwind CSS, Git, and GitHub. 
                With a solid understanding of software design and architecture, I’m currently exploring <strong>Artificial Intelligence</strong> to bring smarter solutions into my projects.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`skill-icon glass-card p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer hover:neon-glow-${skill.color}`}
                >
                  <div className={`text-${skill.color} mb-3 flex justify-center`}>
                    {skill.icon}
                  </div>
                  <p className="text-sm font-medium">{skill.name}</p>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-medium mb-4 text-neon-purple">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="glass-card px-4 py-2 text-sm font-medium hover:neon-glow transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
