import React from "react";

/**
 * Props para componentes de ícone
 */
const IconProps = {
  className: "",
  size: 24,
  ...React.SVGProps
};

/**
 * Ícone de Laser - Representa tecnologia laser
 */
export function LaserIcon({ className = "", size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Ícone estilo "laser/flash" */}
      <path d="M12 2v6" />
      <path d="M12 16v6" />
      <path d="M2 12h6" />
      <path d="M16 12h6" />
      <path d="M4.93 4.93l4.24 4.24" />
      <path d="M14.83 14.83l4.24 4.24" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

/**
 * Ícone de Escudo - Representa segurança
 */
export function ShieldIcon({ className = "", size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

/**
 * Ícone de Relógio - Representa tempo/rapidez
 */
export function ClockIcon({ className = "", size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}

/**
 * Ícone do WhatsApp
 */
export function WhatsAppIcon({ className = "", size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
    </svg>
  );
}

/**
 * Ícone do Instagram
 */
export function InstagramIcon({ className = "", size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

/**
 * Ícone de Telefone
 */
export function PhoneIcon({ className = "", size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

/**
 * Ícone de Email
 */
export function EmailIcon({ className = "", size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

/**
 * Registro de ícones disponíveis
 */
export const Icons = {
  laser: LaserIcon,
  shield: ShieldIcon,
  clock: ClockIcon,
  whatsapp: WhatsAppIcon,
  instagram: InstagramIcon,
  phone: PhoneIcon,
  email: EmailIcon,
};

/**
 * Componente para renderizar ícones com fallback seguro
 * @param {Object} props - Props do componente
 * @param {keyof typeof Icons} props.name - Nome do ícone
 * @param {string} props.className - Classes CSS
 * @param {number} props.size - Tamanho do ícone
 * @param {Object} props... - Outras props SVG
 */
export function RenderIcon({
  name,
  className = "",
  size = 24,
  ...props
}) {
  const Icon = Icons[name];
  
  if (!Icon) {
    // Fallback seguro - círculo simples
    return (
      <span
        aria-hidden="true"
        className={["inline-block rounded-full", className].filter(Boolean).join(" ")}
        style={{ 
          width: `${size}px`, 
          height: `${size}px`, 
          background: "currentColor", 
          opacity: 0.2 
        }}
      />
    );
  }
  
  return <Icon className={className} size={size} {...props} />;
}

/**
 * Hook para verificar se um ícone existe
 * @param {string} name - Nome do ícone
 * @returns {boolean} - Se o ícone existe
 */
export function useIconExists(name) {
  return name in Icons;
}

/**
 * Lista de nomes de ícones disponíveis
 */
export const availableIcons = Object.keys(Icons);
