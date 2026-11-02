import { useEffect, useState } from 'react'
import perguntasFrequentes from '../data/faq'

function Faq() {
  const [perguntasAbertas, setPerguntasAbertas] = useState(new Set())

  useEffect(() => {
    document.title = 'FAQ | Codex | Jovi'
  }, [])

  function alternarPergunta(id) {
    setPerguntasAbertas((abertas) => {
      const proximas = new Set(abertas)

      if (proximas.has(id)) {
        proximas.delete(id)
      } else {
        proximas.add(id)
      }

      return proximas
    })
  }

  return (
    <section className="bg-secao-clara px-5 py-16 text-texto-escuro sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-azul">Dúvidas comuns</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Perguntas frequentes</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-texto-escuro-suave">
          Entenda a proposta do JOVI MATH e como o Codex pode apoiar a resolução de cálculos.
        </p>

        <div className="mt-10 border-t border-borda-sutil">
          {perguntasFrequentes.map(({ id, pergunta, resposta }) => {
            const estaAberta = perguntasAbertas.has(id)

            return (
              <article key={id} className="border-b border-borda-sutil">
                <h2>
                  <button
                    id={`pergunta-${id}`}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-semibold text-texto-escuro transition-colors hover:text-azul focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-azul sm:text-lg"
                    type="button"
                    aria-expanded={estaAberta}
                    aria-controls={`resposta-${id}`}
                    onClick={() => alternarPergunta(id)}
                  >
                    {pergunta}
                    <span className="shrink-0 text-xl font-normal" aria-hidden="true">{estaAberta ? '−' : '+'}</span>
                  </button>
                </h2>
                {estaAberta && (
                  <div id={`resposta-${id}`} className="pb-5 pr-10 text-base leading-7 text-texto-escuro-suave" role="region" aria-labelledby={`pergunta-${id}`}>
                    <p>{resposta}</p>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
