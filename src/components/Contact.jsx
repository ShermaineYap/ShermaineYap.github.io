import { Mail } from 'lucide-react'
import { Github, Linkedin } from './icons'
import { profile } from '../data/profile'
import { Reveal } from './shared'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="contact-card">
          <h2>If the data is messy and the answer has to be explainable, I'd like to hear about it.</h2>
          <p>I'm based in {profile.location} and available from October 2026 for graduate roles in data, analytics or AI engineering. Also always up for a badminton game.</p>
          <div className="contact-actions">
            <a className="btn btn-light" href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a>
            <a className="btn btn-outline" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a className="btn btn-outline" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
          </div>
        </Reveal>
        <div className="footer">
          <span>© {new Date().getFullYear()} {profile.name} · Cheras, Selangor, Malaysia</span>
          <span>Last updated October 2026</span>
        </div>
      </div>
    </section>
  )
}
