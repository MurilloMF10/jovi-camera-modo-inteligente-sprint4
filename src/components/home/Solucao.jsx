import beneficios from '../../data/beneficios'
import etapas from '../../data/etapas'

function Solucao() {
  return (
    <section id="solucao" className="bg-secao-clara px-5 py-20 text-texto-escuro sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-wide text-azul">A solução</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Matemática não deveria ser um obstáculo entre a pergunta e a resposta.</h2>
          <p className="mt-5 leading-7 text-texto-escuro-suave">
            Estudantes travam em exercícios, professores perdem tempo revalidando contas e profissionais de exatas precisam conferir cálculos em campo. O Codex usa o hardware que a pessoa já carrega: a câmera do celular Jovi.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-2">
          {etapas.map((etapa) => (
            <li key={etapa.numero} className="border border-[#d7d9df] bg-white p-6">
              <p className="text-sm font-semibold text-azul">{etapa.numero}</p>
              <h3 className="mt-5 text-xl font-semibold">{etapa.titulo}</h3>
              <p className="mt-3 leading-7 text-texto-escuro-suave">{etapa.descricao}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {beneficios.map((beneficio) => (
            <article key={beneficio.titulo} className="border-t-2 border-azul pt-5">
              <h3 className="text-lg font-semibold">{beneficio.titulo}</h3>
              <p className="mt-2 leading-7 text-texto-escuro-suave">{beneficio.descricao}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solucao
