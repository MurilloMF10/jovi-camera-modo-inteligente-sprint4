import { Route, Routes } from 'react-router'
import Layout from '../components/layout/Layout'
import Avaliacoes from '../pages/Avaliacoes'
import Equipe from '../pages/Equipe'
import Faq from '../pages/Faq'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NaoEncontrada from '../pages/NaoEncontrada'
import Painel from '../pages/Painel'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="avaliacoes" element={<Avaliacoes />} />
        <Route path="faq" element={<Faq />} />
        <Route path="equipe" element={<Equipe />} />
        <Route path="login" element={<Login />} />
        <Route path="painel" element={<Painel />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
