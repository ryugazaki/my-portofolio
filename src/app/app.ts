import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // Personal Information
  protected name = 'Ryan Apriansyah';
  protected role = 'Senior Frontend Developer';
  protected tagline = 'Building exceptional digital experiences with modern web technologies';
  protected description =
    'A passionate and creative frontend developer with 7+ years of experience in crafting scalable, user-centric web applications. Expert in Angular ecosystem with proven track record of delivering high-impact projects for enterprise clients including PLN, MAKO Media, and various tech companies.';

  // Stats
  protected stats = [
    { value: '7+', label: 'Years Experience' },
    { value: '15+', label: 'Projects Completed' },
    { value: '4', label: 'Companies' },
    { value: '5+', label: 'Technologies Mastered' }
  ];

  // About Section
  protected aboutText =
    "I'm a dedicated frontend developer who loves turning complex problems into simple, beautiful, and intuitive solutions. My journey in web development started during my college years where I served as a teaching assistant, strengthening my technical foundation through mentoring and diverse academic perspectives.\n\nThroughout my career, I've worked with various technologies and frameworks, from Angular 4 to Angular 20, PHP to Node.js, and Oracle to PostgreSQL. I believe in writing clean, maintainable code and following best practices in software development.";

  // Work Experience (Timeline)
  protected experiences = [
    {
      id: 1,
      company: 'MAKO MEDIA ASIA (SALT Indonesia)',
      position: 'Senior Frontend Developer',
      location: 'Jakarta, Indonesia',
      period: 'August 2023 – Present',
      type: 'Permanent Employee',
      description: 'Leading frontend development for multiple high-impact dashboard projects using Angular 17+ and modern web technologies.',
      projects: ['FMC Dashboard', 'CTP Dashboard', 'Universal Visualization'],
      technologies: ['Angular 17-20', 'TailwindCSS', 'BIT Cloud', 'Golang', 'MySQL', 'Redis'],
      icon: '🏢'
    },
    {
      id: 2,
      company: 'PT. TAB SOLUTIONS INDONESIA',
      position: 'Frontend Developer',
      location: 'Jakarta, Indonesia',
      period: 'August 2019 – August 2023',
      type: 'Permanent Employee',
      description: 'Developed and maintained multiple enterprise applications for PLN and other clients, working on BeST, TMS, and PLN Insurance projects.',
      projects: ['BeST Solution', 'TMS (Tabs Metering System)', 'PLN Insurance Web'],
      technologies: ['Angular 10-13', 'Bootstrap', 'DevExtreme', 'Java Spring Boot', 'PostgreSQL', 'Oracle', 'PHP'],
      icon: '💼'
    },
    {
      id: 3,
      company: 'FREELANCE',
      position: 'Fullstack Web Developer',
      location: 'Remote',
      period: 'January 2020 – January 2023',
      type: 'Self-Employed',
      description: 'Delivered fullstack web solutions for various clients, handling both frontend and backend development.',
      projects: ['Fathan Mubina 05 Website', 'SIRELINK'],
      technologies: ['Angular 5-10', 'Node.js', 'Laravel', 'Bootstrap', 'WebSocket', 'MySQL'],
      icon: '💻'
    },
    {
      id: 4,
      company: 'Indonesia Comnet Plus (ICON+)',
      position: 'Frontend Developer',
      location: 'Jakarta, Indonesia',
      period: 'August 2018 – August 2019',
      type: 'Permanent Employee',
      description: 'Started professional career as a frontend developer, working on the F12RB project with PLN.',
      projects: ['AMI Dashboard (F12RB)'],
      technologies: ['Angular 4', 'DevExtreme', 'Bootstrap', 'WebSocket', 'Java Spring Boot', 'Oracle'],
      icon: '🚀'
    }
  ];

  // Education
  protected education = [
    {
      id: 1,
      school: 'STMIK Nusamandiri',
      degree: 'Bachelor of Computer Science',
      location: 'Jakarta, Indonesia',
      period: '2018 – 2019',
      gpa: '3.35 / 4.0',
      description: 'Applied academic knowledge to real-world projects while working at ICON+, bridging theoretical learning with practical application.'
    },
    {
      id: 2,
      school: 'Universitas Bina Sarana Informatika',
      degree: 'Diploma III in Computer Science',
      location: 'Bogor, Indonesia',
      period: '2015 – 2018',
      gpa: '3.5 / 4.0',
      description: 'Served as teaching assistant for 3 semesters. Enhanced technical foundation, communication, and leadership skills through mentoring.'
    }
  ];

  protected location = 'Bogor, Indonesia';

  // Contact Information
  protected email = 'ryan.apriansyah21@gmail.com';
  protected phone = '+62 896 9668 4434';
  protected contactText =
    "I'm always interested in hearing about new projects and opportunities. Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out! Let's create something amazing together.";

  // Current year for footer
  protected currentYear = new Date().getFullYear();

  // Projects Data
  protected projects = [
    {
      id: 1,
      title: 'FMC Dashboard',
      category: 'Enterprise Dashboard',
      description:
        'A comprehensive dashboard for facility management center with real-time data visualization, featuring advanced charts, tables, and reporting capabilities. Built with micro-frontend architecture using BIT Cloud.',
      image:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImcxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZjMTA3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmU1OTMwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNTAiIGZpbGw9InVybCgjZzEpIi8+PHJlY3QgeD0iMjAiIHk9IjMwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjkwIiByeD0iOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOSIvPjxyZWN0IHg9IjIwIiB5PSIxMzAiIHdpZHRoPSI3NSIgaGVpZ2h0PSI1MCIgcng9IjgiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjkiLz48cmVjdCB4PSIxMDUiIHk9IjEzMCIgd2lkdGg9Ijc1IiBoZWlnaHQ9IjUwIiByeD0iOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOSIvPjxjaXJjbGUgY3g9IjMzMCIgY3k9IjcyIiByPSIzMCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMiIvPjx0ZXh0IHg9IjMzMCIgeT0iNzgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCI+Rk1DPC90ZXh0Pjwvc3ZnPg==',
      technologies: ['Angular 17', 'TailwindCSS', 'BIT Cloud', 'Golang', 'MySQL', 'Redis'],
      featured: true,
      company: 'MAKO MEDIA ASIA'
    },
    {
      id: 2,
      title: 'CTP Dashboard',
      category: 'Enterprise Dashboard',
      description:
        'Centralized dashboard for managing and monitoring customer transactions and payments. Features include real-time notifications, comprehensive reporting, and intuitive user interface.',
      image:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImcyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNjY3ZWVhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNzY0YWIyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNTAiIGZpbGw9InVybCgjZzIpIi8+PHJlY3QgeD0iMjAiIHk9IjMwIiB3aWR0aD0iMzYwIiBoZWlnaHQ9IjQ1IiByeD0iOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOSIvPjxyZWN0IHg9IjIwIiB5PSI5MCIgd2lkdGg9IjExNSIgaGVpZ2h0PSI5MCIgcng9IjgiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjkiLz48cmVjdCB4PSIxNDUiIHk9IjkwIiB3aWR0aD0iMTE1IiBoZWlnaHQ9IjkyIiByeD0iOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOSIvPjxyZWN0IHg9IjI3MCIgeT0iOTAiIHdpZHRoPSIxMTUiIGhlaWdodD0iOTIiIHJ4PSI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45Ii8+PHRleHQgeD0iMjAwIiB5PSIxNTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjMwIiBmb250LXdlaWdodD0iYm9sZCI+Q1RQPC90ZXh0Pjwvc3ZnPg==',
      technologies: ['Angular 17', 'TailwindCSS', 'BIT Cloud', 'Golang', 'MySQL', 'Redis'],
      featured: true,
      company: 'MAKO MEDIA ASIA'
    },
    {
      id: 3,
      title: 'Universal Visualization',
      category: 'Data Analytics',
      description:
        'Advanced data visualization platform supporting multiple chart types, real-time data updates, and customizable dashboards. Built with Angular 20 and cutting-edge web technologies.',
      image:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImczIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojOGI1Y2Y2Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojM2YzYjk4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNTAiIGZpbGw9InVybCgjZzMpIi8+PHBhdGggZD0iTTUwIDIwbDQwIDQwIDQwLTQwIDQwIDQwIDQwLTQwIDQwIDQwIDQwLTQwIDQwIDQwIDQwLTQwIDQwIDQwIDQwLTQwIDQwIDQwIDQwLTQwIDQwIDQwIDQwLTQwIDQwIDQwIDQwLTQwIDQwIDQwIDQwLTQwIDQwIDQwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuMyIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjkwIiBjeT0iNjAiIHI9IjgiIGZpbGw9IndoaXRlIi8+PGNpcmNsZSBjeD0iMTMwIiBjeT0iMTAwIiByPSIxMiIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSIxNzAiIGN5PSI2MCIgcj0iMTAiIGZpbGw9IndoaXRlIi8+PGNpcmNsZSBjeD0iMjEwIiBjeT0iMTQwIiByPSIxNCIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSIyNTAiIGN5PSI4MCIgcj0iOSIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSIyOTAiIGN5PSIxODAiIHI9IjExIiBmaWxsPSJ3aGl0ZSIvPjxjaXJjbGUgY3g9IjMzMCIgY3k9IjEyMCIgcj0iMTMiIGZpbGw9IndoaXRlIi8+PHRleHQgeD0iMjAwIiB5PSIyMjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCI+VmlzdWFsaXphdGlvbjwvdGV4dD48L3N2Zz4=',
      technologies: ['Angular 20', 'TailwindCSS', 'BIT Cloud', 'Golang', 'MySQL', 'Redis'],
      featured: true,
      company: 'MAKO MEDIA ASIA'
    },
    {
      id: 4,
      title: 'BeST Solution',
      category: 'Super App',
      description:
        'A comprehensive super app for PLN Batam that manages content and data, creates meter data, integrates with devices, and provides real-time monitoring capabilities.',
      image:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9Imc0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMTBhYzRmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmE1M2M1Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNTAiIGZpbGw9InVybCgjZzQpIi8+PHJlY3QgeD0iMjUiIHk9IjQwIiB3aWR0aD0iODAiIGhlaWdodD0iMzAiIHJ4PSI1IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45Ii8+PHJlY3QgeD0iMjUiIHk9IjgwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMwIiByeD0iNSIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOSIvPjxyZWN0IHg9IjI1IiB5PSIxMjAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIzMCIgcng9IjUiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjkiLz48Y2lyY2xlIGN4PSIzMzAiIGN5PSI3MCIgcj0iNDUiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjEiLz48dGV4dCB4PSIzMzAiIHk9Ijc4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9ImJvbGQiPkJlU1Q8L3RleHQ+PC9zdmc+',
      technologies: ['Angular 10', 'DevExtreme', 'Bootstrap', 'WebSocket', 'Java Spring Boot', 'PostgreSQL'],
      featured: false,
      company: 'PT. TAB SOLUTIONS'
    },
    {
      id: 5,
      title: 'TMS (Tabs Metering System)',
      category: 'Enterprise Application',
      description:
        'A complete super application for metering system management. Features include master data creation, electricity meter integration, RBAC system, and comprehensive report processing.',
      image:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9Imc1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWU4OGU1Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMjU4ZTU5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNTAiIGZpbGw9InVybCgjZzUpIi8+PHJlY3QgeD0iMjAiIHk9IjMwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjgwIiByeD0iMTAiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjkiLz48cmVjdCB4PSIxMzAiIHk9IjMwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjgwIiByeD0iMTAiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjkiLz48cmVjdCB4PSIyNDAiIHk9IjMwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjgwIiByeD0iMTAiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjkiLz48cmVjdCB4PSI1MCIgeT0iMTMwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjUwIiByeD0iOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOSIvPjx0ZXh0IHg9IjIwMCIgeT0iMjA1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyMiIgZm9udC13ZWlnaHQ9ImJvbGQiPlRNUyBNZXRlcmluZzwvdGV4dD48L3N2Zz4=',
      technologies: ['Angular 13', 'Bootstrap', 'DevExtreme', 'Java Spring Boot', 'PostgreSQL', 'Oracle'],
      featured: false,
      company: 'PT. TAB SOLUTIONS'
    },
    {
      id: 6,
      title: 'PLN Insurance Web',
      category: 'Healthcare Management',
      description:
        'Internal PLN Insurance super application managing all data and workflows including inpatient/outpatient flows, RBAC authentication, and comprehensive reporting system.',
      image:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9Imc2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZTM3NjNmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojOGI0ZTQ1Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNTAiIGZpbGw9InVybCgjZzYpIi8+PHJlY3QgeD0iMzAiIHk9IjMwIiB3aWR0aD0iMTMwIiBoZWlnaHQ9IjkwIiByeD0iMTAiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjkiLz48cmVjdCB4PSIyMDAiIHk9IjMwIiB3aWR0aD0iMTcwIiBoZWlnaHQ9IjkwIiByeD0iMTAiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjkiLz48cmVjdCB4PSIzMCIgeT0iMTMwIiB3aWR0aD0iMzQwIiBoZWlnaHQ9IjUwIiByeD0iOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOSIvPjxjaXJjbGUgY3g9IjkwIiBjeT0iNzUiIHI9IjIwIiBmaWxsPSIjZmZjMTA3Ii8+PGNpcmNsZSBjeD0iMjU1IiBjeT0iNzUiIHI9IjIwIiBmaWxsPSIjNDZiODU1Ii8+PHRleHQgeD0iMjAwIiB5PSIyMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjIwIiBmb250LXdlaWdodD0iYm9sZCI+SU5zdXJhbmNlIFdlYjwvdGV4dD48L3N2Zz4=',
      technologies: ['PHP', 'HTML', 'Bootstrap', 'CSS3', 'PostgreSQL'],
      featured: false,
      company: 'PT. TAB SOLUTIONS'
    },
    {
      id: 7,
      title: 'AMI Dashboard (F12RB)',
      category: 'Energy Management',
      description:
        'Dashboard for automatic meter recording at PLN with visualizations including charts, tables, and other related information. Features real-time updates via WebSocket.',
      image:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9Imc3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTI4MmYyIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWU0MGFiIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNTAiIGZpbGw9InVybCgjZzcpIi8+PHJlY3QgeD0iMjAiIHk9IjMwIiB3aWR0aD0iODUiIGhlaWdodD0iMTAwIiByeD0iOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOSIvPjxyZWN0IHg9IjEyMCIgeT0iMzAiIHdpZHRoPSI4NSIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45Ii8+PHJlY3QgeD0iMjIwIiB5PSIzMCIgd2lkdGg9Ijg1IiBoZWlnaHQ9IjEwMCIgcng9IjgiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjkiLz48cmVjdCB4PSIzMjAiIHk9IjMwIiB3aWR0aD0iODUiIGhlaWdodD0iMTAwIiByeD0iOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOSIvPjxyZWN0IHg9IjIwIiB5PSIxNDUiIHdpZHRoPSIzODAiIGhlaWdodD0iNjAiIHJ4PSI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45Ii8+PHRleHQgeD0iMjAwIiB5PSIxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjIyIiBmb250LXdlaWdodD0iYm9sZCI+QU1JIERhc2hib2FyZDwvdGV4dD48L3N2Zz4=',
      technologies: ['Angular 4', 'DevExtreme', 'Bootstrap', 'WebSocket', 'Java Spring Boot', 'Oracle'],
      featured: false,
      company: 'ICON+'
    },
    {
      id: 8,
      title: 'Fathan Mubina 05',
      category: 'Web Application',
      description:
        'Fullstack web application with real-time notifications. Built during freelance period, demonstrating ability to deliver complete solutions independently.',
      image:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9Imc4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmI3MTg1Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZDQxZTM5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNTAiIGZpbGw9InVybCgjZzgpIi8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMTI1IiByPSI4MCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMiIvPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEyNSIgcj0iNTAiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjkiLz48dGV4dCB4PSIyMDAiIHk9IjEzMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2Q0MWUzOSIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiPkZtPC90ZXh0Pjx0ZXh0IHg9IjIwMCIgeT0iMjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9ImJvbGQiPkZhdGhhbiBNdWJpbmEgMDU8L3RleHQ+PC9zdmc+',
      technologies: ['Angular 5', 'Bootstrap', 'WebSocket', 'Node.js', 'MySQL'],
      featured: false,
      company: 'Freelance'
    },
    {
      id: 9,
      title: 'SIRELINK',
      category: 'Web Application',
      description:
        'Fullstack web application built with Angular and Laravel. Demonstrates full-stack capabilities and ability to work with different technology stacks.',
      image:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9Imc5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNzU1ZmZjIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojM2U4NWZjIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNTAiIGZpbGw9InVybCgjZzkpIi8+PHJlY3QgeD0iMjAiIHk9IjQwIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjEwMCIgcng9IjEwIiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45Ii8+PHJlY3QgeD0iMjAwIiB5PSI0MCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSIxMDAiIHJ4PSIxMCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOSIvPjxsaW5lIHgxPSIxMTAiIHkxPSIxNDAiIHgyPSIyOTAiIHkyPSIxNDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMyIgb3BhY2l0eT0iMC41Ii8+PHBhdGggZD0iTTExMCAxNDBMMTI1IDEyMEwxNDAgMTQwTTE1NSAxNDBMMTcwIDEyMEwxODUgMTQwTTIwMCAxNDBMMjE1IDEyMEwyMzAgMTQwTTI0NSAxNDBMMjYwIDEyMEwyNzUgMTQwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuMyIvPjx0ZXh0IHg9IjIwMCIgeT0iMjE1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiPlNJUkVMSU5LPC90ZXh0Pjwvc3ZnPg==',
      technologies: ['Angular 10', 'Bootstrap', 'Laravel', 'MySQL'],
      featured: false,
      company: 'Freelance'
    }
  ];

  // Skills Data - Organized by category
  protected skillCategories = [
    {
      id: 1,
      name: 'Frontend Development',
      icon: '🎨',
      color: '#ef4444',
      skills: [
        { name: 'Angular (v4 - v20)', level: 95 },
        { name: 'TypeScript', level: 92 },
        { name: 'JavaScript', level: 95 },
        { name: 'TailwindCSS', level: 90 },
        { name: 'Bootstrap', level: 95 },
        { name: 'DevExtreme', level: 90 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'BIT Cloud', level: 85 }
      ]
    },
    {
      id: 2,
      name: 'Backend Development',
      icon: '⚙️',
      color: '#3b82f6',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Laravel', level: 80 },
        { name: 'Java', level: 85 },
        { name: 'Spring Boot', level: 85 },
        { name: 'PHP', level: 88 }
      ]
    },
    {
      id: 3,
      name: 'Databases',
      icon: '🗄️',
      color: '#10b981',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MySQL', level: 92 },
        { name: 'Oracle', level: 85 },
        { name: 'Redis', level: 80 }
      ]
    },
    {
      id: 4,
      name: 'Tools & Methodologies',
      icon: '🔧',
      color: '#f59e0b',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Jira/Agile', level: 90 },
        { name: 'REST API', level: 92 },
        { name: 'WebSocket', level: 88 },
        { name: 'Figma', level: 82 },
        { name: 'Micro Frontend', level: 85 }
      ]
    },
    {
      id: 5,
      name: 'Soft Skills',
      icon: '💡',
      color: '#8b5cf6',
      skills: [
        { name: 'Creative & Innovative Thinking', level: 95 },
        { name: 'Team Collaboration', level: 95 },
        { name: 'Problem Solving', level: 92 },
        { name: 'Communication', level: 90 },
        { name: 'Time Management', level: 92 },
        { name: 'Fast Learner', level: 95 }
      ]
    }
  ];

  // Featured skills (for hero section)
  protected featuredSkills = [
    { name: 'Angular', icon: '🅰️', color: '#dd0031' },
    { name: 'TypeScript', icon: '📘', color: '#3178c6' },
    { name: 'JavaScript', icon: '⚡', color: '#f7df1e' },
    { name: 'TailwindCSS', icon: '🎨', color: '#06b6d4' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'Git', icon: '🔧', color: '#f05032' }
  ];

  // Certifications
  protected certifications = [
    {
      id: 1,
      name: 'Teaching Assistant Certification',
      issuer: 'Universitas Bina Sarana Informatika',
      date: '2016 - 2018',
      description: 'Served as teaching assistant for 3 semesters, mentoring students in computer science fundamentals.'
    }
  ];

  // Testimonials (placeholder for now)
  protected testimonials = [
    {
      id: 1,
      name: 'Ahmad Rizki',
      position: 'Project Manager',
      company: 'MAKO MEDIA ASIA',
      avatar: '👨‍💼',
      text: 'Ryan is an exceptional frontend developer with deep expertise in Angular. His ability to translate complex requirements into elegant, user-friendly interfaces is remarkable. Always delivers high-quality code on time.',
      rating: 5
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      position: 'Tech Lead',
      company: 'PT. TAB SOLUTIONS',
      avatar: '👩‍💻',
      text: 'Working with Ryan was a great pleasure. His technical skills combined with his problem-solving abilities made him an invaluable team member. He consistently goes above and beyond expectations.',
      rating: 5
    },
    {
      id: 3,
      name: 'Budi Santoso',
      position: 'Senior Developer',
      company: 'Former Colleague',
      avatar: '👨‍💻',
      text: 'Ryan is not just a skilled developer but also a great team player. His willingness to share knowledge and help others grow makes him stand out. Highly recommend!',
      rating: 5
    }
  ];

  // Social Links (placeholder - user can update later)
  protected socialLinks = [
    { name: 'GitHub', url: 'https://github.com/ryanapriansyah', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/ryanapriansyah', icon: '💼' },
    { name: 'Email', url: 'mailto:ryan.apriansyah21@gmail.com', icon: '📧' }
  ];

  // Mobile menu toggle
  protected mobileMenuOpen = false;
  protected isScrolled = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  // Scroll handler for navbar
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  // Form submission handler
  onSubmit(): void {
    alert('Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.\n\nThank you! Your message has been sent. I will contact you soon.');
  }

  // Get current year for footer
  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
