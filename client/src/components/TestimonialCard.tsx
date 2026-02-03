import { motion } from "framer-motion";
import { useState } from "react";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  imageUrl: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const [showPdf, setShowPdf] = useState(false);
  const isPdf = testimonial.imageUrl && testimonial.imageUrl.endsWith('.pdf');
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-4 p-6 rounded-lg bg-card/50 border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
    >
      {isPdf ? (
        <>
          <button
            onClick={() => setShowPdf((v) => !v)}
            className="mx-auto px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 font-mono"
          >
            {showPdf ? "Hide PDF" : "View PDF"}
          </button>
          {showPdf && (
            <div className="w-full mt-2">
              <iframe
                src={testimonial.imageUrl}
                title={testimonial.name + " Testimonial"}
                className="w-full h-96 border rounded"
                style={{ background: "#fff" }}
                allowFullScreen
              />
            </div>
          )}
        </>
      ) : (
        <img
          src={testimonial.imageUrl}
          alt={testimonial.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-primary"
        />
      )}
      <blockquote className="italic text-muted-foreground text-center">{testimonial.text}</blockquote>
      <div className="text-center">
        <div className="font-bold text-foreground font-mono">{testimonial.name}</div>
        <div className="text-xs text-muted-foreground font-mono">{testimonial.role} @ {testimonial.company}</div>
      </div>
    </motion.div>
  );
}

