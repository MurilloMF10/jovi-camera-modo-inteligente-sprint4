import { useEffect, useMemo } from 'react'
import { useOutletContext } from 'react-router'
import CartaoAvaliacao from '../components/avaliacoes/CartaoAvaliacao'
import ResumoAvaliacoes from '../components/avaliacoes/ResumoAvaliacoes'

function Avaliacoes() {
  const { mensagens, carregando, erro, carregarMensagens } = useOutletContext()

  useEffect(() => {
    document.title = 'Avaliações | Codex | Jovi'
    const temporizador = window.setTimeout(carregarMensagens, 0)

    return () => window.clearTimeout(temporizador)
  }, [carregarMensagens])

  const avaliacoes = useMemo(() => (
    mensagens
      .filter(({ assunto }) => assunto === 'Avaliação')
      .sort((primeira, segunda) => new Date(segunda.createdAt) - new Date(primeira.createdAt))
  ), [mensagens])

  const media = useMemo(() => {
    if (!avaliacoes.length) {
      return 0
    }

    const somaDasNotas = avaliacoes.reduce((total, { nota }) => total + Number(nota), 0)
    return somaDasNotas / avaliacoes.length
  }, [avaliacoes])

  return (
    <section className="bg-secao-clara px-5 py-16 text-texto-escuro sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium text-azul">Avaliações</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">O que as pessoas acham da proposta</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-texto-escuro-suave">
          Feedbacks enviados sobre o JOVI MATH e a experiência de resolução passo a passo.
        </p>
        <p className="mt-4 text-sm text-texto-escuro-suave">Alguns depoimentos são fictícios, criados para esta demonstração.</p>

        {carregando ? (
          <p className="mt-10 border border-borda-sutil bg-superficie p-6 text-texto-escuro-suave" aria-live="polite">Carregando avaliações...</p>
        ) : erro ? (
          <div className="mt-10 border border-borda-erro bg-superficie p-6" role="alert">
            <p className="text-erro">{erro}</p>
            <button className="mt-4 rounded-sm bg-azul px-4 py-2 text-sm font-medium text-superficie transition-colors hover:bg-azul-profundo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul" type="button" onClick={carregarMensagens}>Tentar novamente</button>
          </div>
        ) : (
          <>
            <ResumoAvaliacoes media={media} quantidade={avaliacoes.length} />
            {avaliacoes.length ? (
              <div className="mt-8 grid gap-5">
                {avaliacoes.map((avaliacao) => <CartaoAvaliacao key={avaliacao.id} avaliacao={avaliacao} />)}
              </div>
            ) : (
              <p className="mt-8 border border-borda-sutil bg-superficie p-6 leading-7 text-texto-escuro-suave">Ainda não há avaliações. Envie a primeira pelo botão Contate-nos.</p>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default Avaliacoes
