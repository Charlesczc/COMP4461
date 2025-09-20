import { useParams, Link } from 'react-router-dom'
import { projects } from '../../portfolio'
import './ProjectDetail.css'

const ProjectDetail = () => {
  const { projectId } = useParams()
  const project = projects.find((p) => p.id === projectId)

  if (!project) return <p>Project not found</p>

  return (
    <section className='project-detail'>
      <h2>{project.name}</h2>
      {project.image && (
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          style={{ maxWidth: '100%' }}
        />
      )}
      <p>{project.details}</p>
      <ul>
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <Link to='/'>← Back to Home</Link>
    </section>
  )
}

export default ProjectDetail
