import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-primary-dark to-primary">
      <div className="absolute inset-0 bg-grid-white/5"></div>
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
            HIGH YIELD GP RESOURCE GUIDE
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            For GPs, GP Registrars, Aspiring GPs
          </p>
        </motion.div>

        <motion.p 
          className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Our Care Plan Generator instantly creates educational templates based on medical literature, saving GPs time and reducing admin burden.
        </motion.p>

        <motion.div 
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#cta" className="w-full sm:w-auto bg-warning-amber text-primary-dark font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity text-lg">
            Start Free Trial
          </a>
          <a href="#how-it-works" className="w-full sm:w-auto group text-white font-medium py-4 px-8 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
            See How It Works <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
