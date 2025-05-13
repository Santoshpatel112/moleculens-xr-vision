
import React from 'react';
import { ArrowRight } from "lucide-react";
import ParticleBackground from './ParticleBackground';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight glow-text">
            Experience Molecules in
            <span className="block gradient-text mt-2">Augmented Reality</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-lg">
            Visualize, interact, and explore molecular structures like never before — 
            in your browser, no app required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button className="btn-primary flex items-center gap-2">
              Launch AR Demo <ArrowRight className="h-5 w-5" />
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Placeholder for 3D Molecule */}
            <div className="absolute inset-0 bg-gradient-to-br from-moleculens-primary/20 to-moleculens-secondary/20 rounded-full animate-pulse-glow"></div>
            <div className="absolute inset-10 bg-gradient-radial from-moleculens-primary/30 to-transparent rounded-full animate-float"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-4/5 aspect-square">
                <div className="absolute inset-0 border-2 border-moleculens-primary/30 rounded-full animate-rotate-slow"></div>
                <div className="absolute inset-0 border-2 border-moleculens-secondary/30 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
                
                {/* Molecular nodes */}
                <div className="absolute w-4 h-4 bg-moleculens-primary rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-moleculens-primary/50"></div>
                <div className="absolute w-3 h-3 bg-moleculens-secondary rounded-full top-1/4 left-1/2 transform -translate-x-1/2 shadow-lg shadow-moleculens-secondary/50 animate-pulse-glow"></div>
                <div className="absolute w-3 h-3 bg-moleculens-primary rounded-full bottom-1/4 left-1/2 transform -translate-x-1/2 shadow-lg shadow-moleculens-primary/50 animate-pulse-glow"></div>
                <div className="absolute w-3 h-3 bg-moleculens-secondary rounded-full top-1/2 left-1/4 transform -translate-y-1/2 shadow-lg shadow-moleculens-secondary/50 animate-pulse-glow"></div>
                <div className="absolute w-3 h-3 bg-moleculens-primary rounded-full top-1/2 right-1/4 transform -translate-y-1/2 shadow-lg shadow-moleculens-primary/50 animate-pulse-glow"></div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-moleculens-darker to-transparent w-full h-20"></div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
