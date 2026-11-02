import galeria from '../../data/galeria'

function Galeria() {
  return (
    <section className="bg-secao-clara px-5 py-20 text-texto-escuro sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-azul">Na prática</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Do enquadramento à explicação.</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {galeria.map((item) => (
            <article key={item.titulo} className="flex flex-col">
              <div className="flex items-end justify-center overflow-hidden">
                <img className="max-h-125 w-auto max-w-full object-contain" src={item.imagem} alt={item.alt} width="396" height="885" />
              </div>
              <div className="mt-5 border border-borda-sutil bg-superficie p-6">
                <h3 className="text-xl font-semibold">{item.titulo}</h3>
                <p className="mt-2 leading-7 text-texto-escuro-suave">{item.descricao}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Galeria
