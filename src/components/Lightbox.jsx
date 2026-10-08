import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const Ctx = createContext(null)
export const useLightbox = () => useContext(Ctx)

// items: [{ src, title, sub }]
export function LightboxProvider({ children }) {
  const [state, setState] = useState(null) // { items, index }
  const open = useCallback((items, index = 0) => setState({ items, index }), [])
  const close = () => setState(null)
  const step = useCallback((d) => setState((s) => s && { ...s, index: (s.index + d + s.items.length) % s.items.length }), [])
  useEffect(() => {
    if (!state) return
    const onKey = (e) => { if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1) }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [state, step])
  const cur = state && state.items[state.index]
  return (
    <Ctx.Provider value={open}>
      {children}
      <AnimatePresence>
        {state && (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close}>
            <button className="lightbox-close" onClick={close} aria-label="Close"><X /></button>
            {state.items.length > 1 && <>
              <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); step(-1) }} aria-label="Previous"><ChevronLeft /></button>
              <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); step(1) }} aria-label="Next"><ChevronRight /></button>
            </>}
            <motion.div key={cur.src} initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25 }} onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center' }}>
              <img src={cur.src} alt={cur.title} />
              <div className="lightbox-cap">{cur.title}{cur.sub && <small>{cur.sub}</small>}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  )
}
