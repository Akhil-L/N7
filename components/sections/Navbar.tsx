"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";

const NAV_LINKS = [
  { label: "Solutions", sectionId: "solutions" },
  { label: "Resources", sectionId: "resources" },
  { label: "About Us", sectionId: "case-studies" },
  { label: "Contact Us", sectionId: "contact" },
] as const;

const SECTION_IDS = NAV_LINKS.map((l) => l.sectionId);

function scrollTo(sectionId: string) {
  const el = document.getElementById(sectionId);

  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);

      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-40% 0px -55% 0px",
          threshold: 0,
        }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = useCallback((sectionId: string) => {
    scrollTo(sectionId);
    setMobileOpen(false);
  }, []);

  const handleDemoClick = useCallback(() => {
    scrollTo("contact");
    setMobileOpen(false);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="text-2xl font-black tracking-tighter text-white hover:text-blue-500 transition-colors"
        >
          N7
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, sectionId }) => {
            const isActive = activeSection === sectionId;

            return (
              <button
                key={sectionId}
                onClick={() => handleNavClick(sectionId)}
                className={`relative text-sm font-medium transition-colors duration-200 group ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {label}

                <span
                  className={`absolute -bottom-1 left-0 h-px bg-blue-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <div className="hidden md:flex">
          <Button
            onClick={handleDemoClick}
            className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-6"
          >
            REQUEST DEMO
          </Button>
        </div>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/10 overflow-hidden"
          >
            <nav className="px-4 py-5 flex flex-col gap-2">
              {NAV_LINKS.map(({ label, sectionId }) => {
                const isActive = activeSection === sectionId;

                return (
                  <button
                    key={sectionId}
                    onClick={() => handleNavClick(sectionId)}
                    className={`text-left py-3 px-2 rounded-lg transition-colors ${
                      isActive
                        ? "bg-blue-500/10 text-white"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}

              <Button
                onClick={handleDemoClick}
                className="mt-3 w-full bg-blue-600 hover:bg-blue-500 text-white rounded-full"
              >
                REQUEST DEMO
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}