import { useState } from 'react'
import { credenciaisSaoValidas, criarSessao, encerrarSessao, recuperarSessao } from '../services/auth'
import AuthContext from './contextoAuth'

function AuthProvider({ children }) {
  const [estaLogado, setEstaLogado] = useState(recuperarSessao)

  function login(email, senha) {
    if (!credenciaisSaoValidas(email, senha)) {
      return false
    }

    criarSessao()
    setEstaLogado(true)
    return true
  }

  function logout() {
    encerrarSessao()
    setEstaLogado(false)
  }

  return <AuthContext.Provider value={{ estaLogado, login, logout }}>{children}</AuthContext.Provider>
}

export { AuthProvider }
