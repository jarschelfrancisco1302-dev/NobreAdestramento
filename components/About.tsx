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
    <section id="sobre" className="py-20 bg-nobre-light text-nobre-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-nobre-gold/20 rounded-tl-3xl z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-nobre-dark/10 rounded-br-3xl z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1599321356890-07e51c68f142?auto=format&fit=crop&w=800&q=80" 
              alt="Pastor Belga Malinois em treinamento focado" 
              className="relative z-10 w-full h-auto rounded-xl shadow-2xl object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Text Side */}
          <div>
            <h2 className="text-nobre-gold font-bold uppercase tracking-wider text-sm mb-2">Sobre Nós</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">
              Excelência e paixão no <br/> adestramento canino
            </h3>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              NOBRE ADESTRAMENTO DE CÃES oferece soluções profissionais de adestramento com foco em resultados duradouros, bem-estar animal e segurança do tutor. 
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Atuamos com métodos positivos e correção inteligente, treinando obediência básica, comportamento avançado e cães de guarda. Nossa missão é fortalecer o vínculo entre você e seu melhor amigo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center text-center sm:items-start sm:text-left p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="mb-3 p-2 bg-nobre-dark/5 rounded-full">{feature.icon}</div>
                  <h4 className="font-bold text-nobre-dark mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-500">{feature.text}</p>
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