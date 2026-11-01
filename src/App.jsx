import { RouterProvider } from 'react-router'
import { AuthProvider } from './contexts/AuthContext'
import router from './routes/AppRoutes'

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
