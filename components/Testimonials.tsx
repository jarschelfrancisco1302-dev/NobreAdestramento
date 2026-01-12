import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-nobre-light border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-nobre-gold font-bold uppercase tracking-wider text-sm mb-2">Depoimentos</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-nobre-dark">O que dizem nossos clientes</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 text-nobre-gold/20 w-10 h-10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-nobre-gold fill-nobre-gold" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.text}"</p>

              <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 bg-nobre-dark rounded-full flex items-center justify-center text-nobre-gold font-bold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-nobre-dark text-sm">{t.author}</h5>
                  <span className="text-xs text-gray-500">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;