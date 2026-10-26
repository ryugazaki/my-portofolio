import { Project, ProjectCategory } from './models';

export const projectCategories: ProjectCategory[] = [
  'Enterprise',
  'Dashboard',
  'Web Apps',
  'Healthcare',
  'Mobile Apps',
];

// Add `highlights` (measurable outcomes) and `link` (demo / case study) per
// project; both render automatically when present.
export const projects: Project[] = [
  {
    id: 'wec-telkomsel',
    title: 'WEC Telkomsel',
    category: ['Enterprise', 'Web Apps'],
    description:
      'Frontend operations for the Telkomsel web platform, a micro-frontend system spanning Angular, React, Next.js and Drupal (PHP) services. Responsible for monitoring website performance, implementing GTM tracking and Datadog RUM, and fixing reported bugs across services.',
    technologies: ['Angular', 'React', 'Next.js', 'Drupal', 'PHP', 'GTM', 'Datadog RUM'],
    company: 'AKO MEDIA ASIA',
  },
  {
    id: 'fmc-dashboard',
    title: 'FMC Dashboard',
    category: ['Enterprise', 'Dashboard'],
    description:
      'A comprehensive dashboard for facility management center with real-time data visualization, featuring advanced charts, tables, and reporting capabilities. Built with micro-frontend architecture using BIT Cloud.',
    technologies: ['Angular 17', 'TailwindCSS', 'BIT Cloud', 'Golang', 'MySQL', 'Redis'],
    company: 'AKO MEDIA ASIA',
  },
  {
    id: 'ctp-dashboard',
    title: 'CTP Dashboard',
    category: ['Enterprise', 'Dashboard'],
    description:
      'Centralized dashboard for managing and monitoring customer transactions and payments. Features include real-time notifications, comprehensive reporting, and intuitive user interface.',
    technologies: ['Angular 17', 'TailwindCSS', 'BIT Cloud', 'Golang', 'MySQL', 'Redis'],
    company: 'AKO MEDIA ASIA',
  },
  {
    id: 'universal-visualization',
    title: 'Universal Visualization',
    category: ['Enterprise', 'Dashboard'],
    description:
      'Advanced data visualization platform supporting multiple chart types, real-time data updates, and customizable dashboards. Built with Angular 20 and cutting-edge web technologies.',
    technologies: ['Angular 20', 'TailwindCSS', 'BIT Cloud', 'Golang', 'MySQL', 'Redis'],
    company: 'AKO MEDIA ASIA',
  },
  {
    id: 'best-solution',
    title: 'BeST Solution',
    category: ['Enterprise', 'Web Apps'],
    description:
      'A comprehensive super app for PLN Batam that manages content and data, creates meter data, integrates with devices, and provides real-time monitoring capabilities.',
    technologies: [
      'Angular 10',
      'DevExtreme',
      'Bootstrap',
      'WebSocket',
      'Java Spring Boot',
      'PostgreSQL',
    ],
    company: 'PT. TAB SOLUTIONS',
  },
  {
    id: 'tms',
    title: 'TMS (Tabs Metering System)',
    category: ['Enterprise', 'Web Apps'],
    description:
      'A complete super application for metering system management. Features include master data creation, electricity meter integration, RBAC system, and comprehensive report processing.',
    technologies: ['Angular 13', 'Bootstrap', 'DevExtreme', 'Java Spring Boot', 'PostgreSQL', 'Oracle'],
    company: 'PT. TAB SOLUTIONS',
  },
  {
    id: 'pln-insurance-web',
    title: 'PLN Insurance Web',
    category: ['Healthcare', 'Web Apps'],
    description:
      'Internal PLN Insurance super application managing all data and workflows including inpatient/outpatient flows, RBAC authentication, and comprehensive reporting system.',
    technologies: ['PHP', 'HTML', 'Bootstrap', 'CSS3', 'PostgreSQL'],
    company: 'PT. TAB SOLUTIONS',
  },
  {
    id: 'ami-dashboard',
    title: 'AMI Dashboard (F12RB)',
    category: ['Enterprise', 'Dashboard'],
    description:
      'Dashboard for automatic meter recording at PLN with visualizations including charts, tables, and other related information. Features real-time updates via WebSocket.',
    technologies: ['Angular 4', 'DevExtreme', 'Bootstrap', 'WebSocket', 'Java Spring Boot', 'Oracle'],
    company: 'ICON+',
  },
  {
    id: 'fathan-mubina-05',
    title: 'Fathan Mubina 05',
    category: ['Web Apps'],
    description:
      'Fullstack web application with real-time notifications. Built during freelance period, demonstrating ability to deliver complete solutions independently.',
    technologies: ['Angular 5', 'Bootstrap', 'WebSocket', 'Node.js', 'MySQL'],
    company: 'Freelance',
  },
  {
    id: 'sirelink',
    title: 'SIRELINK',
    category: ['Web Apps'],
    description:
      'Fullstack web application built with Angular and Laravel. Demonstrates full-stack capabilities and ability to work with different technology stacks.',
    technologies: ['Angular 10', 'Bootstrap', 'Laravel', 'MySQL'],
    company: 'Freelance',
  },
  {
    id: 'nilaiku',
    title: 'NilaiKu',
    category: ['Mobile Apps'],
    description:
      'A Flutter-based mobile e-commerce platform designed to empower farmers by enabling them to sell their agricultural products directly to consumers at fair market prices, eliminating middlemen and ensuring better profit margins for producers.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    company: 'Freelance',
  },
  {
    id: 'iproc',
    title: 'iProc',
    category: ['Enterprise', 'Web Apps'],
    description:
      'A comprehensive web-based procurement management system built with PHP CodeIgniter 3. Features include goods and services management, procurement planning, supplier selection, tender management, and complete procurement workflow automation.',
    technologies: ['PHP', 'CodeIgniter 3', 'Bootstrap', 'jQuery', 'MySQL'],
    company: 'Freelance',
  },
  {
    id: 'barista',
    title: 'BARISTA',
    category: ['Enterprise', 'Web Apps'],
    description:
      'An exclusive enterprise resource management application for PLN built with Vue.js. Features include procurement management tailored for PLN operations, meeting room booking system, visitor scheduling for external guests, and comprehensive office management tools.',
    technologies: ['Vue.js', 'Vuex', 'Bootstrap', 'Java Spring Boot', 'Oracle'],
    company: 'Freelance · ICON+',
  },
  {
    id: 'iconcash',
    title: 'IconCash',
    category: ['Enterprise', 'Web Apps'],
    description:
      'A fintech digital wallet application similar to LinkAja, GoPay, and ShopeePay, built with Vue.js frontend and Java Spring Boot backend. Designed specifically for PLN e-commerce ecosystem, enabling seamless digital transactions, bill payments, and financial services within the PLN network.',
    technologies: ['Vue.js', 'Vuex', 'Bootstrap', 'Java Spring Boot', 'Oracle'],
    company: 'Freelance · ICON+',
  },
  {
    id: 'pln-mobile',
    title: 'PLN Mobile',
    category: ['Mobile Apps', 'Enterprise'],
    description:
      'A public-facing mobile e-commerce platform built with Flutter. Enables users to purchase PLN products including electric vehicles (EV), EV spare parts, and various other merchandise. Fully integrated with multiple payment gateways including digital wallets, bank transfers, and IconCash for seamless transactions.',
    technologies: ['Flutter', 'Dart', 'Java Spring Boot', 'Oracle', 'Payment Gateway'],
    company: 'Freelance · ICON+',
  },
];
