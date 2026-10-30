import numeros from '../../data/numeros'

function FaixaNumeros() {
  return (
    <section className="border-y border-borda bg-fundo text-texto" aria-label="Destaques do produto">
      <div className="mx-auto grid max-w-7xl divide-y divide-borda px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12">
        {numeros.map((numero) => (
          <div key={numero.titulo} className="py-8 sm:px-6 sm:first:pl-0 sm:last:pr-0">
            <p className="text-3xl font-semibold tracking-tight text-azul-claro sm:text-4xl">{numero.destaque}</p>
            <h2 className="mt-1 text-base font-medium text-texto">{numero.titulo}</h2>
            <p className="mt-2 text-sm leading-6 text-texto-suave">{numero.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FaixaNumeros
