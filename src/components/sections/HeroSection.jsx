import laptopBackgroundPng from '../../assets/images/hero/laptopbackground.png'
import laptopBackgroundW640Webp from '../../assets/images/hero/laptopbackground-w640.webp'
import laptopBackgroundW960Webp from '../../assets/images/hero/laptopbackground-w960.webp'
import ResponsivePicture from '../ui/ResponsivePicture'

function HeroSection() {
  return (
    <section className="relative isolate overflow-visible pt-8">
      <div className="relative z-[20] mt-2 px-2 text-center md:mt-3">
        <h1 className="font-['Crimson_Text'] text-[clamp(3rem,12vw,8.5rem)] font-normal leading-[0.92] tracking-[-0.06em] text-black">
          Browse everything.
        </h1>
      </div>

      <div className="relative mx-auto mt-12 w-full max-w-[1020px] md:mt-20">
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-[1] h-[180px] w-screen -translate-x-1/2 rounded-t-[32px] border-x border-white/35 bg-[#C7D0B8] md:h-[260px] md:rounded-t-[52px]" />

        <div className="relative z-[10] mx-auto w-[94%] max-w-[960px]">
          <div className="rounded-t-[30px] border-x-[10px] border-t-[10px] border-black bg-black shadow-[0_30px_70px_rgba(0,0,0,0.22)] md:rounded-t-[46px] md:border-x-[14px] md:border-t-[14px]">
            <div className="relative aspect-[30/17] overflow-hidden rounded-t-[20px] bg-black md:rounded-t-[30px]">
              <ResponsivePicture
                sources={[
                  {
                    type: 'image/webp',
                    srcSetByWidth: {
                      640: laptopBackgroundW640Webp,
                      960: laptopBackgroundW960Webp,
                    },
                  },
                ]}
                fallbackSrc={laptopBackgroundPng}
                alt="Area product preview on a laptop screen"
                className="absolute inset-0 h-full w-full object-cover object-center"
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 80vw, 960px"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
