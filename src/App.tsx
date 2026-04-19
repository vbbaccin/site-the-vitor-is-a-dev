import { HelmetProvider } from 'react-helmet-async'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { TerminalAboutSection } from './components/TerminalAboutSection'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { ProjectsSection } from './components/ProjectsSection'
import { CVSection } from './components/CVSection'
import { FooterSection } from './components/FooterSection'
import { ScrollProgressBar } from './components/ScrollProgressBar'
// import { CustomCursor } from './components/CustomCursor' // DESABILITAR SE TELA FICAR PRETA
import { SEOHead } from './components/SEOHead'

export default function App() {
  return (
    <HelmetProvider>
      <SEOHead />
      <div className="min-h-screen bg-dark-950 overflow-x-hidden">
        <ScrollProgressBar />
        {/* <CustomCursor /> */}
        <Header />
        <HeroSection />
        <TerminalAboutSection />
        <ExperienceTimeline />
        <ProjectsSection />
        <CVSection />
        <FooterSection />
      </div>
    </HelmetProvider>
  )
}
