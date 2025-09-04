
function SingleProjectImage({project, index}) {
  return (
    <div className={`max-w-[400px] max-h-[220px] rounded-xl overflow-hidden shadow-xl shadow-lightGrey/20`}>
      {project.image ? (<img  src={project.image} alt={project.name } className={`w-full h-full ${project.align === 'right' 
          ? 'float-right' : 'float-left'} mb-4`} />) : '' 
} 
<p></p>
    </div>
  )
}

export default SingleProjectImage