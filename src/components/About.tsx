import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette } from 'phosphor-react';
import { Database, Laptop, Download, GraduationCap, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

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
      )
      .fromTo(
        '.resume-button',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.2'
      )
      .fromTo(
        '.tab-section',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.3'
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

  // Tab switching animation
  useEffect(() => {
    gsap.fromTo('.tab-content', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    );
  }, [activeTab]);

  const handleResumeDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/assets/AmithResume.pdf'; // Update this path to your resume file
    link.download = 'Amith_P_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

  const educationData = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "St. Joseph Engineering College, Mangaluru",
      duration: "2022 - Present",
      description: "Studying core areas of computer science including software engineering, data structures and algorithms, full stack web development, and ML.",
      achievements: ["Currently Pursuing", "Core CS Subjects", "Full Stack Focus"]
    },
    {
      degree: "Pre-University Course (PU) in Science",
      institution: "Vivekananda Pre University College Nehru Nagar, Puttur",
      duration: "2019 - 2021",
      description: "PCMC (Physics, Chemistry, Mathematics, Computer Science)",
      achievements: ["Science Stream", "Computer Science", "Mathematics"]
    },
    {
      degree: "Higher Secondary Schooling",
      institution: "Vivekananda English Medium School, Puttur",
      duration: "2016 - 2019",
      description: "Completed high school with emphasis on core academic.",
      achievements: ["Core Academics", "Foundation Learning", "Academic Excellence"]
    }
  ];

  const experienceData = [
    {
      position: "Data Analytics and Visualization Job Simulation",
      company: "Accenture (Virtual)",
      duration: "2024",
      description: "Cleaned and organized data using Excel to prepare it for analysis as part of a data analytics simulation project with Accenture.",
      achievements: ["Data Cleaning", "Excel Proficiency", "Analytics Project"]
    },
    {
      position: "ServiceNow Certified Professional – Micro-Certification",
      company: "Certified Learner in ServiceNow Fundamentals",
      duration: "2024",
      description: "Successfully completed the Welcome to ServiceNow micro-certification, issued by ServiceNow in November 2024. Gained foundational knowledge of the ServiceNow platform, its core capabilities, and the value it delivers in enterprise environments.",
      achievements: ["ServiceNow Certified", "Platform Knowledge", "Enterprise Solutions"]
    }
  ];

  const TabCard = ({ data, type }: { data: any[], type: string }) => (
    <div className="tab-content relative">
      <div className="space-y-8">
        {data.map((item, index) => (
          <div key={index} className="group relative">
            {/* Connection line */}
            {index !== data.length - 1 && (
              <div className="absolute left-8 top-16 w-[2px] h-full bg-gradient-to-b from-neon-purple/50 via-neon-blue/30 to-transparent"></div>
            )}
            
            <div className="flex gap-8">
              {/* Timeline indicator */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-purple/20 via-neon-blue/20 to-neon-cyan/20 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-neon-purple/40 transition-all duration-500">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue"></div>
                </div>
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-neon-purple/10 to-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </div>
              
              {/* Content card */}
              <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 group-hover:border-neon-purple/30 group-hover:bg-white/10 transition-all duration-500">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-semibold text-white group-hover:text-neon-cyan transition-colors duration-300">
                        {type === 'education' ? item.degree : item.position}
                      </h4>
                      <h5 className="text-lg font-medium bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                        {type === 'education' ? item.institution : item.company}
                      </h5>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="inline-block px-4 py-2 text-sm font-medium bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 backdrop-blur-sm border border-neon-cyan/30 rounded-full text-neon-cyan">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {item.description}
                  </p>
                  
                  {/* Achievements */}
                  <div className="flex flex-wrap gap-3">
                    {item.achievements.map((achievement: string, i: number) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-sm bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 backdrop-blur-sm border border-neon-blue/20 rounded-full text-neon-blue hover:border-neon-blue/40 hover:bg-neon-blue/20 transition-all duration-300 cursor-default"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Decorative corner gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-neon-purple/5 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="about" className="about-section py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-neon-purple to-neon-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-neon-cyan to-neon-green rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* Main About Section */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Profile Image */}
          <div className="about-image lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="profile-image w-72 h-72 rounded-3xl overflow-hidden bg-gradient-to-br from-neon-purple/20 via-neon-blue/20 to-neon-cyan/20 p-1 cursor-pointer backdrop-blur-sm border border-white/10">
                <img
                  src="assets/portfolio.jpg"
                  alt="Amith P - Full Stack Developer"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-2xl opacity-20 rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-neon-cyan to-neon-green rounded-full opacity-30 group-hover:scale-125 transition-transform duration-500"></div>
              <div className="absolute top-1/2 -right-12 w-3 h-3 bg-neon-purple rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-1/4 -left-8 w-2 h-2 bg-neon-cyan rounded-full opacity-40 animate-bounce"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="about-content lg:col-span-3 space-y-10">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-[2px] bg-gradient-to-r from-neon-purple to-neon-blue"></div>
                  <h2 className="text-5xl lg:text-6xl font-extralight tracking-tight">
                    About <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent font-normal">Me</span>
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-xl text-gray-300 leading-relaxed font-light">
                    Hi, I'm <span className="text-neon-cyan font-medium">Amith P</span> — a passionate full-stack developer crafting digital experiences that matter. 
                    I blend creative problem-solving with technical excellence to build applications that users love.
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Specializing in the <span className="text-neon-purple font-medium">MERN stack</span>, I also work extensively with Java, Python, and modern AI technologies. 
                    Currently exploring the intersection of <span className="text-neon-blue font-medium">Artificial Intelligence</span> and web development.
                  </p>
                </div>
              </div>

              {/* Resume Download Button */}
              <div className="resume-button">
                <button
                  onClick={handleResumeDownload}
                  className="group relative px-8 py-4 bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 backdrop-blur-sm border border-neon-purple/30 rounded-xl hover:border-neon-purple/60 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/0 to-neon-blue/0 group-hover:from-neon-purple/20 group-hover:to-neon-blue/20 transition-all duration-300"></div>
                  <div className="relative flex items-center gap-3 text-lg font-medium">
                    <Download 
                      size={22} 
                      className="text-neon-purple group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" 
                    />
                    Download Resume
                  </div>
                </button>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-icon group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-neon-purple/40 transition-all duration-500 cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/0 to-neon-blue/0 group-hover:from-neon-purple/10 group-hover:to-neon-blue/10 transition-all duration-500"></div>
                  <div className="relative text-center">
                    <div className="mb-4 flex justify-center text-neon-purple group-hover:scale-110 group-hover:text-neon-blue transition-all duration-300">
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-neon-purple flex items-center gap-3">
                <div className="w-8 h-[2px] bg-gradient-to-r from-neon-purple to-neon-blue"></div>
                Tech Arsenal
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-neon-cyan/40 hover:bg-neon-cyan/10 hover:text-neon-cyan transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education & Experience Tabs Section */}
        <div className="tab-section">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-neon-purple to-neon-blue"></div>
              <h2 className="text-5xl lg:text-6xl font-extralight tracking-tight">
                My <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent font-normal">Journey</span>
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-neon-blue via-neon-purple to-transparent"></div>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Explore my educational background and professional experience that shaped my development journey
            </p>
          </div>
          
          {/* Tab Buttons */}
          <div className="flex justify-center mb-12">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-2xl">
              <div 
                className={`absolute top-2 bottom-2 bg-gradient-to-r from-neon-purple/30 to-neon-blue/30 backdrop-blur-sm rounded-xl transition-all duration-500 ease-out ${
                  activeTab === 'education' ? 'left-2 w-[calc(50%-4px)]' : 'left-[calc(50%+2px)] w-[calc(50%-4px)]'
                }`}
              ></div>
              <div className="relative flex gap-2">
                <button
                  onClick={() => setActiveTab('education')}
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 font-medium text-lg relative z-10 ${
                    activeTab === 'education'
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <GraduationCap size={22} />
                  Education
                </button>
                <button
                  onClick={() => setActiveTab('experience')}
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 font-medium text-lg relative z-10 ${
                    activeTab === 'experience'
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Briefcase size={22} />
                  Experience
                </button>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto">
            <TabCard 
              data={activeTab === 'education' ? educationData : experienceData}
              type={activeTab}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;