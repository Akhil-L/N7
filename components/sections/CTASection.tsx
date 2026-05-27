'use client'
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative bg-card border border-white/10 rounded-3xl overflow-hidden px-8 md:px-14 py-12 md:py-16" id="contact"
        >
          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-[50%] h-[150%] bg-primary/10 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-10 right-0 w-[40%] h-[200%] bg-blue-600/8 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Take the full advantage of going{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  paper-less
                </span>{" "}
                now.
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start md:items-center gap-3 shrink-0">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/5 text-white rounded-full px-8"
                data-testid="button-cta-contact"
              >
                Contact Us
              </Button>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8"
                data-testid="button-cta-demo"
              >
                REQUEST DEMO
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
