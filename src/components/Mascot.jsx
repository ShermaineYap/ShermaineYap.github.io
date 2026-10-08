import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const lines = [
  'Hi! I\'m the shuttlecock. Click me for a random fact.',
  '26,341 badminton matches were scraped to train the match model.',
  'The async Rust pipeline hit a p99 of 74 µs. The threaded one: 2,699 µs.',
  'Shermaine trains badminton three times a week.',
  'She speaks four languages: English, Mandarin, Malay and Cantonese.',
  'Bantuan Checker was built in 40 minutes. The IBM Malaysia CTO gave it a thumbs up.',
  '12 hackathons since 2025. Seven of them ended on a podium or as a finalist.',
  'The SAS Hackathon win was against 100+ teams worldwide.',
]

export default function Mascot() {
  const [show, setShow] = useState(false)
  const [i, setI] = useState(0)
  useEffect(() => { const t = setTimeout(() => setShow(true), 2500); const t2 = setTimeout(() => setShow(false), 8000); return () => { clearTimeout(t); clearTimeout(t2) } }, [])
  const click = () => { setI((i + 1) % lines.length); setShow(true) }
  return (
    <>
      <AnimatePresence>
        {show && <motion.div className="mascot-bubble" initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.9 }}>{lines[i]}</motion.div>}
      </AnimatePresence>
      <motion.button className="mascot" onClick={click} whileTap={{ scale: 0.85, rotate: -20 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2.4, repeat: Infinity }} aria-label="Fun fact">🏸</motion.button>
    </>
  )
}
