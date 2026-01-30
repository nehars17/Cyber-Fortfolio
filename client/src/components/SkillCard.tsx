import { motion } from "framer-motion";
import { 
  Code, Database, Server, Terminal, Shield, 
  Cpu, Globe, Lock, Activity, Cloud, Coffee,FileCode,Atom
} from "lucide-react";
import { type Skill } from "@shared/schema";

const IconMap: Record<string, React.ElementType> = {
  Code, Database, Server, Terminal, Shield, Cpu, Globe, Lock, Activity, Cloud, Coffee,FileCode,Atom
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = IconMap[skill.icon || "Code"] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,128,0.1)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <div className="p-3 rounded-lg bg-secondary/50 group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300">
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <h3 className="font-mono font-bold text-lg text-foreground">{skill.name}</h3>
          <p className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">{skill.category}</p>
        </div>
      </div>
      
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/0 group-hover:border-primary/50 transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/0 group-hover:border-primary/50 transition-colors" />
    </motion.div>
  );
}
