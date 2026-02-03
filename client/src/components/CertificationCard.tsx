
import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { type Certification } from "@shared/schema";

interface CertificationCardProps {
  cert: Certification;
  index: number;
}

export function CertificationCard({ cert, index }: CertificationCardProps) {
  const [showPdf, setShowPdf] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-2 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 p-3 rounded-full bg-secondary text-accent">
          <Award className="w-6 h-6" />
        </div>
        <div className="flex-grow min-w-0">
          <h4 className="font-bold text-foreground truncate font-mono">{cert.name}</h4>
          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
          {cert.date && <p className="text-xs text-muted-foreground/60 font-mono mt-1">{cert.date}</p>}
        </div>
        {cert.pdf && (
          <button
            onClick={() => setShowPdf((v) => !v)}
            className="ml-2 px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 font-mono"
          >
            {showPdf ? "Hide Certificate" : "View Certificate"}
          </button>
        )}
        {cert.link && !cert.pdf && (
          <a 
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 text-muted-foreground hover:text-accent transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
      {showPdf && cert.pdf && (
        <div className="w-full mt-2">
          <iframe
            src={cert.pdf}
            title={cert.name + " Certificate"}
            className="w-full h-96 border rounded"
            style={{ background: "#fff" }}
            allowFullScreen
          />
        </div>
      )}
    </motion.div>
  );
}
