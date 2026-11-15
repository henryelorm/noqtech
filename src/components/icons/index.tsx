import {
  BadgeCheck,
  Blocks,
  BrainCircuit,
  Building2,
  Church,
  Cloud,
  CodeXml,
  Database,
  Gamepad2,
  GraduationCap,
  Handshake,
  Home,
  House,
  LayoutTemplate,
  Mail,
  MonitorSmartphone,
  PenTool,
  Rocket,
  SearchCheck,
  Server,
  ShieldCheck,
  Smartphone,
  Swords,
  Zap,
  type LucideIcon,
  type LucideProps,
} from 'lucide-react';
import type { IconKey } from '@/lib/types';

const ICONS: Record<IconKey, LucideIcon> = {
  web: MonitorSmartphone,
  mobile: Smartphone,
  ai: BrainCircuit,
  enterprise: Building2,
  game: Gamepad2,
  backend: Server,
  cloud: Cloud,
  design: PenTool,
  zap: Zap,
  swords: Swords,
  shield: ShieldCheck,
  church: Church,
  opportunity: GraduationCap,
  lifesim: House,
  discover: SearchCheck,
  build: CodeXml,
  launch: Rocket,
  frontend: LayoutTemplate,
  database: Database,
  quality: BadgeCheck,
  architecture: Blocks,
  partnership: Handshake,
};

/** Navigation-specific icons for the mobile tab bar. */
export const NAV_ICONS: Record<string, LucideIcon> = {
  '/': Home,
  '/services': Blocks,
  '/our-work': LayoutTemplate,
  '/about': Building2,
  '/contact': Mail,
};

export function Icon({ name, ...props }: { name: IconKey } & LucideProps) {
  const Component = ICONS[name];
  return <Component aria-hidden="true" {...props} />;
}
