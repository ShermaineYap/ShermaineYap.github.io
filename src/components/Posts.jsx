import { ExternalLink, Eye, Heart, Images, MessageCircle, Quote, Repeat2 } from 'lucide-react'
import { posts } from '../data/posts'
import { useLightbox } from './Lightbox'
import { Reveal, SectionHead } from './shared'
import { Linkedin } from './icons'

const fmt = (n) => n.toLocaleString('en-US')

function PostCard({ p, i }) {
  const open = useLightbox()
  const items = p.images.map((f, k) => ({ src: `/posts/${f}.jpg`, title: p.title, sub: `${p.date} · photo ${k + 1} of ${p.images.length}` }))
  const cover = p.images[0]
  return (
    <Reveal className={`card lp ${i < 2 ? 'lp-wide' : ''}`} delay={0.05 * i}>
      <button className="lp-cover" onClick={() => open(items, 0)} aria-label="View photos">
        <img src={`/posts/${cover}${p.images.length > 1 ? '-thumb' : ''}.jpg`} alt="" loading="lazy" />
        {p.images.length > 1 && <span className="lp-count"><Images size={13} /> {p.images.length}</span>}
      </button>
      <div className="lp-body">
        <div className="lp-meta">
          <span className="lp-li"><Linkedin size={13} /> {p.repost ? `Repost · ${p.repost.replace(/ \(.*\)/, '')}` : 'LinkedIn'}</span>
          <span>{p.date}</span>
        </div>
        <h3 className="lp-title">{p.title}</h3>
        <p className="lp-excerpt">{p.excerpt}</p>
        <div className="lp-foot">
          <div className="lp-stats">
            <span title="Reactions"><Heart size={13} /> {fmt(p.stats.reactions)}</span>
            <span title="Comments"><MessageCircle size={13} /> {fmt(p.stats.comments)}</span>
            {p.stats.reposts > 0 && <span title="Reposts"><Repeat2 size={13} /> {fmt(p.stats.reposts)}</span>}
            {p.stats.impressions && <span title="Views"><Eye size={13} /> {fmt(p.stats.impressions)}</span>}
          </div>
          <a className="lp-link" href={p.url} target="_blank" rel="noreferrer" aria-label="Open on LinkedIn"><ExternalLink size={15} /></a>
        </div>
      </div>
    </Reveal>
  )
}

export default function Posts() {
  const open = useLightbox()
  const comments = posts.flatMap((p) => p.comments.map((c) => ({ ...c, post: p })))
  const items = comments.map((c) => ({ src: `/posts/${c.src}.jpg`, title: `Comment from ${c.who}`, sub: c.post.title }))
  return (
    <section className="section" id="posts">
      <div className="container">
        <SectionHead eyebrow="From my LinkedIn" title="Moments worth sharing." sub="A few posts from the past year, and what people said about them. Click a photo or a comment to see it full size." />
        <div className="lp-grid">
          {posts.map((p, i) => <PostCard key={p.id} p={p} i={i} />)}
        </div>

        {comments.length > 0 && (
          <>
            <Reveal className="lc-head">
              <Quote size={18} />
              <h3>What people said</h3>
            </Reveal>
            <div className="lc-wall">
              {comments.map((c, k) => (
                <Reveal key={c.src} className="lc" delay={0.04 * k}>
                  <button className="lc-shot" onClick={() => open(items, k)} aria-label={`Comment from ${c.who}`}>
                    <img src={`/posts/${c.src}.jpg`} alt={`Comment from ${c.who}`} loading="lazy" />
                  </button>
                  <div className="lc-on">on <a href={c.post.url} target="_blank" rel="noreferrer">{c.post.label}</a></div>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
