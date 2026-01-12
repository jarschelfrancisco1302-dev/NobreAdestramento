import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0c0e] text-gray-400 border-t border-white/5 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="font-heading font-extrabold text-xl text-white tracking-tighter mb-4 block">
              NOBRE<span className="text-nobre-gold">ADESTRAMENTO</span>
            </a>
            <p className="mb-6 leading-relaxed">
              Transformando a relação entre cães e tutores através de disciplina, respeito e técnicas profissionais.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-nobre-gold hover:text-nobre-dark transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-nobre-gold hover:text-nobre-dark transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-nobre-gold transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>{COMPANY_INFO.address}</li>
              <li>{COMPANY_INFO.phone}</li>
              <li>{COMPANY_INFO.email}</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
             <h4 className="text-white font-bold uppercase tracking-wider mb-4">Legal</h4>
             <ul className="space-y-2">
               <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Política de Cookies</a></li>
             </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Nobre Adestramento. Todos os direitos reservados.</p>
          <p className="text-xs text-gray-600">Desenvolvido com tecnologia React.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;