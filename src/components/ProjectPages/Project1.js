import { Link } from 'react-router-dom'

const Project1 = () => (
  <section className='project-detail'>
    <h2>Project 1 – Atlantis Campus Friendliness</h2>
    <p>
      This page can have unique content just for Project 1: diagrams, images,
      long write-up, etc.
    </p>
    <img
      src='https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png'
      alt='Project 1 screenshot'
      style={{ maxWidth: '100%' }}
    />
    <Link to='/'>← Back to Home</Link>
  </section>
)

export default Project1
