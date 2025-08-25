import HeroText from './HeroText'
import HeroPic from './HeroPic'

const HeroMain = () => {
  return (
    <div className='pt-23 w-full flex justify-between items-center px-6 md:px-10 lg:px-30 flex-col md:flex-row max-w-[1200px] relative'>
      <HeroText />
      <HeroPic />
    </div>
  )
}

export default HeroMain