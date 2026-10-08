import { motion, useScroll } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { Github, Linkedin } from './icons'
import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

const links = [
  ['about', 'About'], ['education', 'Education'], ['experience', 'Experience'], ['skills', 'Skills'],
  ['projects', 'Projects'], ['hackathons', 'Hackathons'], ['posts', 'LinkedIn'], ['certificates', 'Certificates'], ['contact', 'Contact'],
]

export default function Nav({ theme, setTheme }) {
  const { scrollYProgress } = useScroll()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  useEffect(() => {
    const obs = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-40% 0px -55% 0px' })
    links.forEach(([id]) => { const el = document.getElementById(id); el && obs.observe(el) })
    return () => obs.disconnect()
  }, [])
  return (
    <>
      <motion.div className="progress" style={{ scaleX: scrollYProgress, width: '100%' }} />
      <motion.nav className={`nav ${open ? 'open' : ''}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
        <a href="#top" className="nav-brand"><span className="dot">SY</span><span>{profile.shortName}</span></a>
        <div className="nav-links" onClick={() => setOpen(false)}>
          {links.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>)}
        </div>
        <a className="nav-icon" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
        <a className="nav-icon" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
        <button className="nav-icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button>
        <button className="nav-icon nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X size={18} /> : <Menu size={18} />}</button>
      </motion.nav>
    </>
  )
}
