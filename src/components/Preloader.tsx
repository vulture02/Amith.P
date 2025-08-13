
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial setup
    gsap.set('.preloader-text', { opacity: 0, y: 50 });
    gsap.set('.progress-bar-fill', { width: '0%' });
    
    // Animation sequence
    tl.to('.preloader-text', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    })
    .to('.progress-bar-fill', {
      width: '100%',
      duration: 2.5,
      ease: 'power2.out'
    }, '-=0.3')
    .to('.preloader-percentage', {
      textContent: '100%',
      duration: 2.5,
      ease: 'power2.out',
      snap: { textContent: 1 },
      onUpdate: function() {
        const progress = Math.round(this.progress() * 100);
        document.querySelector('.preloader-percentage')!.textContent = `${progress}%`;
      }
    }, '-=2.5')
    .to('.preloader', {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: 'power2.inOut',
      delay: 0.5,
      onComplete: () => {
        onComplete();
      }
    });
  }, [onComplete]);

  return (
    <div className="preloader fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-purple rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        <div className="preloader-text mb-8">
          <h1 className="text-6xl md:text-8xl font-light gradient-text mb-4">
            Amith P
          </h1>
         <p className="text-lg text-muted-foreground">Software Engineer</p>
        </div>
        
        <div className="w-80 max-w-sm mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Loading</span>
            <span className="preloader-percentage text-sm text-neon-purple font-medium">0%</span>
          </div>
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div className="progress-bar-fill h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full neon-glow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
