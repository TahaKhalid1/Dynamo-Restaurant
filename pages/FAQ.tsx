import React, { useState } from 'react';
import { FAQS_DATA } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-brand-dark min-h-screen pt-36 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-gray-400 font-light">Everything you need to know before your visit.</p>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((item, index) => (
            <div key={index} className="border border-white/5 bg-white/[0.02]">
              <button
                className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none hover:bg-white/5 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-medium tracking-wide transition-colors ${openIndex === index ? 'text-brand-gold' : 'text-white'}`}>
                    {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-gold shrink-0" size={18} />
                ) : (
                  <ChevronDown className="text-gray-600 shrink-0" size={18} />
                )}
              </button>
              <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                  <div className="px-8 pb-8 text-gray-400 text-sm leading-loose font-light">
                    {item.answer}
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;