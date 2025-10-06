import React from 'react';
import { Testimonial } from '../types';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div 
      className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] bg-white/5 border border-white/10 rounded-2xl p-8 shadow-glass"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-gray-300 leading-relaxed">"{testimonial.quote}"</p>
      <div className="mt-6 flex items-center">
        <img src={testimonial.avatar} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" />
        <div className="ml-4">
          <p className="font-bold text-white">{testimonial.name}</p>
          <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
