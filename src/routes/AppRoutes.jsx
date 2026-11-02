import { createBrowserRouter } from 'react-router'
import Layout from '../components/layout/Layout'
import Avaliacoes from '../pages/Avaliacoes'
import Equipe from '../pages/Equipe'
import Faq from '../pages/Faq'
import Home from '../pages/Home'
import HistoricoJovi from '../pages/HistoricoJovi'
import Login from '../pages/Login'
import NaoEncontrada from '../pages/NaoEncontrada'
import Painel from '../pages/Painel'
import RotaPrivada from './RotaPrivada'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'avaliacoes', element: <Avaliacoes /> },
      { path: 'faq', element: <Faq /> },
      { path: 'equipe', element: <Equipe /> },
      { path: 'historico-jovi-math', element: <HistoricoJovi /> },
      { path: 'login', element: <Login /> },
      {
        element: <RotaPrivada />,
        children: [{ path: 'painel', element: <Painel /> }],
      },
      { path: '*', element: <NaoEncontrada /> },
    ],
  },
])

export default router
