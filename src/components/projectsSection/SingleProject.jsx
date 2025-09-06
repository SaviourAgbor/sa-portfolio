import SingleProjectImage from './SingleProjectImage';
import SingleProjectText from './SingleProjectText';

const SingleProject = ({project}) => {
  return (
    <div className={` ${project.align === 'right' 
          ? 'float-right' : 'float-left'} flex flex-col-reverse gap-2 ${project.align === 'right' ? 'md:flex-row-reverse': 'md:flex-row'} mt-8 items-center `}>
      <SingleProjectImage project={project} />
      <SingleProjectText project={project}/>
    </div>
  )
}

export default SingleProject