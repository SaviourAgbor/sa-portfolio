
const SingleSocialIcon = ({link, Icon, hoverIconColor, hoverBackgroundColor}) => {
  console.log(hoverIconColor, hoverBackgroundColor);
  return (
    <div className={`text-3xl text-orange cursor-pointer p-1 border border-orange rounded-full hover:bg-${hoverBackgroundColor} hover:text-${hoverIconColor} transition-all duration-1000 hover:border-transparent`}>
      <a href={link} target="_blank" >
        <Icon/ >
      </a>
    </div>
  )
}

export default SingleSocialIcon