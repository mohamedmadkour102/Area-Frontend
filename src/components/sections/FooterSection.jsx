import { footerLinks } from '../../data/landingData'

function FooterSection() {
  return (
    <footer className="relative left-1/2 w-screen -translate-x-1/2 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 pb-5 pt-6 sm:px-6 lg:px-10 lg:pb-6 lg:pt-7">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {footerLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-['Inter'] text-[13px] font-semibold text-black transition-colors duration-300 hover:text-[#56611f]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="font-['Inter'] text-[12px] font-normal tracking-[0.02em] text-[#56611f]">
            © Area. 2025
          </p>

          <p className="font-['Inter'] text-[12px] font-normal tracking-[0.02em] text-[#56611f] md:text-right">
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
