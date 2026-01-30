import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-mono font-bold text-lg text-white mb-2">
              <span className="text-primary">&lt;</span>
              NehaRs
              <span className="text-primary">/&gt;</span>
            </span>
            <p className="text-muted-foreground text-sm font-mono text-center md:text-left">
              Securing the digital frontier, one packet at a time.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/nehars17" 
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="http://linkedin.com/in/neha-d-o-ram-singasan-7644ab203" 
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="mailto:nehars.rs@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground font-mono">
          <p>&copy; {new Date().getFullYear()} Neha Rs. All systems operational.</p>
        </div>
      </div>
    </footer>
  );
}
