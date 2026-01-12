import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-nobre-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-nobre-dark rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            
            {/* Info Side */}
            <div className="p-10 lg:p-16 text-white flex flex-col justify-center bg-nobre-dark relative z-10">
              <h3 className="text-3xl font-heading font-bold mb-6 text-nobre-gold">Entre em Contato</h3>
              <p className="text-gray-300 mb-10 leading-relaxed text-lg">
                Pronto para transformar o comportamento do seu cão? Agende uma avaliação gratuita ou tire suas dúvidas diretamente pelo WhatsApp.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-nobre-gold" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-lg mb-1">Endereço</h5>
                    <p className="text-gray-400">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-nobre-gold" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-lg mb-1">WhatsApp / Telefone</h5>
                    <a href={`https://wa.me/${COMPANY_INFO.phoneRaw}`} className="text-gray-400 hover:text-white transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-nobre-gold" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-lg mb-1">Email</h5>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-400 hover:text-white transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Side */}
            <div className="relative h-96 lg:h-auto w-full">
              <iframe 
                src={COMPANY_INFO.mapsUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Mapa de localização"
                className="absolute inset-0 w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;