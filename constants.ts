import { ServiceItem, FaqItem, NavItem, TestimonialItem } from './types';

export const COMPANY_INFO = {
  name: "NOBRE ADESTRAMENTO DE CÃES",
  phone: "+55 21 99460-6292",
  phoneRaw: "5521994606292",
  email: "marcioionobre@gmail.com",
  address: "Guaratiba, Rio de Janeiro, Brasil",
  mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.116568585437!2d-43.600000!3d-22.950000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU3JzAwLjAiUyA0M8KwMzYnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr", // Generic Guaratiba coords
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'basico',
    title: 'Adestramento Básico',
    description: 'Obediência fundamental para o dia a dia.',
    details: 'Comandos: sentar, deitar, andar na guia, vir quando chamado.',
    duration: '6–8 semanas',
  },
  {
    id: 'avancado',
    title: 'Comportamental & Avançado',
    description: 'Soluções para casos complexos.',
    details: 'Correção de agressividade, ansiedade por separação, latidos excessivos.',
    duration: 'Sob avaliação',
  },
  {
    id: 'guarda',
    title: 'Guarda e Proteção',
    description: 'Segurança para sua família e patrimônio.',
    details: 'Obediência avançada, comandos de contenção, disciplina de proteção. Especialidade em Pitbull, Rottweiler, Doberman, Fila.',
    duration: 'Contínuo',
  },
  {
    id: 'filhotes',
    title: 'Socialização de Filhotes',
    description: 'Comece do jeito certo.',
    details: 'Rotina, comandos básicos e socialização correta nos primeiros meses de vida.',
  },
  {
    id: 'aulas',
    title: 'Aulas Individuais / Grupo',
    description: 'Flexibilidade para sua rotina.',
    details: 'Modalidades flexíveis, taxa por sessão ou pacotes mensais.',
  },
  {
    id: 'consultoria',
    title: 'Consultoria Domiciliar',
    description: 'Atendimento onde você precisa.',
    details: 'Vamos até você em Guaratiba e regiões próximas.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    text: "Excelente profissional! Meu cão mudou completamente o comportamento, ficou muito mais calmo e obediente. Recomendo de olhos fechados.",
    author: "Ricardo Silva",
    location: "Recreio dos Bandeirantes"
  },
  {
    id: 2,
    text: "A socialização do meu filhote foi fundamental. Hoje ele convive super bem com outros cães e pessoas. Trabalho impecável!",
    author: "Ana Paula Souza",
    location: "Guaratiba"
  },
  {
    id: 3,
    text: "Contratei para guarda e proteção e o resultado foi surpreendente. Segurança total para minha família com um cão equilibrado.",
    author: "Carlos Mendes",
    location: "Barra da Tijuca"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    question: "Atendem em domicílio?",
    answer: "Sim, realizamos atendimento domiciliar em Guaratiba e regiões próximas. Consulte nossa taxa de deslocamento para seu bairro.",
  },
  {
    id: 2,
    question: "Quanto tempo dura o treinamento?",
    answer: "Depende do objetivo e do temperamento do cão. Programas típicos variam de 4 a 12 semanas, mas cada caso passa por uma avaliação inicial.",
  },
  {
    id: 3,
    question: "Trabalham com cães agressivos?",
    answer: "Sim. Fazemos uma avaliação rigorosa e criamos um plano seguro, com foco total na proteção das pessoas e no bem-estar do animal.",
  },
  {
    id: 4,
    question: "Vocês dão garantia de comportamento?",
    answer: "O adestramento é uma parceria entre o treinador e o tutor. Garantimos a aplicação das melhores técnicas, mas o sucesso contínuo depende da manutenção da rotina pelos donos.",
  }
];