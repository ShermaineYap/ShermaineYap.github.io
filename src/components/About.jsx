import { about, profile } from '../data/profile'
import { education, experience, activities } from '../data/experience'
import { skills } from '../data/skills'
import { Reveal, SectionHead } from './shared'

const icons = { 'Machine Learning': '🤖', 'Data Pipelines': '🔁', 'Explainable AI': '🔍', 'Sports Analytics': '🏸', 'Hackathons': '🏆', 'Badminton': '🎯' }
const accents = ['violet', 'teal', 'amber', 'rose', 'violet', 'teal']

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionHead eyebrow="About" title="A badminton player who ended up modelling badminton injuries." />
        <div className="about-grid">
          <Reveal>
            {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <div className="lang-row">{about.languages.map((l) => <span className="tag" key={l}>🗣 {l}</span>)}</div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Core interests</div>
            <div className="interest-grid">
              {profile.interests.map((it, i) => (
                <div className={`card interest accent-${accents[i % accents.length]}`} key={it}>
                  <div className="ico">{icons[it] || '✨'}</div>{it}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function EducationExperience() {
  return (
    <section className="section" id="education" style={{ background: 'var(--bg-3)' }}>
      <div className="container">
        <div className="two-col">
          <div>
            <SectionHead eyebrow="Education" title="Where I studied." />
            <div className="timeline">
              {education.map((e, i) => (
                <Reveal className="tl-item" key={e.degree} delay={i * 0.08}>
                  <div className="tl-head"><span className="tl-emoji">{e.emoji}</span><div>
                    <div className="tl-title">{e.degree}</div>
                    <div className="tl-org">{e.school}</div>
                    <div className="tl-period">{e.period}</div>
                    <span className="tl-grade">{e.grade}</span>
                  </div></div>
                </Reveal>
              ))}
            </div>
          </div>
          <div id="experience">
            <SectionHead eyebrow="Experience" title="Where I've worked." />
            <div className="timeline">
              {experience.map((e, i) => (
                <Reveal className="tl-item" key={e.role} delay={i * 0.08}>
                  <div className="tl-head"><span className="tl-emoji">{e.emoji}</span><div>
                    <div className="tl-title">{e.role}</div>
                    <div className="tl-org">{e.org}</div>
                    <div className="tl-period">{e.period}</div>
                    <ul className="tl-bullets">{e.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
                  </div></div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 56 }}>
          <Reveal><div className="eyebrow">Leadership & activities</div></Reveal>
          <div className="act-grid">
            {activities.map((a, i) => (
              <Reveal className="card act" key={a.title} delay={i * 0.06}>
                <span className="ico">{a.emoji}</span><div><b>{a.title}</b><span>{a.sub}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const accents = ['violet', 'teal', 'amber', 'rose', 'violet']
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead eyebrow="Skills" title="Technical skills." sub="What I work with day to day, grouped by what it's for." />
        <div className="skills-grid">
          {skills.map((s, i) => (
            <Reveal className={`card skill-card accent-${accents[i % accents.length]}`} key={s.group} delay={i * 0.07}>
              <h3><span className="sw" />{s.group}</h3>
              <div className="chips">{s.items.map((it) => <span className="tag" key={it}>{it}</span>)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
