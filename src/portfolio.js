const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Charlesczc.github.io/COMP4461',
  title: 'YC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Yiu CHANG',
  role: 'Comp4461 Student',
  picture:
    'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/Charlesczc',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    id: 'project-1',
    name: 'Project 1',
    description:
      'Make the campus more friendly for visiting students from the aquatic kingdom of Atlantis',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image:
      'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
  },
  {
    id: 'project-2',
    name: 'Project 2',
    description: 'Human-Robot Interaction for Disaster Management',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image:
      'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ychangaj@connect.ust.hk',
}

export { header, about, projects, skills, contact }
