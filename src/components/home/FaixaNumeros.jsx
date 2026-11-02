import numeros from '../../data/numeros'

function FaixaNumeros() {
  return (
    <section className="border-y border-borda bg-fundo text-texto" aria-label="Destaques do produto">
      <div className="mx-auto grid max-w-7xl divide-y divide-borda px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12">
        {numeros.map((numero) => (
          <div key={numero.titulo} className="py-9 sm:px-6 sm:first:pl-0 sm:last:pr-0">
            <p className="text-5xl font-semibold leading-none tracking-tight text-azul-claro sm:text-6xl">{numero.destaque}</p>
            <h2 className="mt-3 font-sans text-lg font-semibold text-texto">{numero.titulo}</h2>
            <p className="mt-3 max-w-xs text-sm leading-6 text-texto-suave">{numero.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FaixaNumeros
