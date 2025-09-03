import {motion} from 'framer-motion'  
import {fadeIn} from "../../framerMotion/variants"
import SingleSocialIcon from './SingleSocialIcon'
import { TiSocialLinkedin } from "react-icons/ti";
import { TbBrandGithub } from "react-icons/tb";
import { PiInstagramLogoBold } from "react-icons/pi";

const Icons = [
  { link: '#', Icon: TiSocialLinkedin, hoverIconColor: 'cyan', hoverBackgroundColor: 'white' },
  { link: '#', Icon: TbBrandGithub, hoverIconColor: 'black', hoverBackgroundColor: 'white' },
  { link: '#', Icon: PiInstagramLogoBold, hoverIconColor: 'white', hoverBackgroundColor: 'white' },
]


const SocialIcons = () => {
  return (
    <div className='flex gap-4 mt-5'>
      {Icons.map((iconItems, index) => (
         <SingleSocialIcon key={index} index={index} icon={iconItems} />
      ))}
    </div>
  );
}
export default SocialIcons