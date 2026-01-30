import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { type Certification } from "@shared/schema";

interface CertificationCardProps {
  cert: Certification;
  index: number;
}

export function CertificationCard({ cert, index }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
    >
      <div className="flex-shrink-0 p-3 rounded-full bg-secondary text-accent">
        <Award className="w-6 h-6" />
      </div>
      <div className="flex-grow min-w-0">
        <h4 className="font-bold text-foreground truncate font-mono">{cert.name}</h4>
        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
        {cert.date && <p className="text-xs text-muted-foreground/60 font-mono mt-1">{cert.date}</p>}
      </div>
      {cert.link && (
        <a 
          href={cert.link}
          target="_blank"
          rel="noreferrer"
          className="flex-shrink-0 text-muted-foreground hover:text-accent transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      )}
    </motion.div>
  );
}
