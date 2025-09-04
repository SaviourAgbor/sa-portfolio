import React from "react";
import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="md:max-w-[600px] p-0 relative">
      <h1 className="text-4xl font-bold text-cyan">About Me</h1>
      <p className="text-lg text-white mt-2 text-justify w-full md:max-w-[500px] p-4 shadow-lg shadow-lightGrey/20 rounded-xl">
        I'm an experienced software developer proficient in JavaScript and
        TypeScript with expertise in frameworks like React, NextJS and
        TailwindCSS. <br />
        <br />
        As a fast learner and strong collaborator, I work closely with
        designers, developers and project managers, to develop efficient,
        scalable, and user-friendly solutions that address real-world
        challenges. Let's colaborate to bring your ideas to life!
      </p>
      <Link
        to="projects"
        smooth={true}
        spy={true}
        duration={1000}
        offset={-134}
      >
        <button className=" text-white cursor-pointer text-2xl px-4 py-2 rounded-2xl mt-10 bg-gradient-to-r from-darkBrown via-cyan to-darkBrown hover:scale-102 hover:shadow-[0_0_10px_cyan] transition-all duration-500 ">
        My Projects
      </button>
      </Link>
      
    </div>
  );
};

export default AboutMeText;
