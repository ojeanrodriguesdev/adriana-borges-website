# 📁 Organização de Assets - Adriana Borges Website

Este documento descreve a organização e estrutura dos assets do website.

## 🖼️ Estrutura de Imagens

### `/public/images/`
```
images/
├── hero/
│   └── adriana-hero.avif          # Imagem principal da hero section
├── about/
│   └── adriana-about.avif         # Imagem da seção sobre
├── results/
│   ├── resultado-01-a.avif        # Antes - Rosto
│   ├── resultado-01-b.avif        # Depois - Rosto
│   ├── resultado-02-a.avif        # Antes - Mãos
│   ├── resultado-02-b.avif        # Depois - Mãos
│   ├── resultado-03-a.avif        # Antes - Pescoço
│   ├── resultado-03-b.avif        # Depois - Pescoço
│   ├── resultado-04-a.avif        # Antes - Braços
│   └── resultado-04-b.avif        # Depois - Braços
└── testimonials/
    └── (futuras imagens de depoimentos)
```

### Especificações das Imagens

#### Hero Image (`adriana-hero.avif`)
- **Dimensões**: 1920x1080px
- **Formato**: AVIF
- **Uso**: Imagem principal da hero section
- **Descrição**: Foto profissional de Adriana Borges

#### About Image (`adriana-about.avif`)
- **Dimensões**: 800x600px
- **Formato**: AVIF
- **Uso**: Seção "Sobre Adriana"
- **Descrição**: Foto de perfil ou ambiente de trabalho

#### Result Images (`resultado-XX-X.avif`)
- **Dimensões**: 400x600px
- **Formato**: AVIF
- **Nomenclatura**: 
  - `XX` = número sequencial (01, 02, 03, 04)
  - `X` = tipo (a = antes, b = depois)
- **Áreas**: Rosto, Mãos, Pescoço, Braços

## 🎨 Estrutura de Ícones

### `/public/icons/`
```
icons/
├── ui/
│   ├── arrow-down.svg             # Seta para baixo
│   ├── arrow-right.svg            # Seta para direita
│   ├── check.svg                  # Check/confirmação
│   ├── close.svg                  # Fechar/X
│   └── star.svg                   # Estrela (avaliações)
├── social/
│   ├── whatsapp.svg               # WhatsApp
│   ├── instagram.svg              # Instagram
│   ├── phone.svg                  # Telefone
│   └── email.svg                  # E-mail
└── medical/
    ├── laser.svg                  # Laser/tratamento
    ├── shield.svg                 # Segurança/proteção
    └── clock.svg                  # Tempo/duração
```

### Especificações dos Ícones
- **Formato**: SVG
- **Dimensões**: 24x24px (viewBox)
- **Estilo**: Outline/Stroke
- **Cor**: `currentColor` (herda cor do elemento pai)

## 🔗 Configuração de Links

### Arquivo: `/src/constants/links.js`

#### Informações de Contato
```javascript
CONTACT_INFO = {
  phone: '+55-11-99999-9999',
  whatsapp: '5511999999999',
  email: 'contato@adrianaborges.com.br'
}
```

#### Links do WhatsApp
```javascript
WHATSAPP_LINKS = {
  default: "Olá! Gostaria de agendar uma consulta...",
  consultation: "Olá! Gostaria de agendar uma consulta de avaliação...",
  results: "Olá! Gostaria de saber mais sobre os resultados...",
  pricing: "Olá! Gostaria de informações sobre preços..."
}
```

#### Redes Sociais
```javascript
SOCIAL_LINKS = {
  instagram: 'https://instagram.com/adrianaborges',
  facebook: 'https://facebook.com/adrianaborges',
  whatsapp: 'https://wa.me/5511999999999'
}
```

#### Âncoras Internas
```javascript
INTERNAL_ANCHORS = {
  hero: '#hero',
  technology: '#tecnologia',
  benefits: '#beneficios',
  about: '#sobre',
  testimonials: '#depoimentos',
  contact: '#contato',
  faq: '#faq'
}
```

## 🛠️ Como Usar

### Imagens
```javascript
import { IMAGE_PATHS } from '../constants/links';

// Usar imagem organizada
<OptimizedImage 
  src={IMAGE_PATHS.hero.adriana}
  alt="Adriana Borges"
  aspectRatio="16/9"
/>
```

### Ícones
```javascript
import { WhatsAppIcon, InstagramIcon } from '../components/ui/Icon';

// Usar ícone consistente
<WhatsAppIcon className="w-6 h-6" />
<InstagramIcon className="w-5 h-5" />
```

### Links
```javascript
import { generateWhatsAppLink, SOCIAL_LINKS } from '../constants/links';

// Gerar link do WhatsApp com UTM
const whatsappLink = generateWhatsAppLink(
  WHATSAPP_LINKS.default.message,
  'website',
  'whatsapp',
  'contact_section'
);
```

## 📋 Checklist de Implementação

### ✅ Imagens
- [ ] Substituir placeholders por imagens reais
- [ ] Otimizar imagens para AVIF
- [ ] Verificar dimensões corretas
- [ ] Adicionar alt text descritivo
- [ ] Testar carregamento em diferentes dispositivos

### ✅ Ícones
- [ ] Verificar consistência visual
- [ ] Testar em diferentes tamanhos
- [ ] Validar acessibilidade
- [ ] Confirmar cor `currentColor`

### ✅ Links
- [ ] Atualizar números de telefone reais
- [ ] Configurar URLs das redes sociais
- [ ] Testar links do WhatsApp
- [ ] Verificar UTM tracking
- [ ] Validar âncoras internas

## 🚀 Próximos Passos

1. **Substituir Placeholders**: Trocar todos os arquivos placeholder pelas imagens reais
2. **Otimização**: Comprimir imagens para melhor performance
3. **Testes**: Validar carregamento e exibição em todos os dispositivos
4. **Backup**: Manter backup das imagens originais
5. **Documentação**: Atualizar este README conforme necessário

## 📞 Contato

Para dúvidas sobre a organização dos assets, entre em contato com a equipe de desenvolvimento.
