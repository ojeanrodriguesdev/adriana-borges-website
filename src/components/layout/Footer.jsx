import { CONTACT_INFO, BUSINESS_HOURS, generateWhatsAppLink, WHATSAPP_LINKS, SOCIAL_LINKS, generateUTMLink, INTERNAL_ANCHORS } from '../../constants/links';
import { PhoneIcon, EmailIcon, WhatsAppIcon, InstagramIcon } from '../ui/Icon';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Conteúdo principal do footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Navegação Principal */}
          <FooterNavigation />
          
          {/* Serviços */}
          <FooterServices />
          
          {/* Contato */}
          <FooterContact />
          
          {/* Redes Sociais */}
          <FooterSocial />
        </div>
        {/* Divisor */}
        <div className="border-t border-gray-800 pt-8">
          <FooterLegal />
        </div>
      </div>
    </footer>
  );
}

// Componente para navegação
function FooterNavigation() {
  const quickLinks = [
    { name: 'Início', href: INTERNAL_ANCHORS.hero },
    { name: 'Tecnologia', href: INTERNAL_ANCHORS.technology },
    { name: 'Benefícios', href: INTERNAL_ANCHORS.benefits },
    { name: 'Sobre Adriana', href: INTERNAL_ANCHORS.about },
    { name: 'Depoimentos', href: INTERNAL_ANCHORS.testimonials },
    { name: 'Contraindicações', href: INTERNAL_ANCHORS.contraindications },
    { name: 'FAQ', href: INTERNAL_ANCHORS.faq },
    { name: 'Contato', href: INTERNAL_ANCHORS.contact }
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Navegação</h3>
      <ul className="space-y-2">
        {quickLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
            >
              <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-white transition-colors duration-200"></span>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      
      {/* Informações da empresa */}
      <div className="mt-6 pt-6 border-t border-gray-800">
        <h4 className="font-medium text-white mb-2">Adriana Borges</h4>
        <p className="text-gray-400 text-sm leading-relaxed">
          Especialista em despigmentação a laser com mais de 10 anos de experiência. 
          Tratamentos seguros e eficazes em Santos e Praia Grande.
        </p>
      </div>
    </div>
  );
}

// Componente para seção de serviços
function FooterServices() {
  const services = [
    { name: 'Despigmentação a Laser', href: '#tecnologia' },
    { name: 'Remoção de Tatuagem', href: '#tecnologia' },
    { name: 'Remoção de Micropigmentação', href: '#tecnologia' },
    { name: 'Tratamento de Manchas', href: '#tecnologia' },
    { name: 'Consulta de Avaliação', href: '#contato' },
    { name: 'Cuidados Pós-Tratamento', href: '#cuidados' }
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Nossos Serviços</h3>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index}>
            <a
              href={service.href}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
            >
              {service.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Componente para contato
function FooterContact() {
  const contactMethods = [
    {
      icon: <WhatsAppIcon className="w-5 h-5" />,
      label: 'WhatsApp',
      value: CONTACT_INFO.whatsapp,
      href: generateWhatsAppLink(WHATSAPP_LINKS.default.message, 'website', 'footer', 'contact'),
      description: 'Resposta rápida'
    },
    {
      icon: <PhoneIcon className="w-5 h-5" />,
      label: 'Telefone',
      value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone}`,
      description: 'Atendimento direto'
    },
    {
      icon: <EmailIcon className="w-5 h-5" />,
      label: 'E-mail',
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      description: 'Dúvidas detalhadas'
    }
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Contato</h3>
      
      {/* Métodos de contato */}
      <div className="space-y-4 mb-6">
        {contactMethods.map((method, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="text-gray-400 mt-0.5">
              {method.icon}
            </div>
            <div>
              <a
                href={method.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block"
                target={method.href.startsWith('http') ? '_blank' : '_self'}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {method.value}
              </a>
              <p className="text-gray-500 text-xs">{method.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Localização */}
      <div className="mb-6">
        <h4 className="font-medium text-white mb-2">Localização</h4>
        <div className="text-gray-300 text-sm">
          <p>{CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}</p>
          <p className="text-gray-500 text-xs mt-1">Atendimento presencial e online</p>
        </div>
      </div>

      {/* Horários de funcionamento */}
      <div>
        <h4 className="font-medium text-white mb-2">Horários</h4>
        <div className="text-gray-300 text-sm space-y-1">
          <p>{BUSINESS_HOURS.weekdays.label}: {BUSINESS_HOURS.weekdays.start} às {BUSINESS_HOURS.weekdays.end}</p>
          <p>{BUSINESS_HOURS.saturday.label}: {BUSINESS_HOURS.saturday.start} às {BUSINESS_HOURS.saturday.end}</p>
          <p className="text-gray-500 text-xs mt-2">Agendamento preferencial via WhatsApp</p>
        </div>
      </div>
    </div>
  );
}

// Componente para redes sociais
function FooterSocial() {
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <WhatsAppIcon className="w-6 h-6" />,
      href: generateUTMLink(SOCIAL_LINKS.whatsapp.url, 'website', 'footer', 'social'),
      color: 'hover:bg-green-600',
      description: 'Conversar agora'
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon className="w-6 h-6" />,
      href: generateUTMLink(SOCIAL_LINKS.instagram.url, 'website', 'footer', 'social'),
      color: 'hover:bg-pink-600',
      description: 'Seguir no Instagram'
    }
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
      
      {/* Links das redes sociais */}
      <div className="flex space-x-4 mb-6">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg ${social.color} transition-all duration-200 group`}
            aria-label={social.description}
          >
            <div className="text-gray-300 group-hover:text-white transition-colors duration-200">
              {social.icon}
            </div>
          </a>
        ))}
      </div>

      {/* Newsletter/Updates */}
      <div className="bg-gray-800 rounded-lg p-4">
        <h4 className="font-medium text-white mb-2">Fique por dentro</h4>
        <p className="text-gray-400 text-sm mb-3">
          Receba dicas sobre cuidados com a pele e novidades sobre tratamentos.
        </p>
        <a
          href={generateUTMLink(SOCIAL_LINKS.whatsapp.url, 'website', 'footer', 'newsletter')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-green-400 hover:text-green-300 transition-colors duration-200"
        >
          <WhatsAppIcon className="w-4 h-4 mr-2" />
          Receber atualizações
        </a>
      </div>

      {/* Certificações/Qualificações */}
      <div className="mt-6 pt-6 border-t border-gray-800">
        <h4 className="font-medium text-white mb-2">Certificações</h4>
        <div className="text-gray-400 text-sm space-y-1">
          <p>• Especialista em Laser</p>
          <p>• Certificação Internacional</p>
          <p>• Mais de 10 anos de experiência</p>
          <p>• Atualização constante</p>
        </div>
      </div>
    </div>
  );
}

// Componente para informações legais
function FooterLegal() {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { name: 'Política de Privacidade', href: '/politica-privacidade' },
    { name: 'Termos de Uso', href: '/termos-uso' },
    { name: 'Política de Cookies', href: '/politica-cookies' },
    { name: 'LGPD', href: '/lgpd' }
  ];

  const medicalDisclaimers = [
    'Os resultados podem variar conforme características individuais.',
    'Consulte sempre um profissional qualificado.',
    'Tratamentos realizados por profissional especializado.',
    'Siga sempre as orientações pós-tratamento.'
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
      {/* Copyright e informações legais */}
      <div className="flex-1">
        <div className="text-gray-400 text-sm">
          <p className="mb-2">
            © {currentYear} Adriana Borges - Despigmentação a Laser. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-500">
            CNPJ: XX.XXX.XXX/0001-XX | CRF: XXXXX | CRM: XXXXX
          </p>
        </div>
      </div>

      {/* Links legais */}
      <div className="flex flex-wrap gap-4 lg:gap-6">
        {legalLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Disclaimer médico */}
      <div className="w-full lg:w-auto lg:max-w-md">
        <div className="bg-gray-800 rounded-lg p-3">
          <h5 className="text-xs font-medium text-yellow-400 mb-2">⚠️ Aviso Importante</h5>
          <div className="text-xs text-gray-400 space-y-1">
            {medicalDisclaimers.map((disclaimer) => (
              <p key={disclaimer}>• {disclaimer}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}