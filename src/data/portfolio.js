export const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'metrics', label: 'Impact' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Sachyaaa' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sachin-divase-b9b5a8229/' },
  { label: 'Email', href: 'mailto:divasesachin2002@gmail.com' },
];

export const heroTrustItems = [
  { value: '2.5+', label: 'Years Experience' },
  { value: '10+', label: 'APIs Shipped' },
  { value: 'Deloitte', label: 'Enterprise Delivery' },
];

export const heroRotatingTitles = [
  'Backend Engineer',
  'Java Developer',
  'API & Platform Builder',
  'Reliability-Focused Engineer',
];

export const metrics = [
  {
    value: '2.5+',
    label: 'Years Building Backend Systems',
    detail: 'Enterprise product delivery across development, testing, and production support.',
  },
  {
    value: '10+',
    label: 'REST & GraphQL APIs Shipped',
    detail: 'Built APIs used for high-volume workflows and internal platform integrations.',
  },
  {
    value: '25%',
    label: 'Database Latency Improvement',
    detail: 'Reduced response time by tuning queries and optimizing data access patterns.',
  },
  {
    value: '90%+',
    label: 'Test Coverage Maintained',
    detail: 'Focused on reliable releases with JUnit, Mockito, and disciplined regression safety.',
  },
];

export const skillGroups = [
  {
    title: 'Backend Core',
    description: 'Production-ready backend development with an emphasis on maintainability, performance, and API quality.',
    skills: ['Java', 'Spring Boot', 'Spring WebFlux', 'Hibernate', 'Microservices'],
  },
  {
    title: 'APIs & Architecture',
    description: 'Designing contracts and services that are readable, scalable, and easy for product teams to extend.',
    skills: ['REST APIs', 'GraphQL', 'System Integration', 'SDLC Ownership', 'Production Support'],
  },
  {
    title: 'Data & Persistence',
    description: 'Relational data modeling, query optimization, and persistence-layer improvements for real workloads.',
    skills: ['PostgreSQL', 'MySQL', 'SQL Optimization', 'Schema Design', 'Performance Tuning'],
  },
  {
    title: 'Quality & Delivery',
    description: 'Shipping with confidence through testing, tooling, and collaborative delivery practices.',
    skills: ['JUnit', 'Mockito', 'Docker', 'Git', 'Maven', 'ReactJS'],
  },
];

export const experienceItems = [
  {
    role: 'Backend Developer',
    company: 'Deloitte',
    client: 'Client: Vanguard',
    period: 'Dec 2024 - Present',
    summary:
      'Building backend services for a global asset management platform with a focus on APIs, production resilience, and platform reliability.',
    metrics: ['10+ APIs shipped', '25% faster database performance', '90%+ test coverage'],
    highlights: [
      'Built 5+ REST APIs and 5+ GraphQL APIs using Java, Spring Boot, and Spring WebFlux.',
      'Improved database latency by 25% through query tuning and backend optimization.',
      'Maintained 90%+ test coverage with JUnit and Mockito to support safer production releases.',
      'Handled P1/P2 production incidents and coordinated fixes across the SDLC lifecycle.',
    ],
  },
  {
    role: 'Analyst Trainee',
    company: 'Deloitte',
    client: 'Core engineering foundation',
    period: 'Nov 2023 - Nov 2024',
    summary:
      'Contributed to enterprise backend delivery, debugging, testing, and API implementation while building strong ownership habits.',
    metrics: ['Spring-based backend delivery', 'Release support', 'Testing discipline'],
    highlights: [
      'Supported delivery of backend features across Java and Spring-based services.',
      'Participated in sprint planning, code reviews, debugging, and release readiness activities.',
      'Strengthened reliability through test automation and structured defect resolution.',
    ],
  },
];

export const awards = [
  'APPLAUSE Award - July 2024',
  'APPLAUSE Award - December 2024',
  'SPOT Award - May 2025',
];

export const projects = [
  {
    title: 'Personal Finance Tracker API',
    type: 'Backend Project',
    description:
      'A production-grade expense management backend built with Spring Boot, focused on clean architecture, secure APIs, Dockerized delivery, CI/CD, and cloud-ready deployment.',
    highlights: [
      'JWT authentication with role-based access and secured business endpoints.',
      'Monthly and category-based summary APIs with optimized query behavior.',
      'DTO-driven responses, centralized exception handling, and MDC-based request tracing.',
      'Docker, GitHub Actions, and Render deployment aligned with production-style workflows.',
    ],
    outcomes: [
      'Supports real user ownership rules, pagination, sorting, and secure auth flows.',
      'Uses environment-based profiles for local development, testing, and production deployment.',
      'Includes unit and integration testing strategy with Spring Security and JWT coverage.',
    ],
    stack: [
      'Java 21',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL',
      'Hibernate',
      'Docker',
      'GitHub Actions',
      'Render',
      'Swagger',
    ],
    github: 'https://github.com/Sachyaaa/expensemanager/blob/version-3.0/README.md',
    demo: 'https://github.com/Sachyaaa/expensemanager/blob/version-3.0/README.md',
  },
];

export const contactChannels = [
  {
    label: 'Email',
    value: 'divasesachin2002@gmail.com',
    href: 'mailto:divasesachin2002@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sachin-divase-b9b5a8229',
    href: 'https://www.linkedin.com/in/sachin-divase-b9b5a8229/',
  },
  {
    label: 'GitHub',
    value: 'github.com/Sachyaaa',
    href: 'https://github.com/Sachyaaa',
  },
];
