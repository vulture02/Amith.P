import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, GithubLogo } from 'phosphor-react';


gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo('.projects-title', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
    .fromTo('.project-card', 
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.7)' }, '-=0.4'
    );

    // Card hover animations
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -10, scale: 1.02, duration: 0.3, ease: 'power2.out' });
        gsap.to(card.querySelector('.project-image'), { scale: 1.1, duration: 0.5, ease: 'power2.out' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
        gsap.to(card.querySelector('.project-image'), { scale: 1, duration: 0.5, ease: 'power2.out' });
      });
    });
  }, []);

  const projects = [
    {
      title: 'Real-Time Chat Application',
      description: 'A responsive and real-time chat application built using React.js, Tailwind CSS, DaisyUI for UI components, and a Node.js + Express backend for managing socket connections and message handling.',
      image: '/assets/chat.png',
      tech: ['React', 'nodejs', 'express', 'mongodb','socket.io','daisyUI'],
      link: '',
      github: ''
    },
    {
      title: 'smart-health-planner',
      description: 'Smart AI Health Planner is your personal wellness assistant, powered by AI.It creates customized diet, workout, and lifestyle plans based on your health data.Adapts in real time, keeping you on track toward your fitness and wellness goals.',
      image: '/assets/HealthAi.png',
      tech: ['React', 'typescript', 'gemini-api', 'Tailwind CSS'],
      link: 'https://smart-health-planner.vercel.app/',
      github: 'https://github.com/vulture02/smart-health-planner'
    },
    {
      title: 'Splendz ',
      description: 'Splendz is a modern, AI-powered event planning and expense-sharing platform that makes organizing events—from casual hangouts to large parties—seamless and stress-free. With real-time coordination, intelligent budgeting, task tracking, and smart settlement features, Splendz helps you focus on the fun, not the fuss. Built with cutting-edge tech like Next.js, Convex, Gemini AI, and ShadCN UI, it delivers lightning-fast performance and a stunning UI across all devices.',
      image: '/assets/splendz.png',
      tech: ['TypeScript', 'Gemini', 'Convex', 'inngest','next.js', 'Tailwind CSS'],
      link: 'https://pay-split-ai-dhrp.vercel.app/',
      github: 'https://github.com/vulture02/PaySplit-AI'
    },
    {
      title: 'NoteCab',
      description: 'The Scribble API is a lightweight service designed for a note-taking application. It allows users to create, store, and manage notes efficiently. The API supports operations such as adding new notes with text content and deleting notes when they are no longer needed. It’s built for simplicity, making it easy to integrate into any frontend or mobile app for quick note management.',
      image: '/assets/notecab.png',
      tech: ['React', 'Talwindcss', 'MongoDB', 'Express.js', 'Node.js'],
      link: 'https://scribble-api-1.onrender.com/',
      github: 'https://github.com/vulture02/scribble-api'
    },
    {
      title: 'Automated 2D to 3D Osteotomy Imaging',
      description: 'This project creates an open-source system that transforms 2D osteotomy CT scans into accurate, interactive 3D bone models using intensity-based segmentation and deep learning. It supports STL export for 3D printing, aiding surgical planning, education, and simulations.',
      image: '/assets/2dto3d.png',
      tech: ['Python', 'VTK (Visualization Toolkit)', 'OpenCV', 'NumPy '],
      link: 'https://github.com/vulture02/3d-bone-reconstruction-ai',
      github: 'https://github.com/vulture02/3d-bone-reconstruction-ai'
    },
    {
      title: ' Employee database management system',
      description: 'A desktop application built using Java, MySQL, and Swing to efficiently manage employee records. The system allows users to add, update, search, and delete employee details such as name, employee ID, department, and salary. It features a user-friendly graphical interface for smooth navigation, real-time database connectivity for accurate record storage, and validation to prevent incorrect data entry. This project helps streamline HR operations and improve data accessibility.',
      image: '/assets/employe.png',
      tech: ['Java', 'MySQL', 'JDBC', 'Swing'],
      link: 'https://github.com/vulture02/employee-database-management-system',
      github: 'https://github.com/vulture02/employee-database-management-system'

    }
  ];

  return (
    <section id="projects" className="projects-section py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="projects-title text-4xl lg:text-5xl font-light mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work showcasing modern web development and interactive experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card glass-card overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-48 object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link} className="glass-card p-2 neon-glow hover:scale-110 transition-transform">
                    <ArrowUpRight size={16} />
                  </a>
                  <a href={project.github} className="glass-card p-2 neon-glow hover:scale-110 transition-transform">
                    <GithubLogo size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3 group-hover:text-neon-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-muted/30 rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
