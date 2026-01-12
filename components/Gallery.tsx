import React from 'react';

const IMAGES = [
  { url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80', alt: 'Cão pequeno porte atento', category: 'Pequeno Porte' },
  { url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80', alt: 'Cão labrador preto atento', category: 'Médio Porte' },
  { url: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=600&q=80', alt: 'Pastor Alemão em treino de guarda', category: 'Guarda' },
  { url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80', alt: 'Cães socializando no parque', category: 'Socialização' },
  { url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80', alt: 'Golden Retriever sentado obediente', category: 'Obediência' },
  { url: 'https://images.unsplash.com/photo-1567752881298-894bb81f9379?auto=format&fit=crop&w=600&q=80', alt: 'Rottweiler em treinamento', category: 'Proteção' },
];

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-nobre-gold font-bold uppercase tracking-wider text-sm mb-2">Galeria</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-nobre-dark">Nossos Resultados</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMAGES.map((img, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer shadow-lg">
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-nobre-gold text-xs font-bold uppercase tracking-wider mb-1">{img.category}</span>
                <p className="text-white font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;