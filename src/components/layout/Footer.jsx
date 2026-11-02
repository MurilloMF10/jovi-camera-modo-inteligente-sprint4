import { Link } from 'react-router'

function Footer() {
  return (
    <footer className="border-t border-borda bg-fundo text-texto-suave">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <p>Projeto acadêmico, Sprint 4.</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Navegação do rodapé">
          <Link className="transition-colors hover:text-texto" to="/">Home</Link>
          <Link className="transition-colors hover:text-texto" to="/faq">FAQ</Link>
          <Link className="transition-colors hover:text-texto" to="/equipe">Equipe</Link>
          <Link className="transition-colors hover:text-texto" to="/historico-jovi-math">JOVI MATH</Link>
          <Link className="text-azul-claro transition-colors hover:text-texto" to="/login">Área Jovi</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
