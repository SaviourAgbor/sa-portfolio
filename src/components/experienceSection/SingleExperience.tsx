
function ExperienceSingle({key, experience}) {
  return (
    <div className="mt-10 h-auto w-full md:h-[440px] md:w-[300px] lg:h-[350px] border-2 border-dashed border-orange/40 rounded-xl p-4">
      <p className="text-cyan font-bold">{experience.job}</p>
      <p className="text-orange">{experience.company}</p>
      <p className="text-lightGrey">{experience.date}</p>
      <ul className="list-disc text-white mt-4 ml-4">
        {experience.responsibilities.map((responsibility, index) => {
          return <li key={index}>{responsibility}</li>
        
        })}
      </ul>
    </div>
  )
}

export default ExperienceSingle