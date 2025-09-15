/**
 * Componente para dados estruturados (Schema.org) para melhor SEO
 */

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Adriana Borges - Despigmentação a Laser",
    "description": "Clínica especializada em despigmentação a laser, remoção de tatuagens e micropigmentação em Santos e Praia Grande",
    "url": "https://adrianaborges.com.br",
    "logo": "https://adrianaborges.com.br/logo.png",
    "image": "https://adrianaborges.com.br/og-image.jpg",
    "telephone": "+55-11-99999-9999",
    "email": "contato@adrianaborges.com.br",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Santos",
      "addressRegion": "SP",
      "addressCountry": "BR",
      "postalCode": "11000-000"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-23.9608",
      "longitude": "-46.3336"
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-12:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "BRL",
    "medicalSpecialty": "Dermatology",
    "serviceType": [
      "Despigmentação a Laser",
      "Remoção de Tatuagem",
      "Remoção de Micropigmentação",
      "Tratamento de Manchas"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Despigmentação",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Despigmentação a Laser Q-Switched Nd:YAG",
            "description": "Remoção segura e eficaz de pigmentos com tecnologia laser avançada"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Remoção de Tatuagem",
            "description": "Eliminação completa de tatuagens com laser especializado"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Remoção de Micropigmentação",
            "description": "Correção e remoção de micropigmentação com precisão"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Maria Silva"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excelente atendimento! A Adriana é muito profissional e os resultados foram além das minhas expectativas."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "João Santos"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Tratamento eficaz e sem dor. A clínica é limpa e o atendimento é de primeira qualidade."
      }
    ],
    "sameAs": [
      "https://instagram.com/adrianaborges",
      "https://facebook.com/adrianaborges",
      "https://wa.me/5511999999999"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://adrianaborges.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Despigmentação a Laser",
        "item": "https://adrianaborges.com.br#tecnologia"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Depoimentos",
        "item": "https://adrianaborges.com.br#depoimentos"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contato",
        "item": "https://adrianaborges.com.br#contato"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "A despigmentação a laser é dolorosa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A despigmentação a laser pode causar um leve desconforto, similar a um elástico batendo na pele. Utilizamos técnicas de anestesia tópica quando necessário para garantir o máximo conforto durante o procedimento."
        }
      },
      {
        "@type": "Question",
        "name": "Quantas sessões são necessárias?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O número de sessões varia conforme o tipo de pigmento, cor, tamanho e localização. Em média, são necessárias de 3 a 8 sessões, com intervalos de 4 a 8 semanas entre cada aplicação."
        }
      },
      {
        "@type": "Question",
        "name": "Quais são os cuidados pós-tratamento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É essencial evitar exposição solar, usar protetor solar FPS 50+, manter a área limpa e seca, e seguir todas as orientações específicas fornecidas durante a consulta."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    </>
  );
}
