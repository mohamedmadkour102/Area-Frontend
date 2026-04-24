import { BarChart3, Globe, Languages, TrendingUp } from 'lucide-react'
import { benefitCards } from '../../data/landingData'

const iconMap = {
  BarChart3,
  Globe,
  Languages,
  TrendingUp,
}

function BenefitsSection() {
  return (
    <section id="benefits" className="relative left-1/2 w-screen -translate-x-1/2 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-10 lg:py-24">
        <p className="font-['Inter'] text-sm font-medium tracking-[0.02em] text-[#56611f]">
          Benefits
        </p>

        <div className="mt-8 max-w-[820px]">
          <h2 className="font-['Crimson_Text'] text-[clamp(2.4rem,8vw,5rem)] font-normal leading-[0.95] tracking-[-0.04em] text-black">
            We&apos;ve cracked the code.
          </h2>

          <p className="mt-6 max-w-[560px] font-['Inter'] text-[18px] leading-[1.55] text-[#667085] sm:mt-8 sm:text-[22px]">
            Area provides real insights, without the data overload.
          </p>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-12 md:mt-20 md:grid-cols-2 xl:grid-cols-4">
          {benefitCards.map((item) => {
            const Icon = iconMap[item.icon]

            return (
              <article key={item.title} className="border-t border-black/10 pt-10">
                <Icon className="h-5 w-5 text-black" strokeWidth={1.8} />

                <h3 className="mt-8 font-['Crimson_Text'] text-[2rem] leading-[1.05] tracking-[-0.03em] text-black">
                  {item.title}
                </h3>

                <p className="mt-6 max-w-[310px] font-['Inter'] text-[17px] leading-[1.6] text-[#667085]">
                  {item.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
