import ProjectsText from './ProjectsText'
import projectImg from "../../../public/images/website-img-4.jpg"
import ProjectsGroup from './ProjectsGroup'


const projects = [
  {
    name:'Fodcon app',
    date: 'Jan, 2025',
    align: 'right',
    image: '/images/website-img-1.jpg',
    link: '#'
  }, {
    name:'ALX Capstone Weather App',
    date: 'Nov, 2024',
    align: 'left',
    image: '/images/website-img-2.webp',
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
    <div id='projects' className='mx-auto max-w-[1200px] mt-[80px] px-5 md:px-10'>
      <ProjectsText />
      <ProjectsGroup projects={projects}/>
    </div>
  )
}

export default ProjectsMain