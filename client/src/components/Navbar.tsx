import { Link } from "react-scroll";
import { Shield, Menu, X, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import resume from "/assets/resume/Neha_Resume.pdf";

const navItems = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Certifications", to: "certifications" },
  { name: "Contact", to: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${scrolled
          ? "bg-background/80 backdrop-blur-md border-primary/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="hero" smooth={true} duration={500} className="flex items-center gap-2 group">
              <div className="relative">
                <Shield className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                <div className="absolute inset-0 bg-primary/20 blur-md rounded-full -z-10 group-hover:bg-accent/20 transition-colors"></div>
              </div>
              <span className="font-mono font-bold text-xl tracking-tighter text-white">
                <span className="text-primary group-hover:text-accent">&lt;</span>
                NehaRs
                <span className="text-primary group-hover:text-accent">/&gt;</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer text-muted-foreground hover:text-primary font-mono text-sm font-medium transition-colors hover:shadow-[0_0_10px_rgba(0,255,128,0.3)] px-3 py-1 rounded"
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary/10 hover:text-accent font-mono"
                onClick={() => window.open(resume, "_blank")}
              >
                <Terminal className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-primary/20 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-xl border-b border-primary/20 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-primary hover:bg-primary/10 block px-3 py-2 rounded-md text-base font-mono font-medium cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent hover:bg-primary/10 block px-3 py-2 rounded-md text-base font-mono font-medium cursor-pointer border border-primary/30 mt-4 text-center"
              >
                Download Resume
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
