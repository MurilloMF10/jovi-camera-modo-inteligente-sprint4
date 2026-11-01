const USUARIO_TESTE = 'admin@codexjovi.com'
const SENHA_TESTE = 'Codex@2026'
const CHAVE_SESSAO = 'codex-jovi-sessao'

export function credenciaisSaoValidas(email, senha) {
  return email.trim().toLowerCase() === USUARIO_TESTE && senha === SENHA_TESTE
}

export function recuperarSessao() {
  return sessionStorage.getItem(CHAVE_SESSAO) === 'ativa'
}

export function criarSessao() {
  sessionStorage.setItem(CHAVE_SESSAO, 'ativa')
}

export function encerrarSessao() {
  sessionStorage.removeItem(CHAVE_SESSAO)
}
