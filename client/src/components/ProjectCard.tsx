import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { type Project } from "@shared/schema";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-muted">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter brightness-75 group-hover:brightness-100"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary/30">
            <div className="font-mono text-4xl font-bold text-muted-foreground/20">
              {project.title.substring(0, 2).toUpperCase()}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10 -mt-12">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold font-mono text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2">
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-full bg-secondary/80 hover:bg-primary hover:text-black transition-colors"
                title="View Source"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-full bg-secondary/80 hover:bg-primary hover:text-black transition-colors"
                title="Live Demo"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies?.map((tech, i) => (
            <Badge 
              key={i} 
              variant="outline" 
              className="bg-primary/5 border-primary/20 text-primary/80 hover:bg-primary/10 hover:text-primary transition-colors font-mono text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
