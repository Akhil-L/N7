'use client'
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

const articles = [
  { tag: "getting started", title: "How to transition from a traditional to a digital bank", author: "David Grohl", date: "17/08/24" },
  { tag: "getting started", title: "How to transition from a traditional to a digital bank", author: "David Grohl", date: "17/08/24" },
  { tag: "getting started", title: "How to transition from a traditional to a digital bank", author: "David Grohl", date: "17/08/24" },
  { tag: "getting started", title: "How to transition from a traditional to a digital bank", author: "David Grohl", date: "17/08/24" },
];

const PatternBg = ({ seed }: { seed: number }) => {
  const colors = ["from-primary/20 to-blue-600/10", "from-violet-500/20 to-primary/10", "from-blue-500/15 to-cyan-500/10", "from-indigo-500/20 to-primary/10"];
  return (
    <div className={`w-full h-36 rounded-xl bg-gradient-to-br ${colors[seed % colors.length]} flex items-center justify-center relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 4 }).map((_, r) =>
          Array.from({ length: 4 }).map((_, c) => (
            <div
              key={`${r}-${c}`}
              className="absolute w-8 h-8 border-2 border-primary/50 rounded"
              style={{ top: r * 36 + 8, left: c * 36 + 8, transform: "rotate(15deg)" }}
            />
          ))
        )}
      </div>
      <BookOpen className="w-10 h-10 text-primary/60 relative z-10" />
    </div>
  );
};

export function InsightsSection() {
  return (
    <section id="resources" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[50%] h-[70%] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="inline-block text-xs font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-5">
              INSIGHTS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg">
              Get yourself up-to-speed on all the things happening in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">fintech</span>
            </h2>
          </div>
          <motion.a
            href="#"
            whileHover={{ x: 4 }}
            className="flex items-center gap-2 text-primary font-semibold text-sm whitespace-nowrap group"
            data-testid="link-read-all-insights"
          >
            read all insights
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-card border border-white/8 rounded-2xl overflow-hidden hover:border-primary/25 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 cursor-pointer"
              data-testid={`card-article-${i}`}
            >
              <PatternBg seed={i} />
              <div className="p-5">
                <span className="inline-block text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-1 mb-3">
                  {article.tag}
                </span>
                <h3 className="text-sm font-semibold text-white leading-snug mb-4">{article.title}</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-muted-foreground">{article.author}</p>
                    <p className="text-[10px] text-muted-foreground">{article.date}</p>
                  </div>
                  <motion.a
                    href="#"
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-1 text-primary text-[10px] font-semibold"
                    data-testid={`link-article-read-more-${i}`}
                  >
                    read more <ArrowRight className="w-3 h-3" />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
