import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import ProjectsHero from '../components/ProjectsHero'

export default function Home({ setCurrentPage, setSelectedService }) {
  return (
    <>
      <HeroSection setCurrentPage={setCurrentPage} />
      <ServicesSection setCurrentPage={setCurrentPage} setSelectedService={setSelectedService} />
      <ProjectsHero />
    </>
  )
}

