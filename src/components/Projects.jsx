import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ExternalLink, Images } from 'lucide-react'
import { Github } from './icons'
import { useState } from 'react'
import { projects } from '../data/projects'
import { useLightbox } from './Lightbox'
import { Reveal, SectionHead } from './shared'

const filters = ['All', 'Machine Learning', 'Hackathon builds', 'Systems & Data']
const groups = {
  'Machine Learning': ['fyp', 'stroke', 'lucid'],
  'Hackathon builds': ['lucid', 'bantuan', 'vivavoice', 'juristwin', 'scam'],
  'Systems & Data': ['rust', 'dbs', 'fyp'],
}

function Gallery({ p }) {
  const open = useLightbox()
  const items = p.gallery.map((g) => ({ src: `/projects/${g.src}.jpg`, title: p.title, sub: g.caption }))
  return (
    <div className="proj-gallery">
      <div className="proj-gallery-head"><Images size={14} /> {p.gallery.length} screenshots · click to view</div>
      <div className="proj-gallery-strip">
        {p.gallery.map((g, i) => (
          <button className="proj-shot" key={g.src} onClick={() => open(items, i)} title={g.caption}>
            <img src={`/projects/${g.src}-thumb.jpg`} alt={g.caption} loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  )
}

function Project({ p, featured }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div layout className={`card proj accent-${p.accent} ${featured ? 'featured' : ''}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5 }}>
      <div className="proj-top">
        <div style={{ display: 'flex', gap: 14 }}>
          <div className="proj-emoji">{p.emoji}</div>
          <div><h3>{p.title}</h3><div className="proj-ctx">{p.context}</div></div>
        </div>
        <span className="proj-period">{p.period}</span>
      </div>
      {p.image && <div className="proj-img"><img src={p.image} alt={p.title} loading="lazy" /></div>}
      {p.gallery?.length > 0 && <Gallery p={p} />}
      <p className="proj-sum">{p.summary}</p>
      {p.metrics.length > 0 && <div className="proj-metrics">{p.metrics.map((m) => <div className="metric" key={m.label}><b>{m.value}</b><span>{m.label}</span></div>)}</div>}
      <div className="chips">{p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
      <div className="proj-foot">
        <div className="proj-links">
          {p.links.map((l) => (
            <a className="btn btn-ghost btn-sm" key={l.url} href={l.url} target="_blank" rel="noreferrer">
              {/github/i.test(l.label) ? <Github size={14} /> : <ExternalLink size={14} />} {l.label}
            </a>
          ))}
        </div>
        {p.details?.length > 0 && (
          <button className="btn btn-ghost btn-sm" onClick={() => setOpen(!open)}>
            {open ? 'Show less' : 'Read more'} <motion.span animate={{ rotate: open ? 180 : 0 }} style={{ display: 'inline-flex' }}><ChevronDown size={14} /></motion.span>
          </button>
        )}
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div className="proj-details" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
            {p.details.map((d, i) => <p key={i}>{d}</p>)}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
  const [f, setF] = useState('All')
  const list = f === 'All' ? projects : projects.filter((p) => groups[f].includes(p.id))
  return (
    <section className="section" id="projects" style={{ background: 'var(--bg-3)' }}>
      <div className="container">
        <SectionHead eyebrow="Projects" title="Things I've built, and what they actually do." sub="The builds I can talk about in detail: what the problem was, what I decided, and what came out the other end. Click the screenshots to see them full size, and open Read more for the full story." />
        <Reveal className="proj-filter">
          {filters.map((x) => <button key={x} className={`pill-btn ${f === x ? 'active' : ''}`} onClick={() => setF(x)}>{x}</button>)}
        </Reveal>
        <motion.div layout className="proj-grid">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => <Project key={p.id} p={p} featured={f === 'All' && i === 0} />)}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
