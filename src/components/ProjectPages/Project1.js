import { Link } from 'react-router-dom'
import './Project1.css'

const Project1 = () => (
  <section className='project-detail'>
    <h1 className='project-detail__title'>Project 1 – Campus Friendliness</h1>

    {/* Project Description */}
    <div className='project-detail__section'>
      <h2 className='project-detail__section-title'>Project Description</h2>
      <p className='project-detail__text'>
        Imagine that we will have visiting students from the aquatic kingdom of
        Atlantis. What may HKUST wish to be more friendly to the visiting
        students from the ocean world?
      </p>
    </div>

    {/* Goal */}
    <div className='project-detail__section'>
      <h2 className='project-detail__section-title'>Project Goal</h2>
      <p className='project-detail__text'>
        To explore and propose ways for HKUST to become a more inclusive and
        accesible campus for students from the aquatic kingdom of Atlantis,
        addressing their unique lifestyle, needs and culture.
      </p>
    </div>

    {/* Mindmap Overview */}
    <div className='project-detail__section'>
      <h2 className='project-detail__section-title'>Mindmap Overview</h2>
      <div className='project-detail__mindmap'>
        {/* Replace the div below with an <img> or interactive mindmap */}
        <div className='project-detail__mindmap-placeholder'>
          <img
            src={`${process.env.PUBLIC_URL}/images/mindmap.png`}
            alt='Mindmap overview'
            className='project-detail__mindmap-image'
          />
        </div>
      </div>
    </div>

    {/* Learning & Execution Process */}
    <div className='project-detail__section'>
      <h2 className='project-detail__section-title'>
        Learning & Execution Process
      </h2>
      <p className='project-detail__text'>
        <div className='project-detail__subsection'>
          <h3 className='project-detail__subsection-title'>Needfinding</h3>
          <p className='project-detail__text'>
            By considering the project as solving an extreme version of
            accessibility issues for new commers to HKUST, my team and I started
            empathize by exploring campus and talking to new commers in the
            HKUST community to identify the common challenges and needs they may
            have on campus.
          </p>
        </div>

        <div className='project-detail__subsection'>
          <h3 className='project-detail__subsection-title'>POV</h3>
          <p className='project-detail__text'>
            My team and I defined the charicteristics of the Atlantis students.
            Including their outlook, lifestyle, culture and behaviour. Then
            synthesizing the insights and findings to identify key needs and
            challenges they may face on campus. We then framed the it into a
            Point of View statement to guide our ideation process:
            <span style={{ color: 'var(--clr-primary)', fontWeight: 'bold' }}>
              &quot;How might we enable Atlantis students to communicate
              seamlessly with humans so they feel included and empowered in
              academic and social setting?&quot;.
            </span>
          </p>
          <ul className='project-detail__list'>
            <li>
              User: Atlantis students attending HKUST who live underwater and
              have unique communication styles using sonar.
            </li>
            <li>
              Need: Need a way for them to communicate seamlessly with humans so
              that they can participate fully in classes, group activities, and
              social interactions.
            </li>
            <li>
              Insight: Atlantis students may struggle to express themselves in
              human-centric community, which may make them feel excluded. By
              facilitating seamless communication, we can help them to feel
              included and confident; promote friendly interactions and thought
              exchange; and foster a sense of belonging on campus.
            </li>
          </ul>
        </div>

        <div className='project-detail__subsection'>
          <h3 className='project-detail__subsection-title'>Ideation</h3>
          <p className='project-detail__text'>
            We then brainstormed a wide range of ideas and solutions to address
            the challenges stated in the POV statement. We utilise techniques
            such as mind mapping and sketching to generate diverse ideas in
            class. And at the end we finialised on a promising and feasible
            solution of a necklace-like device that can do real time translation
            between sonar and human language.
          </p>
        </div>
      </p>
    </div>

    {/* Reflection */}
    <div className='project-detail__section'>
      <h2 className='project-detail__section-title'>Reflection</h2>
      <p className='project-detail__text'>
        In this project, me and my teammates each came up with different
        imagination and idea, the nwe all worked through the entire design
        thinking process of empathize, interpret, ideate. I learned the
        importance of understanding users needs and challenges before jumping
        into brainstorming solutions and the techniques to generate ideas. To
        extend what we have done in the project, storyboarding can be done to
        visualise and verify our solution.
      </p>
    </div>

    {/* Back to Home Link */}
    <Link to='/' className='project-detail__back-link'>
      ← Back to Home
    </Link>
  </section>
)

export default Project1
