import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './Header'

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-fundo">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
