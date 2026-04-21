import { useEffect, useState } from 'react'

import laptopBackground from './assets/images/hero/laptopbackground.png'

const navItems = ['Benefits', 'Specifications', 'How-to', 'Contact Us']

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-black">
      <header className="fixed left-0 top-0 z-50 w-full">
        <nav className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-8 lg:px-10">
          <a
            href="#top"
            className={`text-[44px] font-semibold tracking-[-0.02em] leading-none transition-all duration-500 ease-out ${
              isScrolled
                ? 'pointer-events-none -translate-y-4 opacity-0'
                : 'translate-y-0 opacity-100'
            }`}
          >
            Area
          </a>

          <ul
            className={`fixed left-1/2 top-3 flex -translate-x-1/2 items-center font-semibold transition-[gap,padding,border-radius,background-color,border-color,box-shadow,backdrop-filter,color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isScrolled
                ? 'gap-8 rounded-full border border-white/40 bg-white/70 px-8 py-3 text-lg shadow-[0_10px_32px_rgba(20,20,20,0.12)] backdrop-blur-md'
                : 'gap-10 rounded-2xl border border-transparent bg-transparent px-2 py-1 text-xl shadow-none'
            }`}
          >
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block transition-colors duration-300 hover:text-[#3E5717]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={`rounded-full bg-[#3E5717] px-7 py-3 text-lg font-bold text-white transition-all duration-500 ease-out hover:bg-[#2f4111] ${
              isScrolled
                ? 'pointer-events-none translate-y-4 opacity-0'
                : 'translate-y-0 opacity-100'
            }`}
          >
            Learn More
          </button>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-[1400px] px-8 pb-20 pt-36 lg:px-10">
        <section className="relative isolate overflow-visible pb-16 pt-12">
          <div className="relative z-[45] mt-8 px-2 text-center md:mt-10">
            <h1 className="font-serif text-[clamp(3.25rem,8vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-black">
              Browse everything.
            </h1>
          </div>

          <div className="relative z-[40] mx-auto mt-16 w-full max-w-[1020px] md:mt-20">
            <div className="relative">
              <div className="pointer-events-none absolute left-1/2 top-[43%] z-[5] h-[300px] w-screen -translate-x-1/2 rounded-[38px] border-x border-white/35 bg-[#C7D0B8] md:top-[45%] md:h-[340px] md:rounded-[52px]" />

              <div className="relative z-[30] mx-auto w-[94%] max-w-[960px]">
                <div className="rounded-t-[36px] border-x-[12px] border-t-[12px] border-black bg-black shadow-[0_30px_70px_rgba(0,0,0,0.22)] md:rounded-t-[46px] md:border-x-[14px] md:border-t-[14px]">
                  <div className="relative aspect-[30/17] overflow-hidden rounded-t-[24px] bg-black md:rounded-t-[30px]">
                    <img
                      src={laptopBackground}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover object-center"
                      draggable={false}
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute -bottom-3 left-0 z-[20] h-6 w-10 rounded-br-[22px] border-b-[12px] border-r-[12px] border-black md:-bottom-3.5 md:h-7 md:w-12 md:rounded-br-[24px] md:border-b-[14px] md:border-r-[14px]" />
                <div className="pointer-events-none absolute -bottom-3 right-0 z-[20] h-6 w-10 rounded-bl-[22px] border-b-[12px] border-l-[12px] border-black md:-bottom-3.5 md:h-7 md:w-12 md:rounded-bl-[24px] md:border-b-[14px] md:border-l-[14px]" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((card) => (
            <article key={card} className="rounded-2xl border border-gray-200 p-6">
              <h2 className="text-2xl font-semibold">Section Card {card}</h2>
              <p className="mt-2 text-gray-600">
                Placeholder content to extend the page and test the navigation
                behavior while scrolling.
              </p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-3xl bg-[#EEF2E8] p-10">
          <h2 className="text-4xl font-semibold">More Content</h2>
          <p className="mt-4 text-lg text-gray-700">
            This area simulates the rest of your landing page sections.
          </p>
          <div className="mt-6 h-[900px] rounded-2xl bg-white/80" />
        </section>
      </main>
    </div>
  )
}

export default App
