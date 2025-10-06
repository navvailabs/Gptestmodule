import React from 'react';
import { NavigationBar } from './components/NavigationBar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import MarqueeShowcase from './components/MarqueeShowcase';
import Features from './components/Features';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-primary-dark">
      <NavigationBar />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <HowItWorks />
        <MarqueeShowcase />
        <Features />
        <Achievements />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
