import { Check, X } from 'lucide-react'
import { comparisonRows } from '../../data/landingData'

function FeatureCell({ text, positive = true }) {
  const Icon = positive ? Check : X

  return (
    <div className="flex items-center gap-3">
      <Icon
        className={`h-4 w-4 shrink-0 ${positive ? 'text-[#556B2F]' : 'text-black/55'}`}
        strokeWidth={1.8}
      />
      <span className="font-['Inter'] text-[15px] text-black">{text}</span>
    </div>
  )
}

function ComparisonSection() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 bg-white pb-12">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="hidden lg:grid lg:grid-cols-3">
          <div className="relative z-10 overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <div className="flex h-[104px] items-center justify-center border-b border-black/20">
              <h3 className="font-['Inter'] text-[22px] font-medium text-black">Area</h3>
            </div>

            {comparisonRows.map((row, index) => (
              <div
                key={`area-${index}`}
                className="flex min-h-[91px] items-center border-b border-black/10 px-8 last:border-b-0"
              >
                <FeatureCell text={row.area.text} positive={row.area.positive} />
              </div>
            ))}
          </div>

          <div className="pt-3">
            <div className="flex h-[104px] items-center justify-center border-b border-black/20">
              <h3 className="font-['Inter'] text-[22px] font-normal text-[#667085]">WebSurge</h3>
            </div>

            {comparisonRows.map((row, index) => (
              <div
                key={`websurge-${index}`}
                className="flex min-h-[91px] items-center border-b border-l border-black/10 px-8"
              >
                <FeatureCell text={row.webSurge.text} positive={row.webSurge.positive} />
              </div>
            ))}
          </div>

          <div className="pt-3">
            <div className="flex h-[104px] items-center justify-center border-b border-black/20">
              <h3 className="font-['Inter'] text-[22px] font-normal text-[#667085]">HyperView</h3>
            </div>

            {comparisonRows.map((row, index) => (
              <div
                key={`hyperview-${index}`}
                className="flex min-h-[91px] items-center border-b border-l border-black/10 px-8"
              >
                <FeatureCell text={row.hyperView.text} positive={row.hyperView.positive} />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 lg:hidden">
          {[
            { key: 'area', title: 'Area', style: 'font-medium text-black' },
            { key: 'webSurge', title: 'WebSurge', style: 'font-normal text-[#667085]' },
            { key: 'hyperView', title: 'HyperView', style: 'font-normal text-[#667085]' },
          ].map((column) => (
            <div
              key={column.key}
              className="overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="flex h-[78px] items-center justify-center border-b border-black/10">
                <h3 className={`font-['Inter'] text-[22px] ${column.style}`}>{column.title}</h3>
              </div>
              {comparisonRows.map((row, index) => (
                <div
                  key={`${column.key}-mobile-${index}`}
                  className="border-b border-black/10 px-6 py-5 last:border-b-0"
                >
                  <FeatureCell
                    text={row[column.key].text}
                    positive={row[column.key].positive}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ComparisonSection
