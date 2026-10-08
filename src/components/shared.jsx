import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// Fade-and-rise reveal when an element scrolls into view.
export function Reveal({ children, delay = 0, y = 28, className, as = 'div', ...rest }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </M>
  )
}

export function SectionHead({ eyebrow, title, sub }) {
  return (
    <Reveal>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </Reveal>
  )
}

// Animated number that counts up when visible.
export function Counter({ value, decimals = 0, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { duration: 1800, bounce: 0 })
  const [text, setText] = useState(prefix + (0).toFixed(decimals) + suffix)
  useEffect(() => { if (inView) mv.set(value) }, [inView, value, mv])
  useEffect(() => spring.on('change', (v) => setText(prefix + Number(v).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix)), [spring, decimals, suffix, prefix])
  return <span ref={ref}>{text}</span>
}

// Typewriter cycling through phrases.
export function Typewriter({ phrases, speed = 55, pause = 1600 }) {
  const [i, setI] = useState(0)
  const [txt, setTxt] = useState('')
  const [del, setDel] = useState(false)
  useEffect(() => {
    const full = phrases[i]
    let t
    if (!del && txt === full) t = setTimeout(() => setDel(true), pause)
    else if (del && txt === '') { setDel(false); setI((i + 1) % phrases.length) }
    else t = setTimeout(() => setTxt(del ? full.slice(0, txt.length - 1) : full.slice(0, txt.length + 1)), del ? speed / 2 : speed)
    return () => clearTimeout(t)
  }, [txt, del, i, phrases, speed, pause])
  return <span>{txt}<span className="caret" /></span>
}

// Tilt-on-hover wrapper for cards.
export function Tilt({ children, className, max = 6 }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg) translateY(-4px)`
  }
  const reset = () => { ref.current.style.transform = '' }
  return <div ref={ref} className={className} onMouseMove={onMove} onMouseLeave={reset} style={{ transition: 'transform 0.2s' }}>{children}</div>
}
