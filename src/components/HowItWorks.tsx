import React from 'react';
import { FileInput, Zap, Edit, Download } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const steps = [
  {
    icon: FileInput,
    title: "Enter Clinical Details",
    description: "Securely input key information. No patient identifiers required.",
  },
  {
    icon: Zap,
    title: "Generates Draft Instantly",
    description: "Based on current RACGP guidelines and the latest medical literature.",
  },
  {
    icon: Edit,
    title: "Review & Customize",
    description: "Apply your clinical judgment and tailor the plan to your patient's needs.",
  },
  {
    icon: Download,
    title: "Copy or Export",
    description: "Ready for your EMR, printing, or sharing with your team.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <AnimatedSection id="how-it-works" className="py-20 sm:py-28 bg-gradient-to-b from-primary to-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">How GPGuide Works</h2>
          <p className="mt-4 text-lg text-gray-400">
            Transform your workflow in four simple, intuitive steps.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-white/10 hidden md:block" />
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-start gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                <div className="relative">
                  <div className="bg-accent-teal/10 p-4 rounded-full">
                    <step.icon className="h-8 w-8 text-accent-teal" />
                  </div>
                  <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-0.5 bg-white/10 hidden md:block ${index % 2 === 1 ? 'right-full' : 'left-full'}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{`Step ${index + 1}: ${step.title}`}</h3>
                  <p className="mt-2 text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HowItWorks;
