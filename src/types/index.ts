export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
