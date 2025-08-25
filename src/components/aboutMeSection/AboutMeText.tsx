import React from "react";

const AboutMeText = () => {
  return (
    <div className="md:max-w-[600px] p-0 relative">
      <h1 className="text-4xl font-bold text-cyan">About Me</h1>
      <p className="text-lg text-white mt-2 text-justify w-full md:max-w-[500px] p-4 shadow-lg shadow-lightGrey/20 rounded-xl">
        I’m a highly motivated and detail oriented Frontend development
        enthusiast with a strong passion for creating intuitive and user
        friendly digital experiences. I am Proficient in HTML, CSS, and
        JavaScript, with a solid foundation in responsive web design and web
        accessibility. I’m eager to apply my skills and knowledge in a real
        world setting, collaborate with others, and continue to learn and grow
        as a developer, bringing a proactive and solutions focused approach to
        overcome challenges and deliver excellent results.
      </p>
      <button className="ring ring-white text-white text-2xl px-4 py-2 rounded-full mt-10">My Projects</button>
    </div>
  );
};

export default AboutMeText;
