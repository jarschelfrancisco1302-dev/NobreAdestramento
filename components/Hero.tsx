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
          src="https://picsum.photos/id/1025/1920/1080" 
          alt="Cão treinado em fundo natural" 
          className="w-full h-full object-cover"
        />
        
        {/* New Image Left Positioned - Behind text but over bg */}
        <div className="absolute bottom-0 left-0 w-full md:w-3/5 h-full z-10 pointer-events-none flex items-end justify-start">
             <img 
                src="https://broken-fuchsia-iacgicailb.edgeone.app/Gemini_Generated_Image_vvu3x2vvu3x2vvu3.png"
                alt="Cão de guarda treinado"
                className="max-h-[85vh] w-auto object-contain object-bottom opacity-100"
            />
        </div>

        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-nobre-dark via-nobre-dark/80 to-nobre-dark/30 sm:to-transparent"></div>
        <div className="absolute inset-0 z-20 bg-nobre-dark/40 sm:bg-transparent"></div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-end">
        <div className="w-full md:w-1/2 lg:w-5/12 text-center md:text-left space-y-8 py-12 bg-nobre-dark/20 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-xl p-6 md:p-0 border border-white/5 md:border-none">
          
          <div className="inline-block px-4 py-1 rounded-full bg-nobre-gold/20 border border-nobre-gold/30 text-nobre-gold text-xs font-bold uppercase tracking-widest mb-2">
            Adestramento Profissional em Guaratiba, RJ
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight drop-shadow-lg">
            Você merece um cão <span className="text-nobre-gold">educado</span> e <span className="text-nobre-gold">seguro</span>.
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto md:mx-0 leading-relaxed drop-shadow-md font-medium">
            Treinamento profissional para cães de pequeno, médio e grande porte. Aulas individuais e treinamento especializado de guarda e proteção.
          </p>

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