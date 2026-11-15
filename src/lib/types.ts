/** Icon keys resolved to Lucide components in components/icons. Keeps data serializable. */
export type IconKey =
  | 'web'
  | 'mobile'
  | 'ai'
  | 'enterprise'
  | 'game'
  | 'backend'
  | 'cloud'
  | 'design'
  | 'zap'
  | 'swords'
  | 'shield'
  | 'church'
  | 'opportunity'
  | 'lifesim'
  | 'discover'
  | 'build'
  | 'launch'
  | 'frontend'
  | 'database'
  | 'quality'
  | 'architecture'
  | 'partnership';

export interface NavLink {
  label: string;
  href: string;
  icon: IconKey;
}

export type ProjectFilter = 'web' | 'enterprise' | 'mobile' | 'games';

export interface ProjectLink {
  label: string;
  href: string;
  kind: 'live' | 'store' | 'repo';
}

export interface ProjectImage {
  src: string;
  alt: string;
  /** Which part of the image to keep when cropped into a card (default: left-top, for app UIs with sidebars) */
  focus?: 'left-top' | 'top' | 'center';
}

export interface Project {
  slug: string;
  title: string;
  /** Small caps label above the title */
  category: string;
  filter: ProjectFilter;
  /** Short badge shown on the cover */
  badge: string;
  description: string;
  tags: string[];
  /** Factual key/value facts only — no invented metrics */
  facts: { label: string; value: string }[];
  links: ProjectLink[];
  /** Real product screenshots; when absent a branded cover is rendered */
  images?: ProjectImage[];
  coverIcon: IconKey;
  /** Extra detail used on the featured layout */
  modules?: string[];
  featured?: boolean;
  /** Still in development — shown with an "In development" badge and no outbound links */
  upcoming?: boolean;
}

export interface Service {
  id: string;
  index: string;
  title: string;
  /** Compact label for the footer and discipline index */
  shortTitle: string;
  summary: string;
  description: string;
  icon: IconKey;
  stack: string[];
  deliverables: string[];
  /** Slug of a project that demonstrates this discipline */
  relatedProject?: string;
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
  output: string;
  icon: IconKey;
}

export interface TechGroup {
  title: string;
  icon: IconKey;
  items: string[];
}
