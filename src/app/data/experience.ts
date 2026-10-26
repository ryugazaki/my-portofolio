import { Education, Experience } from './models';

export const experiences: Experience[] = [
  {
    id: 'ako-media-asia',
    company: 'AKO MEDIA ASIA (SALT Indonesia)',
    position: 'Senior Frontend Developer',
    location: 'Jakarta, Indonesia',
    period: 'August 2023 – Present',
    type: 'Permanent Employee',
    description:
      'Leading frontend development for multiple high-impact dashboard projects using Angular 17+ and modern web technologies.',
    projects: ['WEC Telkomsel', 'FMC Dashboard', 'CTP Dashboard', 'Universal Visualization'],
    technologies: ['Angular 17-20', 'TailwindCSS', 'BIT Cloud', 'Golang', 'MySQL', 'Redis'],
  },
  {
    id: 'tab-solutions',
    company: 'PT. TAB SOLUTIONS INDONESIA',
    position: 'Frontend Developer',
    location: 'Jakarta, Indonesia',
    period: 'August 2019 – August 2023',
    type: 'Permanent Employee',
    description:
      'Developed and maintained multiple enterprise applications for PLN and other clients, working on BeST, TMS, and PLN Insurance projects.',
    projects: ['BeST Solution', 'TMS (Tabs Metering System)', 'PLN Insurance Web'],
    technologies: [
      'Angular 10-13',
      'Bootstrap',
      'DevExtreme',
      'Java Spring Boot',
      'PostgreSQL',
      'Oracle',
      'PHP',
    ],
  },
  {
    id: 'freelance',
    company: 'FREELANCE',
    position: 'Fullstack Web Developer',
    location: 'Remote (Jakarta, Indonesia)',
    period: 'January 2020 – January 2023',
    type: 'Self-Employed',
    description:
      'Delivered fullstack web and mobile solutions for various clients, including ICON+, handling both frontend and backend development.',
    projects: [
      'iProc',
      'NilaiKu',
      'Fathan Mubina 05',
      'SIRELINK',
      'BARISTA',
      'IconCash',
      'PLN Mobile',
    ],
    technologies: ['Angular 5-10', 'Vue.js', 'Flutter', 'Node.js', 'Laravel', 'WebSocket', 'MySQL'],
  },
  {
    id: 'icon-plus',
    company: 'Indonesia Comnet Plus (ICON+)',
    position: 'Frontend Developer',
    location: 'Jakarta, Indonesia',
    period: 'August 2018 – August 2019',
    type: 'Permanent Employee',
    description:
      'Started professional career as a frontend developer, working on the F12RB project with PLN.',
    projects: ['AMI Dashboard (F12RB)'],
    technologies: ['Angular 4', 'DevExtreme', 'Bootstrap', 'WebSocket', 'Java Spring Boot', 'Oracle'],
  },
];

export const education: Education[] = [
  {
    id: 'stmik-nusamandiri',
    school: 'STMIK Nusamandiri',
    degree: 'Bachelor of Computer Science',
    location: 'Jakarta, Indonesia',
    period: '2018 – 2019',
    gpa: '3.35 / 4.0',
    description:
      'Applied academic knowledge to real-world projects while working at ICON+, bridging theoretical learning with practical application.',
  },
  {
    id: 'ubsi',
    school: 'Universitas Bina Sarana Informatika',
    degree: 'Diploma III in Computer Science',
    location: 'Bogor, Indonesia',
    period: '2015 – 2018',
    gpa: '3.5 / 4.0',
    description:
      'Served as teaching assistant for 3 semesters. Enhanced technical foundation, communication, and leadership skills through mentoring.',
  },
];
