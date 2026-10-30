import { MenuClose } from '@boxicons/js/icons/MenuClose'
import { Menu } from '@boxicons/js/icons/Menu'
import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import Icone from '../ui/Icone'

const linksNavegacao = [
  { caminho: '/', rotulo: 'Home' },
  { caminho: '/avaliacoes', rotulo: 'Avaliações' },
  { caminho: '/faq', rotulo: 'FAQ' },
  { caminho: '/equipe', rotulo: 'Equipe' },
]

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <header className="border-b border-borda bg-fundo text-texto">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link className="text-lg font-semibold tracking-tight" to="/" onClick={fecharMenu}>
          Codex <span className="text-azul-claro">|</span> Jovi
        </Link>

        <button
          className="rounded-md p-2 text-texto transition-colors hover:bg-cartao focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul md:hidden"
          type="button"
          aria-expanded={menuAberto}
          aria-controls="navegacao-principal"
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          <span className="sr-only">{menuAberto ? 'Fechar menu' : 'Abrir menu'}</span>
          <Icone definicao={menuAberto ? MenuClose : Menu} />
        </button>

        <nav
          id="navegacao-principal"
          className={`${menuAberto ? 'flex' : 'hidden'} absolute inset-x-0 top-18 z-10 flex-col gap-1 border-b border-borda bg-fundo px-5 py-4 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:p-0`}
          aria-label="Navegação principal"
        >
          {linksNavegacao.map(({ caminho, rotulo }) => (
            <NavLink
              key={caminho}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm transition-colors hover:text-texto ${isActive ? 'text-azul-claro' : 'text-texto-suave'}`
              }
              to={caminho}
              onClick={fecharMenu}
            >
              {rotulo}
            </NavLink>
          ))}
          <button
            className="rounded-md bg-azul px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#324bc0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul"
            type="button"
            onClick={fecharMenu}
          >
            Contate-nos
          </button>
          <NavLink
            className="rounded-md px-3 py-2 text-sm text-azul-claro transition-colors hover:text-texto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul"
            to="/login"
            onClick={fecharMenu}
          >
            Área Jovi
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
