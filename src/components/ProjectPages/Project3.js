import { Link } from 'react-router-dom'
import './Project1.css'

const Project3 = () => (
  <section className='project-detail'>
    <h1 className='project-detail__title'>
      Project 3 – Social Extended Reality (XR) for Local Community
    </h1>

    {/* 1. Project Description */}
    <div className='project-detail__section'>
      <h2 className='project-detail__section-title'>Project Description</h2>
      <p className='project-detail__text'>
        This project is about designsing a social extended reality (XR) solution
        to support a local community by identifying user needs, defining a clear
        Point of View (POV), and exploring how XR can improve existing
        interactions. Through ideation, rapid prototyping, and user testing, we
        created an interactive XR demo showcasing key features and evaluated its
        usability and potential impact.
      </p>
    </div>

    {/* 2. Background */}
    <div className='project-detail__section'>
      <h2 className='project-detail__section-title'>Background</h2>
      <p className='project-detail__text'>
        Hong Kong&apos;s aging population has created demand for better digital
        and social support for elderlys. With more than 22% of residents now
        aged 65 or above, many seniors face increasing isolation as younger
        family members balance demanding work schedules and limited time at
        home. Our project focuses on using extended reality (XR) to help with
        the needs of Hong Kong&apos;s Silver Generation.
      </p>
    </div>

    {/* 3. Empathy */}
    <div className='project-detail__section'>
      <h2 className='project-detail__section-title'>Empathy</h2>
      <p className='project-detail__text'>
        To understand the needs of elderly, we conducted interviews to identify
        their pain points and challenges daily. we found that there are many
        independent retirees aged 65 and above who remain mentally sharp but
        face physical limitations such as arthritis or vertigo, making long
        distance travel difficult for them and further intensifying feelings of
        isolation in small Hong Kong flats. Through interviews, one example is
        with Keith, a 72 year old retired engineer, we learned that even tech
        confident seniors find video calls impersonal, describing it as
        &apos;watching TV&apos; rather than truly being with family abroad. Many
        of the interviewees also express deep loneliness and a desire to join
        family experiences in real time without feeling like a burden.
      </p>
      <div className='project-detail__mindmap-placeholder'>
        <img
          src={`${process.env.PUBLIC_URL}/images/proj3-emp.png`}
          alt='interview pic'
          className='project-detail__mindmap-image'
        />
      </div>
    </div>

    {/* These insights revealed a clear need for more natural, immersive, and
        emotionally meaningful ways for seniors to stay connected across
        distances.} */}

    {/* 4. Interpret */}
    <div className='project-detail__section'>
      <h2 className='project-detail__section-title'>Interpret</h2>
      <p className='project-detail__text'>
        We conducted Hierarchical Task Analysis(HTA) to break down critical
        tasks related to our interviews in elderlys daily life for better
        understanding. The HTAs focused on process of how elderlys connect with
        family, maintain their emotional well-being and participate in family
        activities.
      </p>
      <div className='project-detail__mindmap-placeholder'>
        <img
          src={`${process.env.PUBLIC_URL}/images/HTAProj3-1.png`}
          alt='HTA1'
          className='project-detail__mindmap-image'
        />
      </div>
      <div className='project-detail__mindmap-placeholder'>
        <img
          src={`${process.env.PUBLIC_URL}/images/HTAProj3-2.png`}
          alt='HTA2'
          className='project-detail__mindmap-image'
        />
      </div>
      <div className='project-detail__mindmap-placeholder'>
        <img
          src={`${process.env.PUBLIC_URL}/images/HTAProj3-3.png`}
          alt='HTA3'
          className='project-detail__mindmap-image'
        />
      </div>
      <p className='project-detail__text'>
        To better interpret the users&apos; need, we adopted the
        POV(Point-Of-View) model. We have created persona based on our interview
        findings.
      </p>
      <div className='project-detail__mindmap-placeholder'>
        <img
          src={`${process.env.PUBLIC_URL}/images/POVProj3.png`}
          alt='POV'
          className='project-detail__mindmap-image'
        />
      </div>
      <p className='project-detail__text'>
        After interpreting the insights and findings from our empathy work, we
        summaried with a HMW statement for our ideation process:
        <br />
        <br />
        <span style={{ color: 'var(--clr-primary)', fontWeight: 'bold' }}>
          &quot;HMW create an intuitive, low-friction XR experience that allows
          elderly users to feel genuinely present with distant loved ones,
          capturing natural social cues, shared activities, and the atmosphere
          of real spaces? &quot;
        </span>
      </p>
    </div>

    {/* 5. Ideate */}
    <div className='project-detail__section'>
      <h2 className='project-detail__section-title'>Ideate</h2>
      <p className='project-detail__text'>
        We used a mind map to brainstorm and expand various ideas starting with
        the HMW statement. We considered different functionalities, features,
        and interaction methods that could address the needs identified from our
        previous empathy and interpretation work. While ideating the solutions,
        we also do quick verification with our potential users to ensure the
        ideas aligned.
        <div className='project-detail__mindmap-placeholder'>
          <img
            src={`${process.env.PUBLIC_URL}/images/proj3-idea1.png`}
            alt='Ideate1'
            className='project-detail__mindmap-image'
          />
        </div>
        <div className='project-detail__mindmap-placeholder'>
          <img
            src={`${process.env.PUBLIC_URL}/images/proj3-idea2.png`}
            alt='Ideate2'
            className='project-detail__mindmap-image'
          />
        </div>
        <div className='project-detail__mindmap-placeholder'>
          <img
            src={`${process.env.PUBLIC_URL}/images/MindMap3.png`}
            alt='mindmap'
            className='project-detail__mindmap-image'
          />
        </div>
      </p>
    </div>

    {/* 6. Verify */}
    <div className='project-detail__section'>
      <h2 className='project-detail__section-title'>Verify</h2>
      <p className='project-detail__text'>
        Through the design thinking process, we created a prototype using Unity
        and video demo to illustrate the concept of immersive interaction with
        family members in a living room, join family experience in real time and
        self-entertaining.
        <br />
        <br />
        We then conducted usability testing with users to gather feedback the
        use of glasses and user experience along with suggestions for future
        improvement. We then illustrate the feedbacks and findings from the
        usability testing in a storyboard.
        <div className='project-detail__mindmap-placeholder'>
          <img
            src={`${process.env.PUBLIC_URL}/images/proj3-veri.png`}
            alt='storyboard'
            className='project-detail__mindmap-image'
          />
        </div>
      </p>
    </div>

    {/* 7. Video Prototype */}
    <div className='project-detail__section'>
      <h2 className='project-detail__section-title'>Video Prototype</h2>
      <div className='project-detail__mindmap-placeholder'>
        <img
          src={`${process.env.PUBLIC_URL}/images/proj3-unity.png`}
          alt='Unity Prototype'
          className='project-detail__mindmap-image'
        />
      </div>
      <p className='project-detail__text'>Below is a short video demo.</p>
      <a
        href='https://drive.google.com/file/d/1nRD_5LMxyASecvktu86EJ0NZMbctY9-5/view?resourcekey'
        className='project-detail__external-link'
        target='_blank'
        rel='noopener noreferrer'
      >
        → Click to view prototype demo
      </a>
    </div>

    {/* 8. Reflection */}
    <div className='project-detail__section'>
      <h2 className='project-detail__section-title'>Reflection</h2>
      <p className='project-detail__text'>
        In this project, I mainly focused on the empathy, interpretation, and
        ideation phases. I contributed in interviewing, creating the HTA
        diagams, helped breaking down elderlys daily routine tasks like how they
        connect with family members and participate in family activities into
        actionable steps in real world and constructed the persona POV to better
        interpret the potential users&apos; needs and summarised into a HMW
        statement for ideation. During ideation, I helped with brainstorming,
        giving suggestions for generating diverse ideas. <br />
        <br />
        Reflecting on this project, I found it deeply meaningful to focus on
        empathy-driven design for the local community - elderly users who are
        often left behind by rapidly evolving digital technologies. Through
        interviews and interpretation tools such as HTA and POV models, I gained
        a clearer understanding of the emotional and practical challenges faced
        by seniors, for example the loneliness, and desire for more genuine
        family connection. This helped me identify the core needs where XR could
        make help with. During ideation, our team embraced open, collaborative
        brainstorming, building on each other&apos;s ideas to explore a wide
        range of possibilities without simlply rejecting but expand on. Although
        I was not leading the prototyping phase this time, I can see how vivid
        the demo video is and the importance of iterative prototyping. <br />
        <br />
        Overall, this project once again reinforced my belief in the importance
        of human-centric with human involved in the process.
        <br />
        <br />
        Compared to our previous project, our teamwork improved significantly.
        We started earlier, met more regularly, devided the work specifically
        and actively engaged the teammate who had contributed less before,
        ensuring clearer expectations and more balanced participation. This
        experience across the projects taught me not only the power of empathy
        in design but also the importance of communication and shared
        accountability within a team. Overall, the projects strengthened my
        belief that meaningful solutions emerge when user insights and
        creativity come together with teamwork.
      </p>
    </div>

    <div>
      <h2 className='project-detail__section-title'>Use of AI</h2>
      <ul className='project-detail__list'>
        <li>Nano Banana</li>
        <li>ChatGPT</li>
      </ul>
    </div>

    {/* Back to Home Link */}
    <Link to='/' className='project-detail__back-link'>
      ← Back to Home
    </Link>
  </section>
)

export default Project3
