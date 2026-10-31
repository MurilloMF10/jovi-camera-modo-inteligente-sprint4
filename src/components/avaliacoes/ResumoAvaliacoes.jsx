function ResumoAvaliacoes({ media, quantidade }) {
  return (
    <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-[#d4d6db] bg-white p-5">
        <p className="text-sm text-texto-escuro-suave">Média das avaliações</p>
        <p className="mt-2 text-3xl font-semibold tracking-tight text-texto-escuro">{quantidade ? media.toFixed(1) : '—'}<span className="text-base font-medium text-texto-escuro-suave"> / 5</span></p>
      </div>
      <div className="rounded-xl border border-[#d4d6db] bg-white p-5">
        <p className="text-sm text-texto-escuro-suave">Total de avaliações</p>
        <p className="mt-2 text-3xl font-semibold tracking-tight text-texto-escuro">{quantidade}</p>
      </div>
    </div>
  )
}

export default ResumoAvaliacoes
