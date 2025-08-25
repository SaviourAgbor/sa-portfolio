const AboutMeImage = () => {
  return (
    <div className="h-[70vh] w-[60vw] md:h-[500px] md:w-[350px] relative mt-10 md:mt-0 mx-auto">
      <div className="h-[75vh] w-[58vw] mr-0 md:left-2 md:h-[500px] md:w-[320px] absolute rounded-[100px] overflow-hidden">
        <img src="../../../public/images/about-me.jpg" alt="About me image" className="h-full w-auto object-cover" />
      </div>
      <div className="h-[100%h] w-[100%] md:h-[100%] md:w-[100%] top-0 bg-orange absolute bottom-[-25px] md:bottom-[-30px] left-[-15px] md:left-[-30px] rounded-bl-[120px] rounded-br-[20px] rounded-tr-[120px] -z-10"></div>
    </div>
  );
};

export default AboutMeImage;
