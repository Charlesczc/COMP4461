const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Charlesczc.github.io/COMP4461',
  title: 'YC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Yiu CHANG',
  role: 'Comp4461 Student',
  picture: 'icon.JPG',

  description: '',
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
    stack: [' ', ' ', ' '],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: '/images/proj1Pic.png',
  },
  {
    id: 'project-2',
    name: 'Project 2',
    description: 'Human-Robot Interaction for Disaster Management',
    stack: [' ', ' ', ' '],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: '/images/proj1Pic.png',
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
