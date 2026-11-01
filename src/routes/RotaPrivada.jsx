import { Navigate, Outlet, useOutletContext } from 'react-router'
import useAuth from '../hooks/useAuth'

function RotaPrivada() {
  const { estaLogado } = useAuth()
  const contextoDoLayout = useOutletContext()

  if (!estaLogado) {
    return <Navigate to="/login" replace />
  }

  return <Outlet context={contextoDoLayout} />
}

export default RotaPrivada
