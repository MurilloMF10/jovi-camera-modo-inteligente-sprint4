import { useCallback, useState } from 'react'
import { buscarMensagens, criarMensagem, excluirMensagem } from '../services/api'

function useMensagens() {
  const [mensagens, setMensagens] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  const carregarMensagens = useCallback(async () => {
    setCarregando(true)
    setErro('')

    try {
      const dados = await buscarMensagens()
      setMensagens(dados)
    } catch (erroDaRequisicao) {
      setErro(erroDaRequisicao.message)
    } finally {
      setCarregando(false)
    }
  }, [])

  const adicionarMensagem = useCallback(async (mensagem) => {
    const mensagemCriada = await criarMensagem(mensagem)
    setMensagens((listaAtual) => [mensagemCriada, ...listaAtual])
    return mensagemCriada
  }, [])

  const removerMensagem = useCallback(async (id) => {
    await excluirMensagem(id)
    setMensagens((listaAtual) => listaAtual.filter((mensagem) => mensagem.id !== id))
  }, [])

  return {
    mensagens,
    carregando,
    erro,
    carregarMensagens,
    adicionarMensagem,
    removerMensagem,
  }
}

export default useMensagens
