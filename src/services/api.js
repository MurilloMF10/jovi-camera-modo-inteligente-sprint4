const URL_PADRAO_API = 'https://6ae64db4877d34ccafc2c4ba.mockapi.io/api/v1'
const URL_MENSAGENS = `${import.meta.env.VITE_API_URL || URL_PADRAO_API}/mensagens`

async function requisitar(url, opcoes = {}) {
  const resposta = await fetch(url, opcoes)

  if (!resposta.ok) {
    throw new Error('Não foi possível concluir a solicitação. Tente novamente.')
  }

  if (resposta.status === 204) {
    return null
  }

  return resposta.json()
}

export function buscarMensagens() {
  return requisitar(URL_MENSAGENS)
}

export function criarMensagem(mensagem) {
  return requisitar(URL_MENSAGENS, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(mensagem),
  })
}

export function excluirMensagem(id) {
  return requisitar(`${URL_MENSAGENS}/${id}`, { method: 'DELETE' })
}
