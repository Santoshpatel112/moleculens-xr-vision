
import React, { useState, useEffect } from 'react';
import { Headset, User, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

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
        
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative rounded-full h-10 w-10 p-0 bg-white/5 border border-white/10 hover:bg-white/10">
                  <User className="h-5 w-5 text-white" />
                  <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-moleculens-secondary rounded-full border-2 border-moleculens-darker"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-moleculens-dark/90 backdrop-blur-lg border-white/10 text-white">
                <div className="p-2 text-center border-b border-white/10">
                  <p className="font-medium">{user?.name}</p>
                  <p className="text-xs text-white/70">{user?.email}</p>
                </div>
                <DropdownMenuItem 
                  className="cursor-pointer hover:bg-white/5"
                  onClick={logout}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/login" className="text-white/80 hover:text-white font-medium transition-colors">
              Sign In
            </Link>
          )}
          
          <Link to="/demo" className="bg-gradient-to-r from-moleculens-primary to-moleculens-secondary px-4 py-2 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-moleculens-primary/20 transition-all hover:scale-105">
            Launch AR
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
