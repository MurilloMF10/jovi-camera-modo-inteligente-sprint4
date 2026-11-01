import { Outlet } from 'react-router'
import ContatoModal from '../contato/ContatoModal'
import useMensagens from '../../hooks/useMensagens'
import useModal from '../../hooks/useModal'
import Footer from './Footer'
import Header from './Header'

function Layout() {
  const { estaAberto, abrir, fechar } = useModal()
  const { mensagens, carregando, erro, carregarMensagens, adicionarMensagem, removerMensagem } = useMensagens()

  return (
    <div className="flex min-h-screen flex-col bg-fundo">
      <Header aoAbrirContato={abrir} />
      <main className="flex-1">
        <Outlet context={{ abrirContato: abrir, mensagens, carregando, erro, carregarMensagens, removerMensagem }} />
      </main>
      <Footer />
      {estaAberto && <ContatoModal aoFechar={fechar} aoEnviar={adicionarMensagem} />}
    </div>
  )
}

export default Layout
