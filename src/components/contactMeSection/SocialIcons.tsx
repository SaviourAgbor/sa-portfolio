import SingleSocialIcon from './SingleSocialIcon'
import { TiSocialLinkedin } from "react-icons/ti";
import { TbBrandGithub } from "react-icons/tb";
import { PiInstagramLogoBold } from "react-icons/pi";

const SocialIcons = () => {
  return (
    <div className='flex gap-4 mt-5'>
      <SingleSocialIcon link={'#'} Icon={TiSocialLinkedin} hoverIconColor={'cyan'} hoverBackgroundColor={'white'}/>
      <SingleSocialIcon link={'#'} Icon={TbBrandGithub} hoverIconColor={'black'} hoverBackgroundColor={'white'} />
      <SingleSocialIcon link={'#'} Icon={PiInstagramLogoBold} hoverIconColor={'white'} hoverBackgroundColor={'white'}/>
    </div>
  )
}

export default SocialIcons