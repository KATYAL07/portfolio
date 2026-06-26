"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import TopNavBar from "@/components/TopNavBar";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Internships() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
  };

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col">
      <TopNavBar />

      <main className="flex-grow pt-32 pb-margin-lg px-margin-sm md:px-margin-lg max-w-[1440px] mx-auto w-full">
        {/* Hero Header */}
        <header className="mb-12 md:mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <p className="font-label-mono text-label-mono uppercase tracking-[0.2em] text-secondary">
                  System Status: Active
                </p>
              </div>
              <h1 className="font-headline-xl text-headline-lg md:text-headline-xl uppercase mb-2 text-primary break-words">
                EXPERIENCE_LOG
              </h1>
              <p className="font-body-lg text-body-lg text-secondary max-w-xl">
                A chronological trace of professional and leadership nodes, mapping technical growth and collaborative ventures.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push("/")}
                className="flex items-center gap-2 font-label-mono text-label-mono border border-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all active:scale-95 text-primary"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                BACK TO SYSTEM
              </button>
            </div>
          </div>
          <div className="mt-12 h-[1px] w-full bg-primary/10"></div>
        </header>

        {/* Bento Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-gutter"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* NODE 08: Hiuen */}
          <motion.section
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="md:col-span-4 glass-card hardware-border p-8 rounded-xl flex flex-col min-h-[300px] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex justify-between items-start mb-6 relative z-10">
              <span className="font-label-mono text-[10px] border border-primary/20 px-2 py-1 rounded text-primary">
                NODE_08/FRONTEND
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase mb-2 text-primary relative z-10">Hiuen</h2>
            <h3 className="font-body-md text-body-md mb-4 font-medium opacity-70 text-secondary relative z-10">React Developer</h3>
            <div className="mt-auto relative z-10">
              <div className="h-[2px] mb-4 opacity-20 bg-gradient-to-r from-primary to-transparent w-full"></div>
              <p className="font-label-mono text-[11px] text-secondary uppercase">
                UI/UX Implementation &amp; State Management
              </p>
            </div>
          </motion.section>

          {/* NODE 01: Oasis Infobyte */}
          <motion.section
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="md:col-span-8 glass-card hardware-border p-8 rounded-xl flex flex-col justify-between min-h-[300px] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="font-label-mono text-[10px] border border-primary/20 px-2 py-1 rounded text-primary">
                  NODE_01/PROFESSIONAL
                </span>
                <span className="font-label-mono text-label-mono text-secondary"></span>
              </div>
              <h2 className="font-headline-lg text-headline-lg uppercase mb-2 text-primary">Oasis Infobyte</h2>
              <h3 className="font-body-lg text-body-lg font-medium opacity-70 text-secondary">Python Programming Intern</h3>
            </div>
            <div className="mt-8 relative z-10">
              <div className="h-[2px] mb-4 bg-gradient-to-r from-primary to-transparent w-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
              <p className="font-body-md text-body-md text-secondary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Developing scalable automation scripts and implementing algorithmic solutions within Python ecosystems. Focused on clean code and technical essentialism.
              </p>
            </div>
          </motion.section>

          {/* NODE 02: CVOTER */}
          <motion.section
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="md:col-span-4 glass-card hardware-border p-8 rounded-xl flex flex-col min-h-[320px] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex justify-between items-start mb-6 relative z-10">
              <span className="font-label-mono text-[10px] border border-primary/20 px-2 py-1 rounded text-primary">
                NODE_02/RESEARCH
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase mb-2 text-primary relative z-10">CVOTER News</h2>
            <h3 className="font-body-md text-body-md mb-4 font-medium opacity-70 text-secondary relative z-10">Business Management Intern</h3>
            <p className="font-label-mono text-[11px] text-secondary uppercase mb-4 relative z-10">MAR 2023 — AUG 2023</p>
            <p className="font-body-md text-body-md text-secondary mt-auto relative z-10">
              Assisted in high-stakes market research and data analysis for political and socio-economic forecasting.
            </p>
          </motion.section>

          {/* NODE 03: FIC SRCC */}
          <motion.section
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="md:col-span-4 bg-primary text-on-primary p-8 rounded-xl flex flex-col justify-between min-h-[320px] relative overflow-hidden shadow-lg"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <span className="font-label-mono text-[10px] border border-white/30 px-2 py-1 rounded text-white">
                  NODE_03/FELLOWSHIP
                </span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" style={{ animationDelay: "0s" }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
              <h2 className="font-headline-lg text-headline-lg uppercase mb-4 leading-tight text-white">Finance &amp; Investment Cell, SRCC</h2>
              <div className="bg-white/20 h-[1px] w-full my-6"></div>
              <p className="font-body-lg text-body-lg text-white">Research Fellowship</p>
              <p className="font-label-mono text-label-mono mt-2 text-white/70">JULY 2024 — PRESENT</p>
            </div>
            <div className="mt-8 p-4 border border-white/20 rounded-lg relative z-10 bg-white/5 backdrop-blur-sm">
              <p className="font-label-mono text-[11px] leading-relaxed text-white">
                SELECTED FROM 10,100+ CANDIDATES.<br />
                RANK: TOP 80 (0.79% ACCEPTANCE).
              </p>
            </div>
          </motion.section>

          {/* NODE 07: NIIT */}
          <motion.section
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="md:col-span-4 glass-card hardware-border p-8 rounded-xl flex flex-col min-h-[320px] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex justify-between items-start mb-6 relative z-10">
              <span className="font-label-mono text-[10px] border border-primary/20 px-2 py-1 rounded text-primary">
                NODE_07/DEVELOPMENT
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase mb-2 text-primary relative z-10">NIIT Limited</h2>
            <h3 className="font-body-md text-body-md mb-4 font-medium opacity-70 text-secondary relative z-10">Back End Developer</h3>
            <div className="mt-auto relative z-10">
              <div className="h-[2px] mb-4 opacity-20 bg-gradient-to-r from-primary to-transparent w-full"></div>
              <p className="font-label-mono text-[11px] text-secondary uppercase">
                System Architecture &amp; API Design
              </p>
            </div>
          </motion.section>

          {/* NODE 04: GDG On Campus */}
          <motion.section
            variants={itemVariants}
            className="md:col-span-8 glass-card hardware-border p-0 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 group"
          >
            <div className="p-8 bg-primary text-on-primary flex flex-col justify-center min-h-[320px] relative">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-8 h-8 mb-6 bg-white/20 rounded-full flex items-center justify-center relative z-10">
                <span className="material-symbols-outlined text-white text-[16px]">code</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg uppercase mb-2 relative z-10">Google Developers Group Cohort of CS First</h3>
              <p className="font-body-md text-body-md opacity-80 relative z-10">
                Worked with Google and mentorship programs since Apr 2024.
              </p>
            </div>
            <div className="p-8 border-t md:border-t-0 md:border-l border-primary/10 flex flex-col justify-between relative bg-surface/50 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="mb-4 relative z-10">
                <span className="font-label-mono text-[10px] border border-primary/20 px-2 py-1 rounded text-primary">
                  NODE_04/TECHNICAL
                </span>
                <h2 className="font-headline-lg text-headline-lg uppercase mt-6 mb-2 text-primary">GDG On Campus</h2>
                <p className="font-body-md text-body-md text-secondary">Junior Core | Jan 2026 — Present</p>
              </div>
              <p className="font-body-md text-body-md text-secondary relative z-10">
                Bennett University Chapter. Driving technical literacy and student engagement through ecosystem development.
              </p>
            </div>
          </motion.section>
          {/* NODE 05: Kaalex MUN */}
          <motion.section
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="md:col-span-4 glass-card hardware-border p-8 rounded-xl flex flex-col justify-between min-h-[320px] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex justify-between items-start relative z-10">
              <div>
                <span className="font-label-mono text-[10px] border border-primary/20 px-2 py-1 rounded text-primary">
                  NODE_05/LEADERSHIP
                </span>
                <h2 className="font-headline-lg text-headline-lg uppercase mt-6 text-primary">Kaalex MUN</h2>
              </div>
              <div className="text-right">
                <p className="font-label-mono text-label-mono text-secondary">JUL 2025</p>
                <p className="font-label-mono text-label-mono text-primary font-bold">ACTIVE</p>
              </div>
            </div>
            <div className="mt-8 relative z-10">
              <p className="font-body-lg text-body-lg mb-1 text-primary">Secretary General</p>
              <div className="w-full bg-primary/10 h-[4px] rounded-full overflow-hidden mt-4">
                <motion.div
                  className="bg-primary h-full w-[85%]"
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                ></motion.div>
              </div>
              <p className="font-label-mono text-[10px] mt-2 text-secondary uppercase">
                85% Efficiency Index
              </p>
            </div>
          </motion.section>

          {/* NODE 09: DPS Dwarka */}
          <motion.section
            variants={itemVariants}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="md:col-span-12 glass-card hardware-border p-8 rounded-xl flex flex-col relative overflow-hidden group min-h-[300px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h2 className="font-headline-lg text-headline-lg uppercase mb-8 text-primary relative z-10">DPS Dwarka</h2>
            <div className="space-y-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between group/item cursor-default">
                  <p className="font-body-md text-body-md text-primary">CORE the Tech Club</p>
                  <p className="font-label-mono text-[10px] text-secondary opacity-60 group-hover/item:opacity-100 group-hover/item:text-primary transition-colors">PROGRAMMING LEAD</p>
                </div>
                <div className="h-[1px] w-full bg-primary/10"></div>

                <div className="flex items-center justify-between group/item cursor-default">
                  <p className="font-body-md text-body-md text-primary">ACE the Commerce Club</p>
                  <p className="font-label-mono text-[10px] text-secondary opacity-60 group-hover/item:opacity-100 group-hover/item:text-primary transition-colors">PRESIDENT</p>
                </div>
                <div className="h-[1px] w-full bg-primary/10"></div>

                <div className="flex items-center justify-between group/item cursor-default">
                  <p className="font-body-md text-body-md text-primary">ETC the Literary Club</p>
                  <p className="font-label-mono text-[10px] text-secondary opacity-60 group-hover/item:opacity-100 group-hover/item:text-primary transition-colors">PRESIDENT</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="hidden md:block h-[1px] w-full bg-transparent"></div>
                <div className="flex items-center justify-between group/item cursor-default">
                  <p className="font-body-md text-body-md text-primary">Focus the Photography Club</p>
                  <p className="font-label-mono text-[10px] text-secondary opacity-60 group-hover/item:opacity-100 group-hover/item:text-primary transition-colors">CREATIVE DIRECTOR</p>
                </div>
                <div className="h-[1px] w-full bg-primary/10"></div>

                <div className="flex items-center justify-between group/item cursor-default">
                  <p className="font-body-md text-body-md text-primary">Kirdaar the Theatre Club</p>
                  <p className="font-label-mono text-[10px] text-secondary opacity-60 group-hover/item:opacity-100 group-hover/item:text-primary transition-colors">PRESIDENT</p>
                </div>
              </div>
            </div>
          </motion.section>

        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
