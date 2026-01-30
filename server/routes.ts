import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Get all skills
  app.get(api.skills.list.path, async (req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  // Get all projects
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  // Get all certifications
  app.get(api.certifications.list.path, async (req, res) => {
    const certifications = await storage.getCertifications();
    res.json(certifications);
  });

  // Get all testimonials
  app.get(api.testimonials.list.path, async (req, res) => {
    const testimonials = await storage.getTestimonials();
    res.json(testimonials);
  });

  // Submit contact message
  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}

// Seed function to be called from index.ts or manually
export async function seedDatabase() {
  const existingSkills = await storage.getSkills();
  if (existingSkills.length === 0) {
    // Skills
    const skillsData = [
      { category: "Programming", name: "Python", icon: "Code" },
      { category: "Programming", name: "Java", icon: "Coffee" },
      { category: "Programming", name: "PHP", icon: "FileCode" },
      { category: "Web Development", name: "Flask", icon: "Server" },
      { category: "Web Development", name: "Spring Boot", icon: "Leaf" },
      { category: "Database", name: "MySQL", icon: "Database" },
      { category: "OS & Admin", name: "Windows", icon: "Monitor" },
      { category: "OS & Admin", name: "Linux", icon: "Terminal" },
    ];
    for (const s of skillsData) await storage.createSkill(s);

    // Projects (Placeholders based on skills)
    const projectsData = [
      {
        title: "Secure Flask API",
        description: "A secure RESTful API built with Python Flask implementing JWT authentication and role-based access control.",
        technologies: ["Python", "Flask", "JWT", "SQL"],
        link: "#",
        githubLink: "https://github.com/nehars17",
        imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Digital Forensics Tool",
        description: "A utility tool for analyzing file headers and metadata to assist in digital forensic investigations.",
        technologies: ["Python", "Forensics", "File Analysis"],
        link: "#",
        githubLink: "https://github.com/nehars17",
        imageUrl: "https://images.unsplash.com/photo-1563206067-d352e787edd4?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Spring Boot E-commerce",
        description: "A scalable e-commerce backend built with Java Spring Boot and MySQL, featuring secure payment processing integration.",
        technologies: ["Java", "Spring Boot", "MySQL", "Hibernate"],
        link: "#",
        githubLink: "https://github.com/nehars17",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800"
      }
    ];
    for (const p of projectsData) await storage.createProject(p);

    // Certifications (Placeholders)
    const certsData = [
      {
        name: "Certified Ethical Hacker (CEH) - Placeholder",
        issuer: "EC-Council",
        date: "2024",
        imageUrl: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?auto=format&fit=crop&q=80&w=200"
      },
      {
        name: "CompTIA Security+ - Placeholder",
        issuer: "CompTIA",
        date: "2023",
        imageUrl: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?auto=format&fit=crop&q=80&w=200"
      }
    ];
    for (const c of certsData) await storage.createCertification(c);
  }
}
