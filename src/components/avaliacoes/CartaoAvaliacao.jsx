function formatarData(data) {
  const dataConvertida = new Date(data)

  if (Number.isNaN(dataConvertida.getTime())) {
    return 'Data não disponível'
  }

  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium' }).format(dataConvertida)
}

function CartaoAvaliacao({ avaliacao }) {
  const nota = Number(avaliacao.nota)

  return (
    <article className="rounded-sm border border-borda-clara bg-superficie p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-texto-escuro">{avaliacao.nome}</h2>
          <p className="mt-1 text-sm text-texto-escuro-suave">{formatarData(avaliacao.createdAt)}</p>
        </div>
        <p className="flex gap-0.5 text-lg text-azul" aria-label={`${nota} de 5 estrelas`}>
          {[1, 2, 3, 4, 5].map((estrela) => <span key={estrela} aria-hidden="true" className={estrela <= nota ? '' : 'text-borda-clara'}>★</span>)}
        </p>
      </div>
      <p className="mt-5 leading-7 text-texto-escuro-suave">{avaliacao.mensagem}</p>
    </article>
  )
}

export default CartaoAvaliacao
