
import React, { useState } from 'react';
import { ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import { Button } from "@/components/ui/button";

const Demo: React.FC = () => {
  const [arMode, setArMode] = useState(false);
  const [selectedMolecule, setSelectedMolecule] = useState<string | null>(null);

  const toggleARMode = () => {
    setArMode(!arMode);
  };

  const molecules = [
    { id: "water", name: "Water", formula: "H₂O" },
    { id: "glucose", name: "Glucose", formula: "C₆H₁₂O₆" },
    { id: "dna", name: "DNA Helix", formula: "C₃₃₇H₃₃₈N₁₂₃O₂₂₁P₃₃" }
  ];

  return (
    <div className="min-h-screen bg-moleculens-darker text-white">
      {/* Header */}
      <header className="bg-moleculens-dark/80 backdrop-blur-lg py-4 px-4 md:px-6 flex items-center justify-between sticky top-0 z-50 border-b border-white/10">
        <Link to="/" className="flex items-center gap-2 text-white">
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>
        
        <h1 className="text-xl font-bold">
          <span className="gradient-text">Molecu</span>Lens Demo
        </h1>
        
        <Button 
          onClick={toggleARMode}
          className={`${arMode ? 'bg-moleculens-primary' : 'bg-white/10'} transition-all`}
        >
          {arMode ? 'Exit AR Mode' : 'Enter AR Mode'}
        </Button>
      </header>
      
      <ParticleBackground density={15} />
      
      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {/* Demo controls */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Molecule Demo</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Select a molecule below to visualize it in 3D. Toggle AR mode to place the molecule in your physical space.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            {/* AR status indicator */}
            {arMode && (
              <div className="absolute top-0 left-0 right-0 bg-moleculens-primary/20 backdrop-blur-md p-3 rounded-lg animate-pulse border border-moleculens-primary/30 flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-moleculens-primary rounded-full animate-pulse-glow"></div>
                <span>AR Mode Active - Point your camera at a flat surface</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Molecule selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {molecules.map(molecule => (
            <div 
              key={molecule.id}
              className={`card-glass p-6 cursor-pointer transition-all hover:scale-105 ${selectedMolecule === molecule.id ? 'border-moleculens-primary border-2' : ''}`}
              onClick={() => setSelectedMolecule(molecule.id)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{molecule.name}</h3>
                <span className="text-sm bg-moleculens-primary/20 text-moleculens-primary px-2 py-1 rounded-full">
                  {molecule.formula}
                </span>
              </div>
              
              <div className="aspect-square bg-gradient-to-br from-moleculens-dark to-moleculens-darker rounded-lg flex items-center justify-center mb-4">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 rounded-full bg-moleculens-primary/20 animate-pulse-glow"></div>
                  <div className="absolute inset-0 rounded-full border border-moleculens-secondary/40 animate-rotate-slow"></div>
                  <div className="absolute w-3 h-3 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-white/50"></div>
                  <div className="absolute w-2 h-2 bg-moleculens-secondary rounded-full top-1/4 right-1/3 shadow-lg shadow-moleculens-secondary/50"></div>
                  <div className="absolute w-2 h-2 bg-moleculens-primary rounded-full bottom-1/4 left-1/3 shadow-lg shadow-moleculens-primary/50"></div>
                </div>
              </div>
              
              <Button 
                className="w-full bg-white/10 hover:bg-white/20"
                disabled={!selectedMolecule || selectedMolecule !== molecule.id}
              >
                View Details
              </Button>
            </div>
          ))}
        </div>
        
        {/* Visualization area */}
        <div className="aspect-video card-glass overflow-hidden relative">
          {selectedMolecule ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64 animate-float">
                <div className="absolute inset-0 rounded-full bg-moleculens-primary/20 animate-pulse-glow"></div>
                <div className="absolute inset-0 rounded-full border-4 border-moleculens-secondary/40 animate-rotate-slow"></div>
                <div className="absolute inset-16 rounded-full border-2 border-moleculens-primary/40 animate-rotate-slow" style={{animationDirection: 'reverse', animationDuration: '15s'}}></div>
                <div className="absolute w-6 h-6 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-white/50"></div>
                <div className="absolute w-4 h-4 bg-moleculens-secondary rounded-full top-1/4 right-1/3 shadow-lg shadow-moleculens-secondary/50"></div>
                <div className="absolute w-4 h-4 bg-moleculens-primary rounded-full bottom-1/4 left-1/3 shadow-lg shadow-moleculens-primary/50"></div>
              </div>
              
              {arMode && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/40 backdrop-blur-lg px-4 py-2 rounded-full border border-white/10 animate-bounce">
                  <p className="text-sm">Tap and drag to move the molecule</p>
                </div>
              )}
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white/50">Select a molecule to visualize</p>
            </div>
          )}
          
          {/* Grid pattern overlay for AR space */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
      </main>
    </div>
  );
};

export default Demo;
