import React from 'react';
import { Check, Clock } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../constants';
import Button from './Button';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-nobre-dark relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-nobre-gold font-bold uppercase tracking-wider text-sm mb-2">O que oferecemos</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">Serviços Especializados</h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Do básico ao avançado, temos o programa ideal para as necessidades do seu cão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-[#1a1c20] border border-white/5 rounded-xl p-8 hover:border-nobre-gold/50 transition-all duration-300 group flex flex-col h-full">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-white group-hover:text-nobre-gold transition-colors mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm h-10">
                  {service.description}
                </p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                <div className="flex items-start gap-3">
                   <Check className="text-nobre-green flex-shrink-0 mt-1" size={18} />
                   <p className="text-gray-300 text-sm leading-relaxed">{service.details}</p>
                </div>
                {service.duration && (
                  <div className="flex items-center gap-3 text-nobre-gold/80 text-sm font-medium">
                    <Clock size={16} />
                    <span>Duração: {service.duration}</span>
                  </div>
                )}
              </div>

              <div className="mt-auto">
                <a 
                  href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Tenho interesse no serviço: ${service.title}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline" fullWidth className="text-sm py-2">
                    Falar no WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;