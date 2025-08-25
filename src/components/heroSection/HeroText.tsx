const HeroText = () => {
  return (
    <div className="flex flex-col xs:text-center md:text-left left justify-center gap-4 h-full ">
      <h2 className="lg:text-2xl text-xl uppercase text-grey">
        Front-End web Developer
      </h2>
      <h1 className="text-4xl md:text-[2.5rem] lg:text-6xl text-orange font-bold">
        SAVIOUR AGBOR
      </h1>
      <p className="xs:text-center md:text-left text-lg text-lightGrey mt-4 ">
        Passionate Web-Developer <span className="text-2xl font-bold">/ </span>
        Instructor. 
        <br className="hidden md:block" /> 
        <br />
        <span className="text-2xl text-cyan/">
          React, JavaScript, TailwindCSS,
          <span className="font-bold"> & </span>
          TypeScript
        </span>
      </p>
    </div>
  );
};

export default HeroText;
