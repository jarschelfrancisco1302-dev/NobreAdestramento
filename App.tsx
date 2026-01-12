import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {/* Persistent WhatsApp Button */}
      <a 
        href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Olá, vim pelo site e gostaria de informações.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-nobre-green text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default App;