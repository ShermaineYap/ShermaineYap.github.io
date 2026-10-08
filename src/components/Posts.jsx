import { ExternalLink, Heart, MessageCircle, Repeat2, Eye } from 'lucide-react'
import { posts } from '../data/posts'
import { useLightbox } from './Lightbox'
import { Reveal, SectionHead } from './shared'
import { Linkedin } from './icons'

const fmt = (n) => n.toLocaleString('en-US')

function Post({ p, i }) {
  const open = useLightbox()
  const items = p.images.map((f, k) => ({ src: `/posts/${f}.jpg`, title: p.repost ? `Reposted from ${p.repost}` : 'From my LinkedIn', sub: `${p.date} · photo ${k + 1} of ${p.images.length}` }))
  const [hero, ...rest] = p.images
  return (
    <Reveal className={`card post ${i === 0 ? 'post-featured' : ''}`} delay={0.05 * i}>
      <div className="post-media">
        <button className={`post-hero ${p.images.length === 1 ? "single" : ""}`} onClick={() => open(items, 0)}>
          <img src={`/posts/${hero}${p.images.length > 1 ? '-thumb' : ''}.jpg`} alt="" loading="lazy" />
        </button>
        {rest.length > 0 && (
          <div className="post-strip">
            {rest.map((f, k) => (
              <button key={f} className="post-shot" onClick={() => open(items, k + 1)}>
                <img src={`/posts/${f}-thumb.jpg`} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="post-body">
        <div className="post-meta">
          <span className="post-li"><Linkedin size={13} /> {p.repost ? `Reposted · ${p.repost}` : 'LinkedIn post'}</span>
          <span className="post-date">{p.date}</span>
        </div>
        <h3>{p.title}</h3>
        <p className="post-excerpt">{p.excerpt}</p>
        <div className="post-stats">
          <span><Heart size={14} /> {fmt(p.stats.reactions)}</span>
          <span><MessageCircle size={14} /> {fmt(p.stats.comments)}</span>
          {p.stats.reposts > 0 && <span><Repeat2 size={14} /> {fmt(p.stats.reposts)}</span>}
          {p.stats.impressions && <span><Eye size={14} /> {fmt(p.stats.impressions)} views</span>}
        </div>
        {p.comments.length > 0 && (
          <div className="post-comments">
            <div className="post-comments-head"><MessageCircle size={13} /> Comments on the post</div>
            {p.comments.map((c, k) => (
              <button key={c.src} className="post-comment" onClick={() => open(p.comments.map((x) => ({ src: `/posts/${x.src}.jpg`, title: `Comment from ${x.who}`, sub: p.title })), k)} title={c.who}>
                <img src={`/posts/${c.src}.jpg`} alt={`Comment from ${c.who}`} loading="lazy" />
              </button>
            ))}
          </div>
        )}
        <a className="btn btn-ghost btn-sm" href={p.url} target="_blank" rel="noreferrer"><ExternalLink size={14} /> Read the post on LinkedIn</a>
      </div>
    </Reveal>
  )
}

export default function Posts() {
  return (
    <section className="section" id="posts">
      <div className="container">
        <SectionHead eyebrow="From my LinkedIn" title="The posts people responded to." sub="A few moments from the last year, in my own words at the time, along with some of the comments that made my week. Click a photo to see it full size." />
        <div className="post-grid">
          {posts.map((p, i) => <Post key={p.id} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}
