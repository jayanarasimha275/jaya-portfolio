export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  extendedDescription?: string;
  technologies: string[];
  category: string;
  featured?: boolean;
  githubUrl?: string;
  backendUrl?: string;
  liveUrl?: string;
  features?: string[];
  architectureNotes?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: Array<{
    name: string;
    levelDescription: string;
  }>;
}

export interface AcademicRecord {
  metric: string;
  label: string;
  subtext: string;
  detail: string;
  institution: string;
  badge: string;
}

export interface InterestArea {
  id: string;
  title: string;
  tag: string;
  description: string;
  topics: string[];
}
