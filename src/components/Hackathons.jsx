import { Award, Medal, Trophy } from 'lucide-react'
import { hackathons } from '../data/hackathons'
import { useLightbox } from './Lightbox'
import { Reveal, SectionHead } from './shared'

const tierIcon = { win: <Trophy size={13} />, place: <Medal size={13} />, entry: <Award size={13} /> }

export default function Hackathons() {
  const open = useLightbox()
  const withCert = hackathons.filter((h) => h.cert)
  const items = withCert.map((h) => ({ src: `/certs/${h.cert}.jpg`, title: h.name, sub: h.result }))
  const wins = hackathons.filter((h) => h.tier === 'win').length
  const places = hackathons.filter((h) => h.tier === 'place').length
  return (
    <section className="section" id="hackathons">
      <div className="container">
        <SectionHead eyebrow="Hackathons & competitions" title="Where I learn fastest." sub="A hard deadline, a field I usually know nothing about, and judges who ask exactly the question I was hoping to avoid. Click any certificate to see it full size." />
        <Reveal className="hack-stats">
          <div className="hack-stat"><b>{hackathons.length}</b> entered</div>
          <div className="hack-stat"><b>{wins}</b> podium finishes</div>
          <div className="hack-stat"><b>{places}</b> finalist / recognised</div>
          <div className="hack-stat"><b>1</b> global championship</div>
        </Reveal>
        <div className="hack-tl">
          {hackathons.map((h, i) => {
            const idx = withCert.indexOf(h)
            return (
              <Reveal className={`hack-row tier-${h.tier} ${i % 2 ? 'right' : ''}`} key={h.name + h.date} delay={0.05}>
                <div className="hack-date">{h.label}</div>
                <div className="hack-dot" />
                <div className="card hack-card">
                  {h.cert
                    ? <img className="thumb" src={`/certs/${h.cert}-thumb.jpg`} alt={h.name} loading="lazy" onClick={() => open(items, idx)} />
                    : <div className="thumb placeholder">{h.tier === 'win' ? '🏆' : '🎯'}</div>}
                  <div>
                    <div className="hack-name">{h.name}</div>
                    <div className="hack-org">{h.org}</div>
                    <div className="hack-result">{tierIcon[h.tier]} {h.result}</div>
                    {h.note && <div className="hack-note">{h.note}</div>}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
