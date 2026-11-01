function ResumoPainel({ total, media, quantidadeAvaliacoes, contagens }) {
  const assuntos = ['Sugestão', 'Dúvida', 'Avaliação']

  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Resumo das mensagens">
      <article className="border border-[#d4d6db] bg-white p-5">
        <p className="text-sm text-texto-escuro-suave">Total de mensagens</p>
        <p className="mt-2 text-3xl font-semibold tracking-tight">{total}</p>
      </article>
      <article className="border border-[#d4d6db] bg-white p-5">
        <p className="text-sm text-texto-escuro-suave">Média das avaliações</p>
        <p className="mt-2 text-3xl font-semibold tracking-tight">
          {quantidadeAvaliacoes ? media.toFixed(1) : '—'}
          <span className="text-base font-medium text-texto-escuro-suave"> / 5</span>
        </p>
      </article>
      <article className="border border-[#d4d6db] bg-white p-5 sm:col-span-2">
        <p className="text-sm text-texto-escuro-suave">Mensagens por assunto</p>
        <dl className="mt-3 grid grid-cols-3 gap-3">
          {assuntos.map((assunto) => (
            <div key={assunto}>
              <dt className="text-xs text-texto-escuro-suave">{assunto}</dt>
              <dd className="mt-1 text-xl font-semibold">{contagens[assunto]}</dd>
            </div>
          ))}
        </dl>
      </article>
    </section>
  )
}

export default ResumoPainel
