import beneficios from '../../data/beneficios'
import etapas from '../../data/etapas'

function Solucao() {
  return (
    <section id="solucao" className="bg-secao-clara px-5 py-20 text-texto-escuro sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-azul">Como funciona</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Matemática não deveria ser um obstáculo entre a pergunta e a resposta.</h2>
          <p className="mt-5 leading-7 text-texto-escuro-suave">
            Estudantes travam em exercícios, professores perdem tempo revalidando contas e profissionais de exatas precisam conferir cálculos em campo. O Codex usa o hardware que a pessoa já carrega: a câmera do celular Jovi.
          </p>
        </div>

        <ol className="mt-12 grid border-l border-borda-clara md:grid-cols-2">
          {etapas.map((etapa) => (
            <li key={etapa.numero} className="border-r border-t border-borda-sutil bg-superficie p-6 first:border-t-0 md:odd:border-r-0 md:[&:nth-child(-n+2)]:border-t-0">
              <p className="text-sm font-semibold text-azul">{etapa.numero}</p>
              <h3 className="mt-5 text-xl font-semibold">{etapa.titulo}</h3>
              <p className="mt-3 leading-7 text-texto-escuro-suave">{etapa.descricao}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {beneficios.map((beneficio) => (
            <article key={beneficio.titulo} className="border border-borda-clara bg-azul-neblina p-7">
              <h3 className="text-2xl leading-tight text-texto-escuro">{beneficio.titulo}</h3>
              <p className="mt-4 leading-7 text-texto-azul-suave">{beneficio.descricao}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solucao
