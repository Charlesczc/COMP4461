import { Link } from 'react-router-dom'
import './Project1.css'

const Project2 = () => (
  <section className='project-detail'>
    <h1 className='project-detail__title'>
      Project 2 – Human-Robot Interaction
    </h1>

    {/* 1. Project Description */}
    <div className='project-detail__section'>
      <h2 className='project-detail__section-title'>Project Description</h2>
      <p className='project-detail__text'>
        This project is about designing a human-robot interaction(HRI) solution
        for disaster management by starting with empathizing with real users,
        identifying scenarios where a voice agent, chatbot, or physical robot
        can assist humans&apos; need, interpret the insights gained from empathy
        work to define a point of view(POV) statement, ideate solutions, and
        verify the ideas through prototyping and usability testing.
      </p>
    </div>

    {/* 2. Background */}
    <div className='project-detail__section'>
      <h2 className='project-detail__section-title'>Background</h2>
      <p className='project-detail__text'>
        Earthquake devastate commmunities instantly, take example of the 2010
        Haiti earthquake which left 1.5 million people homeless and 2011 Japan
        earthquarke causing long term impact. The sudden and unpredictable
        nature with the chaotic aftermath, survivors often face disruptions and
        challenges. And therefore, we aim to design a human-robot interaction
        solution to assist survivors in the post-earthquake scenario.
      </p>
    </div>

    {/* 3. Empathy */}
    <div className='project-detail__section'>
      <h2 className='project-detail__section-title'>Empathy</h2>
      <p className='project-detail__text'>
        To understand the needs of earthquake survivors and rescuers, we
        conducted interviews to identify their pain points and challenges during
        during the disaster. We found that survivors expressed feelings of
        anxiety, with one mentioned, &quot;Very anxious, I can&apos;t sleep
        well, always worried about aftershocks. Talking with family and joining
        community activities have helped a bit.&quot; highlighting the need for
        emotional support and community engagement to alleviate fear. Rescuers
        also feel stressed, as one shared, &quot;It&apos;s overwhelming,
        especially when I see someone need help but I don&apos;t know how to; I
        have no rescue related knowledge, making me so anxious and
        depressed&quot; points out the need for accessible guidance. Moreover,
        survivors offen face information gaps, one said, &quot;Timely updates on
        food and water locations reduce our anxiety. Sometimes information and
        instruction are delayed or unclear, and I&apos;ve had to go multiple
        times.&quot; which states the need for clear and timely communication.
      </p>
    </div>

    {/* 4. Interpret */}
    <div className='project-detail__section'>
      <h2 className='project-detail__section-title'>Interpret</h2>
      <p className='project-detail__text'>
        We conducted Hierarchical Task Analysis(HTA) to break down critical
        tasks related to our interviews in earthquake disaster management for
        better understanding. The HTAs focused on process of
        pyschological/mental health support, dissemination of information about
        relief resources to survivors, and rescue in earthquake scenarios.
      </p>
      <div className='project-detail__mindmap-placeholder'>
        <img
          src={`${process.env.PUBLIC_URL}/images/HTA1.png`}
          alt='HTA1'
          className='project-detail__mindmap-image'
        />
      </div>
      <div className='project-detail__mindmap-placeholder'>
        <img
          src={`${process.env.PUBLIC_URL}/images/HTA2.png`}
          alt='HTA2'
          className='project-detail__mindmap-image'
        />
      </div>
      <div className='project-detail__mindmap-placeholder'>
        <img
          src={`${process.env.PUBLIC_URL}/images/HTA3.png`}
          alt='HTA3'
          className='project-detail__mindmap-image'
        />
      </div>
      <p className='project-detail__text'>
        To better interpret the users&apos; need, we adopted the
        POV(Point-Of-View) model. We have created three persona based on our
        interview findings.
      </p>
      <div className='project-detail__mindmap-placeholder'>
        <img
          src={`${process.env.PUBLIC_URL}/images/POV.png`}
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
          &quot;HMW build an empathetic assistant for earthquake survivors and
          volunteers, offering real-time information, emotional support, and
          guidance in stressful, resource-limited environments?&quot;
        </span>
      </p>
    </div>

    {/* 5. Ideate */}
    <div className='project-detail__section'>
      <h2 className='project-detail__section-title'>Ideate</h2>
      <p className='project-detail__text'>
        We used a mind map to brainstorm and expand various ideas for the robot
        starting with the HMW statement. We considered different
        functionalities, features, and interaction methods that could address
        the needs identified from our previous empathy and interpretation work.
        While ideating the solutions, we also do quick verification with our
        potential users to ensure the ideas aligned.
        <div className='project-detail__mindmap-placeholder'>
          <img
            src={`${process.env.PUBLIC_URL}/images/MindMap2.png`}
            alt='HTA3'
            className='project-detail__mindmap-image'
          />
        </div>
      </p>
    </div>

    {/* 6. Verify */}
    <div className='project-detail__section'>
      <h2 className='project-detail__section-title'>Verify</h2>
      <p className='project-detail__text'>
        Through the design thinking process, we created a prototype of our
        post-earthquake assistance robot with the functionalities of providing
        real-time information, emotional support, and guidance to earthquake
        survivors and volunteers.
        <br />
        <br />
        We then conducted usability testing with users to gather feedback on the
        robot&apos;s effectiveness and user experience along with suggestions
        for future improvement. The test was conducted in a quiet room with
        video recording and evaluated evaluated four tasks: requesting mental
        health support, locating nearby resources (food, shelter), requesting a
        volunteer guide, and using both voice and text modes. All tasks were
        completed successfully in 4 minutes without external help with positive
        feedback on emotional tone and visual layout. However, since it is still
        a prototype, there are some minor issues identified during testing such
        as occasionally failed to respond correctly due to lacking user location
        data and sometimes defaulted to healthcare replies instead of listing
        resources, as the &quot;resources&quot; keyword was not consistently
        recognized. User rated our prototype with a score of 3 out of 5 for
        overall satisfaction. We gained valuable suggestions 1. &quot;Add
        function that try to access devices&apos; location information&quot; 2.
        &quot;Finalize and refine the keyword awareness, make it more inclusive
        and precise.&quot;. We also created a storyboard to illustrate the
        intevention scenario of our robot in a post-earthquake setting.
        <div className='project-detail__mindmap-placeholder'>
          <img
            src={`${process.env.PUBLIC_URL}/images/storyboard.png`}
            alt='storyboard'
            className='project-detail__mindmap-image'
          />
        </div>
      </p>
    </div>

    {/* 7. Video Prototype */}
    <div className='project-detail__section'>
      <h2 className='project-detail__section-title'>Video Prototype</h2>
      <p className='project-detail__text'>
        Below is a short video demonstrating our prototype and usability test.
      </p>
      <a
        href='https://drive.google.com/file/d/1UF5TJxR35cMLE0_IBw4bvUFGIQztgoYO/view?usp=sharing'
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
        In this project, I mainly focused on the interpretation, ideation, and
        prototyping phases. I contributed in creating the HTA diagams, helped
        breaking down the complex tasks like mental health support and resource
        dissemination into actionable steps in real world and constructed the
        persona POV to better interpret the potential users&apos; needs and
        summarised into a HMW statement for ideation. During ideation, I
        actively participated in brainstorming sessions, generating diverse
        ideas. In prototyping, I assisted in designing and building the
        prototype. <br />
        <br />
        Reflecting on the project, I learned the value of human-centered design
        and the power of empthy driven solutions. Through the process of
        empathy, I gained a deeper understanding of users, and through
        interpreting the challenges they face and the current solutions
        avaliable with tools like HTA and POV model, I was able to identify
        their true needs and pain points where technology can make a difference.
        The ideation phase taught me the importance of creativity in
        problem-solving, as a team we all sat together and brainstormed a wide
        range of ideas without limitations simple &apos;no&apos;, instead, we
        agree with each possibilities and expand on each other&apos;s ideas.
        Finally, prototyping and usability testing highlighted the significance
        of iterative design and user feedback. During the development process,
        we applied veritical prototyping to quickly build and test our ideas,
        once we built a key functionality, we tested within the team to spot
        potential vulnerabilities and areas for improvement. After the prototype
        was ready, we conducted usability testing with real users to gather
        feedback and suggestions, which helped us refine and enhance the design.
        Without the iterative process, we would not have been able to create a
        solution that is truly user-centric and effective in matching needs.
        There are always rooms for improvement, for example, we could have
        involved users earlier in the ideation phase to co-create solutions
        together, and we could have done more rounds of usability testing to
        further refine the prototype based on user feedback. <br />
        <br />
        Overall, this project reinforced my belief in the importance of empathy,
        creativity and human in loop iteration in design and prototyping.
        <br />
        <br />
        On the teamwork side, we had a freerider in our team who did not
        contribute to the project much. He never attended any meetings and
        delivered work late on on the day before presentation, leaving us no
        time to prepare as a team. This caused extra pressure and concern on the
        rest of us in help him to catch up. From this experience, I learned the
        importance of setting expectations within a team. In next project, we
        will clearly outline each team member&apos;s roles and responsibilities
        from the beginning and regularly check in on progress to ensure everyone
        is on track. If someone is falling behind, I will address it early on to
        avoid last minute rush. Additionally, as a team we will have more open
        and clear commmunition in chasing each other for updates and progress to
        ensure everyone is contributing equally. Overall, this experience taught
        me valuable lessons in teamwork and we should stop this caotic
        situation.
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

export default Project2
