import mountTwoJpg from '../../assets/images/mount2/mountain2.jpg'
import mountTwoW640Webp from '../../assets/images/mount2/mountain2-w640.webp'
import mountTwoW960Webp from '../../assets/images/mount2/mountain2-w960.webp'
import mountTwoW1280Webp from '../../assets/images/mount2/mountain2-w1280.webp'
import mountTwoW1600Webp from '../../assets/images/mount2/mountain2-w1600.webp'
import mountTwoW1920Webp from '../../assets/images/mount2/mountain2-w1920.webp'
import ResponsivePicture from '../ui/ResponsivePicture'

function SecondaryImageSection() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
        <ResponsivePicture
          sources={[
            {
              type: 'image/webp',
              srcSetByWidth: {
                640: mountTwoW640Webp,
                960: mountTwoW960Webp,
                1280: mountTwoW1280Webp,
                1600: mountTwoW1600Webp,
                1920: mountTwoW1920Webp,
              },
            },
          ]}
          fallbackSrc={mountTwoJpg}
          alt="Wide landscape view"
          className="h-auto w-full rounded-[24px] object-cover sm:rounded-[34px]"
          sizes="(max-width: 768px) 92vw, (max-width: 1200px) 90vw, 1400px"
          loading="lazy"
          draggable={false}
        />
      </div>
    </section>
  )
}

export default SecondaryImageSection
