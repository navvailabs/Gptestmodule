import React from 'react';
import { Stethoscope } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <Stethoscope className="text-accent-teal h-7 w-7" />
            <span className="font-satoshi text-xl font-bold text-white">GPGuide</span>
          </div>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} GPGuide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
