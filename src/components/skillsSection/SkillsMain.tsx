import SkillsTexts from './SkillsTexts'
import AllSkills from './AllSkills'
import SubSkills from './SubSkills'

const SkillsMain = () => {
  return (
    <div id='skills'>
      <div className='lg:min-h-[450px] lg:max-w-[1200px] relative overflow-hidden flex flex-col items-center mt-15'>
        <SkillsTexts />
        <div className='lg:bottom-[50px] lg:absolute'>
          <AllSkills />
        </div>
      </div>
      <SubSkills />
    </div>
  )
}

export default SkillsMain