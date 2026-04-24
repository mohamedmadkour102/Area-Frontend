import mountainImageSectionJpg from '../../assets/images/mountainimage/mountainimagesection.jpg'
import mountainImageSectionW640Webp from '../../assets/images/mountainimage/mountainimagesection-w640.webp'
import mountainImageSectionW960Webp from '../../assets/images/mountainimage/mountainimagesection-w960.webp'
import mountainImageSectionW1280Webp from '../../assets/images/mountainimage/mountainimagesection-w1280.webp'
import mountainImageSectionW1600Webp from '../../assets/images/mountainimage/mountainimagesection-w1600.webp'
import mountainImageSectionW1920Webp from '../../assets/images/mountainimage/mountainimagesection-w1920.webp'
import ResponsivePicture from '../ui/ResponsivePicture'

function MountainImageSection() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 pb-10 sm:px-6 lg:px-10">
        <ResponsivePicture
          sources={[
            {
              type: 'image/webp',
              srcSetByWidth: {
                640: mountainImageSectionW640Webp,
                960: mountainImageSectionW960Webp,
                1280: mountainImageSectionW1280Webp,
                1600: mountainImageSectionW1600Webp,
                1920: mountainImageSectionW1920Webp,
              },
            },
          ]}
          fallbackSrc={mountainImageSectionJpg}
          alt="Mountain landscape"
          className="h-auto w-full rounded-[20px] object-cover sm:rounded-[26px]"
          sizes="(max-width: 768px) 92vw, (max-width: 1200px) 90vw, 1400px"
          loading="lazy"
          draggable={false}
        />
      </div>
    </section>
  )
}

export default MountainImageSection
