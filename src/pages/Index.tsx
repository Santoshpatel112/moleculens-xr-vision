
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import TechStack from '../components/TechStack';
import DemoPreview from '../components/DemoPreview';
import MoleculeGallery from '../components/MoleculeGallery';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="bg-moleculens-darker text-white min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <TechStack />
        <DemoPreview />
        <MoleculeGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
