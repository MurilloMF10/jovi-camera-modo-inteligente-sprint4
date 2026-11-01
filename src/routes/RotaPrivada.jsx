import { Navigate, Outlet } from 'react-router'
import useAuth from '../hooks/useAuth'

function RotaPrivada() {
  const { estaLogado } = useAuth()

  if (!estaLogado) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default RotaPrivada
