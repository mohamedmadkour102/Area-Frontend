import johnSmithJpg from '../../assets/images/johnsmith/johnsmith.jpg'
import johnSmithW640Webp from '../../assets/images/johnsmith/johnsmith-w640.webp'
import johnSmithW960Webp from '../../assets/images/johnsmith/johnsmith-w960.webp'
import johnSmithW1280Webp from '../../assets/images/johnsmith/johnsmith-w1280.webp'
import johnSmithW1600Webp from '../../assets/images/johnsmith/johnsmith-w1600.webp'
import johnSmithW1920Webp from '../../assets/images/johnsmith/johnsmith-w1920.webp'
import { successSteps } from '../../data/landingData'
import ResponsivePicture from '../ui/ResponsivePicture'

function TestimonialSuccessSection() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 bg-white pb-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="relative">
          <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
            <div className="overflow-hidden rounded-[24px] sm:rounded-[32px]">
              <ResponsivePicture
                sources={[
                  {
                    type: 'image/webp',
                    srcSetByWidth: {
                      640: johnSmithW640Webp,
                      960: johnSmithW960Webp,
                      1280: johnSmithW1280Webp,
                      1600: johnSmithW1600Webp,
                      1920: johnSmithW1920Webp,
                    },
                  },
                ]}
                fallbackSrc={johnSmithJpg}
                alt="John Smith, Head of Data"
                className="h-full min-h-[420px] w-full object-cover sm:min-h-[620px] lg:min-h-[720px]"
                sizes="(max-width: 1024px) 92vw, 45vw"
                loading="lazy"
                draggable={false}
              />
            </div>

            <div className="flex min-h-[420px] flex-col justify-center px-2 lg:min-h-[720px] lg:py-6">
              <blockquote className="font-['Inter'] text-[clamp(1.05rem,3.2vw,1.85rem)] font-normal leading-[1.45] tracking-[-0.01em] text-black">
                &ldquo;I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can&apos;t imagine running my company without it.&rdquo;
              </blockquote>

              <div className="mt-10 sm:mt-12">
                <p className="font-['Inter'] text-[17px] font-medium text-black">John Smith</p>
                <p className="mt-2 font-['Inter'] text-[13px] font-medium tracking-[0.08em] text-[#56611f]">
                  Head of Data
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 h-px bg-black/10" />

          <div className="flex flex-col gap-6 pt-8 md:flex-row md:items-center md:justify-between">
            <h2 className="font-['Crimson_Text'] text-[clamp(2.2rem,8vw,4.6rem)] font-normal leading-[0.95] tracking-[-0.04em] text-black">
              Map Your Success
            </h2>

            <a
              href="#contact"
              className="inline-flex w-fit rounded-full bg-[#C7D0B8] px-8 py-4 font-['Inter'] text-[16px] font-semibold text-black transition-colors duration-300 hover:bg-[#b8c4a3]"
            >
              Discover More
            </a>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-16 lg:gap-10">
            {successSteps.map((item) => (
              <article key={item.number} className="border-t border-black/10 pt-6">
                <div className="font-['Inter'] text-[clamp(4rem,12vw,6rem)] font-light leading-none tracking-[-0.04em] text-black/35">
                  {item.number}
                </div>

                <h3 className="mt-10 font-['Crimson_Text'] text-[2rem] font-normal leading-[1.05] tracking-[-0.03em] text-black sm:mt-14">
                  {item.title}
                </h3>

                <p className="mt-6 max-w-[360px] font-['Inter'] text-[17px] leading-[1.6] text-[#667085]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSuccessSection
