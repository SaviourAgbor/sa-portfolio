import ExperienceInfo from "./ExperienceInfo"

function ExperienceTopLeft() {
  return (
    <div className="flex flex-col gap-4 w-full md:w-[50%] lg:w-[25%] shadow-lg shadow-lightGrey/20 p-4 rounded-xl ">
      <p className="text-orange font-bold uppercase bg-red-500text-xl font-special text-center">Since 2023</p>
      <div className="flex justify-center items-cente gap-4">
        <ExperienceInfo number="2" text="years" />
        <p className="text-4xl md:text-6xl text-lightGrey font-bold">-</p>
        <ExperienceInfo number="5" text="websites" />
      </div>
      <p className="mx-auto text-white text-md max-w-[250px] text-center">With 2 years of Experience building dynamic and user-friendly web applications</p>
      <ExperienceInfo number="$10k" text="Max Budget" />
    </div>
  )
}

export default ExperienceTopLeft