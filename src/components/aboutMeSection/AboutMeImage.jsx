const AboutMeImage = () => {
  return (
    <div className="h-[50vh] w-[60vw] md:h-[400px] md:w-[350px] relative mt-5 md:mt-0 mx-auto">
      <div className="h-full w-full mr-0 md:left-2 md:h-[400px] md:w-[320px] absolute ml-[13px] overflow-hidden">
        <img src="/images/about-me.jpg" alt="About me image" className="h-full w-auto object-cover rounded-tr-[110px] rounded-br-[70px] rounded-tl-[90px] rounded-bl-[90px] " />
      </div>
      <div className="h-full w-[110%] md:h-[100%] md:w-[100%] top-0 bg-orange absolute bottom-[-25px] md:bottom-[-30px] left-[-1px] md:left-[-10px] rounded-bl-[120px] rounded-br-[20px] rounded-tr-[110px] -z-10"></div>
    </div>
  );
};

export default AboutMeImage;
