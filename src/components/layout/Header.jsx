import { CONTAINER_CLASSES } from '../../constants/layout';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className={CONTAINER_CLASSES}>
        <div className="flex justify-between items-center py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <h1 className="text-2xl font-bold text-gray-900">
              Adriana Borges
            </h1>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#sobre" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Sobre
            </a>
            <a href="#servicos" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Serviços
            </a>
            <a href="#resultados" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Resultados
            </a>
            <a href="#contato" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
