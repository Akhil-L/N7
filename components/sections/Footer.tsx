'use client'
import { motion } from "framer-motion";
import Link from "next/link";

const footerLinks = {
  Solutions: [
    "Core Banking CB7",
    "Digital Banking N7",
    "Open Banking",
    "Loan Origination System",
    "Loan Management System",
    "Digital Transformation",
  ],
  "N7 Banking": [
    "About Us",
    "Solutions",
    "Contact",
    "Careers",
    "Insights",
    "Core Team",
    "Brand Center",
  ],
  "Our Socials": ["LinkedIn", "X"],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 pt-16 pb-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[80%] h-[60%] bg-primary/4 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Big N7 background text */}
        <div className="relative mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute -top-4 left-0 text-[180px] md:text-[240px] font-black text-white/[0.03] leading-none pointer-events-none select-none"
          >
            N7
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            {/* Brand column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="inline-block mb-6 text-3xl font-black text-white tracking-tighter">
                N7
              </Link>

              <div className="space-y-4">
                {[
                  {
                    city: "London",
                    address: "Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.",
                  },
                  {
                    city: "Dubai",
                    address: "Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates",
                  },
                  {
                    city: "India",
                    address: "Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India",
                  },
                ].map((office) => (
                  <div key={office.city}>
                    <p className="text-xs font-bold text-white/70 mb-0.5">{office.city}</p>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{office.address}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([col, links], ci) => (
              <motion.div
                key={col}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (ci + 1) * 0.1 }}
              >
                <h4 className="text-sm font-bold text-white mb-5">{col}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[13px] text-muted-foreground hover:text-white transition-colors"
                        data-testid={`link-footer-${link.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} N7 — Linktia Infosystems Ltd. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built for the future of banking.
          </p>
        </div>
      </div>
    </footer>
  );
}
