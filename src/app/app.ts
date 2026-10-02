import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

type Theme = 'light' | 'dark';
const CAREER_START_YEAR = 2018;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private observers: IntersectionObserver[] = [];
  private revealFallback?: ReturnType<typeof setTimeout>;

  // Personal Information
  protected name = 'Ryan Apriansyah';

  protected role = 'Senior Frontend Developer';
  protected tagline =
    'Building exceptional digital experiences with modern web technologies';
  protected years = new Date().getFullYear() - CAREER_START_YEAR;
  protected description =
    'Frontend developer focused on scalable, user-centric web applications. Deep in the Angular ecosystem, shipping dashboards and enterprise products for PLN, AKO Media Asia (SALT Indonesia) and other tech companies.';

  // Stats
  protected stats = [
    { value: `${this.years}+`, label: 'Years of experience' },
    { value: '15+', label: 'Projects shipped' },
    { value: '4', label: 'Companies' },
    { value: '5+', label: 'Core technologies' },
  ];

  // About Section
  protected aboutText =
    "I'm a dedicated frontend developer who loves turning complex problems into simple, beautiful, and intuitive solutions. My journey in web development started during my college years where I served as a teaching assistant, strengthening my technical foundation through mentoring and diverse academic perspectives.\n\nThroughout my career, I've worked with various technologies and frameworks, from Angular 4 to Angular 20, PHP to Node.js, and Oracle to PostgreSQL. I believe in writing clean, maintainable code and following best practices in software development.";

  // Work Experience (Timeline)
  protected experiences = [
    {
      id: 1,
      company: 'AKO MEDIA ASIA (SALT Indonesia)',
      position: 'Senior Frontend Developer',
      location: 'Jakarta, Indonesia',
      period: 'August 2023 – Present',
      type: 'Permanent Employee',
      description:
        'Leading frontend development for multiple high-impact dashboard projects using Angular 17+ and modern web technologies.',
      projects: ['WEC Telkomsel', 'FMC Dashboard', 'CTP Dashboard', 'Universal Visualization'],
      technologies: [
        'Angular 17-20',
        'TailwindCSS',
        'BIT Cloud',
        'Golang',
        'MySQL',
        'Redis',
      ],
    },
    {
      id: 2,
      company: 'PT. TAB SOLUTIONS INDONESIA',
      position: 'Frontend Developer',
      location: 'Jakarta, Indonesia',
      period: 'August 2019 – August 2023',
      type: 'Permanent Employee',
      description:
        'Developed and maintained multiple enterprise applications for PLN and other clients, working on BeST, TMS, and PLN Insurance projects.',
      projects: [
        'BeST Solution',
        'TMS (Tabs Metering System)',
        'PLN Insurance Web',
      ],
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
      id: 3,
      company: 'FREELANCE',
      position: 'Fullstack Web Developer',
      location: 'Remote (Jakarta, Indonesia)',
      period: 'January 2020 – January 2023',
      type: 'Self-Employed',
      description:
        'Delivered fullstack web solutions for various clients, handling both frontend and backend development.',
      projects: ['iProc', 'NILAIKU', 'Fathan Mubina 05 Website', 'SIRELINK', 'BARISTA', 'IconCash', 'PLN Mobile'],
      technologies: [
        'Angular 5-10',
        'Node.js',
        'Laravel',
        'Bootstrap',
        'WebSocket',
        'MySQL',
      ],
    },
    {
      id: 4,
      company: 'Indonesia Comnet Plus (ICON+)',
      position: 'Frontend Developer',
      location: 'Jakarta, Indonesia',
      period: 'August 2018 – August 2019',
      type: 'Permanent Employee',
      description:
        'Started professional career as a frontend developer, working on the F12RB project with PLN.',
      projects: ['AMI Dashboard (F12RB)'],
      technologies: [
        'Angular 4',
        'DevExtreme',
        'Bootstrap',
        'WebSocket',
        'Java Spring Boot',
        'Oracle',
      ],
    },
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
      description:
        'Applied academic knowledge to real-world projects while working at ICON+, bridging theoretical learning with practical application.',
    },
    {
      id: 2,
      school: 'Universitas Bina Sarana Informatika',
      degree: 'Diploma III in Computer Science',
      location: 'Bogor, Indonesia',
      period: '2015 – 2018',
      gpa: '3.5 / 4.0',
      description:
        'Served as teaching assistant for 3 semesters. Enhanced technical foundation, communication, and leadership skills through mentoring.',
    },
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
      id: 15,
      title: 'WEC Telkomsel',
      category: ['Enterprise', 'Web Apps'],
      description:
        'Frontend operations for the Telkomsel web platform, a micro-frontend system spanning Angular, React, Next.js and Drupal (PHP) services. Responsible for monitoring website performance, implementing GTM tracking and Datadog RUM, and fixing reported bugs across services.',
      technologies: ['Angular', 'React', 'Next.js', 'Drupal', 'PHP', 'GTM', 'Datadog RUM'],
      company: 'AKO MEDIA ASIA',
    },
    {
      id: 1,
      title: 'FMC Dashboard',
      category: ['Enterprise', 'Dashboard'],
      description:
        'A comprehensive dashboard for facility management center with real-time data visualization, featuring advanced charts, tables, and reporting capabilities. Built with micro-frontend architecture using BIT Cloud.',
      technologies: [
        'Angular 17',
        'TailwindCSS',
        'BIT Cloud',
        'Golang',
        'MySQL',
        'Redis',
      ],
      company: 'AKO MEDIA ASIA',
    },
    {
      id: 2,
      title: 'CTP Dashboard',
      category: ['Enterprise', 'Dashboard'],
      description:
        'Centralized dashboard for managing and monitoring customer transactions and payments. Features include real-time notifications, comprehensive reporting, and intuitive user interface.',
      technologies: [
        'Angular 17',
        'TailwindCSS',
        'BIT Cloud',
        'Golang',
        'MySQL',
        'Redis',
      ],
      company: 'AKO MEDIA ASIA',
    },
    {
      id: 3,
      title: 'Universal Visualization',
      category: ['Enterprise', 'Dashboard'],
      description:
        'Advanced data visualization platform supporting multiple chart types, real-time data updates, and customizable dashboards. Built with Angular 20 and cutting-edge web technologies.',
      technologies: [
        'Angular 20',
        'TailwindCSS',
        'BIT Cloud',
        'Golang',
        'MySQL',
        'Redis',
      ],
      company: 'AKO MEDIA ASIA',
    },
    {
      id: 4,
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
      id: 5,
      title: 'TMS (Tabs Metering System)',
      category: ['Enterprise', 'Web Apps'],
      description:
        'A complete super application for metering system management. Features include master data creation, electricity meter integration, RBAC system, and comprehensive report processing.',
      technologies: [
        'Angular 13',
        'Bootstrap',
        'DevExtreme',
        'Java Spring Boot',
        'PostgreSQL',
        'Oracle',
      ],
      company: 'PT. TAB SOLUTIONS',
    },
    {
      id: 6,
      title: 'PLN Insurance Web',
      category: ['Healthcare', 'Web Apps'],
      description:
        'Internal PLN Insurance super application managing all data and workflows including inpatient/outpatient flows, RBAC authentication, and comprehensive reporting system.',
      technologies: ['PHP', 'HTML', 'Bootstrap', 'CSS3', 'PostgreSQL'],
      company: 'PT. TAB SOLUTIONS',
    },
    {
      id: 7,
      title: 'AMI Dashboard (F12RB)',
      category: ['Enterprise', 'Dashboard'],
      description:
        'Dashboard for automatic meter recording at PLN with visualizations including charts, tables, and other related information. Features real-time updates via WebSocket.',
      technologies: [
        'Angular 4',
        'DevExtreme',
        'Bootstrap',
        'WebSocket',
        'Java Spring Boot',
        'Oracle',
      ],
      company: 'ICON+',
    },
    {
      id: 8,
      title: 'Fathan Mubina 05',
      category: ['Web Apps'],
      description:
        'Fullstack web application with real-time notifications. Built during freelance period, demonstrating ability to deliver complete solutions independently.',
      technologies: ['Angular 5', 'Bootstrap', 'WebSocket', 'Node.js', 'MySQL'],
      company: 'Freelance',
    },
    {
      id: 9,
      title: 'SIRELINK',
      category: ['Web Apps'],
      description:
        'Fullstack web application built with Angular and Laravel. Demonstrates full-stack capabilities and ability to work with different technology stacks.',
      technologies: ['Angular 10', 'Bootstrap', 'Laravel', 'MySQL'],
      company: 'Freelance',
    },
    {
      id: 10,
      title: 'NilaiKu',
      category: ['Mobile Apps'],
      description:
        'A Flutter-based mobile e-commerce platform designed to empower farmers by enabling them to sell their agricultural products directly to consumers at fair market prices, eliminating middlemen and ensuring better profit margins for producers.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST API'],
      company: 'Freelance',
    },
    {
      id: 11,
      title: 'iProc',
      category: ['Enterprise', 'Web Apps'],
      description:
        'A comprehensive web-based procurement management system built with PHP CodeIgniter 3. Features include goods and services management, procurement planning, supplier selection, tender management, and complete procurement workflow automation.',
      technologies: ['PHP', 'CodeIgniter 3', 'Bootstrap', 'jQuery', 'MySQL'],
      company: 'Freelance',
    },
    {
      id: 12,
      title: 'BARISTA',
      category: ['Enterprise', 'Web Apps'],
      description:
        'An exclusive enterprise resource management application for PLN built with Vue.js. Features include procurement management tailored for PLN operations, meeting room booking system, visitor scheduling for external guests, and comprehensive office management tools.',
      technologies: ['Vue.js', 'Vuex', 'Bootstrap', 'Java Spring Boot', 'Oracle'],
      company: 'ICON+',
    },
    {
      id: 13,
      title: 'IconCash',
      category: ['Enterprise', 'Web Apps'],
      description:
        'A fintech digital wallet application similar to LinkAja, GoPay, and ShopeePay, built with Vue.js frontend and Java Spring Boot backend. Designed specifically for PLN e-commerce ecosystem, enabling seamless digital transactions, bill payments, and financial services within the PLN network.',
      technologies: ['Vue.js', 'Vuex', 'Bootstrap', 'Java Spring Boot', 'Oracle'],
      company: 'ICON+',
    },
    {
      id: 14,
      title: 'PLN Mobile',
      category: ['Mobile Apps', 'Enterprise'],
      description:
        'A public-facing mobile e-commerce platform built with Flutter. Enables users to purchase PLN products including electric vehicles (EV), EV spare parts, and various other merchandise. Fully integrated with multiple payment gateways including digital wallets, bank transfers, and IconCash for seamless transactions.',
      technologies: ['Flutter', 'Dart', 'Java Spring Boot', 'Oracle', 'Payment Gateway'],
      company: 'ICON+',
    },
  ];

  // Skills Data - Organized by category
  protected skillCategories = [
    {
      id: 1,
      name: 'Frontend Frameworks',
      skills: ['Angular (v4 - v20)', 'Vue.js', 'React', 'TypeScript', 'JavaScript', 'JQuery'],
    },
    {
      id: 2,
      name: 'Styling & UI Libraries',
      skills: ['TailwindCSS', 'Bootstrap', 'DevExtreme', 'PrimeNG', 'HTML5/CSS3', 'SCSS/Sass'],
    },
    {
      id: 3,
      name: 'Frontend Architecture',
      skills: ['Micro Frontend', 'Module Federation', 'BIT Cloud', 'Nx Monorepo', 'Component Design System'],
    },
    {
      id: 4,
      name: 'State Management',
      skills: ['RxJS/NgRx', 'Vuex/Pinia', 'Redux/Context API', 'Signals (Angular)'],
    },
    {
      id: 5,
      name: 'Backend & Database',
      skills: ['Node.js', 'Java Spring Boot', 'PHP/Laravel', 'PostgreSQL', 'MySQL', 'Oracle', 'Redis'],
    },
    {
      id: 6,
      name: 'Dev Tools & Methodologies',
      skills: ['Git/GitLab/GitHub', 'Jira/Agile/Scrum', 'REST API', 'WebSocket', 'CI/CD Pipelines', 'Docker'],
    },
  ];

  // Featured skills (for hero section)
  protected featuredSkills = [
    { name: 'Angular' },
    { name: 'Vue.js' },
    { name: 'React' },
    { name: 'TypeScript' },
    { name: 'TailwindCSS' },
    { name: 'Micro Frontend' },
  ];

  // Certifications
  protected certifications = [
    {
      id: 1,
      name: 'Teaching Assistant Certification',
      issuer: 'Universitas Bina Sarana Informatika',
      date: '2016 - 2018',
      description:
        'Served as teaching assistant for 3 semesters, mentoring students in computer science fundamentals.',
    },
  ];

  // Testimonials (placeholder for now)
  protected testimonials = [
    {
      id: 1,
      name: 'Ambar Dwi Saputra',
      position: 'Frontend Developer',
      company: 'AKO MEDIA ASIA',
      text: 'Ryan is an exceptional frontend developer with deep expertise in Angular. His ability to translate complex requirements into elegant, user-friendly interfaces is remarkable. Always delivers high-quality code on time.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Abdul Hakam',
      position: 'Tech Lead',
      company: 'PT. TAB SOLUTIONS',
      text: 'Working with Ryan was a great pleasure. His technical skills combined with his problem-solving abilities made him an invaluable team member. He consistently goes above and beyond expectations.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Ja\'far',
      position: 'Senior Developer',
      company: 'ICON+',
      text: 'Ryan is not just a skilled developer but also a great team player. His willingness to share knowledge and help others grow makes him stand out. Highly recommend!',
      rating: 5,
    },
    {
      id: 4,
      name: 'Alif Razan Saputra',
      position: 'Fullstack Developer',
      company: 'Former Colleague',
      text: 'I had the pleasure of working alongside Ryan on multiple projects. His attention to detail, clean code practices, and innovative approach to problem-solving consistently impressed the entire team. A true professional!',
      rating: 5,
    },
  ];

  // Social Links (placeholder - user can update later)
  protected socialLinks = [
    { name: 'GitLab', url: 'https://gitlab.com/ryan.apriansyah21' },
    { name: 'GitHub', url: 'https://github.com/ryugazaki' },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ryan-apriansyah-549b42190/',
    },
    { name: 'Email', url: 'mailto:ryan.apriansyah21@gmail.com' },
  ];

  protected navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'testimonials', label: 'Words' },
    { id: 'contact', label: 'Contact' },
  ];

  // UI state
  protected mobileMenuOpen = signal(false);
  protected isScrolled = signal(false);
  protected activeSection = signal('home');
  protected theme = signal<Theme>('light');

  // Project filter
  protected activeFilter = signal('All');
  protected filterCategories = [
    'All',
    'Enterprise',
    'Dashboard',
    'Web Apps',
    'Healthcare',
    'Mobile Apps',
  ];

  protected filteredProjects = computed(() => {
    const filter = this.activeFilter();
    return filter === 'All'
      ? this.projects
      : this.projects.filter((p) => p.category.includes(filter));
  });

  protected countFor(category: string): number {
    return category === 'All'
      ? this.projects.length
      : this.projects.filter((p) => p.category.includes(category)).length;
  }

  protected pad(n: number): string {
    return String(n).padStart(2, '0');
  }

  setFilter(category: string): void {
    this.activeFilter.set(category);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  toggleTheme(): void {
    this.applyTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private applyTheme(theme: Theme): void {
    this.theme.set(theme);
    document.documentElement.dataset['theme'] = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage unavailable */
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = sectionId === 'home' ? 0 : 72;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    this.mobileMenuOpen.set(false);
  }

  ngAfterViewInit(): void {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('theme');
    } catch {
      /* storage unavailable */
    }
    const initial: Theme =
      saved === 'light' || saved === 'dark'
        ? saved
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
    this.applyTheme(initial);

    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();

    const root = this.host.nativeElement;

    // Reveal-on-scroll. Content stays visible unless the observer is available,
    // and a fallback reveals everything if it never fires.
    let fired = false;
    const items = Array.from(root.querySelectorAll('.reveal'));
    const reveal = new IntersectionObserver(
      (entries) => {
        fired = true;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            reveal.unobserve(entry.target);
          }
        }
      },
      { threshold: 0, rootMargin: '0px 0px -5% 0px' },
    );
    root.classList.add('reveal-ready');
    items.forEach((el) => reveal.observe(el));
    this.revealFallback = setTimeout(() => {
      if (!fired) items.forEach((el) => el.classList.add('in'));
    }, 1500);

    // Scroll spy
    const spy = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.activeSection.set(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    root.querySelectorAll('section[id]').forEach((el) => spy.observe(el));

    this.observers = [reveal, spy];
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
    clearTimeout(this.revealFallback);
    this.observers.forEach((o) => o.disconnect());
  }

  private onScroll = (): void => {
    this.isScrolled.set(window.scrollY > 24);
  };
}
