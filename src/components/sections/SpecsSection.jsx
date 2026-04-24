function SpecsSection() {
  return (
    <section id="specs" className="relative left-1/2 w-screen -translate-x-1/2 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="border-t border-black/10 pt-14 text-center">
          <p className="font-['Inter'] text-sm font-medium tracking-[0.02em] text-[#56611f]">
            Specs
          </p>

          <h2 className="mx-auto mt-8 max-w-[900px] font-['Crimson_Text'] text-[clamp(2.4rem,9vw,5.8rem)] font-normal leading-[0.95] tracking-[-0.05em] text-black">
            Why Choose Area?
          </h2>

          <p className="mx-auto mt-8 max-w-[980px] font-['Inter'] text-[18px] leading-[1.65] text-[#667085] sm:text-[20px]">
            You need a solution that keeps up. That&apos;s why we developed Area. A developer-friendly approach to streamline your business.
          </p>

          <div className="mt-12">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-[#C7D0B8] px-8 py-4 font-['Inter'] text-[16px] font-semibold text-black transition-colors duration-300 hover:bg-[#b8c4a3]"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecsSection
