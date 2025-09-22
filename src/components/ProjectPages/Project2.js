import { Link } from 'react-router-dom'
import './Project1.css'

const Project2 = () => (
  <section className='project-detail'>
    <h1 className='project-detail__title'>
      Project 2 – Human-Robot Interaction
    </h1>

    <h1 className='project-detail__title'>(Content to be updated soon...)</h1>

    {/* Back to Home Link */}
    <Link to='/' className='project-detail__back-link'>
      ← Back to Home
    </Link>
  </section>
)

export default Project2
