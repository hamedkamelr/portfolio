import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Portfolio from './components/Portfolio'
import Education from './components/Education'
import Contact from './components/Contact'
import Chatbot from './components/Chatbot'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Portfolio />
      <Education />
      <Contact />
      <Chatbot />
    </main>
  )
}
