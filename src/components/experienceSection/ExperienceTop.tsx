// import { useState } from "react";
import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopMiddle from "./ExperienceTopMiddle";
import ExperienceTopRight from "./ExperienceTopRight";

function ExperienceTop() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center gap-10 md:gap-4 ">
      <ExperienceTopLeft />
      <ExperienceTopMiddle />
      <ExperienceTopRight />
    </div>
  );
}

export default ExperienceTop;
