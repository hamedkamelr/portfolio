import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Portfolio from './components/Portfolio'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Chatbot from './components/Chatbot'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Portfolio />
      <Education />
      <Skills />
      <Contact />
      <Chatbot />
    </main>
  )
}
