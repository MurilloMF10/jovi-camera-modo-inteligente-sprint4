import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router'
import CartaoMensagem from '../components/painel/CartaoMensagem'
import ResumoPainel from '../components/painel/ResumoPainel'
import useAuth from '../hooks/useAuth'

const filtros = ['Todos', 'Sugestão', 'Dúvida', 'Avaliação']

function Painel() {
  const { mensagens, carregando, erro, carregarMensagens, removerMensagem } = useOutletContext()
  const { logout } = useAuth()
  const navegar = useNavigate()
  const [filtroAtivo, setFiltroAtivo] = useState('Todos')
  const [idExcluindo, setIdExcluindo] = useState('')
  const [erroExclusao, setErroExclusao] = useState('')

  useEffect(() => {
    document.title = 'Painel | Codex | Jovi'
    const temporizador = window.setTimeout(carregarMensagens, 0)

    return () => window.clearTimeout(temporizador)
  }, [carregarMensagens])

  const mensagensOrdenadas = useMemo(() => (
    [...mensagens].sort((primeira, segunda) => new Date(segunda.createdAt) - new Date(primeira.createdAt))
  ), [mensagens])

  const mensagensFiltradas = useMemo(() => (
    filtroAtivo === 'Todos'
      ? mensagensOrdenadas
      : mensagensOrdenadas.filter(({ assunto }) => assunto === filtroAtivo)
  ), [filtroAtivo, mensagensOrdenadas])

  const resumo = useMemo(() => {
    const avaliacoes = mensagens.filter(({ assunto, nota }) => assunto === 'Avaliação' && Number.isFinite(Number(nota)))
    const contagens = { Sugestão: 0, Dúvida: 0, Avaliação: 0 }

    mensagens.forEach(({ assunto }) => {
      if (Object.hasOwn(contagens, assunto)) {
        contagens[assunto] += 1
      }
    })

    const media = avaliacoes.length
      ? avaliacoes.reduce((total, { nota }) => total + Number(nota), 0) / avaliacoes.length
      : 0

    return { media, quantidadeAvaliacoes: avaliacoes.length, contagens }
  }, [mensagens])

  function sair() {
    logout()
    navegar('/login', { replace: true })
  }

  async function excluirMensagem(id) {
    const confirmou = window.confirm('Deseja excluir esta mensagem? Esta ação não pode ser desfeita.')

    if (!confirmou) {
      return
    }

    setErroExclusao('')
    setIdExcluindo(id)

    try {
      await removerMensagem(id)
    } catch {
      setErroExclusao('Não foi possível excluir a mensagem. Tente novamente.')
    } finally {
      setIdExcluindo('')
    }
  }

  return (
    <section className="bg-secao-clara px-5 py-16 text-texto-escuro sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-azul">Área Jovi</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Painel de mensagens</h1>
            <p className="mt-4 max-w-2xl leading-7 text-texto-escuro-suave">Acompanhe os contatos enviados e gerencie as mensagens recebidas.</p>
          </div>
          <button className="w-fit rounded-md border border-[#c8cbd2] px-4 py-2 text-sm font-medium transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul" type="button" onClick={sair}>
            Sair
          </button>
        </div>

        {carregando ? (
          <p className="mt-10 border border-[#d4d6db] bg-white p-6 text-texto-escuro-suave" aria-live="polite">Carregando mensagens...</p>
        ) : erro ? (
          <div className="mt-10 border border-red-200 bg-white p-6" role="alert">
            <p className="text-red-700">{erro}</p>
            <button className="mt-4 rounded-md bg-azul px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#324bc0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul" type="button" onClick={carregarMensagens}>Tentar novamente</button>
          </div>
        ) : (
          <>
            <div className="mt-10">
              <ResumoPainel total={mensagens.length} media={resumo.media} quantidadeAvaliacoes={resumo.quantidadeAvaliacoes} contagens={resumo.contagens} />
            </div>

            <div className="mt-10 border-y border-[#d4d6db] py-5">
              <p className="text-sm font-medium">Filtrar por assunto</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {filtros.map((filtro) => (
                  <button
                    key={filtro}
                    className={`rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul ${filtroAtivo === filtro ? 'bg-azul text-white' : 'border border-[#c8cbd2] bg-white text-texto-escuro hover:border-azul'}`}
                    type="button"
                    aria-pressed={filtroAtivo === filtro}
                    onClick={() => setFiltroAtivo(filtro)}
                  >
                    {filtro}
                  </button>
                ))}
              </div>
            </div>

            {erroExclusao && <p className="mt-6 text-sm text-red-700" role="alert">{erroExclusao}</p>}

            {mensagensFiltradas.length ? (
              <div className="mt-6 grid gap-5">
                {mensagensFiltradas.map((mensagem) => (
                  <CartaoMensagem key={mensagem.id} mensagem={mensagem} aoExcluir={excluirMensagem} excluindo={idExcluindo === mensagem.id} />
                ))}
              </div>
            ) : (
              <p className="mt-6 border border-[#d4d6db] bg-white p-6 leading-7 text-texto-escuro-suave">Nenhuma mensagem encontrada para este filtro.</p>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default Painel
