import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { Testimonial } from '../types';
import TestimonialCard from './TestimonialCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const generateTestimonials = (count: number): Testimonial[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: `Dr. ${faker.person.firstName()} ${faker.person.lastName()}`,
    role: 'GP',
    location: faker.location.city(),
    avatar: faker.image.avatar(),
    quote: "GPGuide has transformed my practice efficiency. What used to take 30 minutes now takes 5. It's an indispensable tool.",
  }));
};

const Testimonials: React.FC = () => {
  const [testimonials] = useState<Testimonial[]>(() => generateTestimonials(5));
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatedSection id="testimonials" className="py-20 sm:py-28 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Loved by Doctors Like You</h2>
          <p className="mt-4 text-lg text-gray-400">
            Don't just take our word for it. Here's what GPs are saying about GPGuide.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={currentIndex}>
              <motion.div
                key={currentIndex}
                className="flex"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="w-full flex justify-center">
                   <TestimonialCard testimonial={testimonials[currentIndex]} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-16 bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
            <ArrowLeft className="h-6 w-6 text-white" />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-16 bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
            <ArrowRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Testimonials;
