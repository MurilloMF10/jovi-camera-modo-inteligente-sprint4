import galeria from '../../data/galeria'

function Galeria() {
  return (
    <section className="bg-secao-clara px-5 py-20 text-texto-escuro sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-azul">Veja o fluxo</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Do enquadramento à explicação.</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {galeria.map((item) => (
            <article key={item.titulo} className="flex flex-col">
              <div className="flex min-h-100 items-end justify-center overflow-hidden bg-white p-6">
                <img className="max-h-96 w-auto max-w-full object-contain" src={item.imagem} alt={item.alt} width="396" height="885" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{item.titulo}</h3>
              <p className="mt-2 leading-7 text-texto-escuro-suave">{item.descricao}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Galeria
