import ChamadaFinal from '../components/home/ChamadaFinal'
import FaixaNumeros from '../components/home/FaixaNumeros'
import Galeria from '../components/home/Galeria'
import Hero from '../components/home/Hero'
import PublicoAlvo from '../components/home/PublicoAlvo'
import Solucao from '../components/home/Solucao'

function Home() {
  return (
    <>
      <Hero />
      <FaixaNumeros />
      <Solucao />
      <PublicoAlvo />
      <Galeria />
      <ChamadaFinal />
    </>
  )
}

export default Home
