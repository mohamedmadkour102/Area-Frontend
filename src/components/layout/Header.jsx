import { useEffect, useId, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '../../data/landingData'

function Header({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()
  const toggleRef = useRef(null)
  const panelRef = useRef(null)
  const previouslyFocusedEl = useRef(null)

  useEffect(() => {
    if (!isMenuOpen) return

    previouslyFocusedEl.current = document.activeElement

    const panel = panelRef.current
    const firstLink = panel?.querySelector('a[href]')
    if (firstLink) firstLink.focus()

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow

      const prev = previouslyFocusedEl.current
      if (prev && typeof prev.focus === 'function') prev.focus()
    }
  }, [isMenuOpen])

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="relative h-20 w-full px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <a
          href="#top"
          className={`absolute left-4 top-1/2 z-[60] -translate-y-1/2 text-[34px] font-semibold leading-none tracking-[-0.02em] transition-all duration-500 ease-out sm:text-[38px] lg:left-8 lg:text-[44px] ${
            isScrolled ? 'pointer-events-none -translate-y-[70%] opacity-0' : 'opacity-100'
          }`}
        >
          Area
        </a>

        <ul
          className={`fixed left-1/2 top-3 z-[55] hidden -translate-x-1/2 items-center font-['Inter'] font-bold transition-[gap,padding,border-radius,background-color,border-color,box-shadow,backdrop-filter,color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:flex ${
            isScrolled
              ? 'gap-6 rounded-full border border-white/40 bg-white/70 px-7 py-3 text-[15px] shadow-[0_10px_32px_rgba(20,20,20,0.12)] backdrop-blur-md'
              : 'gap-8 rounded-2xl border border-transparent bg-transparent px-2 py-1 text-[16px] shadow-none'
          }`}
        >
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block whitespace-nowrap transition-colors duration-300 hover:text-[#3E5717]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`absolute right-4 top-1/2 z-[60] hidden -translate-y-1/2 rounded-full bg-[#3E5717] px-7 py-3 text-[16px] font-['Inter'] font-bold text-white transition-all duration-500 ease-out hover:bg-[#2f4111] lg:right-8 md:inline-flex md:items-center md:justify-center ${
            isScrolled ? 'pointer-events-none -translate-y-[30%] opacity-0' : 'opacity-100'
          }`}
        >
          Learn More
        </a>

        <button
          type="button"
          ref={toggleRef}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          className="absolute right-4 top-1/2 z-[60] -translate-y-1/2 rounded-full border border-black/10 bg-white p-2.5 text-black md:hidden"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div
          id={menuId}
          ref={panelRef}
          className="mx-4 mt-1 rounded-2xl border border-black/10 bg-white/95 p-4 shadow-lg backdrop-blur md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-2 font-['Inter'] text-sm font-semibold text-black hover:bg-black/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-3 flex w-full items-center justify-center rounded-full bg-[#3E5717] px-6 py-3 text-sm font-['Inter'] font-bold text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Learn More
          </a>
        </div>
      )}
    </header>
  )
}

export default Header
