import React from 'react';
import { Clock, CheckSquare, Users, Book } from 'lucide-react';
import { Achievement } from '../types';
import AnimatedSection from './AnimatedSection';

const achievements: Achievement[] = [
  { icon: Clock, title: "Save Hours of Admin", metric: "5+ hours/week saved" },
  { icon: Book, title: "Learn While You Work", metric: "Evidence-based learning" },
  { icon: CheckSquare, title: "Guideline-Aligned Plans", metric: "100% compliant docs" },
  { icon: Users, title: "Improve Team Collaboration", metric: "Standardized templates" },
];

const Achievements: React.FC = () => {
  return (
    <AnimatedSection className="py-20 sm:py-28 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">What You'll Achieve</h2>
          <p className="mt-4 text-lg text-gray-400">
            Tangible benefits that translate to a more efficient and rewarding practice.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div key={index} className="text-center p-6 bg-white/5 rounded-xl">
              <div className="flex justify-center mb-4">
                <div className="bg-warning-amber/10 p-3 rounded-full">
                  <item.icon className="h-8 w-8 text-warning-amber" />
                </div>
              </div>
              <h3 className="font-bold text-white text-lg">{item.title}</h3>
              <p className="text-gray-300 mt-1">{item.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Achievements;
