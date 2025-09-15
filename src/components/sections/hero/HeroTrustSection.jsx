export default function HeroTrustSection() {
  return (
    <>
      {/* Linha de Confiança */}
      <div className=" pt-8">
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
          <span>Formada pela European Laser School</span>
          <span>•</span>
          <span>ANVISA/INMETRO</span>
          <span>•</span>
          <span>Desde 2016 focada em despigmentação</span>
        </div>
      </div>

      {/* Bullets de Benefícios */}
      <div className="flex flex-col sm:flex-row justify-between pt-8">
        <div className="text-center sm:text-left">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mx-auto sm:mx-0 mb-3">
            <span className="text-gray-900 text-sm">✓</span>
          </div>
          <h3 className="font-medium text-gray-900 mb-1">Segurança</h3>
          <p className="text-sm text-gray-600">Procedimento seguro e controlado</p>
        </div>
        <div className="text-center sm:text-left">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mx-auto sm:mx-0 mb-3">
            <span className="text-gray-900 text-sm">✓</span>
          </div>
          <h3 className="font-medium text-gray-900 mb-1">Eficácia</h3>
          <p className="text-sm text-gray-600">Resultados comprovados e duradouros</p>
        </div>
        <div className="text-center sm:text-left">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mx-auto sm:mx-0 mb-3">
            <span className="text-gray-900 text-sm">✓</span>
          </div>
          <h3 className="font-medium text-gray-900 mb-1">Recuperação rápida</h3>
          <p className="text-sm text-gray-600">Retorno às atividades em pouco tempo</p>
        </div>
      </div>
    </>
  )
}
