function formatarData(data) {
  const dataConvertida = new Date(data)

  if (Number.isNaN(dataConvertida.getTime())) {
    return 'Data não disponível'
  }

  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(dataConvertida)
}

function CartaoMensagem({ mensagem, aoExcluir, excluindo }) {
  const nota = Number(mensagem.nota)
  const possuiNota = mensagem.assunto === 'Avaliação' && Number.isFinite(nota)

  return (
    <article className="border border-[#d4d6db] bg-white p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span className="inline-flex rounded-full bg-[#e7ebff] px-3 py-1 text-xs font-semibold text-[#2945bd]">{mensagem.assunto}</span>
          <h2 className="mt-4 text-lg font-semibold">{mensagem.nome}</h2>
          <a className="mt-1 inline-block text-sm text-azul underline-offset-4 hover:underline" href={`mailto:${mensagem.email}`}>{mensagem.email}</a>
          <p className="mt-2 text-sm text-texto-escuro-suave">{formatarData(mensagem.createdAt)}</p>
        </div>
        <button
          className="rounded-md border border-red-200 px-4 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          type="button"
          onClick={() => aoExcluir(mensagem.id)}
          disabled={excluindo}
        >
          {excluindo ? 'Excluindo...' : 'Excluir'}
        </button>
      </div>
      {possuiNota && (
        <p className="mt-5 flex gap-0.5 text-lg text-azul" aria-label={`${nota} de 5 estrelas`}>
          {[1, 2, 3, 4, 5].map((estrela) => <span key={estrela} aria-hidden="true" className={estrela <= nota ? '' : 'text-[#c8cbd2]'}>★</span>)}
        </p>
      )}
      <p className="mt-5 leading-7 text-texto-escuro-suave">{mensagem.mensagem}</p>
    </article>
  )
}

export default CartaoMensagem
