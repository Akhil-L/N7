"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import {
  SiShell,
  SiSmartthings,
  SiZoom,
  SiArtstation,
  SiKoa,
} from "react-icons/si";

import {
  ArrowUpRight,
  Activity,
  CreditCard,
  DollarSign,
} from "lucide-react";

const DashboardMockup = () => {
  return (
    <div className="relative w-full max-w-[500px] mx-auto xl:ml-auto">
      {/* Glow */}
      <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative bg-[#0B1220] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-gray-400 mb-1">
              Welcome Back,
            </p>

            <h3 className="text-lg font-semibold text-white">
              Barly Vallendito
            </h3>
          </div>

          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
            <span className="text-blue-400 font-bold">
              BV
            </span>
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/30 rounded-xl p-5 mb-6">
          
          <p className="text-sm text-blue-300 mb-2">
            Total Balance
          </p>

          <h2 className="text-3xl font-bold text-white mb-4">
            $42,295.00{" "}
            <span className="text-lg text-gray-400 font-normal">
              USD
            </span>
          </h2>

          <div className="flex gap-3">
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-500 rounded-full h-8 text-xs px-4"
            >
              Send
              <ArrowUpRight className="w-3 h-3 ml-1" />
            </Button>

            <Button
              size="sm"
              variant="outline"
              className="border-white/20 hover:bg-white/5 rounded-full h-8 text-xs px-4 text-white"
            >
              Receive
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          
          <div className="bg-black/30 border border-white/5 rounded-xl p-4">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mb-3">
              <Activity className="w-4 h-4 text-blue-500" />
            </div>

            <p className="text-xs text-gray-400 mb-1">
              Income
            </p>

            <p className="text-sm font-semibold text-white">
              +$12,450.00
            </p>
          </div>

          <div className="bg-black/30 border border-white/5 rounded-xl p-4">
            <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center mb-3">
              <CreditCard className="w-4 h-4 text-rose-500" />
            </div>

            <p className="text-xs text-gray-400 mb-1">
              Expenses
            </p>

            <p className="text-sm font-semibold text-white">
              -$4,210.00
            </p>
          </div>
        </div>

        {/* Transactions */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium text-white">
              Recent Transactions
            </h4>

            <span className="text-xs text-blue-400 cursor-pointer hover:underline">
              View All
            </span>
          </div>

          <div className="space-y-3">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <SiShell className="w-4 h-4 text-white/70" />
                </div>

                <div>
                  <p className="text-xs font-medium text-white">
                    Shells Corp
                  </p>

                  <p className="text-[10px] text-gray-400">
                    Software subscription
                  </p>
                </div>
              </div>

              <span className="text-xs font-semibold text-white">
                -$120.00
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-emerald-500" />
                </div>

                <div>
                  <p className="text-xs font-medium text-white">
                    Wire Transfer
                  </p>

                  <p className="text-[10px] text-gray-400">
                    From Client X
                  </p>
                </div>
              </div>

              <span className="text-xs font-semibold text-emerald-400">
                +$4,500.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-blue-500/10 blur-[120px] rounded-full" />

        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            className="flex flex-col text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6"
            >
              The new foundation of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
                modern banking
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              We drive innovation and growth, provide seamless customer experience and operational excellence
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16"
            >
              <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 rounded-full font-semibold">
                REQUEST DEMO
              </Button>

              <Button
                variant="outline"
                className="border-white/20 hover:bg-white/5 text-white px-8 py-6 rounded-full"
              >
                Contact Us
              </Button>
            </motion.div>

            {/* Trusted */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center lg:items-start gap-4"
            >
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                Trusted by:
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 opacity-60">
                
                <div className="flex items-center gap-2">
                  <SiShell className="w-5 h-5 text-white" />
                  <span className="font-bold text-white text-sm">
                    SHELLS
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <SiSmartthings className="w-5 h-5 text-white" />
                  <span className="font-bold text-white text-sm">
                    SmartFinder
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <SiZoom className="w-5 h-5 text-white" />
                  <span className="font-bold text-white text-sm">
                    Zoomerr
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <SiArtstation className="w-5 h-5 text-white" />
                  <span className="font-bold text-white text-sm">
                    ArtVenue
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <SiKoa className="w-5 h-5 text-white" />
                  <span className="font-bold text-white text-sm">
                    kontrastr
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block"
          >
            <DashboardMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
