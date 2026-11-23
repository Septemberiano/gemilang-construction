export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  note: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  image: string;
  category: string;
  categoryKey: "all" | "bangun-baru" | "renovasi" | "komersial" | "interior" | "las";
  title: string;
  description: string;
  specs: {
    area: string;
    duration: string;
    location: string;
    style: string;
  };
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  duration: string;
  deliverable: string;
}

export interface AdvantageItem {
  number: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CommitmentItem {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  homeImage: string;
  rating: number;
  comment: string;
  projectType: string;
}
