import iac from "@/assets/iac.avif";
import sineru from "@/assets/sineru.avif";
import data from "@/assets/dataanalytics.avif";
import inspire from "@/assets/inspire.jpg";
import cuemaster from "@/assets/cuemaster.avif";
import soar from "@/assets/soar.gif";
import aftw from "@/assets/aftw.avif";
import aspj from "@/assets/aspj.avif";
import cs301 from "@/assets/cs301.png";
import tax from "@/assets/tax.png";
import sac from "@/assets/sac.avif";

import { ReactNode } from "react";
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

export interface Experience {
  id: number;
  role: string;
  company: string;
  year: string;
  description: string | ReactNode; // allow string OR JSX
  technologies: string[];
  imageUrl: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  imageUrl: string;
  pdf?: string;
}

export const skills: Skill[] = [
 { id: 1, category: "Programming", name: "Python", icon: "Code" },
{ id: 2, category: "Programming", name: "Java", icon: "Coffee" },
{ id: 3, category: "Programming", name: "PHP", icon: "FileCode" },
{ id: 4, category: "Frontend", name: "React.js", icon: "Atom" },

{ id: 5, category: "Backend", name: "Flask", icon: "Server" },
{ id: 6, category: "Backend", name: "Spring Boot", icon: "Server" },

{ id: 7, category: "Database", name: "MySQL", icon: "Database" },

{ id: 8, category: "Operating Systems", name: "Windows Administration", icon: "Terminal" },
{ id: 9, category: "Operating Systems", name: "Linux Administration", icon: "Terminal" },

{ id: 10, category: "Cloud", name: "AWS (EC2, S3, IAM)", icon: "Cloud" },
{ id: 11, category: "Cloud", name: "Azure (App Services, VM, AD)", icon: "Cloud" },

{ id: 12, category: "Cybersecurity", name: "Red Team / Penetration Testing", icon: "Shield" },
{ id: 13, category: "Cybersecurity", name: "Blue Team / Incident Response", icon: "Shield" },
{ id: 14, category: "Cybersecurity", name: "Digital Forensics", icon: "Shield" },
{ id: 15, category: "Cybersecurity", name: "Web Application Security", icon: "Shield" },

{ id: 16, category: "Security Tools", name: "Burp Suite", icon: "Wrench" },
{ id: 17, category: "Security Tools", name: "Wireshark", icon: "Radar" },
{ id: 18, category: "Security Tools", name: "Metasploit", icon: "Bug" },

{ id: 19, category: "Dev Tools", name: "Git & GitHub", icon: "GitBranch" },
{ id: 20, category: "Dev Tools", name: "Docker", icon: "Box" },
{ id: 21, category: "Dev Tools", name: "Postman", icon: "Send" },

];
export const experiences: Experience[] = [
  {
    id: 1,
    role: "Application Developer Intern",
    company: "Accenture (Client: Inland Revenue Authority of Singapore)",
    year: "2025",
    description: (
      <>
        Contributing to enterprise application development projects for a government client, supporting system development, integration, and deployment within large-scale digital transformation initiatives.
      </>
    ),
    technologies: ["Java", "Spring Boot", "React", "Enterprise Systems"],
    imageUrl: tax
  },
  {
    id: 2,
    role: "Software Developer Intern (BridgingRoots Project)",
    company: "INSPIRE Program / University of Victoria Collaboration",
    year: "2025",
    description: (
      <>
        Contributing to BridgingRoots, a language-learning web application supporting SENĆOŦEN revitalization for middle school students. 
        Designed backend infrastructure, improved data models, and resolved cross-platform issues using Docker, MySQL, and Nginx while collaborating with educators and Indigenous community partners to ensure culturally respectful and pedagogically sound learning experiences.{" "}
        <a 
          href="https://inspireuvic.org/project/bridging-roots-bayside/" 
          target="_blank" 
          rel="noreferrer" 
          className="underline text-primary hover:text-accent"
        >
          Learn more
        </a>.
      </>
    ),
    technologies: ["Docker", "MySQL", "Nginx", "Web Development", "Accessibility", "Cross-Cultural Collaboration"],
    imageUrl: inspire
  },
  {
    id: 3,
    role: "Cybersecurity Engineer (Intern)",
    company: "Defence Science and Technology Agency (DSTA)",
    year: "2022 – 2023",
    description: (
      <>
        Automated Red Team operations using Infrastructure as Code by building a tool that analyzes Terraform scripts to generate attack plans for simulated vulnerable AWS environments.
      </>
    ),
    technologies: ["Python", "Terraform", "AWS", "Red Teaming", "Infrastructure as Code"],
    imageUrl: iac
  },
  {
    id: 4,
    role: "Python Developer",
    company: "Sineru Labs",
    year: "2022",
    description: (
      <>
        Developed a Python program to post-process large time-series JSON datasets, extract resistance values, and generate graphs to visualize trends for analysis.
      </>
    ),
    technologies: ["Python", "Data Processing", "JSON", "Data Visualization"],
    imageUrl: data
  },
  {
    id: 5,
    role: "Frontend Developer",
    company: "Sineru Labs",
    year: "2022",
    description: (
      <>
        Designed and developed a customer-facing landing page and handled website deployment.
      </>
    ),
    technologies: ["HTML", "CSS", "JavaScript", "Web Deployment"],
    imageUrl: sineru
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "9-Ball Pool Management Platform",
    description: "Led a team of 4 to build a full-stack pool management system with secure authentication, OAuth, 2FA, email activation, CAPTCHA, and single-session login.",
    technologies: ["Java", "Spring Boot", "React", "TypeScript", "OAuth", "BCrypt", "TOTP", "CAPTCHA"],
    link: "#",
    githubLink: "https://github.com/nehars17",
    imageUrl: cuemaster
  },
  {
    id: 2,
    title: "Windows Print Spooler Exploit Mitigation",
    description: "Completed as part of a Cybersecurity Project, investigating CVE-2022-21999 and implementing mitigation using PowerShell, access control hardening, and automated incident response with Splunk Phantom.",
    technologies: ["PowerShell", "Windows Security", "Splunk Phantom", "Incident Response", "Access Control"],
    link: "#",
    githubLink: "https://github.com/nehars17",
    imageUrl: soar
  },
  {
    id: 3,
    title: "Secure Password Manager Web Application",
    description: "Built under an Information Security Project, featuring CAPTCHA-protected authentication, speech-to-text CAPTCHA via Azure Cognitive Services, automated backups to Google Drive, and Selenium-powered login automation.",
    technologies: ["Python", "Flask", "Azure Cognitive Services", "Selenium", "Google Drive API", "Security"],
    link: "#",
    githubLink: "https://github.com/nehars17",
    imageUrl: aftw
  },
  {
    id: 4,
    title: "Secure E-commerce Web Application",
    description: "Developed as part of an Application Security Project, implementing OTP-based authentication and defenses against OWASP Top 10 vulnerabilities including XSS, SQL Injection, Broken Access Control, and Sensitive Data Exposure.",
    technologies: ["Python", "Flask", "Web Security", "OWASP", "OTP Authentication"],
    link: "#",
    githubLink: "https://github.com/nehars17",
    imageUrl: aspj
  },
  {
    id: 5,
    title: "Cloud-Based CRM System for Banking Client",
    description: "Spearheaded frontend development for a cloud-hosted CRM deployed on AWS, integrating Cognito OAuth2, API Gateway, ALB, and CI/CD pipelines to ensure high availability, scalability, and secure user access.",
    technologies: ["AWS", "React", "Cognito", "API Gateway", "ALB", "CI/CD", "OAuth2"],
    link: "#",
    githubLink: "https://github.com/nehars17",
    imageUrl: cs301
  },
  {
  id: 6,
  title: "SAC Attendance System / Makerspace NYP",
  description: "Part of a team to develop a student attendance system for Makerspace NYP, making it easier for student assistant coaches to clock their shifts by simply tapping their admin cards on the card reader.",
  technologies: ["Java", "JavaScript", "RFID Card Reader", "Database", "Web Development"],
  link: "#",
  githubLink: "https://github.com/nehars17",
  imageUrl: sac // add your image if you have
}

];



export const certifications: Certification[] = [
  {
    id: 1,
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2022",
    imageUrl: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?auto=format&fit=crop&q=80&w=200",
    pdf: "/assets/certs/ECC-CEH-Certificate.pdf"
  },
  {
    id: 2,
    name: "Computer Hacking Forensic Investigator (CHFI)",
    issuer: "EC-Council",
    date: "2022",
    imageUrl: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?auto=format&fit=crop&q=80&w=200",
    pdf: "/assets/certs/ECC-CHFI-Certificate-ANSI.pdf"
  },
  {
    id: 3,
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2025",
    imageUrl: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?auto=format&fit=crop&q=80&w=200",
    pdf: "/assets/certs/AWS Certified Solutions Architect - Associate.pdf"
  },
  {
    id: 4,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2020",
    imageUrl: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?auto=format&fit=crop&q=80&w=200",
    pdf: "/assets/certs/AWS Certified Cloud Practitioner.pdf"
  },
  {
    id: 5,
    name: 'Google IT Automation with Python Professional Certificate',
    issuer: 'Google',
    date: '2023',
    imageUrl: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?auto=format&fit=crop&q=80&w=200",
    pdf: "/assets/certs/Google Python Automation.pdf"
  },
  {
    id: 6,
    name: 'Google IT Support Professional Certificate',
    issuer: 'Google',
    date: '2022',
    imageUrl: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?auto=format&fit=crop&q=80&w=200",
    pdf: "/assets/certs/Google IT Support.pdf"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Accenture",
    role: "Application Developer Intern",
    company: "Inland Revenue Authority of Singapore",
    text: "Neha contributed to our digital transformation project with professionalism and technical skill, quickly adapting to our enterprise environment.",
    imageUrl: "/assets/testimonials/Accenture.pdf"
  },
  {
    id: 2,
    name: "DSTA",
    role: "Cybersecurity Engineer (Intern)",
    company: "Defence Science and Technology Agency",
    text: "Her automation of Red Team operations using Infrastructure as Code was innovative and impactful for our security team.",
    imageUrl: "/assets/testimonials/DSTA.pdf"
  },
];
