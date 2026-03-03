import NeuralCanvas from './components/NeuralCanvas'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-space-bg">
      <NeuralCanvas />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider mx-6 sm:mx-12" />
        <Skills />
        <div className="section-divider mx-6 sm:mx-12" />
        <Experience />
        <div className="section-divider mx-6 sm:mx-12" />
        <Projects />
        <div className="section-divider mx-6 sm:mx-12" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
