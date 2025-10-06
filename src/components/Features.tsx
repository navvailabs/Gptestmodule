import React from 'react';
import { BarChart2, BookOpen, Smartphone } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { Feature } from '../types';
import AnimatedSection from './AnimatedSection';

const features: Feature[] = [
  {
    icon: BookOpen,
    title: "Personalized Learning Paths",
    description: "Adaptive content based on specialty. Track your progress and get recommendations for continuous professional development.",
  },
  {
    icon: BarChart2,
    title: "Advanced Analytics & Reporting",
    description: "Gain insights into your usage and efficiency metrics. Receive suggestions for practice improvement.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Access",
    description: "Responsive design for all devices. Access GPGuide on the go, with offline capabilities for consultations.",
  },
];

const Features: React.FC = () => {
  return (
    <AnimatedSection id="features" className="py-20 sm:py-28 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Powerful Features to Enhance Your Practice</h2>
          <p className="mt-4 text-lg text-gray-400">
            Everything you need to streamline documentation and elevate patient care.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Features;
