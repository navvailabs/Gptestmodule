import React from 'react';
import FaqItem from './FaqItem';
import { FaqItem as FaqItemType } from '../types';
import AnimatedSection from './AnimatedSection';

const faqData: FaqItemType[] = [
  {
    question: "Is patient data secure and HIPAA compliant?",
    answer: "Absolutely. We use end-to-end encryption and our platform is fully HIPAA compliant. We never store patient-identifiable information.",
  },
  {
    question: "How current are the medical guidelines?",
    answer: "Our medical literature database is updated weekly, ensuring all generated templates are based on the most current RACGP guidelines and research.",
  },
  {
    question: "Can I customize templates for my practice?",
    answer: "Yes. Every generated draft is fully editable. You can customize, save, and reuse templates that are specific to your practice's needs.",
  },
  {
    question: "What EMR systems integrate with GPGuide?",
    answer: "GPGuide allows you to copy content to your clipboard with one click, making it compatible with any EMR system. We are also developing direct integrations with popular EMRs.",
  },
];

const FAQ: React.FC = () => {
  return (
    <AnimatedSection id="faq" className="py-20 sm:py-28 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-400">
            Answers to common questions from our community of GPs.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FAQ;
