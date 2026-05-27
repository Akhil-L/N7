'use client'
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    tag: "CB7",
    title: "Core Banking CB7",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
  },
  {
    tag: "N7",
    title: "Digital Banking N7",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
  {
    tag: "API",
    title: "Open Banking",
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
  },
  {
    tag: "LOS",
    title: "Loan Origination System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
  {
    tag: "LMS",
    title: "Loan Management System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
  {
    tag: "NBFC",
    title: "NBFC",
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: (i: number) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      delay: i * 0.08,
    },
  }),
};

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg">
              All of our solutions are{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                tailor-made
              </span>{" "}
              to your needs
            </h2>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ x: 4 }}
            className="flex items-center gap-2 text-primary font-semibold text-sm whitespace-nowrap group"
            data-testid="link-learn-more-solutions"
          >
            LEARN MORE
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ scale: 1.02, borderColor: "rgba(59,130,246,0.4)" }}
              className="group relative bg-card border border-white/8 rounded-2xl p-7 flex flex-col gap-4 cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]"
              data-testid={`card-solution-${i}`}
            >
              <span className="inline-block text-xs font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1 w-fit">
                {sol.tag}
              </span>
              <h3 className="text-lg font-bold text-white">{sol.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {sol.description}
              </p>
              <motion.a
                href="#contact"
                whileHover={{ x: 4 }}
                className="flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all"
                data-testid={`link-solution-learn-more-${i}`}
              >
                learn more <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
