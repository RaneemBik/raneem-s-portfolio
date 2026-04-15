export const personalInfo = {
  name: "Raneem Bikai",
  title: "Full-Stack Web Developer",
  subtitle: "Building scalable web apps with modern tech",
  email: "raneembikai70@gmail.com",
  phone: "+961 70 976 927",
  linkedin: "https://www.linkedin.com/in/raneem-bikai/",
  github: "https://github.com/RaneemBik",
  location: "Lebanon",
  summary:
    "Full-stack web developer with experience in QA and modern web applications in Agile environments. Skilled in building scalable systems, implementing secure authentication, and supporting testing processes including API validation. Experienced across the software development lifecycle from development and debugging to deployment while collaborating with cross-functional teams to deliver reliable applications.",
  photo: "/photo.jpg", // Replace with your actual photo
};

export const skills = {
  Languages: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Python", "SQL", "Java"],
  "Frontend Frameworks": ["React", "Next.js", "Tailwind CSS"],
  "Backend & APIs": ["Node.js", "Express.js", "Django", "NestJS", "Fastify", "FastAPI", "RESTful API", "PHP"],
  Databases: ["MySQL", "MongoDB", "PostgreSQL", "Supabase"],
  "Auth & Security": ["JWT", "bcrypt", "RBAC", "OAuth"],
  "Testing & QA": ["Jest", "Cypress", "Postman", "Unit Testing", "Integration Testing"],
  "DevOps & Deploy": ["Git", "GitHub", "Vercel"],
  "AI Integration": ["OpenAI API", "Pre-trained Models", "AI APIs", "Chatling"],
  Methodologies: ["Agile/Scrum", "Jira", "Clean Architecture", "SOLID Principles"],
  Mobile: ["Flutter", "Dart", "Firebase"],
};

export const skillIcons: Record<string, string> = {};


export const experience = [
  {
    id: 1,
    title: "Full Stack Web Developer Intern",
    company: "The Digital Hub UNRWA",
    location: "Sibline, Lebanon (Hybrid)",
    period: "Jan 2026 – May 2026",
    startDate: "2026-01",
    endDate: "2026-05",
    type: "Internship",
    description: [
      "Collaborated with cross-functional teams to develop and maintain multiple web applications in an Agile environment.",
      "Implemented secure authentication and authorization mechanisms including token-based authentication and role-based access control.",
      "Participated in quality assurance processes including API validation to ensure application reliability.",
      "Assisted in debugging issues and improving application performance across frontend and backend components.",
      "Contributed to code reviews and iterative feature delivery using project management tools such as Jira and Trello.",
      "Assisted in database design, query optimization, and backend integration for scalable application functionality.",
      "Contributed to the implementation and integration of AI-powered features within web applications.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "JWT", "Jira", "Agile"],
    color: "#a855f7",
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Lebanese International University (LIU)",
    location: "Lebanon",
    period: "Graduated July 2025",
    year: "2025",
    description: "Bachelor's degree in Computer Science with focus on software engineering, web development, and database systems.",
    icon: "GraduationCap",
  },
];

export const projects = [
  {
    id: 1,
    title: "Progressly",
    subtitle: "Task Management & Team Collaboration Tool",
    description:
      "A full-stack project management platform featuring a dashboard, Kanban task board, dependency graph, project invitation flow, role management, and task trash/restore.",
    longDescription:
      "Progressly is a comprehensive project management platform built for teams. It features a real-time Kanban board with drag-and-drop functionality, a dependency graph visualization, and a complete project invitation system with email notifications. The platform implements JWT authentication with granular role-based access control (owner, admin, member), each with protected API endpoints. A seed script generates realistic demo data for testing, and the application is fully deployed on Vercel with proper environment configuration and CORS handling.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "NestJS", "MongoDB", "JWT", "Nodemailer", "Vercel"],
    github: "https://github.com/RaneemBik/progressly",
    live: "https://progress-task-tool.vercel.app/",
    date: "2026",
    category: "Full Stack",
    images: ["/projects/progressly-landing.png", "/projects/progressly-dep.png", "/projects/progressly-block.png", "/projects/progressly-invitations.png", "/projects/progressly-invite.png"],
    highlights: [
      "Kanban board with drag-and-drop",
      "Dependency graph visualization",
      "JWT + RBAC (owner, admin, member)",
      "Email-based project invitations",
      "Modular NestJS backend architecture",
      "Deployed on Vercel with CI/CD",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "SparkClean",
    subtitle: "Informative Dynamic Website with RBAC",
    description:
      "A booking platform with calendar-based service scheduling and guest contact functionality, featuring Role-Based Access Control.",
    longDescription:
      "SparkClean is a professional cleaning service booking platform built with Next.js and Supabase. It features a fully interactive calendar for scheduling cleaning services, a guest contact system, and a robust admin dashboard. The architecture follows SOLID principles with the repository pattern, ensuring clean and maintainable code. API endpoints are validated with Postman, and Nodemailer handles secure admin password setup. The application is deployed via GitHub Actions to Vercel.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Nodemailer", "Vercel", "Postman"],
    github: "https://github.com/RaneemBik/spark-clean",
    live: "https://spark-clean-sigma.vercel.app/",
    date: "2026",
    category: "Full Stack",
    images: ["/projects/spark-services.png"],
    highlights: [
      "Calendar-based service scheduling",
      "RBAC with admin dashboard",
      "SOLID principles + Repository Pattern",
      "Nodemailer for secure password setup",
      "API validation with Postman",
      "Deployed on Vercel",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "RateHub",
    subtitle: "Company Ratings & Jobs Platform",
    description:
      "A full-stack platform enabling company administrators to post jobs and candidates to apply by uploading their CVs.",
    longDescription:
      "RateHub is a career platform that bridges companies and job seekers. Company administrators can create and manage job postings while candidates can browse listings and submit applications with CV uploads directly through the platform. The system implements email verification for both employees and admins using Nodemailer, enhancing account security. Built with a React frontend, Supabase backend, and styled with Tailwind CSS, RateHub provides a seamless hiring experience.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Supabase", "Nodemailer"],
    github: "",
    live: "",
    date: "2026",
    category: "Full Stack",
    images: [],
    highlights: [
      "Job posting management for companies",
      "CV upload for candidates",
      "Email verification for admins & employees",
      "Supabase real-time backend",
      "Responsive design with Tailwind CSS",
    ],
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    subtitle: "Personal Web Portfolio",
    description:
      "A responsive personal portfolio website built with React to showcase projects, experience, education, certifications, and contact functionality.",
    longDescription:
      "A fully responsive personal portfolio website built with React, designed to professionally showcase skills, projects, experience, and educational background. Features smooth animations, a contact form, and an optimized user interface for both desktop and mobile devices. The site is structured to highlight technical expertise while maintaining a clean and modern aesthetic.",
    technologies: ["React", "JavaScript", "CSS3", "HTML5"],
    github: "https://github.com/RaneemBik/raneem-bikaii-portfolio",
    live: "https://raneem-s-portfolio.vercel.app",
    date: "2024",
    category: "Frontend",
    images: ["/projects/portfolio/1.png"],
    highlights: [
      "Fully responsive design",
      "Smooth animations",
      "Projects showcase",
      "Contact form integration",
      "Mobile-first approach",
    ],
    featured: false,
  },
  {
    id: 5,
    title: "Auth & RBAC System",
    subtitle: "Python + FastAPI Authentication",
    description:
      "A robust authentication system and role-based access control system built with Python and FastAPI.",
    longDescription:
      "A production-ready authentication and authorization system built with Python and FastAPI. Implements JWT-based authentication with refresh token rotation, bcrypt password hashing, and a comprehensive role-based access control system. Features include user registration with email verification, password reset flows, session management, and protected route middleware. The system follows clean architecture principles with clear separation of concerns.",
    technologies: ["Python", "FastAPI", "JWT", "bcrypt", "RBAC", "PostgreSQL", "Pydantic"],
    github: "",
    live: "",
    date: "2026",
    category: "Backend",
    images: [],
    highlights: [
      "JWT authentication with refresh tokens",
      "bcrypt password hashing",
      "Role-based access control",
      "Email verification flow",
      "FastAPI with Pydantic validation",
      "Clean architecture",
    ],
    featured: false,
  },
  {
    id: 6,
    title: "Rofof",
    subtitle: "Online Bookstore Platform",
    description:
      "A web platform for browsing, searching, and purchasing books online with advanced filtering by category.",
    longDescription:
      "Rofof is a full-featured online bookstore platform that allows users to browse an extensive catalog of books, search by title or author, and filter by categories for a smooth shopping experience. Built with PHP and MySQL on the backend, the platform features a shopping cart, user account management, and a seamless checkout process. The frontend focuses on intuitive navigation and a user-friendly interface that makes discovering new books a pleasure.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "MySQL"],
    github: "",
    live: "",
    date: "2024",
    category: "Full Stack",
    images: [],
    highlights: [
      "Browse and search book catalog",
      "Advanced category filtering",
      "Shopping cart & checkout",
      "User account management",
      "Intuitive navigation design",
    ],
    featured: false,
  },
  {
    id: 7,
    title: "SmartMind Academy",
    subtitle: "Educational Web & Mobile App Platform",
    description:
      "An educational platform with interactive, age-based games to enhance logic and critical thinking, with AI-powered features.",
    longDescription:
      "SmartMind Academy is a comprehensive educational platform targeting children with interactive games designed to enhance logic and critical thinking. The platform spans web and mobile (Flutter), offering age-based game categories that adapt to the learner's level. AI-powered conversational features (via Chatling integration) provide personalized learning assistance. A robust admin dashboard allows educators to manage users, games, and content. Secure user authentication is implemented across all platforms.",
    technologies: ["HTML", "CSS", "JavaScript", "Flutter", "Dart", "Firebase", "Java", "PHP", "SQL", "AI APIs", "Chatling"],
    github: "",
    live: "",
    date: "2024",
    category: "Full Stack",
    images: [],
    highlights: [
      "Age-based interactive games",
      "AI-powered conversational features",
      "Cross-platform (Web + Flutter mobile)",
      "Admin dashboard for content management",
      "Firebase real-time database",
      "Secure user authentication",
    ],
    featured: true,
  },
  {
    id: 8,
    title: "Food Recipe App",
    subtitle: "Mobile Recipe Browser",
    description:
      "A mobile app to browse, save, and manage favorite recipes and ingredients with a focus on cultural food discovery.",
    longDescription:
      "A Flutter-based mobile application that enables users to discover, save, and manage recipes from various cuisines around the world. Users can browse by cuisine type, save favorite recipes, and manage a personal ingredient list. The app emphasizes cultural food discovery, helping users explore dishes from different traditions. Firebase powers the backend for real-time sync of saved recipes and user preferences. The interface is designed for intuitive mobile navigation.",
    technologies: ["Flutter", "Dart", "Firebase"],
    github: "",
    live: "",
    date: "2024",
    category: "Mobile",
    images: [],
    highlights: [
      "Browse recipes by cuisine & culture",
      "Save and manage favorite recipes",
      "Ingredient management",
      "Firebase real-time sync",
      "Intuitive mobile-first UI",
    ],
    featured: false,
  },
  {
    id: 9,
    title: "Fastify",
    subtitle: "High-Performance Node.js Framework Presentation",
    description:
      "A comprehensive presentation about Fastify, exploring its architecture, performance optimization, and best practices for building scalable APIs.",
    longDescription:
      "An in-depth presentation and exploration of Fastify, a modern Node.js framework built for speed and efficiency. The project covers Fastify's core concepts, performance benchmarks, routing system, middleware ecosystem, and real-world implementation patterns. Demonstrates how to build high-performance REST APIs with validation, authentication, and error handling using Fastify's plugin architecture.",
    technologies: ["Node.js", "Fastify", "JavaScript", "TypeScript", "REST API", "Performance"],
    github: "https://github.com/RaneemBik/fastify",
    live: "https://fastify-indol.vercel.app",
    date: "2026",
    category: "Backend",
    images: [],
    highlights: [
      "Framework architecture & design",
      "Performance optimization techniques",
      "Plugin system & middleware",
      "Route validation & error handling",
      "Real-world API examples",
      "Best practices & patterns",
    ],
    featured: false,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const techStack3D = [
  { name: "React", color: "#61DAFB", icon: "React" },
  { name: "Next.js", color: "#ffffff", icon: "Code2" },
  { name: "TypeScript", color: "#3178C6", icon: "Code2" },
  { name: "Node.js", color: "#539E43", icon: "Server" },
  { name: "Python", color: "#F7CD3E", icon: "Code2" },
  { name: "MongoDB", color: "#47A248", icon: "Database" },
  { name: "PostgreSQL", color: "#336791", icon: "Database" },
  { name: "Tailwind", color: "#38BDF8", icon: "Palette" },
];
