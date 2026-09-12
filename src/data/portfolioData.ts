import { Project, SkillCategory, AcademicRecord, InterestArea } from '../types';

export const PERSONAL_INFO = {
  name: "Palla Jaya Narasimha",
  shortName: "Jaya Narasimha",
  role: "B.Tech CSE Student & Developer",
  university: "SRM University-AP",
  degree: "B.Tech in Computer Science and Engineering",
  currentStage: "2nd Year — B.Tech CSE",
  email: "jayanarasimha232@gmail.com",
  github: "https://github.com/jayanarasimha275",
  linkedin: "https://www.linkedin.com/in/jaya-narasimha-palla-a58699391",
  portfolioRepo: "https://github.com/jayanarasimha275/portfolio",
  status: "Available for internships & collaborations",
  tagline: "Building practical software, learning through projects, and exploring the intersection of development and design.",
  statement: "Building practical software, learning through projects, and exploring the intersection of development and design.",
  aboutParagraphs: [
    "I'm Palla Jaya Narasimha, a Computer Science and Engineering student at SRM University-AP, currently in my second year. I enjoy turning ideas into practical software and learning by building real projects.",
    "My focus is on strengthening core programming principles while crafting modern, responsive web experiences. Rather than learning tools in isolation, I explore their practical applications through real software workflows.",
    "I regularly work with C, C++, Python, and Java for algorithmic foundations, alongside HTML, CSS, Git, GitHub, and thoughtful UI/UX design to build functional digital products."
  ]
};

export interface JourneyMilestone {
  period: string;
  title: string;
  metric: string;
  metricLabel: string;
  institution: string;
  description: string;
  active?: boolean;
}

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    period: "Higher Secondary",
    title: "Intermediate Board Examination",
    metric: "961 / 1000",
    metricLabel: "Academic Score",
    institution: "Board of Intermediate Education",
    description: "Built strong mathematical and analytical problem-solving foundations through rigorous coursework in Mathematics, Physics, and Chemistry."
  },
  {
    period: "First Year Undergraduate",
    title: "First Year — SRM University-AP",
    metric: "9.10 CGPA",
    metricLabel: "1st-Year CGPA",
    institution: "SRM University-AP",
    description: "Maintained a 9.10 CGPA in the first academic year across foundational engineering mathematics, procedural C programming, and computing fundamentals."
  },
  {
    period: "Now",
    title: "2nd Year — B.Tech CSE",
    metric: "2nd Year",
    metricLabel: "Current Academic Standing",
    institution: "SRM University-AP",
    description: "Actively studying data structures, object-oriented concepts, and systems while engineering practical web applications and exploring UI/UX.",
    active: true
  }
];

export const EXPLORATION_AREAS = [
  {
    number: "01",
    title: "Software Development",
    tag: "Core Engineering",
    description: "Building practical applications and solving programming problems with clean, maintainable logic.",
    details: ["Procedural & object-oriented programming", "Modular code architecture", "Hands-on project problem solving"]
  },
  {
    number: "02",
    title: "Web Development",
    tag: "Interface Engineering",
    description: "Creating functional and responsive web experiences with semantic structure and modern styling.",
    details: ["Semantic HTML structure", "Responsive CSS and flex/grid layouts", "Interactive browser experiences"]
  },
  {
    number: "03",
    title: "UI/UX",
    tag: "Product Design",
    description: "Designing interfaces with attention to usability, visual clarity, and deliberate layout hierarchy.",
    details: ["Typographic hierarchy & pacing", "Intentional negative space & contrast", "User-first interface clarity"]
  },
  {
    number: "04",
    title: "Problem Solving",
    tag: "Foundational Rigor",
    description: "Strengthening my foundations through C, C++, Python, and Java with continuous algorithmic practice.",
    details: ["Core algorithmic thinking", "Data structures practice", "Language-level mechanics and paradigms"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    description: "Core languages applied in academic problem-solving and software development.",
    iconName: "Code2",
    skills: [
      { name: "C", levelDescription: "Procedural programming, memory layouts, and foundations" },
      { name: "C++", levelDescription: "Object-oriented structures, algorithms, and logic" },
      { name: "Python", levelDescription: "Scripting, algorithm implementation, and automation" },
      { name: "Java", levelDescription: "Object-oriented programming, class hierarchies, and software structure" }
    ]
  },
  {
    title: "Web",
    description: "Essential client-side technologies for building responsive, accessible interfaces.",
    iconName: "Globe",
    skills: [
      { name: "HTML", levelDescription: "Semantic markup, structural document flow, and accessibility" },
      { name: "CSS", levelDescription: "Responsive layouts, modern Grid & Flexbox, and styling systems" }
    ]
  },
  {
    title: "Tools",
    description: "Version control and collaborative tools utilized across projects.",
    iconName: "Terminal",
    skills: [
      { name: "Git", levelDescription: "Branching, staging, committing, and local version history" },
      { name: "GitHub", levelDescription: "Repository management, project hosting, and code versioning" }
    ]
  },
  {
    title: "Design",
    description: "Visual ergonomics, hierarchy, and user-centered design principles.",
    iconName: "Palette",
    skills: [
      { name: "UI/UX", levelDescription: "Visual hierarchy, deliberate whitespace, typography, and clean interaction design" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "trackflow",
    title: "TrackFlow",
    subtitle: "Affiliate/link tracking dashboard",
    featured: true,
    category: "Full-Stack Dashboard",
    description:
      "Affiliate/link tracking dashboard focused on managing tracking data, offers and campaign-related workflows.",
    extendedDescription:
      "TrackFlow is my primary and most comprehensive software project. Designed to organize affiliate links, monitor tracking status, and streamline campaign offer workflows. Built with a responsive frontend dashboard deployed on Vercel and backed by a dedicated link routing service repository.",
    technologies: ["Dashboard UI", "Offer Management", "Link Telemetry", "Backend Service"],
    liveUrl: "https://trackflow-dashboard-bkrn6gbio-jayanarasimha232-7662s-projects.vercel.app/",
    backendUrl: "https://github.com/jayanarasimha275/linktrackback",
    features: [
      "Offer and campaign management workflows with real-time status indicators",
      "Link routing telemetry architecture for affiliate data visibility",
      "Dedicated GitHub backend repository (linktrackback) handling routing logic",
      "Clean, high-clarity dashboard interface with low-clutter data views"
    ],
    architectureNotes:
      "Live deployment on Vercel with dedicated backend service on GitHub for link handling and query parameter routing."
  },
  {
    id: "invoice-generator",
    title: "Invoice Generator",
    subtitle: "Practical Utility Web Application",
    featured: false,
    category: "Utility Application",
    description:
      "A practical invoice generation application built to create, calculate, and format billable receipts and invoices.",
    extendedDescription:
      "Developed to solve the common need for fast, clean billing documents. Features dynamic item additions, automatic tax and total calculations, and print-ready formatting.",
    technologies: ["HTML", "CSS", "Client-Side Logic", "Web UI"],
    githubUrl: "https://github.com/jayanarasimha275/invoice-generator",
    features: [
      "Dynamic line-item additions with real-time calculation of subtotal, tax, and totals",
      "Print and export styling formatted for crisp physical paper and PDF saving",
      "Structured sender and client fields for organized business details"
    ]
  },
  {
    id: "local-guide",
    title: "Local Guide",
    subtitle: "Nearby Place & Service Discovery Application",
    featured: false,
    category: "Discovery Application",
    description:
      "A project focused on discovering nearby places and regional services with clear, accessible categorization.",
    extendedDescription:
      "Created as an exploratory interface to help users find local spots, services, and community amenities with simple card layouts and clean interaction states.",
    technologies: ["Web UI", "Location Discovery", "UI/UX Design"],
    features: [
      "Categorized exploration views for essential spots and regional amenities",
      "Clean, minimal place cards with clear typography and highlight tags",
      "Responsive layout designed for comfortable mobile and desktop browsing"
    ]
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    subtitle: "Developer Showcase & Academic Journey",
    featured: false,
    category: "Personal Website",
    description:
      "Personal portfolio engineered to showcase projects, academic journey, verified skills, and development craft.",
    extendedDescription:
      "Designed with an editorial, typography-first aesthetic inspired by top developer portfolios. Emphasizes honest storytelling, generous whitespace, and subtle interactions.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "UI/UX"],
    githubUrl: "https://github.com/jayanarasimha275/portfolio",
    features: [
      "Editorial layout with generous whitespace and high-contrast typography",
      "Accurate timeline highlighting the 9.10 1st-year CGPA and 961/1000 Intermediate milestones",
      "Honest skill presentation strictly reflecting verified technical foundations",
      "Subtle, non-distracting animations prioritizing readability and performance"
    ]
  }
];
