import React from 'react';
import { Shield, Heart, Award } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-8 h-8 text-nobre-gold" />,
    title: "Segurança",
    text: "Técnicas seguras para o tutor e o animal."
  },
  {
    icon: <Award className="w-8 h-8 text-nobre-gold" />,
    title: "Disciplina",
    text: "Correção inteligente e foco em resultados."
  },
  {
    icon: <Heart className="w-8 h-8 text-nobre-gold" />,
    title: "Empatia",
    text: "Bem-estar animal em primeiro lugar."
  }
];

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-nobre-light text-nobre-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="flex flex-col items-center">
            <div className="text-center mb-8">
                <h2 className="text-nobre-gold font-bold uppercase tracking-wider text-sm mb-2">Sobre Nós</h2>
                <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">
                Excelência e paixão no adestramento canino
                </h3>
            </div>
            
            <div className="max-w-3xl mx-auto text-center mb-12">
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                NOBRE ADESTRAMENTO DE CÃES oferece soluções profissionais de adestramento com foco em resultados duradouros, bem-estar animal e segurança do tutor. 
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                Atuamos com métodos positivos e correção inteligente, treinando obediência básica, comportamento avançado e cães de guarda. Nossa missão é fortalecer o vínculo entre você e seu melhor amigo.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="mb-4 p-3 bg-nobre-dark/5 rounded-full">{feature.icon}</div>
                  <h4 className="font-bold text-nobre-dark mb-2 text-lg">{feature.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;