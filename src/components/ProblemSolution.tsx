import React from 'react';
import { Zap, FileText, Search, Clock } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const problems = [
  { icon: Clock, text: "Time-consuming documentation" },
  { icon: FileText, text: "Inconsistent care plans" },
  { icon: Search, text: "Manual research burden" },
  { icon: Clock, text: "Administrative overwhelm" },
];

const solutions = [
  { icon: Zap, text: "Instant template generation" },
  { icon: FileText, text: "Guideline-aligned templates" },
  { icon: Zap, text: "Literature-based automation" },
  { icon: Clock, text: "Streamlined workflows" },
];

const ProblemSolution: React.FC = () => {
  return (
    <AnimatedSection className="py-20 sm:py-28 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">The Challenge for Modern GPs</h2>
            <p className="text-gray-400 text-lg">Balancing patient care with ever-increasing administrative demands is a constant struggle.</p>
            <ul className="space-y-4">
              {problems.map((item, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="bg-red-500/10 p-2 rounded-full">
                    <item.icon className="h-6 w-6 text-red-400" />
                  </div>
                  <span className="text-lg text-gray-300">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8 p-8 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">The GPGuide Solution</h2>
            <p className="text-gray-400 text-lg">We automate the tedious parts of your workflow, so you can focus on what matters most.</p>
            <ul className="space-y-4">
              {solutions.map((item, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="bg-accent-teal/10 p-2 rounded-full">
                    <item.icon className="h-6 w-6 text-accent-teal" />
                  </div>
                  <span className="text-lg text-white">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProblemSolution;
