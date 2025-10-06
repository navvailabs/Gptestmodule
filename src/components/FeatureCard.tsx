import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-glass transition-all duration-300 hover:-translate-y-1 hover:shadow-medical">
      <div className="bg-accent-teal/10 inline-block p-3 rounded-lg mb-6">
        <Icon className="h-7 w-7 text-accent-teal" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
