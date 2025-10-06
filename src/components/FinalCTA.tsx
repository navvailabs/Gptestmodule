import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const FinalCTA: React.FC = () => {
  return (
    <AnimatedSection id="cta" className="py-20 sm:py-28 bg-gradient-to-br from-primary-dark to-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to Transform Your Practice?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Join hundreds of GPs saving time with intelligent care plans.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="w-full sm:w-auto bg-warning-amber text-primary-dark font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity text-lg">
            Start Your Free Trial
          </a>
          <a href="#" className="w-full sm:w-auto text-white font-medium py-4 px-8 rounded-lg hover:bg-white/10 transition-colors">
            Schedule Demo
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-400">
          No credit card required. 30-day money-back guarantee.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default FinalCTA;
