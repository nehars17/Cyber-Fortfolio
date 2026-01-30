import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import { ChevronDown, Shield, Database, Lock } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { CertificationCard } from "@/components/CertificationCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

import {
  useSkills,
  useProjects,
  useCertifications,
  useExperiences
} from "@/hooks/use-portfolio";

export default function Home() {
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: certifications, isLoading: certsLoading } = useCertifications();
  const { data: experiences, isLoading: expLoading } = useExperiences();

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Decorative blurred blobs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        </div>

        <div className="container px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-sm tracking-wide">
              CYBERSECURITY ENTHUSIAST
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono tracking-tighter text-glow">
              NEHA RS
            </h1>

            <div className="text-xl md:text-2xl text-muted-foreground font-mono h-16 md:h-20 mb-8">
              <TypeAnimation
                sequence={[
                  'Digital Forensics Analyst',
                  2000,
                  'Security Researcher',
                  2000,
                  'Software Developer',
                  2000,
                  'Problem Solver',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary"
              />
            </div>

            <p className="max-w-2xl mx-auto text-muted-foreground mb-10 text-lg leading-relaxed">
              Cybersecurity enthusiast with a background in digital forensics and computer science.
              Blending creativity and precision to bring secure digital solutions to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
                <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-mono font-bold w-full sm:w-auto">
                  Init_Contact()
                </Button>
              </ScrollLink>
              <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto font-mono">
                  View_Projects()
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative bg-card/30 border-y border-border/30">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8 overflow-hidden">
                <div className="scanline"></div>
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <code className="text-sm font-mono text-muted-foreground block">
                  <span className="text-primary">const</span> aboutMe = {'{'}
                  <br />
                  &nbsp;&nbsp;name: <span className="text-accent">"Neha Rs"</span>,
                  <br />
                  &nbsp;&nbsp;education: [
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-accent">"Nanyang Polytechnic (Cybersecurity & Digital Forensics)"</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-accent">"Singapore Management University (Computer Science)"</span>
                  <br />
                  &nbsp;&nbsp;],
                  <br />
                  &nbsp;&nbsp;passion: <span className="text-accent">"Secure Digital Solutions"</span>
                  <br />
                  {'}'};
                </code>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 font-mono flex items-center gap-3">
                <span className="text-primary">01.</span> About Me
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey began in the intricate world of Cybersecurity and digital forensics at Nanyang Polytechnic,
                  where I learned to uncover digital footprints and understand the anatomy of cyber incidents.
                </p>
                <p>
                  Furthering my education in Computer Science at SMU majoring in Cybersecurity, I expanded my repertoire into
                  software development. I don't just write code; I write secure, resilient code.
                </p>
                <p>
                  In my free time, I explore the intersection of creativity and security, building tools
                  that are as robust as they are innovative.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="p-4 bg-secondary/30 rounded-lg border border-border text-center">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <span className="text-xs font-mono font-bold">Forensics</span>
                </div>
                <div className="p-4 bg-secondary/30 rounded-lg border border-border text-center">
                  <Database className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <span className="text-xs font-mono font-bold">Data</span>
                </div>
                <div className="p-4 bg-secondary/30 rounded-lg border border-border text-center">
                  <Lock className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <span className="text-xs font-mono font-bold">Security</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-background">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold mb-4 font-mono">
              <span className="text-primary">02.</span> Technical Arsenal
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional Skillset
            </p>
          </motion.div>

          {skillsLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-32 bg-card/50 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills?.map((skill, index) => (
                <SkillCard key={skill.id} skill={skill} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-secondary/10 border-y border-border/30">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col md:flex-row justify-between items-end gap-4"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4 font-mono">
                <span className="text-primary">03.</span> Professional Experience
              </h2>
              <p className="text-muted-foreground">
                My work and internships across software development, cybersecurity, and education.
              </p>
            </div>
          </motion.div>

          {expLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-96 bg-card/50 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiences?.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl border border-border hover:shadow-lg transition-shadow flex flex-col overflow-hidden"
                >
                  {/* Full-width top image */}
                  {exp.imageUrl && (
                    <div className="w-full aspect-video relative">
                      <img
                        src={exp.imageUrl}
                        alt={exp.company}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-xl font-bold font-mono text-foreground mb-2">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="font-mono">{exp.company}</span> | <span className="font-mono">{exp.year}</span>
                      </p>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-primary/5 border border-primary/20 text-primary/80 hover:bg-primary/10 hover:text-primary transition-colors font-mono text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-24 bg-secondary/10 border-y border-border/30">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col md:flex-row justify-between items-end gap-4"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4 font-mono">
                <span className="text-primary">04.</span> Featured Projects
              </h2>
              <p className="text-muted-foreground">
                Showcase of development and security research work.
              </p>
            </div>
            <a
              href="https://github.com/nehars17"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-accent font-mono text-sm flex items-center gap-2 group"
            >
              View Github Profile <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
            </a>
          </motion.div>

          {projectsLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-96 bg-card/50 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects?.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4 font-mono">
              <span className="text-primary">05.</span> Certifications
            </h2>
          </motion.div>

          <div className="space-y-4">
            {certsLoading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="h-24 bg-card/50 rounded-lg animate-pulse" />
              ))
            ) : (
              certifications?.map((cert, index) => (
                <CertificationCard key={cert.id} cert={cert} index={index} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 font-mono">
              <span className="text-primary">06.</span> Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Have a project in mind or want to discuss security? Contact me via email:
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              {/* Gmail Link */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nehars.rs@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-6 py-3 bg-primary text-white font-mono font-semibold rounded-lg hover:bg-accent transition-colors"
              >
                Open in Gmail
              </a>

              {/* Copy Email Button */}
              <button
                onClick={() => navigator.clipboard.writeText("nehars.rs@gmail.com")}
                className="inline-block px-6 py-3 bg-secondary text-primary font-mono font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Copy Email
              </button>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">Or just copy it to your clipboard!</p>
          </motion.div>
        </div>
      </section>



      <Footer />
    </div>
  );
}
