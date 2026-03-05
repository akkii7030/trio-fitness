import { useState, useEffect } from 'react';
import Image from "next/image";
import logo from '@/assets/trio-fitness-logo.png';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className="loader-overlay"
      style={{
        opacity: progress >= 100 ? 0 : 1,
        transition: 'opacity 0.5s ease-out',
        pointerEvents: progress >= 100 ? 'none' : 'auto',
      }}
    >
      <Image src={logo} alt="Trio Fitness" className="w-32 h-32 object-contain loader-pulse" />
      <div className="mt-8 w-48 h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 font-condensed text-muted-foreground tracking-widest text-sm uppercase">
        Heart, Body & Soul
      </p>
    </div>
  );
};

export default Loader;
