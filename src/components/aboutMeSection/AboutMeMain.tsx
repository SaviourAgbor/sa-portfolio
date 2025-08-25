import AboutMeText from './AboutMeText'
import AboutMeImage from './AboutMeImage'

function AboutMeMain() {
  return (
    <div className='md:flex sm:grid-cols-1 md:flex-row items-center justify-between gap-15 mx-auto md:max-w-[1200px] mt-15  px-10 lg:px-30 md:mt-[80px]'>
      <div>
        <AboutMeText />
      </div>
      <div>
        <AboutMeImage/>
      </div>
    </div>
  )
}

export default AboutMeMain;