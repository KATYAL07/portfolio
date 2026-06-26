"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function About() {
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "> connection established",
    "> fetching user_data...",
    "> parsing [============] 100%",
    "> loading neural net..."
  ]);

  useEffect(() => {
    const additionalLines = [
      "> mem_check: OK",
      "> cpu_temp: 34C",
      "> ping arnav.dev ...",
      "> reply from arnav.dev: bytes=32 time=12ms",
      "> sequence initiated",
      "> awaiting input_"
    ];
    
    let index = 0;
    
    const addLine = () => {
      if (index < additionalLines.length) {
        setTerminalLines(prev => [...prev, additionalLines[index]]);
        index++;
        setTimeout(addLine, Math.random() * 800 + 200);
      }
    };
    
    const initialTimer = setTimeout(addLine, 1500);
    return () => clearTimeout(initialTimer);
  }, []);

  return (
    <>
      {/* Navigation (Back Button) */}
      <nav className="fixed top-0 w-full z-50 p-margin-md md:p-margin-lg pointer-events-none">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-4 py-2 border border-primary bg-background/90 backdrop-blur-sm pointer-events-auto hover:bg-primary hover:text-on-primary transition-colors duration-200 group"
        >
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_back</span>
          <span className="font-label-mono text-label-mono uppercase tracking-widest">BACK TO SYSTEM</span>
        </Link>
      </nav>

      <main className="pt-32 pb-margin-lg px-margin-md md:px-margin-lg max-w-[1400px] mx-auto min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          
          {/* Header Section */}
          <div className="lg:col-span-12 mb-12 pixel-load">
            <p className="font-label-mono text-label-mono text-on-surface-variant mb-4 uppercase">SYS.USR.PROFILE // 0x1A4F</p>
            <h1 
              className="font-dot-matrix-display text-headline-xl md:text-[80px] leading-none mb-4 dot-matrix-glitch uppercase tracking-tighter" 
              data-text="ARNAV KATYAL"
            >
              ARNAV KATYAL
            </h1>
            <p className="font-label-mono text-label-mono uppercase border-b border-primary pb-2 max-w-md">Computer Science Undergraduate</p>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8 flex flex-col gap-gutter">
            
            {/* Bio Panel */}
            <div className="glass-panel border border-surface-variant p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-30">
                <span className="material-symbols-outlined text-[48px]" style={{ fontVariationSettings: "'FILL' 0" }}>person</span>
              </div>
              <div className="font-label-mono text-label-mono text-on-surface-variant mb-8 uppercase flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                01 / IDENTIFICATION_DATA
              </div>
              <div className="space-y-6 font-body-lg text-body-lg text-on-surface leading-relaxed max-w-2xl">
                <p>
                  Initializing biographical sequence... I am Arnav Katyal, an undergraduate student pursuing a degree in Computer Science at Bennett University. My academic journey is driven by a profound fascination with computational systems and architectural design.
                </p>
                <p>
                  Currently operating at the intersection of theoretical algorithms and practical software engineering. My focus centers on developing resilient, scalable systems while exploring the boundaries of modern user interface paradigms. 
                </p>
              </div>
            </div>

            {/* Spec Sheet / Technical Focus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="bg-surface border border-surface-variant p-6 hover:border-primary transition-colors duration-300">
                <div className="font-label-mono text-label-mono text-on-surface-variant mb-6 uppercase border-b border-surface-variant pb-2">02 / ACADEMIC_NODE</div>
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline border-b border-dashed border-surface-variant pb-2">
                    <span className="font-label-mono text-label-mono uppercase">Institution</span>
                    <span className="font-body-md text-body-md font-medium text-right">Bennett University</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-dashed border-surface-variant pb-2">
                    <span className="font-label-mono text-label-mono uppercase">Program</span>
                    <span className="font-body-md text-body-md font-medium text-right">B.Tech Computer Science</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-dashed border-surface-variant pb-2">
                    <span className="font-label-mono text-label-mono uppercase">Status</span>
                    <span className="font-body-md text-body-md font-medium text-right flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block"></span> Active
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-on-primary p-6">
                <div className="font-label-mono text-label-mono text-on-primary/60 mb-6 uppercase border-b border-on-primary/20 pb-2">03 / CORE_PARAMETERS</div>
                <ul className="space-y-3 font-label-mono text-label-mono">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>terminal</span>
                    &gt; DATA_STRUCTURES
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>code</span>
                    &gt; ALGORITHM_DESIGN
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>dns</span>
                    &gt; SYSTEM_ARCHITECTURE
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>web</span>
                    &gt; FRONTEND_ENGINEERING
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar / Visuals */}
          <div className="lg:col-span-4 flex flex-col gap-gutter">
            
            {/* Portrait Placeholder */}
            <div className="aspect-[3/4] w-full border border-primary relative overflow-hidden bg-surface-container-high group">
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply z-10 pointer-events-none"></div>
              {/* Using standard img to handle external url smoothly without host configuration */}
              <img 
                className="w-full h-full object-cover grayscale contrast-125 filter group-hover:scale-105 transition-transform duration-700 ease-out" 
                alt="Profile portrait" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIjBRnVFjZeyQ8RTF8HsWnQvbE4mqYg1Cs28gYc_XemAsDGfUQADE3v9A7CkxKsM7mmymRfns4sTzj1nqB49U9rRnmyKUqs0BzmJH4K7lQFvXJCbYJnMCUsmXlTCJpCmxTR_acANy5VtTco6vriCzF_wYa8Y1TlxhkOv3rNjQ-mIt2Ei4Vt1zOYFCyjdiZ3HP2u6ibJe_dbFGKqqdDB-6Jh1n2iTln-cBm2K3QPYNAF-utYppV1CID1jcHUfjg3_ZGnPYCPkLQ2hI" 
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-background/80 backdrop-blur-md border-t border-primary z-20 flex justify-between items-center">
                <span className="font-label-mono text-label-mono uppercase">VISUAL_CONFIRMATION</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>fingerprint</span>
              </div>
            </div>

            {/* Terminal Output Mockup */}
            <div className="bg-inverse-surface text-inverse-on-surface p-4 border border-outline-variant font-label-mono text-label-mono h-48 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-inverse-surface z-10 pointer-events-none"></div>
              <div className="opacity-70 space-y-1">
                {terminalLines.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </main>

      <Footer />
      
      {/* Glitch Animations & Scanline injected via jsx */}
      <style jsx global>{`
        .scanline {
            width: 100%;
            height: 2px;
            z-index: 50;
            position: fixed;
            pointer-events: none;
            background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.5) 50%, rgba(0,0,0,0.2) 51%, rgba(0,0,0,0));
            animation: scanline 8s linear infinite;
        }

        @keyframes scanline {
            0% { top: 0; }
            100% { top: 100%; }
        }

        .dot-matrix-glitch {
            position: relative;
        }
        
        .dot-matrix-glitch::before,
        .dot-matrix-glitch::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--colors-background, #fbf9f8);
        }

        .dot-matrix-glitch::before {
            left: 2px;
            text-shadow: -1px 0 #000000;
            clip: rect(24px, 550px, 90px, 0);
            animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }

        .dot-matrix-glitch::after {
            left: -2px;
            text-shadow: -1px 0 #4c4546;
            clip: rect(85px, 550px, 140px, 0);
            animation: glitch-anim 2.5s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
            0% { clip: rect(41px, 9999px, 86px, 0); }
            20% { clip: rect(65px, 9999px, 12px, 0); }
            40% { clip: rect(10px, 9999px, 45px, 0); }
            60% { clip: rect(74px, 9999px, 21px, 0); }
            80% { clip: rect(32px, 9999px, 90px, 0); }
            100% { clip: rect(54px, 9999px, 7px, 0); }
        }

        @keyframes glitch-anim-2 {
            0% { clip: rect(12px, 9999px, 54px, 0); }
            20% { clip: rect(76px, 9999px, 32px, 0); }
            40% { clip: rect(45px, 9999px, 89px, 0); }
            60% { clip: rect(21px, 9999px, 10px, 0); }
            80% { clip: rect(90px, 9999px, 65px, 0); }
            100% { clip: rect(7px, 9999px, 41px, 0); }
        }
        
        .pixel-load {
            animation: pixelate 0.5s steps(5) forwards;
        }
        
        @keyframes pixelate {
            0% { filter: blur(10px) contrast(5); }
            100% { filter: blur(0px) contrast(1); }
        }

        .glass-panel {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }
      `}</style>
      <div className="scanline"></div>
    </>
  );
}
