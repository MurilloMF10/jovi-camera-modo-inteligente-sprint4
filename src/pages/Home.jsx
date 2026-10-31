import ChamadaFinal from '../components/home/ChamadaFinal'
import FaixaNumeros from '../components/home/FaixaNumeros'
import Galeria from '../components/home/Galeria'
import Hero from '../components/home/Hero'
import PublicoAlvo from '../components/home/PublicoAlvo'
import Solucao from '../components/home/Solucao'
import { useOutletContext } from 'react-router'

function Home() {
  const { abrirContato } = useOutletContext()

  return (
    <>
      <Hero aoAbrirContato={abrirContato} />
      <FaixaNumeros />
      <Solucao />
      <PublicoAlvo />
      <Galeria />
      <ChamadaFinal aoAbrirContato={abrirContato} />
    </>
  )
}

export default Home
