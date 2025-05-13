
import React from 'react';
import { cn } from "@/lib/utils";

interface TechItemProps {
  name: string;
  description: string;
  delay: number;
}

const TechItem: React.FC<TechItemProps> = ({ name, description, delay }) => (
  <div 
    className="card-glass p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
    style={{ animationDelay: `${delay * 0.1}s` }}
  >
    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-moleculens-primary/20 to-moleculens-secondary/20 flex items-center justify-center">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-moleculens-primary to-moleculens-secondary flex items-center justify-center text-white font-bold">
        {name.charAt(0)}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-2 gradient-text">{name}</h3>
    <p className="text-white/70 text-sm">{description}</p>
  </div>
);

const TechStack: React.FC = () => {
  const technologies = [
    { name: "3Dmol.js", description: "Advanced molecular visualization" },
    { name: "Three.js", description: "3D rendering engine" },
    { name: "AR.js", description: "Browser-based augmented reality" },
    { name: "WebXR", description: "Extended reality integration" },
    { name: "React.js", description: "User interface framework" },
    { name: "GitHub", description: "Version control & deployment" }
  ];

  return (
    <section id="technology" className="section-padding bg-moleculens-dark relative overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-moleculens-primary to-moleculens-secondary mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            MolecuLens XR leverages cutting-edge web technologies to deliver a seamless AR experience directly in your browser.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <TechItem 
              key={tech.name}
              name={tech.name}
              description={tech.description}
              delay={index}
            />
          ))}
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-moleculens-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-moleculens-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default TechStack;
