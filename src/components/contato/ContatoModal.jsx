import { useEffect, useRef } from 'react'
import useContatoForm from '../../hooks/useContatoForm'
import Estrelas from '../ui/Estrelas'

const assuntos = ['Sugestão', 'Dúvida', 'Avaliação']

function ContatoModal({ aoFechar, aoEnviar }) {
  const campoNome = useRef(null)
  const { valores, erros, enviando, sucesso, erroEnvio, alterarCampo, enviarFormulario } = useContatoForm(aoEnviar)

  useEffect(() => {
    campoNome.current?.focus()
  }, [])

  function fecharAoClicarNoFundo(evento) {
    if (evento.target === evento.currentTarget) {
      aoFechar()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-sobreposicao/70 p-4" onMouseDown={fecharAoClicarNoFundo}>
      <section className="my-8 w-full max-w-xl rounded-sm border border-borda-clara bg-secao-clara p-6 text-texto-escuro shadow-lg sm:p-8" role="dialog" aria-modal="true" aria-labelledby="titulo-contato">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-azul">Contato</p>
            <h2 id="titulo-contato" className="mt-2 text-2xl leading-tight">Fale com a equipe</h2>
          </div>
          <button className="px-2 py-1 text-2xl leading-none text-texto-escuro-suave transition-colors hover:text-texto-escuro focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul" type="button" onClick={aoFechar}>
            <span aria-hidden="true">×</span><span className="sr-only">Fechar formulário</span>
          </button>
        </div>

        <form className="mt-7 space-y-5" onSubmit={enviarFormulario} noValidate>
          <div>
            <label className="text-sm font-semibold text-texto-escuro" htmlFor="nome">Nome</label>
            <input ref={campoNome} className="mt-2 w-full rounded-sm border border-borda-clara bg-superficie px-3 py-2.5 outline-none focus:border-azul focus:ring-2 focus:ring-azul/25" id="nome" name="nome" value={valores.nome} onChange={alterarCampo} aria-invalid={Boolean(erros.nome)} aria-describedby={erros.nome ? 'erro-nome' : undefined} />
            {erros.nome && <p id="erro-nome" className="mt-2 text-sm text-erro">{erros.nome}</p>}
          </div>
          <div>
            <label className="text-sm font-semibold text-texto-escuro" htmlFor="email">E-mail</label>
            <input className="mt-2 w-full rounded-sm border border-borda-clara bg-superficie px-3 py-2.5 outline-none focus:border-azul focus:ring-2 focus:ring-azul/25" id="email" name="email" type="email" value={valores.email} onChange={alterarCampo} aria-invalid={Boolean(erros.email)} aria-describedby={erros.email ? 'erro-email' : undefined} />
            {erros.email && <p id="erro-email" className="mt-2 text-sm text-erro">{erros.email}</p>}
          </div>
          <div>
            <label className="text-sm font-semibold text-texto-escuro" htmlFor="assunto">Assunto</label>
            <select className="mt-2 w-full rounded-sm border border-borda-clara bg-superficie px-3 py-2.5 outline-none focus:border-azul focus:ring-2 focus:ring-azul/25" id="assunto" name="assunto" value={valores.assunto} onChange={alterarCampo}>
              {assuntos.map((assunto) => <option key={assunto} value={assunto}>{assunto}</option>)}
            </select>
          </div>
          {valores.assunto === 'Avaliação' && <Estrelas notaSelecionada={valores.nota} aoSelecionar={alterarCampo} erro={erros.nota} />}
          <div>
            <label className="text-sm font-semibold text-texto-escuro" htmlFor="mensagem">Mensagem</label>
            <textarea className="mt-2 min-h-32 w-full resize-y rounded-sm border border-borda-clara bg-superficie px-3 py-2.5 outline-none focus:border-azul focus:ring-2 focus:ring-azul/25" id="mensagem" name="mensagem" value={valores.mensagem} onChange={alterarCampo} aria-invalid={Boolean(erros.mensagem)} aria-describedby={erros.mensagem ? 'erro-mensagem' : undefined} />
            {erros.mensagem && <p id="erro-mensagem" className="mt-2 text-sm text-erro">{erros.mensagem}</p>}
          </div>
          <div aria-live="polite">
            {sucesso && <p className="text-sm text-sucesso">{sucesso}</p>}
            {erroEnvio && <p className="text-sm text-erro">{erroEnvio}</p>}
          </div>
          <button className="w-full rounded-sm bg-azul px-5 py-3 text-sm font-medium text-superficie transition-colors hover:bg-azul-profundo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={enviando}>
            {enviando ? 'Enviando...' : 'Enviar mensagem'}
          </button>
        </form>
      </section>
    </div>
  )
}

export default ContatoModal
