import SingleProjectImage from './SingleProjectImage';
import SingleProjectText from './SingleProjectText';

const SingleProject = ({project, index}) => {
  return (
    <div className={`'mb-20' ${project.align === 'right' 
          ? 'float-right' : 'float-left'} flex flex-col-reverse gap-4 ${project.align === 'right' ? 'md:flex-row-reverse': 'md:flex-row'} mt-10 items-center `}>
      <SingleProjectImage project={project} />
      <SingleProjectText project={project}/>
    </div>
  )
}

export default SingleProject