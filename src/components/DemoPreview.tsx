
import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Play, Pause, VolumeX, Volume2 } from "lucide-react";
import { Link } from 'react-router-dom';

const DemoPreview: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Demo video
  const videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-laboratory-glassware-close-up-12752-large.mp4";

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  
  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      const handleTimeUpdate = () => {
        const percent = (videoElement.currentTime / videoElement.duration) * 100;
        setProgress(percent);
      };
      
      const handleLoadedData = () => {
        setIsLoading(false);
      };
      
      const handleEnded = () => {
        setIsPlaying(false);
        setProgress(0);
        videoElement.currentTime = 0;
      };
      
      videoElement.addEventListener('timeupdate', handleTimeUpdate);
      videoElement.addEventListener('loadeddata', handleLoadedData);
      videoElement.addEventListener('ended', handleEnded);
      
      return () => {
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
        videoElement.removeEventListener('loadeddata', handleLoadedData);
        videoElement.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  return (
    <section id="demo" className="section-padding relative overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Demo Preview</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-moleculens-primary to-moleculens-secondary mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            See MolecuLens XR in action. Place virtual molecules in your physical space and interact with them naturally.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto group">
          {/* Video player */}
          <div className="relative aspect-video overflow-hidden rounded-xl card-glass shadow-xl">
            {/* Video element */}
            <video 
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src={videoSrc}
              muted={isMuted}
              playsInline
              poster="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1280&auto=format"
            />
            
            {/* Play/pause overlay */}
            <div 
              className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-center justify-center transition-opacity duration-300 ${isPlaying && !isLoading ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
            >
              {/* Play/pause button */}
              <button 
                onClick={togglePlay}
                className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center border border-white/20 transition-all hover:bg-white/20 hover:scale-110"
              >
                {isLoading ? (
                  <div className="w-8 h-8 border-4 border-white/80 border-t-transparent rounded-full animate-spin"></div>
                ) : isPlaying ? (
                  <Pause className="w-8 h-8 text-white" />
                ) : (
                  <Play className="w-8 h-8 text-white ml-1" />
                )}
              </button>
            </div>
            
            {/* AR overlay mockup */}
            <div className="absolute bottom-14 md:bottom-4 left-4 p-3 bg-black/40 backdrop-blur-md rounded-lg flex items-center gap-2 border border-white/10 animate-pulse">
              <Scan className="h-6 w-6 text-moleculens-primary" />
              <span>AR Mode Active</span>
            </div>
            
            {/* Video controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              {/* Progress bar */}
              <div className="relative h-1 w-full bg-white/20 rounded-full mb-4 cursor-pointer">
                <div 
                  className="absolute h-full bg-moleculens-primary rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              
              <div className="flex items-center justify-between">
                <button onClick={toggleMute} className="text-white/80 hover:text-white">
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                
                <div className="text-sm text-white/80">
                  {isPlaying ? "Playing demo..." : "Play demo"}
                </div>
              </div>
            </div>
            
            {/* Grid pattern overlay to simulate AR space */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            
            {/* Molecule placeholder with enhanced animation */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 animate-float">
              <div className="absolute inset-0 rounded-full bg-moleculens-primary/20 animate-pulse-glow"></div>
              <div className="absolute inset-4 rounded-full border-2 border-moleculens-secondary/40 animate-rotate-slow"></div>
              <div className="absolute inset-10 rounded-full border-2 border-moleculens-primary/40 animate-rotate-slow" style={{animationDirection: 'reverse'}}></div>
              <div className="absolute w-4 h-4 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-white/50"></div>
              <div className="absolute w-3 h-3 bg-moleculens-secondary rounded-full top-1/4 right-1/3 shadow-lg shadow-moleculens-secondary/50"></div>
              <div className="absolute w-3 h-3 bg-moleculens-primary rounded-full bottom-1/4 left-1/3 shadow-lg shadow-moleculens-primary/50"></div>
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-moleculens-primary/20 to-moleculens-secondary/20 rounded-xl blur-xl -z-10"></div>
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/demo" className="btn-primary inline-flex items-center gap-2 group">
            Try it Now 
            <ExternalLink className="h-5 w-5 transform group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Scan icon component
const Scan = ({ className }: { className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
      <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
      <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
      <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );
};

export default DemoPreview;
