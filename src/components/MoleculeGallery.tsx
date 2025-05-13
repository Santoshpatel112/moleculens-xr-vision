
import React from 'react';
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface MoleculeCardProps {
  name: string;
  formula: string;
  description: string;
  index: number;
}

const MoleculeCard: React.FC<MoleculeCardProps> = ({ name, formula, description, index }) => (
  <div 
    className="card-glass overflow-hidden group hover:scale-105 transition-all duration-300"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="h-40 relative overflow-hidden">
      {/* Placeholder for molecule preview */}
      <div className="absolute inset-0 bg-gradient-to-br from-moleculens-dark to-moleculens-darker flex items-center justify-center">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full bg-moleculens-primary/20 animate-pulse-glow"></div>
          <div className="absolute inset-0 rounded-full border border-moleculens-secondary/40 animate-rotate-slow"></div>
          <div className="absolute w-3 h-3 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-white/50"></div>
          <div className="absolute w-2 h-2 bg-moleculens-secondary rounded-full top-1/4 right-1/3 shadow-lg shadow-moleculens-secondary/50"></div>
          <div className="absolute w-2 h-2 bg-moleculens-primary rounded-full bottom-1/4 left-1/3 shadow-lg shadow-moleculens-primary/50"></div>
        </div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <button className="btn-primary scale-90 group-hover:scale-100 transition-all flex items-center gap-2">
          View in AR <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </div>
    
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold">{name}</h3>
        <span className="text-xs bg-moleculens-primary/20 text-moleculens-primary px-2 py-1 rounded-full">
          {formula}
        </span>
      </div>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  </div>
);

const MoleculeGallery: React.FC = () => {
  const molecules = [
    { name: "Water", formula: "H₂O", description: "The essential molecule for life, with unique properties due to hydrogen bonding." },
    { name: "Glucose", formula: "C₆H₁₂O₆", description: "Primary source of energy for living organisms and key in metabolism." },
    { name: "DNA Helix", formula: "C₃₃₇H₃₃₈N₁₂₃O₂₂₁P₃₃", description: "The double helix structure that carries genetic instructions." },
    { name: "Caffeine", formula: "C₈H₁₀N₄O₂", description: "Psychoactive stimulant compound found in coffee and tea." },
    { name: "Aspirin", formula: "C₉H₈O₄", description: "Common pain reliever and anti-inflammatory medication." },
    { name: "Penicillin", formula: "C₁₆H₁₈N₂O₅S", description: "First antibiotic discovered, revolutionized medicine." },
    { name: "Cholesterol", formula: "C₂₇H₄₆O", description: "Essential structural component of cell membranes." },
    { name: "Vitamin C", formula: "C₆H₈O₆", description: "Important nutrient for immune function and tissue repair." }
  ];

  return (
    <section id="molecules" className="section-padding bg-moleculens-dark relative overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sample Molecules Gallery</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-moleculens-primary to-moleculens-secondary mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Explore our collection of interactive molecules. Click on any molecule to view it in AR mode.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {molecules.map((molecule, index) => (
            <MoleculeCard 
              key={molecule.name}
              name={molecule.name}
              formula={molecule.formula}
              description={molecule.description}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-moleculens-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-moleculens-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default MoleculeGallery;
