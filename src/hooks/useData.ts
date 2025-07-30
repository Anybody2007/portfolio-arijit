import { useState, useEffect } from 'react';

interface PersonalData {
  name: string;
  title: string;
  initials: string;
  description: string;
  location: string;
  experience: string;
  specialization: string;
  email: string;
  phone: string;
}

interface AboutData {
  paragraphs: string[];
}

interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
}

interface Stat {
  number: string;
  label: string;
}

interface Achievement {
  icon: string;
  title: string;
  description: string;
  year: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  date: string;
  status: string;
  category: string;
  link: string;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  link: string;
}

interface BlogPost {
  link: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

interface NavigationItem {
  name: string;
  path: string;
}

interface PortfolioData {
  personal: PersonalData;
  about: AboutData;
  skills: SkillCategory[];
  stats: Stat[];
  achievements: Achievement[];
  testimonials: Testimonial[];
  projects: Project[];
  experience: Experience[];
  certifications: Certification[];
  blogPosts: BlogPost[];
  blogCategories: string[];
  navigation: NavigationItem[];
  socialMedia: SocialMediaData;
}

interface SocialMediaData {
  linkedin: string;
  github: string;
  twitter: string;
}

export const useData = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Failed to load data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};
