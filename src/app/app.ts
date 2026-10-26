import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  computed,
  inject,
  signal,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { education, experiences } from './data/experience';
import { ProjectCategory } from './data/models';
import { CAREER_START_YEAR, profile, socialLinks } from './data/profile';
import { projectCategories, projects } from './data/projects';
import { featuredSkills, skillCategories } from './data/skills';
import { testimonials } from './data/testimonials';

type Theme = 'light' | 'dark';
type ProjectFilter = ProjectCategory | 'All';

@Component({
  selector: 'app-root',
  imports: [NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private observers: IntersectionObserver[] = [];
  private revealFallback?: ReturnType<typeof setTimeout>;

  protected readonly profile = profile;
  protected readonly years = new Date().getFullYear() - CAREER_START_YEAR;
  protected readonly currentYear = new Date().getFullYear();

  protected readonly experiences = experiences;
  protected readonly education = education;
  protected readonly projects = projects;
  protected readonly skillCategories = skillCategories;
  protected readonly featuredSkills = featuredSkills;
  protected readonly testimonials = testimonials;
  protected readonly socialLinks = socialLinks;

  protected readonly stats = [
    { value: `${this.years}+`, label: 'Years of experience' },
    { value: `${projects.length}`, label: 'Projects shipped' },
    { value: '4', label: 'Companies' },
    { value: '5+', label: 'Core technologies' },
  ];

  protected readonly navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    ...(testimonials.length ? [{ id: 'testimonials', label: 'Words' }] : []),
    { id: 'contact', label: 'Contact' },
  ];

  // UI state
  protected mobileMenuOpen = signal(false);
  protected isScrolled = signal(false);
  protected activeSection = signal('home');
  protected theme = signal<Theme>('light');

  // Project filter
  protected activeFilter = signal<ProjectFilter>('All');
  protected readonly filterCategories: ProjectFilter[] = ['All', ...projectCategories];

  protected filteredProjects = computed(() => {
    const filter = this.activeFilter();
    return filter === 'All'
      ? this.projects
      : this.projects.filter((p) => p.category.includes(filter));
  });

  protected countFor(category: ProjectFilter): number {
    return category === 'All'
      ? this.projects.length
      : this.projects.filter((p) => p.category.includes(category)).length;
  }

  protected pad(n: number): string {
    return String(n).padStart(2, '0');
  }

  setFilter(category: ProjectFilter): void {
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
