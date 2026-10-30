import publicos from '../../data/publicos'

function PublicoAlvo() {
  return (
    <section className="bg-fundo px-5 py-20 text-texto sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-azul-claro">Para quem é</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Apoio para aprender, ensinar e conferir.</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {publicos.map((publico) => (
            <article key={publico.numero} className="border border-borda bg-cartao p-6">
              <p className="text-sm font-semibold text-azul-claro">{publico.numero}</p>
              <h3 className="mt-8 text-lg font-semibold">{publico.titulo}</h3>
              <p className="mt-3 text-sm leading-6 text-texto-suave">{publico.descricao}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PublicoAlvo
