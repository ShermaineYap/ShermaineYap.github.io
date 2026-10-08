import { useEffect, useState } from 'react'
import { About, EducationExperience, Skills } from './components/About'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Hackathons from './components/Hackathons'
import Hero from './components/Hero'
import { LightboxProvider } from './components/Lightbox'
import Mascot from './components/Mascot'
import Nav from './components/Nav'
import Posts from './components/Posts'
import Projects from './components/Projects'

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') } catch { return 'light' }
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* ignore */ }
  }, [theme])
  return (
    <LightboxProvider>
      <Nav theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <EducationExperience />
        <Skills />
        <Projects />
        <Hackathons />
        <Posts />
        <Certificates />
        <Contact />
      </main>
      <Mascot />
    </LightboxProvider>
  )
}
