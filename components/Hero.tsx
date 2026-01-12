import React from 'react';
import { MessageCircle, FileText } from 'lucide-react';
import Button from './Button';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  const handleScrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?auto=format&fit=crop&w=1920&q=80" 
          alt="Pastor Alemão treinado atento" 
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-nobre-dark via-nobre-dark/80 to-nobre-dark/30 sm:to-transparent"></div>
        <div className="absolute inset-0 z-20 bg-nobre-dark/40 sm:bg-transparent"></div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-end">
        <div className="w-full md:w-1/2 lg:w-5/12 text-center md:text-left space-y-8 py-12">
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Olá, quero agendar uma avaliação gratuita.`}
              target="_blank" 
              rel="noreferrer"
            >
              <Button variant="primary" icon={<MessageCircle size={20} />} fullWidth className="sm:w-auto">
                Agende Avaliação Gratuita
              </Button>
            </a>
            
            <Button 
              variant="outline" 
              icon={<FileText size={20} />} 
              onClick={handleScrollToServices}
              fullWidth
              className="sm:w-auto backdrop-blur-sm bg-nobre-dark/30"
            >
              Conheça os Serviços
            </Button>
          </div>
          
          <div className="pt-4 flex items-center justify-center md:justify-start gap-6 text-sm text-gray-300 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-nobre-green rounded-full animate-pulse"></span>
              Metodologia Positiva
            </div>
            <div className="flex items-center gap-2">
               <span className="w-2 h-2 bg-nobre-gold rounded-full"></span>
               Cães de Guarda
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;