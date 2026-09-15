export interface NavItem {
  label: string;
  href: string;
}

export interface ImpactMetric {
  id: string;
  icon: string;
  value: number;
  suffix: string;
  label: string;
}

export interface Pillar {
  icon: string;
  title: string;
  description: string;
}

export interface Capability {
  icon: string;
  label: string;
}

export interface FarmerStory {
  eyebrow: string;
  title: string;
  intro: string;
  quote: string;
  name: string;
  meta: string;
  image: string;
}

export interface OrgInfo {
  icon: string;
  name: string;
  tag: string;
  text: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
}

export interface Program {
  id: string;
  tag: string;
  icon: string;
  title: string;
  description: string;
}

export interface Publication {
  title: string;
  date: string;
  category: string;
  image: string;
  summary: string;
}

export interface FormField {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  options?: string[];
}
