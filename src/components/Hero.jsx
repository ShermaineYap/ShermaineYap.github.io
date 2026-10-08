import { motion } from 'framer-motion'
import { ArrowDown, Mail, Sparkles, Trophy } from 'lucide-react'
import { profile, stats } from '../data/profile'
import { Counter, Typewriter } from './shared'

const chips = [
  { text: 'SAS Hackathon 2025', sub: 'Global Champion', icon: '🏆', style: { top: '2%', left: '-14%' }, delay: 0.9 },
  { text: 'Google Data Center', sub: 'Runner-Up · Best Teamwork', icon: '🥈', style: { bottom: '14%', right: '-10%' }, delay: 1.1 },
  { text: 'IBM Bob-a-thon', sub: '1st Runner-Up', icon: '🤖', style: { bottom: '-4%', left: '2%' }, delay: 1.3 },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="bg-orbs">
        <motion.div className="orb" style={{ width: 420, height: 420, background: 'var(--violet-soft)', top: '-8%', left: '-6%' }} animate={{ y: [0, 30, 0] }} transition={{ duration: 9, repeat: Infinity }} />
        <motion.div className="orb" style={{ width: 360, height: 360, background: 'var(--teal-soft)', bottom: '0%', right: '-5%' }} animate={{ y: [0, -30, 0] }} transition={{ duration: 11, repeat: Infinity }} />
        <motion.div className="orb" style={{ width: 260, height: 260, background: 'var(--amber-soft)', top: '40%', right: '30%' }} animate={{ x: [0, 25, 0] }} transition={{ duration: 13, repeat: Infinity }} />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          <div className="hero-copy">
            <motion.div className="hero-pill" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <span className="pulse" /> {profile.availability}
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
              Hi, I'm <span className="grad">Shermaine</span>.
            </motion.h1>
            <motion.div className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <Typewriter phrases={['Data & AI Engineer', 'ML model builder', 'Data pipeline tinkerer', 'Serial hackathon competitor', 'Badminton player who models badminton']} />
            </motion.div>
            <motion.p className="hero-tag" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>{profile.tagline}</motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 }}>
              <a className="btn btn-primary" href="#projects"><Sparkles size={16} /> See my work</a>
              <a className="btn btn-ghost" href="#hackathons"><Trophy size={16} /> Hackathon record</a>
              <a className="btn btn-ghost" href={`mailto:${profile.email}`}><Mail size={16} /> Email me</a>
            </motion.div>
          </div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
            <div className="hero-photo-wrap">
              <div className="hero-blob" />
              <img className="hero-photo" src={profile.photo} alt={profile.name} />
              {chips.map((c) => (
                <motion.div key={c.text} className="float-chip" style={c.style} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: [0, -6, 0] }} transition={{ opacity: { delay: c.delay }, y: { delay: c.delay, duration: 4, repeat: Infinity } }}>
                  <span style={{ fontSize: 20 }}>{c.icon}</span>
                  <div>{c.text}<small>{c.sub}</small></div>
                </motion.div>
              ))}
            </div>
            <div className="mobile-chips">
              {chips.map((c) => <span key={c.text} className="tag">{c.icon} {c.text} · {c.sub}</span>)}
            </div>
          </motion.div>
        </div>
        <motion.div className="stats" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.7 }} style={{ marginTop: 64 }}>
          {stats.map((s) => (
            <div className="card stat" key={s.label}>
              <div className="stat-value"><Counter value={s.value} decimals={s.decimals || 0} suffix={s.suffix || ''} /></div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="scroll-hint"><ArrowDown size={14} /><span /></div>
    </section>
  )
}
