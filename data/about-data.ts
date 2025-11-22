// data/about-data.ts
import { ArrowRight, Target, Award, Users, Lightbulb, Shield, Zap, CheckCircle2, Linkedin, Calendar, MapPin } from 'lucide-react';

export const stats = [
  { value: '2021', label: 'Established' },
  { value: '24+', label: 'Team members' },
  { value: '3', label: 'Office locations' },
  { value: '100%', label: 'Client dedication' },
];

export const officeLocations = [
  {
    city: 'Bangalore',
    state: 'Karnataka (Headquarters)',
    year: '2021 - Founded',
    color: 'primary',
    colorClass: 'bg-primary text-primary',
  },
  {
    city: 'Mumbai',
    state: 'Maharashtra',
    year: '2022 - Expansion',
    color: 'secondary',
    colorClass: 'bg-secondary text-secondary',
  },
  { city: 'Kurnool', state: 'Andhra Pradesh', year: '2023 - Growth', color: 'accent', colorClass: 'bg-accent text-accent' },
];

export const coreValuesData = [
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'We conduct business with honesty, transparency, and ethical principles. Our commitment to integrity builds lasting trust with clients and stakeholders.',
    gradient: 'from-primary/20 to-primary/10',
    iconColor: 'text-primary',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We embrace creativity and continuous improvement, staying ahead of industry trends to deliver cutting-edge solutions that drive meaningful results.',
    gradient: 'from-secondary/20 to-secondary/10',
    iconColor: 'text-secondary',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We pursue the highest standards in every engagement, delivering quality outcomes that exceed expectations and create lasting value.',
    gradient: 'from-accent/20 to-accent/10',
    iconColor: 'text-accent',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'We believe in the power of partnership, working closely with clients and teams to co-create solutions that address complex challenges.',
    gradient: 'from-primary/20 to-secondary/10',
    iconColor: 'text-primary',
  },
  {
    icon: CheckCircle2,
    title: 'Accountability',
    description:
      'We take ownership of our commitments, delivering on promises and taking responsibility for outcomes at every stage of engagement.',
    gradient: 'from-secondary/20 to-accent/10',
    iconColor: 'text-secondary',
  },
  {
    icon: Target,
    title: 'Customer Focus',
    description:
      'Client success drives everything we do. We listen deeply, understand unique needs, and deliver solutions that create measurable business impact.',
    gradient: 'from-accent/20 to-primary/10',
    iconColor: 'text-accent',
  },
];

export type TeamMember = {
  name: string;
  role: string;
  image: {
    src: string;
    alt: string;
  };
  bio: string;
  linkedin?: string;
};

export const team: TeamMember[] = [
  {
    name: 'Dellibabu Nallabothu',
    role: 'Founder & CEO',
    image: { src: '/assets/about/team-ceo.jpg', alt: 'Dellibabu Nallabothu' },
    bio: 'Visionary entrepreneur with passion for innovation and digital transformation',
    // linkedin: 'https://www.linkedin.com/in/dellibabun/',
  },
  {
    name: 'Team Member',
    role: 'Chief Technology Officer',
    image: { src: '/assets/about/team-cto.avif', alt: 'CTO Name' },
    bio: 'Technology leader specializing in cloud solutions and enterprise architecture',
  },
  {
    name: 'Team Member',
    role: 'Head of Operations',
    image: { src: '/assets/about/team-ho.avif', alt: 'Operations Head' },
    bio: 'Operations expert ensuring excellence in project delivery and client success',
  },
  {
    name: 'Team Member',
    role: 'Project Manager',
    image: { src: '/assets/about/team-pm.avif', alt: 'Project Manager' },
    bio: 'Experienced PM driving successful implementation of complex technology projects',
  },
];



export const milestones = [
  {
    year: '2021',
    title: 'Company founded',
    description:
      'NPK Business Solutions established by Dellibabu Nallabothu with a vision to transform business consulting and technology solutions',
    image: { src: '/assets/about/milestone-founded.avif', alt: 'Company Founded' },
  },
  {
    year: '2022',
    title: 'Multi-city expansion',
    description: 'Expanded operations with branches in Mumbai, Bangalore, and Kurnool, establishing regional presence across India',
    image: { src: '/assets/about/milestone-expansion.avif', alt: 'Multi-City Expansion' },
  },
  {
    year: '2023',
    title: 'Team growth milestone',
    description: 'Grew to a diverse team of 24+ professionals including Project Managers, Developers, Support Staff, and Managers',
    image: { src: '/assets/about/milestone-team.avif', alt: 'Team Growth' },
  },
  {
    year: '2024',
    title: 'Client success stories',
    description:
      'Delivered transformative digital solutions across multiple industries, building long-term partnerships based on trust and results',
    image: { src: '/assets/about/milestone-success.avif', alt: 'Client Success' },
  },
];
