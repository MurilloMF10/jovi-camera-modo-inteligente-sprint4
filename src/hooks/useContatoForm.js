import { useState } from 'react'
import { validarContato } from '../utils/validacao'

const valoresIniciais = {
  nome: '',
  email: '',
  assunto: 'Sugestão',
  nota: null,
  mensagem: '',
}

function useContatoForm(aoEnviar) {
  const [valores, setValores] = useState(valoresIniciais)
  const [erros, setErros] = useState({})
  const [enviando, setEnviando] = useState(false)
  const [sucesso, setSucesso] = useState('')
  const [erroEnvio, setErroEnvio] = useState('')

  function alterarCampo(evento) {
    const { name, value } = evento.target
    const proximoValor = name === 'nota' ? Number(value) : value

    setValores((valoresAtuais) => ({
      ...valoresAtuais,
      [name]: proximoValor,
      ...(name === 'assunto' && value !== 'Avaliação' ? { nota: null } : {}),
    }))
    setErros((errosAtuais) => ({ ...errosAtuais, [name]: '' }))
    setSucesso('')
    setErroEnvio('')
  }

  async function enviarFormulario(evento) {
    evento.preventDefault()
    const errosEncontrados = validarContato(valores)
    setErros(errosEncontrados)
    setSucesso('')
    setErroEnvio('')

    if (Object.keys(errosEncontrados).length > 0) {
      return
    }

    setEnviando(true)

    try {
      await aoEnviar({
        ...valores,
        nome: valores.nome.trim(),
        email: valores.email.trim(),
        mensagem: valores.mensagem.trim(),
        demonstracao: false,
      })
      setValores(valoresIniciais)
      setSucesso('Mensagem enviada com sucesso. Obrigado pelo contato!')
    } catch {
      setErroEnvio('Não foi possível enviar sua mensagem. Confira a conexão e tente novamente.')
    } finally {
      setEnviando(false)
    }
  }

  return { valores, erros, enviando, sucesso, erroEnvio, alterarCampo, enviarFormulario }
}

export default useContatoForm
