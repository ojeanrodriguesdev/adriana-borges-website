import ContactInfo from './ContactInfo';
import ContactCTAs from './ContactCTAs';
import ContactForm from './ContactForm';
import { CONTAINER_CLASSES, SECTION_PADDING } from '../../../constants/layout';

export default function ContactSection() {
  return (
    <section className="bg-white" id="contato">
      <div className={`${CONTAINER_CLASSES} ${SECTION_PADDING}`}>
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Agende sua consulta e tire todas as suas dúvidas sobre despigmentação a laser
          </p>
        </div>

        {/* Informações de Contato */}
        <ContactInfo />
        
        {/* CTAs Principais */}
        <ContactCTAs />
        
        {/* Formulário de Contato (Opcional) */}
        <ContactForm />
        
        {/* Microcopy sobre Atendimento em Parceria */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <h3 className="text-lg font-medium text-blue-800">Atendimento em Parceria</h3>
            </div>
            <p className="text-sm text-blue-700">
              Trabalhamos em parceria com clínicas especializadas para oferecer o melhor atendimento. 
              Nossa equipe está preparada para esclarecer todas as suas dúvidas e orientar sobre o 
              processo de despigmentação a laser de forma personalizada e segura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
