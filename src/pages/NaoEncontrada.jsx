import { Link } from 'react-router'

function NaoEncontrada() {
  return (
    <section className="bg-secao-clara px-5 py-20 text-texto-escuro sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-azul">Erro 404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Página não encontrada</h1>
        <p className="mt-4 text-texto-escuro-suave">O endereço informado não corresponde a uma página do projeto.</p>
        <Link className="mt-8 inline-flex rounded-md bg-azul px-4 py-2 font-medium text-white transition-colors hover:bg-[#324bc0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul" to="/">
          Voltar para a página inicial
        </Link>
      </div>
    </section>
  )
}

export default NaoEncontrada
