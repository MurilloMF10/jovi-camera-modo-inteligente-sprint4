function PaginaEmConstrucao({ titulo, descricao }) {
  return (
    <section className="bg-secao-clara px-5 py-20 text-texto-escuro sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-azul">Codex | Jovi</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{titulo}</h1>
        <p className="mt-4 max-w-2xl text-texto-escuro-suave">{descricao}</p>
      </div>
    </section>
  )
}

export default PaginaEmConstrucao
