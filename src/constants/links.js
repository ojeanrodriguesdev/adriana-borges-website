/**
 * Configuração centralizada de todos os links e URLs
 */

// Informações de contato
export const CONTACT_INFO = {
  phone: '+55-11-99999-9999',
  whatsapp: '5511999999999',
  email: 'contato@adrianaborges.com.br',
  address: {
    city: 'Santos',
    state: 'SP',
    country: 'BR'
  }
};

// Links do WhatsApp com mensagens padrão
export const WHATSAPP_LINKS = {
  default: {
    message: 'Olá! Gostaria de agendar uma consulta para despigmentação a laser. Podem me ajudar?',
    utm: 'utm_source=website&utm_medium=whatsapp&utm_campaign=contact'
  },
  consultation: {
    message: 'Olá! Gostaria de agendar uma consulta de avaliação gratuita.',
    utm: 'utm_source=website&utm_medium=whatsapp&utm_campaign=consultation'
  },
  results: {
    message: 'Olá! Gostaria de saber mais sobre os resultados da despigmentação a laser.',
    utm: 'utm_source=website&utm_medium=whatsapp&utm_campaign=results'
  },
  pricing: {
    message: 'Olá! Gostaria de informações sobre preços e pacotes de despigmentação.',
    utm: 'utm_source=website&utm_medium=whatsapp&utm_campaign=pricing'
  }
};

// Links das redes sociais
export const SOCIAL_LINKS = {
  instagram: {
    url: 'https://instagram.com/adrianaborges',
    utm: 'utm_source=website&utm_medium=instagram&utm_campaign=social'
  },
  facebook: {
    url: 'https://facebook.com/adrianaborges',
    utm: 'utm_source=website&utm_medium=facebook&utm_campaign=social'
  },
  whatsapp: {
    url: `https://wa.me/${CONTACT_INFO.whatsapp}`,
    utm: 'utm_source=website&utm_medium=whatsapp&utm_campaign=social'
  }
};

// Âncoras internas
export const INTERNAL_ANCHORS = {
  hero: '#hero',
  technology: '#tecnologia',
  benefits: '#beneficios',
  about: '#sobre',
  care: '#cuidados',
  contraindications: '#contraindicacoes',
  testimonials: '#depoimentos',
  contact: '#contato',
  faq: '#faq'
};

// Links de navegação
export const NAVIGATION_LINKS = [
  {
    label: 'Início',
    href: INTERNAL_ANCHORS.hero,
    id: 'hero'
  },
  {
    label: 'Tecnologia',
    href: INTERNAL_ANCHORS.technology,
    id: 'tecnologia'
  },
  {
    label: 'Benefícios',
    href: INTERNAL_ANCHORS.benefits,
    id: 'beneficios'
  },
  {
    label: 'Sobre',
    href: INTERNAL_ANCHORS.about,
    id: 'sobre'
  },
  {
    label: 'Depoimentos',
    href: INTERNAL_ANCHORS.testimonials,
    id: 'depoimentos'
  },
  {
    label: 'Contato',
    href: INTERNAL_ANCHORS.contact,
    id: 'contato'
  }
];

// Função para gerar link do WhatsApp com UTM
export const generateWhatsAppLink = (message, utmSource = 'website', utmMedium = 'whatsapp', utmCampaign = 'contact') => {
  const encodedMessage = encodeURIComponent(message);
  const utmParams = `utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}`;
  
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodedMessage}&${utmParams}`;
};

// Função para gerar link com UTM
export const generateUTMLink = (baseUrl, utmSource = 'website', utmMedium = 'link', utmCampaign = 'default') => {
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}`;
};

// Links de imagens organizadas
export const IMAGE_PATHS = {
  hero: {
    adriana: '/images/hero/adriana-hero.avif',
    placeholder: '/api/placeholder/1920/1080'
  },
  about: {
    adriana: '/images/about/adriana-about.avif',
    placeholder: '/api/placeholder/800/600'
  },
  results: {
    '01': {
      before: '/images/results/resultado-01-a.avif',
      after: '/images/results/resultado-01-b.avif',
      area: 'Rosto'
    },
    '02': {
      before: '/images/results/resultado-02-a.avif',
      after: '/images/results/resultado-02-b.avif',
      area: 'Mãos'
    },
    '03': {
      before: '/images/results/resultado-03-a.avif',
      after: '/images/results/resultado-03-b.avif',
      area: 'Pescoço'
    },
    '04': {
      before: '/images/results/resultado-04-a.avif',
      after: '/images/results/resultado-04-b.avif',
      area: 'Braços'
    }
  }
};

// Ícones organizados
export const ICON_PATHS = {
  ui: {
    arrowDown: '/icons/ui/arrow-down.svg',
    arrowRight: '/icons/ui/arrow-right.svg',
    check: '/icons/ui/check.svg',
    close: '/icons/ui/close.svg',
    star: '/icons/ui/star.svg'
  },
  social: {
    whatsapp: '/icons/social/whatsapp.svg',
    instagram: '/icons/social/instagram.svg',
    phone: '/icons/social/phone.svg',
    email: '/icons/social/email.svg'
  },
  medical: {
    laser: '/icons/medical/laser.svg',
    shield: '/icons/medical/shield.svg',
    clock: '/icons/medical/clock.svg'
  }
};

// Horários de funcionamento
export const BUSINESS_HOURS = {
  weekdays: {
    start: '08:00',
    end: '18:00',
    label: 'Segunda a Sexta'
  },
  saturday: {
    start: '08:00',
    end: '12:00',
    label: 'Sábados'
  },
  sunday: {
    closed: true,
    label: 'Domingos'
  }
};
