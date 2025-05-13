
import React, { useState, useEffect } from 'react';
import { Headset } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300", 
      scrolled ? "bg-moleculens-darker/80 backdrop-blur-lg py-2 shadow-lg" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Headset className="h-6 w-6 text-moleculens-primary animate-pulse-glow" />
          <h1 className="text-xl font-bold">
            <span className="gradient-text">Molecu</span>Lens XR
          </h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-white/80 hover:text-white hover:text-glow transition-all">How It Works</a>
          <a href="#technology" className="text-white/80 hover:text-white hover:text-glow transition-all">Technology</a>
          <a href="#demo" className="text-white/80 hover:text-white hover:text-glow transition-all">Demo</a>
          <a href="#molecules" className="text-white/80 hover:text-white hover:text-glow transition-all">Molecules</a>
        </div>
        
        <button className="bg-gradient-to-r from-moleculens-primary to-moleculens-secondary px-4 py-2 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-moleculens-primary/20 transition-all">
          Launch AR
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
