"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import TopNavBar from "@/components/TopNavBar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const ParticleBackground = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      <div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-primary/10 blur-[100px] animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-[10%] right-[20%] w-[40vw] h-[40vw] rounded-full bg-secondary/10 blur-[120px]" style={{ animation: "pulse 8s infinite alternate" }}></div>

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: Math.random() * 4 + 1 + "px",
            height: Math.random() * 4 + 1 + "px",
            left: Math.random() * 100 + "vw",
            top: Math.random() * 100 + "vh",
          }}
          animate={{
            y: [0, Math.random() * -100 - 50, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const [skillsOpen, setSkillsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragConstraintRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const router = useRouter();

  const skills = [
    "React", "JavaScript", "Java", "Three.js",
    "Tailwind CSS", "Python", "C++", "Figma"
  ];

  const [nodes, setNodes] = useState<{ skill: string, x: number, y: number, angle: number, delay: number, radius: number }[]>([]);

  useEffect(() => {
    if (skillsOpen && containerRef.current) {
      document.body.style.overflow = "hidden";
      const radius = Math.min(window.innerWidth, window.innerHeight) * 0.3;
      const centerX = containerRef.current.offsetWidth / 2;
      const centerY = containerRef.current.offsetHeight / 2;

      const newNodes = skills.map((skill, index) => {
        const angle = (index / skills.length) * 2 * Math.PI - (Math.PI / 2);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const delay = index * 100;
        return { skill, x: centerX + x - 40, y: centerY + y - 15, angle, delay, radius };
      });
      setNodes(newNodes);
    } else {
      document.body.style.overflow = "auto";
      setNodes([]);
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSkillsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [skillsOpen]);

  return (
    <>
      <ParticleBackground />
      <TopNavBar />
      {/* Skills Tree Overlay */}
      {skillsOpen && (
        <div id="skills-overlay" className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden">
          <button
            className="absolute top-10 right-10 z-[110] font-label-mono text-label-mono flex items-center gap-2 hover:opacity-60 transition-opacity"
            onClick={() => setSkillsOpen(false)}
          >
            CLOSE [ESC] <span className="material-symbols-outlined">close</span>
          </button>

          <div ref={containerRef} className="relative w-full h-full flex items-center justify-center" id="tree-container">
            <div className="w-2 h-2 bg-primary rounded-full z-10" id="tree-root"></div>

            {nodes.map((node, i) => (
              <div key={i}>
                <div
                  className="tree-line absolute bg-primary h-[1px] opacity-40 origin-left z-[1]"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `rotate(${node.angle}rad)`,
                    animation: `growLine 0.6s ease-out forwards ${node.delay}ms`,
                    "--final-width": `${node.radius}px`
                  } as React.CSSProperties}
                ></div>
                <div
                  className="skill-node absolute px-4 py-2 border border-primary bg-white font-label-mono text-label-mono uppercase z-[2] opacity-0 scale-50"
                  style={{
                    left: `${node.x}px`,
                    top: `${node.y}px`,
                    animation: `popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards ${node.delay + 400}ms`
                  }}
                >
                  {node.skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Content Area - Grid Layout */}
      <main className="pt-[120px] px-margin-sm md:px-margin-lg pb-margin-lg min-h-screen relative flex items-center justify-center">

        {/* Centerpiece */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <Image
            alt="Arnav Dot Matrix Logo"
            className="w-64 h-64 md:w-96 md:h-96 object-contain opacity-20 filter grayscale"
            src="/logo.png"
            width={384}
            height={384}
          />
        </div>

        {/* Scattered Bento Grid */}
        <div ref={dragConstraintRef} className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter h-full min-h-[60vh]">

          {/* Experience */}
          <motion.div
            drag dragConstraints={dragConstraintRef} dragElastic={0.2} whileDrag={{ zIndex: 50, scale: 1.05 }}
            animate={{ y: [0, -15, 0, 10, 0], rotate: [0, 1, 0, -1, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            onDragStart={() => { isDragging.current = true; }}
            onDragEnd={() => { setTimeout(() => { isDragging.current = false; }, 100); }}
            onClick={() => { if (!isDragging.current) router.push("/internships"); }}
            className="md:col-span-4 md:col-start-2 md:row-start-1 glass-card hardware-border rounded-xl p-8 relative overflow-hidden group glitch-card light-leak glitch-hover h-48 flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            <div className="absolute top-4 left-4">
              <span className="font-label-mono text-label-mono text-secondary">01 / EXP</span>
            </div>
            <div className="glitch-text-original w-full text-center">
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary">Internships</h2>
            </div>
            <div className="glitch-text-reveal w-full text-center bg-inverse-on-surface">
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary font-bold">VIEW INTERNSHIPS AND WORKEX</h2>
              <p className="font-label-mono text-label-mono text-secondary mt-2"></p>
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div
            drag dragConstraints={dragConstraintRef} dragElastic={0.2} whileDrag={{ zIndex: 50, scale: 1.05 }}
            animate={{ y: [0, 10, 0, -15, 0], rotate: [0, -1, 0, 1, 0], x: [0, -5, 0, 5, 0] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
            onDragStart={() => { isDragging.current = true; }}
            onDragEnd={() => { setTimeout(() => { isDragging.current = false; }, 100); }}
            onClick={() => { if (!isDragging.current) router.push("/projects"); }}
            className="md:col-span-5 md:col-start-7 md:row-start-2 glass-card hardware-border rounded-xl p-8 relative overflow-hidden group glitch-card light-leak glitch-hover h-48 flex items-center justify-center cursor-grab active:cursor-grabbing mt-12 md:mt-0"
          >
            <div className="absolute top-4 left-4">
              <span className="font-label-mono text-label-mono text-secondary">02 / PRJ</span>
            </div>
            <div className="glitch-text-original w-full text-center">
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary">Projects</h2>
            </div>
            <div className="glitch-text-reveal w-full text-center bg-inverse-on-surface">
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary font-bold">VIEW PROJECTS</h2>
              <p className="font-label-mono text-label-mono text-secondary mt-2"></p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            drag dragConstraints={dragConstraintRef} dragElastic={0.2} whileDrag={{ zIndex: 50, scale: 1.05 }}
            animate={{ y: [0, -8, 0, 12, 0], rotate: [0, 1.5, 0, -0.5, 0], x: [0, 5, 0, -5, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            onDragStart={() => { isDragging.current = true; }}
            onDragEnd={() => { setTimeout(() => { isDragging.current = false; }, 100); }}
            aria-label="Explore skills tree"
            className="md:col-span-3 md:col-start-3 md:row-start-3 glass-card hardware-border rounded-xl p-8 relative overflow-hidden group glitch-card light-leak glitch-hover h-48 flex items-center justify-center cursor-grab active:cursor-grabbing mt-12 md:mt-0"
            onClick={() => { if (!isDragging.current) setSkillsOpen(true); }}
            role="button"
          >
            <div className="absolute top-4 left-4">
              <span className="font-label-mono text-label-mono text-secondary">03 / SKL</span>
            </div>
            <div className="glitch-text-original w-full text-center flex flex-col items-center justify-center">
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary">VIEW SKILL TREE</h2>
              <span className="material-symbols-outlined mt-2 text-primary">hub</span>
            </div>
            <div className="glitch-text-reveal w-full h-full text-center bg-inverse-on-surface flex justify-center items-center gap-4">
              <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>code</span>
              <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>deployed_code</span>
              <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>terminal</span>
            </div>
          </motion.div>

          {/* About */}
          <motion.div
            drag dragConstraints={dragConstraintRef} dragElastic={0.2} whileDrag={{ zIndex: 50, scale: 1.05 }}
            animate={{ y: [0, 15, 0, -10, 0], rotate: [0, -0.5, 0, 1.5, 0], x: [0, -8, 0, 6, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            onDragStart={() => { isDragging.current = true; }}
            onDragEnd={() => { setTimeout(() => { isDragging.current = false; }, 100); }}
            onClick={() => { if (!isDragging.current) router.push("/about"); }}
            className="md:col-span-4 md:col-start-8 md:row-start-4 glass-card hardware-border rounded-xl p-8 relative overflow-hidden group glitch-card light-leak glitch-hover h-48 flex items-center justify-center cursor-grab active:cursor-grabbing mt-12 md:mt-0 mb-12 md:mb-0"
          >
            <div className="absolute top-4 left-4">
              <span className="font-label-mono text-label-mono text-secondary">04 / ABT</span>
            </div>
            <div className="glitch-text-original w-full text-center">
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary">Bio</h2>
            </div>
            <div className="glitch-text-reveal w-full text-center bg-inverse-on-surface">
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary font-bold">VIEW MY FULL PROFILE</h2>
              <p className="font-label-mono text-label-mono text-secondary mt-2"></p>
              <span className="material-symbols-outlined mt-2 text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        @keyframes growLine {
            from { width: 0; }
            to { width: var(--final-width); }
        }

        @keyframes popIn {
            to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
