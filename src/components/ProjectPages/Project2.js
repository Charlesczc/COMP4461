import { Link } from 'react-router-dom'

const Project2 = () => (
  <section className='project-detail'>
    <h2>Project 2 – Human-Robot Interaction</h2>
    <p>
      This page is completely different from Project 1. You can include
      experiment results, videos, etc.
    </p>
    <img
      src='https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png'
      alt='Project 2 screenshot'
      style={{ maxWidth: '100%' }}
    />
    <Link to='/'>← Back to Home</Link>
  </section>
)

export default Project2
