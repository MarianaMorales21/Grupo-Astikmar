import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import MetricsBar from '../components/MetricsBar'
import ProjectsCarousel from '../components/ProjectsCarousel'
import EquipoHumano from './EquipoHumano'
import Certificaciones from './Certificaciones'

export default function Home({ setCurrentPage, setSelectedService }) {
  return (
    <>
      <HeroSection setCurrentPage={setCurrentPage} />
      <ServicesSection setCurrentPage={setCurrentPage} setSelectedService={setSelectedService} />
      <ProjectsCarousel setCurrentPage={setCurrentPage} />
    </>
  )
}

