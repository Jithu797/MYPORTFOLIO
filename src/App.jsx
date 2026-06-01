import Cursor     from './components/Cursor'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import About       from './components/About'
import Experience  from './components/Experience'
import Skills      from './components/Skills'
import Projects    from './components/Projects'
import Achievements from './components/Achievements'
import Education   from './components/Education'
import CTA         from './components/CTA'
import Contact     from './components/Contact'
import Footer      from './components/Footer'
import ScrollUp    from './components/ScrollUp'

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}
