import { Link } from 'react-router'

function ChamadaFinal() {
  return (
    <section className="bg-fundo px-5 py-20 text-texto sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl border border-borda bg-cartao p-8 sm:p-12">
        <p className="text-sm font-medium tracking-wide text-azul-claro">Codex | Jovi</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Quer conversar sobre o Modo Inteligente?</h2>
        <p className="mt-4 max-w-xl leading-7 text-texto-suave">Envie uma sugestão, tire uma dúvida ou compartilhe sua avaliação sobre a proposta.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button className="rounded-md bg-azul px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#324bc0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul" type="button">
            Contate-nos
          </button>
          <Link className="rounded-md border border-borda px-5 py-3 text-center text-sm font-medium text-texto transition-colors hover:bg-fundo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul" to="/faq">
            Ir para o FAQ
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ChamadaFinal
