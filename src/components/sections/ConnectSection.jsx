function ConnectSection() {
  return (
    <section id="contact" className="relative left-1/2 w-screen -translate-x-1/2 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="border-t border-black/10 pt-14 sm:pt-20">
          <div className="mx-auto max-w-[1080px] text-center">
            <h2 className="font-['Crimson_Text'] text-[clamp(2.3rem,8vw,5.2rem)] font-normal leading-[0.95] tracking-[-0.04em] text-black">
              Connect with us
            </h2>

            <p className="mx-auto mt-8 max-w-[780px] font-['Inter'] text-[18px] leading-[1.6] text-[#667085] sm:mt-10 sm:text-[20px]">
              Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.
            </p>

            <a
              href="#top"
              className="mx-auto mt-10 flex h-[64px] w-full max-w-[1010px] items-center justify-center rounded-full bg-[#4C6507] px-8 font-['Inter'] text-[16px] font-semibold text-white transition-colors duration-300 hover:bg-[#3f5406] sm:mt-12 sm:h-[72px] sm:text-[17px]"
            >
              Learn More ↗
            </a>
          </div>

          <div className="mt-20 h-px w-full bg-black/10 sm:mt-24" />
        </div>
      </div>
    </section>
  )
}

export default ConnectSection
