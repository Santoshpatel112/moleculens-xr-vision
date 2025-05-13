
import React from 'react';
import { Upload, Monitor, Scan } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, index }) => (
  <div className="relative card-glass p-6 md:p-8">
    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-moleculens-primary to-moleculens-secondary flex items-center justify-center text-white font-bold">
      {index}
    </div>
    <div className="mb-6 text-moleculens-primary">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-moleculens-primary to-moleculens-secondary mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            MolecuLens XR makes molecular visualization simple, interactive, and accessible — 
            directly in your web browser without requiring any downloads.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 relative z-10">
          <Step 
            icon={<Upload className="w-12 h-12" />} 
            title="Upload or Choose a Molecule"
            description="Select from our molecule library or upload your own molecular structure files (.pdb, .mol, etc)."
            index={1}
          />
          <Step 
            icon={<Monitor className="w-12 h-12" />} 
            title="View it in 3D"
            description="Explore the molecule in full 3D on your screen. Rotate, zoom, and examine from any angle."
            index={2}
          />
          <Step 
            icon={<Scan className="w-12 h-12" />} 
            title="Activate AR and Interact"
            description="Launch AR mode to place the molecule in your physical space and interact with it using natural gestures."
            index={3}
          />
        </div>
        
        {/* Connection lines between steps */}
        <div className="hidden md:block absolute top-1/2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-moleculens-primary/50 to-moleculens-secondary/50 z-0 transform translate-y-8"></div>
        
      </div>
    </section>
  );
};

export default HowItWorks;
