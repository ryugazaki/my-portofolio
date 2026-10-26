import { SkillCategory } from './models';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend-frameworks',
    name: 'Frontend Frameworks',
    skills: ['Angular (v4 - v20)', 'Vue.js', 'React', 'TypeScript', 'JavaScript', 'JQuery'],
  },
  {
    id: 'styling',
    name: 'Styling & UI Libraries',
    skills: ['TailwindCSS', 'Bootstrap', 'DevExtreme', 'PrimeNG', 'HTML5/CSS3', 'SCSS/Sass'],
  },
  {
    id: 'architecture',
    name: 'Frontend Architecture',
    skills: ['Micro Frontend', 'Module Federation', 'BIT Cloud', 'Nx Monorepo', 'Component Design System'],
  },
  {
    id: 'state-management',
    name: 'State Management',
    skills: ['RxJS/NgRx', 'Vuex/Pinia', 'Redux/Context API', 'Signals (Angular)'],
  },
  {
    id: 'backend',
    name: 'Backend & Database',
    skills: ['Node.js', 'Java Spring Boot', 'PHP/Laravel', 'PostgreSQL', 'MySQL', 'Oracle', 'Redis'],
  },
  {
    id: 'tools',
    name: 'Dev Tools & Methodologies',
    skills: ['Git/GitLab/GitHub', 'Jira/Agile/Scrum', 'REST API', 'WebSocket', 'CI/CD Pipelines', 'Docker'],
  },
];

export const featuredSkills = [
  'Angular',
  'Vue.js',
  'React',
  'TypeScript',
  'TailwindCSS',
  'Micro Frontend',
];
