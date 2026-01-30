export interface Skill {
  id: number;
  category: string;
  name: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  githubLink: string;
  imageUrl: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

export const skills: Skill[] = [
  { id: 1, category: "Programming", name: "Python", icon: "Code" },
  { id: 2, category: "Programming", name: "Java", icon: "Coffee" },
  { id: 3, category: "Programming", name: "PHP", icon: "FileCode" },
  { id: 4, category: "Web Development", name: "Flask", icon: "Server" },
  { id: 5, category: "Web Development", name: "Spring Boot", icon: "Leaf" },
  { id: 6, category: "Database", name: "MySQL", icon: "Database" },
  { id: 7, category: "OS & Admin", name: "Windows", icon: "Monitor" },
  { id: 8, category: "OS & Admin", name: "Linux", icon: "Terminal" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Secure Flask API",
    description: "A secure RESTful API built with Python Flask implementing JWT authentication and role-based access control.",
    technologies: ["Python", "Flask", "JWT", "SQL"],
    link: "#",
    githubLink: "https://github.com/nehars17",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Digital Forensics Tool",
    description: "A utility tool for analyzing file headers and metadata to assist in digital forensic investigations.",
    technologies: ["Python", "Forensics", "File Analysis"],
    link: "#",
    githubLink: "https://github.com/nehars17",
    imageUrl: "https://images.unsplash.com/photo-1563206067-d352e787edd4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Spring Boot E-commerce",
    description: "A scalable e-commerce backend built with Java Spring Boot and MySQL, featuring secure payment processing integration.",
    technologies: ["Java", "Spring Boot", "MySQL", "Hibernate"],
    link: "#",
    githubLink: "https://github.com/nehars17",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800"
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Certified Ethical Hacker (CEH) - Placeholder",
    issuer: "EC-Council",
    date: "2024",
    imageUrl: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "CompTIA Security+ - Placeholder",
    issuer: "CompTIA",
    date: "2023",
    imageUrl: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?auto=format&fit=crop&q=80&w=200"
  }
];
