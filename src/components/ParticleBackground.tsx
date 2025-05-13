
import React, { useRef } from 'react';
import { cn } from "@/lib/utils";

interface ParticleBackgroundProps {
  className?: string;
  density?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ 
  className,
  density = 30 
}) => {
  const particles = useRef<React.ReactNode[]>([]);
  
  // Generate random particles
  if (particles.current.length === 0) {
    for (let i = 0; i < density; i++) {
      const size = Math.random() * 6 + 1;
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const animationDelay = `${Math.random() * 5}s`;
      const animationDuration = `${Math.random() * 10 + 10}s`;
      const opacity = Math.random() * 0.5 + 0.1;
      
      particles.current.push(
        <div
          key={i}
          className={cn(
            "absolute rounded-full bg-moleculens-primary/30 animate-pulse-glow",
            Math.random() > 0.5 ? "animate-float" : ""
          )}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left,
            top,
            opacity,
            animationDelay,
            animationDuration,
          }}
        />
      );
    }
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      {particles.current}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-10" />
    </div>
  );
};

export default ParticleBackground;
