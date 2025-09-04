import HeroText from './HeroText'
import HeroPic from './HeroPic'

const HeroMain = () => {
  return (
    <div id='hero' className='pt-25  w-full h-vh flex justify-between items-center px-6 md:px-15 lg:px-30 flex-col md:flex-row max-w-[1200px] relative'>
      <HeroText />
      <HeroPic />
    </div>
  )
}

export default HeroMain