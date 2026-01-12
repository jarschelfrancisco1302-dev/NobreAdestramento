import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-nobre-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-nobre-gold font-bold uppercase tracking-wider text-sm mb-2">Dúvidas Frequentes</h2>
          <h3 className="text-3xl font-heading font-bold text-white">Perguntas Comuns</h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`border border-white/10 rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white/5 border-nobre-gold/50' : 'hover:bg-white/5'}`}
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                onClick={() => toggle(index)}
              >
                <span className={`font-medium text-lg ${openIndex === index ? 'text-nobre-gold' : 'text-gray-200'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-nobre-gold" size={20} />
                ) : (
                  <ChevronDown className="text-gray-500" size={20} />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;