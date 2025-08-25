import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import projectImg from "../../../public/images/website-img-4.jpg"


const projects = [
  {
    name:'Fodcon app',
    date: 'Jan, 2025',
    align: 'right',
    image: '../../../public/images/website-img-1.jpg',
    link: '#'
  }, {
    name:'ALX Capstone Weather App',
    date: 'Nov, 2024',
    align: 'left',
    image: '../../../public/images/website-img-2.webp',
    link: '#'
  }, {
    name:'Alx studio project',
    year: 'July, 2024',
    align: 'right',
    image: projectImg,
    link: '#'
  }]

const ProjectsMain = () => {
  return (
    <div className='mx-auto max-w-[1200px] mt-[80px] px-10'>
      <ProjectsText />
      <div className='bg-white'>
        {projects.map((project,index) => {
          return <SingleProject key={index} project={project} />
        })}
      </div>
    </div>
  )
}

export default ProjectsMain