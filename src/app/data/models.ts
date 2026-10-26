export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  period: string;
  type: string;
  description: string;
  projects: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  location: string;
  period: string;
  gpa: string;
  description: string;
}

export type ProjectCategory =
  | 'Enterprise'
  | 'Dashboard'
  | 'Web Apps'
  | 'Healthcare'
  | 'Mobile Apps';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory[];
  description: string;
  technologies: string[];
  company: string;
  /** Measurable outcomes or scope, e.g. "Cut page load time by 40%". */
  highlights?: string[];
  /** Live site, repository or case study. */
  link?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  text: string;
  /** Source of the quote, e.g. a LinkedIn recommendation. */
  url?: string;
}

export interface SocialLink {
  name: string;
  url: string;
}
