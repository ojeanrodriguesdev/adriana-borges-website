import FAQAccordion from './FAQAccordion';
import FAQCTA from './FAQCTA';
import { CONTAINER_CLASSES, SECTION_PADDING } from '../../../constants/layout';

export default function FAQSection() {
  return (
    <section className="bg-gray-50" id="faq">
      <div className={`${CONTAINER_CLASSES} ${SECTION_PADDING}`}>
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre despigmentação a laser
          </p>
        </div>

        {/* Accordion de FAQ */}
        <FAQAccordion />
        
        {/* CTA */}
        <FAQCTA />
      </div>
    </section>
  );
}
