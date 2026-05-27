'use client'
import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle } from "lucide-react";

const leftFeatures = [
  "Pre-integrated Security System",
  "Fully Compliant With Regulatory Requirement",
  "Digitally Connected Core",
  "No legacy IT systems",
];

const rightFeatures = [
  "Adaptive & Intelligent API monetization",
  "Ambient User Experience",
  "Cloud-native With lower TCO",
  "No traditional branches",
  "Branchless & Paperless Banking",
  "Digital Transformation Capability",
  "Optimized, Adoptable and Scalable",
];

const tickerContent = [
  "N7", "✦", "Say N7 to the new way of banking",
  "✦", "CB7", "✦", "Say CB7 to the new way of banking", "✦",
];

function MarqueeTicker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const [x, setX] = useState(0);

  useAnimationFrame((_, delta) => {
    xRef.current -= delta * 0.04;
    if (containerRef.current) {
      const halfW = containerRef.current.scrollWidth / 2;
      if (Math.abs(xRef.current) >= halfW) {
        xRef.current = 0;
      }
    }
    setX(xRef.current);
  });

  const items = [...tickerContent, ...tickerContent, ...tickerContent, ...tickerContent];

  return (
    <div className="overflow-hidden border-y border-white/8 py-3 mb-20 bg-background/40">
      <div ref={containerRef} className="flex whitespace-nowrap" style={{ transform: `translateX(${x}px)` }}>
        {items.map((item, i) => (
          <span
            key={i}
            className={`mx-4 text-sm font-semibold ${
              item === "N7" || item === "CB7" ? "text-primary" : item === "✦" ? "text-primary/40" : "text-muted-foreground"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

const PhoneMockupLeft = () => (
  <div className="relative mx-auto w-[220px]">
    <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full pointer-events-none" />
    <div className="relative bg-card border border-white/15 rounded-[32px] overflow-hidden shadow-2xl">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span className="text-[9px] text-white/60">9:41</span>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        </div>
      </div>

      <div className="px-4 pb-6">
        <div className="text-[10px] text-muted-foreground mb-1">Good Morning</div>
        <div className="text-sm font-bold text-white mb-4">Toni Kross</div>

        <div className="bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/20 rounded-2xl p-4 mb-4">
          <div className="text-[9px] text-muted-foreground mb-1">Total balance</div>
          <div className="text-lg font-bold text-white">$42,295.00</div>
          <div className="text-[9px] text-emerald-400 mt-1">up by 2% from last month</div>
          <div className="flex gap-2 mt-3">
            {["Fund Transfer", "Add Money", "More"].map((action) => (
              <div key={action} className="flex-1 bg-white/10 rounded-lg text-[7px] text-white/70 text-center py-1.5 font-medium">
                {action}
              </div>
            ))}
          </div>
        </div>

        <div className="text-[9px] font-semibold text-white mb-2">Recent activity</div>
        {[
          { name: "Dropbox Plan", amount: "-$144.00", color: "text-rose-400" },
          { name: "Spotify Subscr.", amount: "-$24.00", color: "text-rose-400" },
          { name: "Freelance Work", amount: "+$421.00", color: "text-emerald-400" },
        ].map((t) => (
          <div key={t.name} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
            <div className="w-5 h-5 rounded-full bg-primary/20 mr-2 shrink-0" />
            <span className="text-[9px] text-white/80 flex-1">{t.name}</span>
            <span className={`text-[9px] font-semibold ${t.color}`}>{t.amount}</span>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="flex justify-around bg-background/80 border-t border-white/8 py-3 px-4">
        {["Home", "Card", "Tx", "Profile"].map((item) => (
          <div key={item} className="text-[8px] text-muted-foreground text-center">
            <div className="w-4 h-4 rounded bg-white/10 mx-auto mb-0.5" />
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PhoneMockupRight = () => (
  <div className="relative mx-auto w-[220px]">
    <div className="absolute inset-0 bg-violet-500/15 blur-[60px] rounded-full pointer-events-none" />
    <div className="relative bg-card border-2 border-primary/30 rounded-[32px] overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span className="text-[9px] text-white/60">9:41</span>
      </div>

      <div className="px-4 pb-6">
        <div className="text-sm font-bold text-white mb-1">Tool Drive</div>
        <div className="text-[9px] text-muted-foreground mb-4">No additional fees</div>

        {[
          "Availability Everywhere",
          "Assistance & Paperless Banking",
          "Digital Transformation Capability",
          "Commerce, Acquisition and Evolution",
        ].map((feat, i) => (
          <div key={i} className="flex items-start gap-2 mb-3">
            <div className="w-3 h-3 rounded-full border border-primary/50 flex items-center justify-center mt-0.5 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>
            <span className="text-[9px] text-white/80 leading-relaxed">{feat}</span>
          </div>
        ))}

        <div className="mt-5 bg-primary/10 border border-primary/20 rounded-xl p-3">
          <div className="text-[9px] text-muted-foreground mb-1">Balance Overview</div>
          <div className="flex items-end gap-0.5 h-10">
            {[30, 60, 45, 80, 55, 70, 90, 40, 75].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-primary/80 to-blue-400/60"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export function DigitalBankingSection() {
  return (
    <section id="digital-banking" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <MarqueeTicker />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Digital banking{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              out-of-the-box
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-10"
          >
            <PhoneMockupLeft />
            <div className="grid grid-cols-1 gap-3">
              {leftFeatures.map((feat, i) => (
                <motion.div
                  key={feat}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-white/85">{feat}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-10"
          >
            <PhoneMockupRight />
            <div className="grid grid-cols-1 gap-3">
              {rightFeatures.map((feat, i) => (
                <motion.div
                  key={feat}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-white/85">{feat}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
