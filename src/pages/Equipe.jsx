import { useEffect } from 'react'
import integrantes from '../data/equipe'

function Equipe() {
  useEffect(() => {
    document.title = 'Equipe | Codex | Jovi'
  }, [])

  return (
    <section className="bg-fundo px-5 py-16 text-texto sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-azul-claro">Equipe Codex</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Pessoas por trás da proposta</h1>
          <p className="mt-4 text-base leading-7 text-texto-suave">
            Um grupo multidisciplinar que uniu desenvolvimento e comunicação para apresentar o JOVI MATH.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {integrantes.map(({ nome, funcao, descricao, imagem }) => (
            <article key={nome} className="overflow-hidden border border-borda bg-cartao">
              <img className="aspect-square w-full object-cover" src={imagem} alt={`Foto de ${nome}, ${funcao}`} width="480" height="480" />
              <div className="p-6">
                <p className="text-sm font-medium text-azul-claro">{funcao}</p>
                <h2 className="mt-2 text-xl font-semibold">{nome}</h2>
                <p className="mt-3 text-sm leading-6 text-texto-suave">{descricao}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Equipe
