import { useEffect, useState } from 'react';
import { Code, Palette } from 'lucide-react';
import { Database, Laptop, Download, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // GSAP animations (simplified for compatibility)
  useEffect(() => {
    // Simple fade-in animation for elements
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        el.style.transition = 'all 0.6s ease-out';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 100);
    });

    // Profile image hover effect
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
      profileImage.addEventListener('mouseenter', () => {
        profileImage.style.transition = 'transform 0.3s ease-out';
        profileImage.style.transform = 'rotate(5deg) scale(1.05)';
      });
      profileImage.addEventListener('mouseleave', () => {
        profileImage.style.transform = 'rotate(0deg) scale(1)';
      });
    }
  }, []);

  // Tab switching animation
  useEffect(() => {
    const tabContent = document.querySelector('.tab-content');
    if (tabContent) {
      tabContent.style.opacity = '0';
      tabContent.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        tabContent.style.transition = 'all 0.4s ease-out';
        tabContent.style.opacity = '1';
        tabContent.style.transform = 'translateY(0)';
      }, 50);
    }
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
    { icon: <Code size={isMobile ? 24 : 32} />, name: 'Frontend', color: 'neon-blue' },
    { icon: <Palette size={isMobile ? 24 : 32} />, name: 'UI/UX Design', color: 'neon-purple' },
    { icon: <Database size={isMobile ? 24 : 32} />, name: 'Backend & Database', color: 'neon-cyan' },
    { icon: <Laptop size={isMobile ? 24 : 32} />, name: 'Java Development', color: 'neon-green' }
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
      <div className="space-y-6 md:space-y-8">
        {data.map((item, index) => (
          <div key={index} className="group relative">
            {/* Connection line - hidden on mobile */}
            {index !== data.length - 1 && !isMobile && (
              <div className="absolute left-6 md:left-8 top-12 md:top-16 w-[2px] h-full bg-gradient-to-b from-purple-500/50 via-blue-500/30 to-transparent"></div>
            )}
            
            <div className="flex gap-4 md:gap-8">
              {/* Timeline indicator */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/40 transition-all duration-500">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                </div>
                <div className="absolute -inset-1 md:-inset-2 rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </div>
              
              {/* Content card */}
              <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-8 group-hover:border-purple-500/30 group-hover:bg-white/10 transition-all duration-500">
                <div className="space-y-4 md:space-y-6">
                  {/* Header */}
                  <div className="flex flex-col gap-3 md:gap-4">
                    <div className="space-y-1 md:space-y-2">
                      <h4 className="text-lg md:text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                        {type === 'education' ? item.degree : item.position}
                      </h4>
                      <h5 className="text-sm md:text-lg font-medium bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                        {type === 'education' ? item.institution : item.company}
                      </h5>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="inline-block px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-cyan-400">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-sm md:text-lg">
                    {item.description}
                  </p>
                  
                  {/* Achievements */}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {item.achievements.map((achievement: string, i: number) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 md:px-3 text-xs md:text-sm bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/20 transition-all duration-300 cursor-default"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Decorative corner gradient */}
                <div className="absolute top-0 right-0 w-16 h-16 md:w-32 md:h-32 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-tr-2xl md:rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="about" className="about-section py-16 md:py-24 lg:py-32 px-4 md:px-6 relative overflow-hidden bg-gray-900">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24 relative z-10">
        
        {/* Main About Section */}
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-start">
          
          {/* Profile Image */}
          <div className="about-image lg:col-span-2 flex justify-center lg:justify-start animate-on-scroll">
            <div className="relative group">
              <div className="profile-image w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 p-1 cursor-pointer backdrop-blur-sm border border-white/10">
                <div className="w-full h-full bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl md:rounded-3xl flex items-center justify-center text-gray-600 text-lg md:text-xl font-medium">
                  <img
                  src="assets/portfolio.jpg"
                  alt="Amith P - Full Stack Developer"
                  className="w-full h-full object-cover rounded-3xl"
                />
                </div>
              </div>
              {/* Floating elements - smaller on mobile */}
              <div className="absolute -top-3 md:-top-6 -right-3 md:-right-6 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl md:rounded-2xl opacity-20 rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
              <div className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-500"></div>
              <div className="absolute top-1/2 -right-6 md:-right-12 w-2 h-2 md:w-3 md:h-3 bg-purple-500 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-1/4 -left-4 md:-left-8 w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-500 rounded-full opacity-40 animate-bounce"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="about-content lg:col-span-3 space-y-8 md:space-y-10 animate-on-scroll">
            <div className="space-y-6 md:space-y-8">
              <div>
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight">
                    About <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent font-normal">Me</span>
                  </h2>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                    Hi, I'm <span className="text-cyan-400 font-medium">Amith P</span> — a passionate full-stack developer crafting digital experiences that matter. 
                    I blend creative problem-solving with technical excellence to build applications that users love.
                  </p>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                    Specializing in the <span className="text-purple-400 font-medium">MERN stack</span>, I also work extensively with Java, Python, and modern AI technologies. 
                    Currently exploring the intersection of <span className="text-blue-400 font-medium">Artificial Intelligence</span> and web development.
                  </p>
                </div>
              </div>

              {/* Resume Download Button */}
              <div className="resume-button animate-on-scroll">
                <button
                  onClick={handleResumeDownload}
                  className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/30 rounded-xl hover:border-purple-500/60 transition-all duration-300 overflow-hidden w-full md:w-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-300"></div>
                  <div className="relative flex items-center justify-center md:justify-start gap-3 text-base md:text-lg font-medium">
                    <Download 
                      size={isMobile ? 18 : 22} 
                      className="text-purple-500 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" 
                    />
                    Download Resume
                  </div>
                </button>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 animate-on-scroll">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-icon group relative p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl hover:border-purple-500/40 transition-all duration-500 cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
                  <div className="relative text-center">
                    <div className="mb-3 md:mb-4 flex justify-center text-purple-500 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-300">
                      {skill.icon}
                    </div>
                    <p className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="space-y-4 md:space-y-6 animate-on-scroll">
              <h3 className="text-lg md:text-xl font-medium text-purple-500 flex items-center gap-3">
                <div className="w-6 md:w-8 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500"></div>
                Tech Arsenal
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {techStack.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
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
        <div className="tab-section animate-on-scroll">
          <div className="text-center mb-12 md:mb-16 px-4">
            <div className="flex items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8">
              <div className="w-6 md:w-16 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-blue-500 hidden sm:block"></div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-center">
                My <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent font-normal">Journey</span>
              </h2>
              <div className="w-6 md:w-16 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-transparent hidden sm:block"></div>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Explore my educational background and professional experience that shaped my development journey
            </p>
          </div>
          
          {/* Tab Buttons - Mobile First Design */}
          <div className="flex justify-center mb-8 md:mb-12 px-4">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-1 md:p-2 rounded-xl md:rounded-2xl w-full max-w-sm md:max-w-md">
              <div 
                className={`absolute top-1 md:top-2 bottom-1 md:bottom-2 bg-gradient-to-r from-purple-500/30 to-blue-500/30 backdrop-blur-sm rounded-lg md:rounded-xl transition-all duration-500 ease-out ${
                  activeTab === 'education' 
                    ? 'left-1 md:left-2 w-[calc(50%-2px)] md:w-[calc(50%-4px)]' 
                    : 'left-[calc(50%+1px)] md:left-[calc(50%+2px)] w-[calc(50%-2px)] md:w-[calc(50%-4px)]'
                }`}
              ></div>
              <div className="relative flex">
                <button
                  onClick={() => setActiveTab('education')}
                  className={`flex items-center justify-center gap-1.5 md:gap-3 px-3 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl transition-all duration-300 font-medium text-xs sm:text-sm md:text-lg relative z-10 flex-1 min-h-[44px] ${
                    activeTab === 'education'
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <GraduationCap size={isMobile ? 16 : 22} className="flex-shrink-0" />
                  <span className="truncate">Education</span>
                </button>
                <button
                  onClick={() => setActiveTab('experience')}
                  className={`flex items-center justify-center gap-1.5 md:gap-3 px-3 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl transition-all duration-300 font-medium text-xs sm:text-sm md:text-lg relative z-10 flex-1 min-h-[44px] ${
                    activeTab === 'experience'
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Briefcase size={isMobile ? 16 : 22} className="flex-shrink-0" />
                  <span className="truncate">Experience</span>
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