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
  protected role = 'Frontend Web Developer';
  protected description = 'Passionate about creating modern, responsive web applications with cutting-edge technologies.';

  // About Section
  protected aboutText = 'I am a dedicated frontend web developer with expertise in building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions. When I\'m not coding, you\'ll find me exploring new technologies and contributing to open-source projects.';
  protected experience = '7+ Years';
  protected education = 'B.S. Computer Science';
  protected location = 'Bogor, Indonesia';

  // Contact Information
  protected email = 'ryan.apriansyah21@gmail.com';
  protected phone = '+62 896 9668 4434';
  protected contactText = 'I\'m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!';

  // Current year for footer
  protected currentYear = new Date().getFullYear();

  // Projects Data
  protected projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, payment processing, and inventory management.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNmN2Y3ZjciLz48cmVjdCB4PSI1MCIgeT0iNTAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZTM1MjUiLz48cmVjdCB4PSIyNTAiIHk9IjUwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzM3NzZmYSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzMzIiBmb250LXNpemU9IjE2Ij5FLUNvbW1lcmNlPC90ZXh0Pjwvc3ZnPg==',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      demoLink: 'https://example.com/demo',
      githubLink: 'https://github.com/example'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNmMGY5ZmYiLz48cmVjdCB4PSI1MCIgeT0iNDAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIzMCIgZmlsbD0iIzYzNjZmMSIvPjxyZWN0IHg9IjUwIiB5PSI4MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZjAwMCIvPjxyZWN0IHg9IjUwIiB5PSIxMjAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIzMCIgZmlsbD0iIzAwYmNkNCIvPjx0ZXh0IHg9IjIwMCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzMzIiBmb250LXNpemU9IjE2Ij5UYXNrIE1hbmFnZXI8L3RleHQ+PC9zdmc+',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      demoLink: 'https://example.com/demo2',
      githubLink: 'https://github.com/example2'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNlNmY3ZmYiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iMzAiIGZpbGw9IiNmZmQ3MDAiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSI4MCIgcj0iMjAiIGZpbGw9IiNmZmY5MDAiLz48cmVjdCB4PSI4MCIgeT0iMTQwIiB3aWR0aD0iNDAiIGhlaWdodD0iMzAiIGZpbGw9IiM0Y2FmNTAiLz48cmVjdCB4PSIyODAiIHk9IjE0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjNGNhZjUwIi8+PHRleHQgeD0iMjAwIiB5PSIxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzMzMiIGZvbnQtc2l6ZT0iMTYiPldlYXRoZXIgQXBwPC90ZXh0Pjwvc3ZnPg==',
      technologies: ['Vue.js', 'CSS3', 'Weather API', 'Chart.js'],
      demoLink: 'https://example.com/demo3',
      githubLink: 'https://github.com/example3'
    }
  ];

  // Skills Data
  protected skills = [
    { id: 1, name: 'HTML/CSS', icon: '🎨', level: 95 },
    { id: 2, name: 'JavaScript/TypeScript', icon: '⚡', level: 90 },
    { id: 3, name: 'Angular', icon: '🅰️', level: 95 },
    { id: 4, name: 'React', icon: '⚛️', level: 80 },
    { id: 5, name: 'Node.js', icon: '🟢', level: 85 },
    { id: 6, name: 'Git', icon: '🔧', level: 90 },
    { id: 7, name: 'Agile Methodology', icon: '💨', level: 90 },
    { id: 8, name: 'MySQL', icon: '🪙', level: 85 },
  ];

  // Social Links
  protected socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: '🔗' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' }
  ];

  // Mobile menu toggle
  protected mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  // Form submission handler
  onSubmit(): void {
    alert('Thank you for your message! This is a demo form.');
  }
}
