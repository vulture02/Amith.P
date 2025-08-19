import { useEffect } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial setup
    gsap.set('.preloader-logo', { scale: 0, rotation: -180 });
    gsap.set('.preloader-title', { opacity: 0, y: 30 });
    gsap.set('.preloader-subtitle', { opacity: 0, y: 20 });
    gsap.set('.loader-ring', { rotation: 0, scale: 0 });
    gsap.set('.loader-dot', { scale: 0 });
    gsap.set('.status-text', { opacity: 0 });
    
    // Animation sequence
    tl.to('.preloader-logo', {
      scale: 1,
      rotation: 0,
      duration: 1.2,
      ease: 'elastic.out(1, 0.8)'
    })
    .to('.loader-ring', {
      scale: 1,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.4')
    .to('.preloader-title', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.2')
    .to('.preloader-subtitle', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4')
    .to('.loader-dot', {
      scale: 1,
      duration: 0.4,
      stagger: 0.1,
      ease: 'back.out(2)'
    }, '-=0.3')
    .to('.status-text', {
      opacity: 1,
      duration: 0.5
    }, '-=0.2')
    .to('.loader-ring', {
      rotation: 360,
      duration: 2,
      ease: 'none',
      repeat: -1
    })
    .to({}, { duration: 3 }) // Wait for loading
    .to('.preloader', {
      y: '-100vh',
      duration: 1.2,
      ease: 'power4.inOut',
      onComplete: () => {
        onComplete();
      }
    });
  }, [onComplete]);

  return (
    <div className="preloader fixed inset-0 z-50 flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-500 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-purple-500 rotate-12 animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 border border-cyan-500 -rotate-12 animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-pink-500 rotate-45 animate-pulse delay-1000"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>

      <div className="relative text-center">
        {/* Logo/Icon */}
        <div className="preloader-logo mb-8">
          <div className="w-20 h-20 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                <div className="text-2xl font-bold text-white">A</div>
              </div>
            </div>
          </div>
        </div>

        {/* Name and title */}
        <div className="mb-12">
          <h1 className="preloader-title text-5xl md:text-7xl font-thin text-white mb-2 tracking-wider">
            Amith P
          </h1>
          <p className="preloader-subtitle text-lg text-gray-400 font-light tracking-widest uppercase">
            Software Engineer
          </p>
        </div>

        {/* Loader */}
        <div className="relative">
          {/* Rotating ring */}
          <div className="loader-ring w-24 h-24 mx-auto relative mb-6">
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 border-r-purple-500"></div>
            <div className="absolute inset-2 rounded-full border border-transparent border-t-cyan-500"></div>
          </div>

          {/* Pulsing dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="loader-dot w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                style={{
                  animationDelay: `${i * 200}ms`
                }}
              />
            ))}
          </div>

          {/* Status text */}
          <div className="status-text">
            <p className="text-sm text-gray-500 font-mono tracking-wider">
              INITIALIZING SYSTEMS...
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .loader-dot {
          animation: pulse-dot 1.6s ease-in-out infinite;
        }
        
        .loader-dot:nth-child(1) { animation-delay: 0s; }
        .loader-dot:nth-child(2) { animation-delay: 0.2s; }
        .loader-dot:nth-child(3) { animation-delay: 0.4s; }
        .loader-dot:nth-child(4) { animation-delay: 0.6s; }
        
        @keyframes pulse-dot {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;