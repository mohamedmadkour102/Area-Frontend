import seeBigJpg from '../../assets/images/seebig/seebigpic.jpg'
import seeBigW640Webp from '../../assets/images/seebig/seebigpic-w640.webp'
import seeBigW960Webp from '../../assets/images/seebig/seebigpic-w960.webp'
import seeBigW1280Webp from '../../assets/images/seebig/seebigpic-w1280.webp'
import seeBigW1600Webp from '../../assets/images/seebig/seebigpic-w1600.webp'
import seeBigW1920Webp from '../../assets/images/seebig/seebigpic-w1920.webp'
import { seeBigItems } from '../../data/landingData'
import ResponsivePicture from '../ui/ResponsivePicture'

function SeeBigPictureSection() {
  return (
    <section id="how-to" className="relative left-1/2 w-screen -translate-x-1/2 bg-white">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-stretch gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.02fr_1fr] lg:gap-6 lg:px-10 lg:py-24">
        <div className="flex flex-col">
          <div className="border-t border-black/10 pt-10">
            <h2 className="font-['Crimson_Text'] text-[clamp(2.3rem,7vw,4.8rem)] font-normal leading-[0.95] tracking-[-0.04em] text-black">
              See the Big Picture
            </h2>

            <p className="mt-6 max-w-[640px] font-['Inter'] text-[18px] leading-[1.55] text-[#667085] sm:mt-8 sm:text-[20px]">
              Area turns your data into clear, vibrant visuals that show you exactly what&apos;s happening in each region.
            </p>
          </div>

          <div className="mt-10 sm:mt-12">
            {seeBigItems.map((item) => (
              <div
                key={item.number}
                className="grid grid-cols-[44px_1fr] items-start gap-4 border-t border-black/10 py-6 sm:grid-cols-[56px_1fr]"
              >
                <span className="font-['Inter'] text-[15px] font-semibold tracking-[0.02em] text-[#6B7280]">
                  {item.number}
                </span>

                <p className="font-['Inter'] text-[16px] leading-[1.55] text-black sm:text-[18px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-[#C7D0B8] px-8 py-4 font-['Inter'] text-[16px] font-semibold text-black transition-colors duration-300 hover:bg-[#b8c4a3]"
            >
              Discover More
            </a>
          </div>
        </div>

        <div className="lg:h-full lg:pl-4">
          <div className="h-full min-h-[360px] overflow-hidden rounded-[26px] bg-[#D1C3A3] sm:min-h-[520px] lg:min-h-[720px] lg:rounded-[34px]">
            <ResponsivePicture
              sources={[
                {
                  type: 'image/webp',
                  srcSetByWidth: {
                    640: seeBigW640Webp,
                    960: seeBigW960Webp,
                    1280: seeBigW1280Webp,
                    1600: seeBigW1600Webp,
                    1920: seeBigW1920Webp,
                  },
                },
              ]}
              fallbackSrc={seeBigJpg}
              alt="Colorful regional analytics visualization"
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 92vw, 45vw"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeeBigPictureSection
