'use client'

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const features = [
  "Customer On-Boarding",
  "CRM Activities",
  "Managing deposits and withdrawals",
  "Configuring New Banking Products",
  "Transaction management",
  "Loan disbursal and Loan management",
  "Interest Calculation",
  "Establishing criteria for minimum balances",
  "Payments processing (cash, cheques, NEFT, RTGS)",
];

const DashboardMockup = () => (
  <div className="relative w-full">
    <div className="absolute inset-0 bg-primary/15 blur-[80px] rounded-full pointer-events-none" />

    {/* Dashboard Card */}
    <div className="relative bg-white/90 border border-gray-200 rounded-2xl overflow-hidden shadow-2xl">

      {/* Top Bar */}
      <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-5 py-3">
        <div>
          <span className="text-xs font-semibold text-gray-800 block">
            AML Dashboard
          </span>

          <span className="text-[9px] text-blue-400">
            xxxxxxxx
          </span>
        </div>

        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
      </div>

      <div className="p-4">

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-3">

          {/* 450 Card */}
          <div className="bg-gray-50 border border-pink-200 rounded-xl p-3 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-500" />

            <div className="flex items-start justify-between">
              <div>
                <div className="text-4xl font-bold text-pink-500 leading-none">
                  450
                </div>

                <div className="text-[9px] text-gray-500 mt-1.5">
                  Total STR (Suspicious Transaction Report)
                </div>
              </div>

              <div className="text-gray-400 text-sm">
                ⋮
              </div>
            </div>
          </div>

          {/* Right Small Card */}
          <div className="bg-gray-50 border border-yellow-200 rounded-xl p-3 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400" />

            <div className="flex items-start justify-between">
              <div>
                <div className="text-3xl font-bold text-yellow-500 leading-none">
                  3
                </div>

                <div className="text-[9px] text-gray-500 mt-1.5">
                  Days Pending for AML Process
                </div>
              </div>

              <div className="text-gray-400 text-sm">
                ⋮
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-3 mb-3">

          {/* LEFT — Donut Chart */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[9px] text-gray-600 font-medium">
                Suspicious Transactions as on 10-01-2022
              </div>

              <div className="text-gray-400 text-xs">
                ⋮
              </div>
            </div>

            <div className="flex items-center justify-center h-[145px]">

              <div className="relative w-32 h-32">

                <svg
                  viewBox="0 0 36 36"
                  className="w-full h-full -rotate-90"
                >
                  {/* Background */}
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="4"
                  />

                  {/* Teal */}
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="none"
                    stroke="#2ec4b6"
                    strokeWidth="4"
                    strokeDasharray="45 55"
                  />

                  {/* Navy */}
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="none"
                    stroke="#1d4e89"
                    strokeWidth="4"
                    strokeDasharray="18 82"
                    strokeDashoffset="-45"
                  />

                  {/* Yellow */}
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="none"
                    stroke="#eab308"
                    strokeWidth="4"
                    strokeDasharray="22 78"
                    strokeDashoffset="-63"
                  />

                  {/* Pink */}
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="4"
                    strokeDasharray="15 85"
                    strokeDashoffset="-85"
                  />
                </svg>

                {/* Labels */}
                <div className="absolute left-[-12px] top-[38%] text-[7px] text-gray-500">
                  Reason 1
                </div>

                <div className="absolute right-[-12px] top-[34%] text-[7px] text-gray-500">
                  Reason 2
                </div>

                <div className="absolute right-[8px] bottom-[2px] text-[7px] text-gray-500">
                  Reason 3
                </div>

                {/* Inner Pink Circle */}
                <div className="absolute inset-[26%] rounded-full bg-pink-100 border border-pink-200 flex flex-col items-center justify-center">

                  <span className="text-[10px] font-bold text-gray-800">
                    450
                  </span>

                  <span className="text-[7px] text-gray-500">
                    STR
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Bar Chart */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-3">

            <div className="text-[9px] text-gray-600 font-medium mb-2">
              STR Summary
            </div>

            <div className="flex items-end justify-between gap-2 h-[145px] px-1">

              {[
                { a: 180, b: 120 },
                { a: 260, b: 170 },
                { a: 320, b: 210 },
                { a: 230, b: 140 },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-end gap-1 h-full"
                >
                  {/* Green */}
                  <div
                    className="w-4 rounded-t-md bg-emerald-400"
                    style={{ height: `${item.a / 4}px` }}
                  />

                  {/* Orange */}
                  <div
                    className="w-4 rounded-t-md bg-orange-400"
                    style={{ height: `${item.b / 4}px` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">

          {/* Header */}
          <div className="px-4 py-2 border-b border-gray-200">
            <div className="text-xs font-semibold text-gray-700">
              AML Report
            </div>
          </div>

          {/* Table Head */}
          <div className="grid grid-cols-7 bg-blue-700 text-white text-[8px] font-medium px-3 py-2">
            <span>AML Case ID</span>
            <span>Branch ID</span>
            <span>Identified Date</span>
            <span>Date of Transaction</span>
            <span>Mode</span>
            <span>Amount</span>
            <span>Type</span>
          </div>

          {/* Rows */}
          {[
            {
              id: "225",
              branch: "Branch 1",
              identified: "02-01-2022",
              transaction: "27-12-2021",
              mode: "70",
              amount: "70",
              type: "70",
            },
            {
              id: "150",
              branch: "Branch 3",
              identified: "02-01-2022",
              transaction: "27-12-2021",
              mode: "160",
              amount: "160",
              type: "160",
            },
            {
              id: "205",
              branch: "Branch 4",
              identified: "02-01-2022",
              transaction: "27-12-2021",
              mode: "65",
              amount: "65",
              type: "65",
            },
            {
              id: "190",
              branch: "Branch 5",
              identified: "02-01-2022",
              transaction: "28-12-2021",
              mode: "152",
              amount: "152",
              type: "152",
            },
          ].map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-7 text-[8px] text-gray-700 px-3 py-1.5 border-b border-gray-100 last:border-0"
            >
              <span>{row.id}</span>
              <span>{row.branch}</span>
              <span>{row.identified}</span>
              <span>{row.transaction}</span>
              <span>{row.mode}</span>
              <span>{row.amount}</span>
              <span>{row.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export function BankingSection() {
  return (
    <section
      id="banking"
      className="py-16 md:py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[80%] bg-primary/6 blur-[140px] rounded-full" />
      </div>

      {/* CB7 background watermark */}
      <div className="absolute left-0 top-0 text-[200px] font-black text-white/[0.03] leading-none pointer-events-none select-none">
        CB7
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Upper Split */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-14">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              A complete{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                cloud-based
              </span>{" "}
              core banking.
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Faster time to market with our cloud-based core banking services
            </p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8"
              data-testid="button-banking-demo"
            >
              REQUEST DEMO
            </Button>

            <motion.a
              href="#contact"
              whileHover={{ x: 4 }}
              className="flex items-center gap-2 text-primary font-semibold text-sm mt-4 group"
            >
              LEARN MORE
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <DashboardMockup />
          </motion.div>

        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-white/8 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Run a more efficient, flexible, and digitally connected corebanking system
          </h3>

          <p className="text-muted-foreground mb-10 text-sm">
            What you will get:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-white/80">
                  {f}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground italic border-l-2 border-primary/40 pl-4">
            Achieve workload optimization, save time, making system more agile
            and equipped for work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}