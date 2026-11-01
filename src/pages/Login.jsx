import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import useAuth from '../hooks/useAuth'

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const { estaLogado, login } = useAuth()
  const navegar = useNavigate()

  if (estaLogado) {
    return <Navigate to="/painel" replace />
  }

  function enviarFormulario(evento) {
    evento.preventDefault()
    setErro('')

    if (!login(email, senha)) {
      setErro('E-mail ou senha inválidos. Confira as credenciais de teste.')
      return
    }

    navegar('/painel', { replace: true })
  }

  return (
    <section className="bg-secao-clara px-5 py-16 text-texto-escuro sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-azul">Área Jovi</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Acesse o painel de mensagens</h1>
          <p className="mt-4 leading-7 text-texto-escuro-suave">
            Esta é uma autenticação simulada para demonstração acadêmica. Ela não oferece segurança para uso real.
          </p>
        </div>

        <div className="border border-[#d7d9df] bg-white p-6 shadow-sm sm:p-8">
          <form className="space-y-5" onSubmit={enviarFormulario} noValidate>
            <div>
              <label className="text-sm font-medium" htmlFor="email-login">E-mail</label>
              <input
                className="mt-2 w-full rounded-md border border-[#c8cbd2] bg-white px-3 py-2.5 outline-none transition-colors focus:border-azul focus:ring-2 focus:ring-azul/25"
                id="email-login"
                type="email"
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="senha-login">Senha</label>
              <input
                className="mt-2 w-full rounded-md border border-[#c8cbd2] bg-white px-3 py-2.5 outline-none transition-colors focus:border-azul focus:ring-2 focus:ring-azul/25"
                id="senha-login"
                type="password"
                value={senha}
                onChange={(evento) => setSenha(evento.target.value)}
                autoComplete="current-password"
                required
              />
            </div>
            {erro && <p className="text-sm text-red-700" role="alert">{erro}</p>}
            <button className="w-full rounded-md bg-azul px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#324bc0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul" type="submit">
              Entrar
            </button>
          </form>

          <div className="mt-6 border-t border-[#d7d9df] pt-5 text-sm text-texto-escuro-suave">
            <p className="font-medium text-texto-escuro">Acesso de demonstração</p>
            <p className="mt-2">E-mail: admin@codexjovi.com</p>
            <p>Senha: Codex@2026</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
