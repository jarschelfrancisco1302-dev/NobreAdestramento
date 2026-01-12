import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, COMPANY_INFO } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-nobre-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="#" className="font-heading font-extrabold text-2xl text-white tracking-tighter">
              NOBRE<span className="text-nobre-gold">ADESTRAMENTO</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 items-center">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-gray-300 hover:text-nobre-gold transition-colors text-sm font-medium uppercase tracking-wide"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
             <a 
               href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Olá, gostaria de agendar uma avaliação.`}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors text-sm font-bold"
             >
                <Phone size={16} className="text-nobre-green" />
                <span>{COMPANY_INFO.phone}</span>
             </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
              aria-label="Menu Principal"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full bg-nobre-dark border-b border-white/10 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 mt-4 border-t border-white/10">
            <a 
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Olá, gostaria de agendar uma avaliação.`}
              className="flex items-center justify-center gap-2 w-full bg-nobre-green text-white py-3 rounded-lg font-bold"
            >
              <Phone size={20} />
              Agendar Agora
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;