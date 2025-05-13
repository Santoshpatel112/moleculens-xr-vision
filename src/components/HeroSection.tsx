
import React from 'react';
import { ArrowRight } from "lucide-react";
import ParticleBackground from './ParticleBackground';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight glow-text animate-fade-in">
            Experience Molecules in
            <span className="block gradient-text mt-2">Augmented Reality</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
            Visualize, interact, and explore molecular structures like never before — 
            in your browser, no app required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Link to="/demo" className="btn-primary flex items-center gap-2 group">
              Launch AR Demo <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#how-it-works" className="btn-secondary group">
              Learn More <span className="inline-block group-hover:translate-y-1 transition-transform">↓</span>
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 relative animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Placeholder for 3D Molecule */}
            <div className="absolute inset-0 bg-gradient-to-br from-moleculens-primary/20 to-moleculens-secondary/20 rounded-full animate-pulse-glow"></div>
            <div className="absolute inset-10 bg-gradient-radial from-moleculens-primary/30 to-transparent rounded-full animate-float"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-4/5 aspect-square">
                <div className="absolute inset-0 border-2 border-moleculens-primary/30 rounded-full animate-rotate-slow"></div>
                <div className="absolute inset-0 border-2 border-moleculens-secondary/30 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
                
                {/* Molecular nodes with enhanced animations */}
                <div className="absolute w-4 h-4 bg-moleculens-primary rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-moleculens-primary/50 animate-pulse"></div>
                <div className="absolute w-3 h-3 bg-moleculens-secondary rounded-full top-1/4 left-1/2 transform -translate-x-1/2 shadow-lg shadow-moleculens-secondary/50 animate-pulse-glow"></div>
                <div className="absolute w-3 h-3 bg-moleculens-primary rounded-full bottom-1/4 left-1/2 transform -translate-x-1/2 shadow-lg shadow-moleculens-primary/50 animate-pulse-glow"></div>
                <div className="absolute w-3 h-3 bg-moleculens-secondary rounded-full top-1/2 left-1/4 transform -translate-y-1/2 shadow-lg shadow-moleculens-secondary/50 animate-pulse-glow"></div>
                <div className="absolute w-3 h-3 bg-moleculens-primary rounded-full top-1/2 right-1/4 transform -translate-y-1/2 shadow-lg shadow-moleculens-primary/50 animate-pulse-glow"></div>
                
                {/* Additional animated particles */}
                <div className="absolute w-2 h-2 bg-white/50 rounded-full top-1/3 left-1/3 transform -translate-y-1/2 shadow-sm shadow-white/30 animate-float" style={{animationDuration: '4s'}}></div>
                <div className="absolute w-2 h-2 bg-white/50 rounded-full bottom-1/3 right-1/3 transform -translate-y-1/2 shadow-sm shadow-white/30 animate-float" style={{animationDuration: '5s', animationDelay: '0.5s'}}></div>
                
                {/* Connecting lines that animate */}
                <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-gradient-to-r from-moleculens-primary/50 to-transparent transform -translate-y-1/2 origin-left animate-pulse-glow"></div>
                <div className="absolute top-1/2 right-1/2 w-1/2 h-0.5 bg-gradient-to-l from-moleculens-secondary/50 to-transparent transform -translate-y-1/2 origin-right animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-1/2 left-1/2 h-1/2 w-0.5 bg-gradient-to-t from-moleculens-primary/50 to-transparent transform -translate-x-1/2 origin-bottom animate-pulse-glow" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute top-1/2 left-1/2 h-1/2 w-0.5 bg-gradient-to-b from-moleculens-secondary/50 to-transparent transform -translate-x-1/2 origin-top animate-pulse-glow" style={{animationDelay: '0.7s'}}></div>
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
