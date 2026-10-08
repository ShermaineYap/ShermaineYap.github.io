import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { certCategories, certificates } from '../data/certificates'
import { useLightbox } from './Lightbox'
import { Reveal, SectionHead } from './shared'

export default function Certificates() {
  const open = useLightbox()
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? certificates : certificates.filter((c) => c.cat === cat)
  const items = list.map((c) => ({ src: `/certs/${c.file}.jpg`, title: c.title, sub: `${c.issuer} · ${c.year}` }))
  return (
    <section className="section" id="certificates" style={{ background: 'var(--bg-3)' }}>
      <div className="container">
        <SectionHead eyebrow="Certificates" title={`${certificates.length} certificates and counting.`} sub="Awards, courses and credentials from the last few years. Filter by type, and click any one to view it full size." />
        <Reveal className="proj-filter">
          {certCategories.map((c) => (
            <button key={c} className={`pill-btn ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>
              {c} <span style={{ opacity: 0.6, marginLeft: 4 }}>{c === 'All' ? certificates.length : certificates.filter((x) => x.cat === c).length}</span>
            </button>
          ))}
        </Reveal>
        <motion.div layout className="cert-grid">
          <AnimatePresence mode="popLayout">
            {list.map((c, i) => (
              <motion.div layout key={c.file} className="card cert" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} onClick={() => open(items, i)}>
                <div className="cert-img">
                  <img src={`/certs/${c.file}-thumb.jpg`} alt={c.title} loading="lazy" />
                  {c.star && <span className="star">★ Highlight</span>}
                </div>
                <div className="cert-body">
                  <div className="cert-title">{c.title}</div>
                  <div className="cert-meta">{c.issuer} · {c.year}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
