'use client'
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  { brand: "Zoomerr", title: "How we help brand reach out to more people", tag: "getting started", wide: true },
  { brand: "SmartFinder", title: "How we help brand reach out to more people", tag: "getting started", wide: false },
  { brand: "ArtVenue", title: "How we help brand reach out to more people", tag: "getting started", wide: false },
];

const N7Pattern = ({ size = 4, opacity = 0.8 }: { size?: number; opacity?: number }) => {
  const items = Array.from({ length: size * size });
  return (
    <div className={`grid gap-2`} style={{ gridTemplateColumns: `repeat(${size}, 1fr)`, opacity }}>
      {items.map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-8 h-8 text-primary">
          <path
            d="M4 4 L20 4 L20 10 L12 10 L12 14 L20 14 L20 20 L4 20 L4 14 L12 14 L12 10 L4 10 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ))}
    </div>
  );
};

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[60%] h-[70%] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Case Studies</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-card border border-white/8 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.12)] transition-all duration-300 cursor-pointer ${
                i === 0 ? "md:col-span-1 md:row-span-1" : ""
              }`}
              data-testid={`card-casestudy-${i}`}
            >
              {/* Pattern area */}
              <div className="bg-gradient-to-br from-[#0d1534] to-[#0a0b14] p-8 flex items-center justify-center min-h-[200px] relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5" />
                <N7Pattern size={i === 0 ? 4 : 3} opacity={i === 0 ? 0.7 : 0.5} />
              </div>
              <div className="p-6">
                <span className="inline-block text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-1 mb-3">
                  {cs.tag}
                </span>
                <h3 className="text-base font-bold text-white mb-3 leading-snug">{cs.title}</h3>
                <p className="text-xs text-muted-foreground mb-4">{cs.brand}</p>
                <motion.a
                  href="#"
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-1.5 text-primary text-xs font-semibold"
                  data-testid={`link-casestudy-read-more-${i}`}
                >
                  read more <ArrowRight className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <Button
            variant="outline"
            className="border-white/20 hover:bg-white/5 text-white rounded-full px-8"
            data-testid="button-view-all-cases"
          >
            view all
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
