import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Award, BarChart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const SocialProof: React.FC = () => {
  return (
    <AnimatedSection className="bg-primary-dark py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-medium text-gray-300">
            Trusted by <span className="text-accent-teal font-bold">500+ GPs</span> across Australia
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Award className="h-8 w-8 text-warning-amber" />
              <span className="text-white font-semibold">RACGP Certified</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Activity className="h-8 w-8 text-warning-amber" />
              <span className="text-white font-semibold">HIPAA Compliant</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <BarChart className="h-8 w-8 text-warning-amber" />
              <span className="text-white font-semibold">SOC 2 Certified</span>
            </div>
             <div className="flex items-center justify-center space-x-2">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Australian_Medical_Association_logo.svg/1200px-Australian_Medical_Association_logo.svg.png" alt="AMA Logo" className="h-8 brightness-0 invert" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SocialProof;
