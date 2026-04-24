import logoOne from '../../assets/images/trustedby/22502dfc1e4e8a242285d42db1a38e6e853633fc.png'
import logoTwo from '../../assets/images/trustedby/262ae2257b7f47685a1fd90f0f27d6372a2bca23.png'
import logoThree from '../../assets/images/trustedby/4ec63af28a6d626d15af88690afce1177f7da2aa.png'
import logoFour from '../../assets/images/trustedby/5353f37898f8daa86c3f3f525e94362e62de8b6a.png'
import logoFive from '../../assets/images/trustedby/7e2cb6a493f6974234a10a9155f5a9e61358668d.png'
import logoSix from '../../assets/images/trustedby/ab60fb89b643e72e94769301b2a7ea53c2788495.png'

const trustedByLogos = [logoThree, logoOne, logoSix, logoTwo, logoFive, logoFour]

function TrustedBySection() {
  return (
    <section className="relative left-1/2 mt-0 w-screen -translate-x-1/2 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-10 lg:py-[84px]">
        <p className="text-left font-['Inter'] text-sm font-normal tracking-[0.02em] text-[#7a7a75]">
          Trusted by:
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:mt-11 md:flex-nowrap md:gap-x-8 lg:gap-x-14">
          {trustedByLogos.map((logoSrc, index) => (
            <img
              key={logoSrc}
              src={logoSrc}
              alt={`Partner logo ${index + 1}`}
              className="h-6 w-auto shrink-0 opacity-90 grayscale transition-opacity duration-300 hover:opacity-100 sm:h-7"
              loading="lazy"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBySection
