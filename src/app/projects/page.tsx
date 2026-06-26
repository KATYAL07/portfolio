import SideNavBar from "@/components/SideNavBar";

export default function Projects() {
  return (
    <div className="text-on-background min-h-screen flex flex-col pt-20 lg:pl-64">
      <SideNavBar />
      
      <main className="flex-grow p-margin-sm md:p-margin-lg">
        <header className="mb-12">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-4">SELECTED_WORKS</h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl">A collection of technical explorations, hardware prototypes, and digital systems built on the principles of essentialism and functional aesthetics.</p>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {/* Project 1: Large Feature */}
          <article className="bento-card col-span-1 md:col-span-8 row-span-2 relative overflow-hidden bg-surface-container-lowest border border-outline-variant rounded-xl group cursor-crosshair">
            <div className="absolute inset-0 z-0">
              {/* Using standard img tag as Next.js Image component handles external domains differently */}
              <img className="w-full h-full object-cover opacity-80 mix-blend-multiply grayscale" alt="AquaArch System" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBanbFQukmPeUjTWTUb_iYg72lVME_EtWPYaYCZ0p8JXQDXTX06Pc4pNsPBzhAtuIpXlGTrs033RFeuMRL4xGddklBaSERJ34GXyy2MxGPGFV7p96fmGUg7oDKqQh8IXJxNIvl2dKLKP77OyQuO64zxAIjEYIpDrhMXgwnGmvxuA73rOrttuNvmN7qzIy8v4JrtsLX6SbMa794a4NURMcyUT8rACxDfYWtU94z9hc4i7po7nGe6jnZo2Dh91jM6dZ6nulwiykdjlzU" />
            </div>
            
            <div className="absolute top-0 left-0 w-full p-6 z-10 flex justify-between items-start">
              <div className="glass-panel px-4 py-2 border border-primary/20 rounded-sm">
                <span className="font-label-mono text-label-mono text-primary">PRJ_01 // AQUAARCH</span>
              </div>
              <span className="material-symbols-outlined text-primary bg-surface p-2 rounded-full border border-outline-variant">north_east</span>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-6 z-10 glass-panel border-t border-primary/10">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Aquatic Architecture System</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Sustainable water flow management interface with real-time fluid dynamic visualization.</p>
            </div>
            
            <div className="bento-overlay absolute inset-0 bg-primary/90 flex items-center justify-center z-20">
              <div className="text-center">
                <span className="material-symbols-outlined text-on-primary text-4xl mb-4 block">visibility</span>
                <span className="font-label-mono text-label-mono text-on-primary tracking-widest border border-on-primary px-6 py-3 hover:bg-on-primary hover:text-primary transition-colors">INITIALIZE_VIEW</span>
              </div>
            </div>
          </article>

          {/* Project 2: Medium Vertical */}
          <article className="bento-card col-span-1 md:col-span-4 row-span-2 relative overflow-hidden bg-primary border border-primary rounded-xl group cursor-crosshair">
            <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale mix-blend-screen" ></div>
            <div className="absolute top-0 left-0 w-full p-6 z-10">
              <span className="font-label-mono text-label-mono text-on-primary border border-on-primary/30 px-3 py-1 rounded-sm block w-fit mb-4">PRJ_02</span>
              <h2 className="font-headline-lg text-headline-lg text-on-primary leading-tight">Hardware Interface V1</h2>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 z-10">
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="font-label-mono text-[10px] text-on-primary/70 border border-on-primary/20 px-2 py-1">PCB_DESIGN</span>
                <span className="font-label-mono text-[10px] text-on-primary/70 border border-on-primary/20 px-2 py-1">C++</span>
              </div>
              <div className="h-1 w-full bg-on-primary/20 rounded-full overflow-hidden">
                <div className="h-full bg-on-primary w-3/4"></div>
              </div>
              <span className="font-label-mono text-label-mono text-on-primary/50 mt-2 block">SYS_STATUS: OPTIMAL</span>
            </div>
            <div className="bento-overlay absolute inset-0 bg-surface/95 flex items-center justify-center z-20">
              <div className="text-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-4 block">memory</span>
                <span className="font-label-mono text-label-mono text-primary tracking-widest border border-primary px-6 py-3 hover:bg-primary hover:text-on-primary transition-colors">ACCESS_DATA</span>
              </div>
            </div>
          </article>

          {/* Project 3: Small Square */}
          <article className="bento-card col-span-1 md:col-span-4 row-span-1 relative overflow-hidden bg-surface-container-lowest border border-outline-variant rounded-xl flex flex-col justify-between p-6 group cursor-crosshair">
            <div className="flex justify-between items-start">
              <span className="font-label-mono text-label-mono text-secondary">PRJ_03 // TERMINAL</span>
              <span className="material-symbols-outlined text-secondary text-[20px]">terminal</span>
            </div>
            <div>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-2">CLI Portfolio</h3>
              <p className="font-body-md text-body-md text-secondary line-clamp-2">A command-line interface version of my portfolio built entirely in Rust.</p>
            </div>
            <div className="bento-overlay absolute inset-0 bg-primary/90 flex items-center justify-center z-20">
              <span className="font-label-mono text-label-mono text-on-primary underline underline-offset-4">EXECUTE_RUN</span>
            </div>
          </article>

          {/* Project 4: Wide Rectangle */}
          <article className="bento-card col-span-1 md:col-span-8 row-span-1 relative overflow-hidden bg-surface-container-highest border border-outline-variant rounded-xl group cursor-crosshair p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/3 aspect-video bg-surface border border-outline-variant rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-4xl animate-pulse">data_object</span>
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <span className="font-label-mono text-label-mono text-secondary mb-2">PRJ_04 // DATA_VIZ</span>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-3">Algorithmic Topography</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">Generative landscapes created using Perlin noise and WebGL shaders to represent raw data structures.</p>
              <div className="flex gap-4">
                <span className="font-label-mono text-[10px] text-primary border border-primary px-2 py-1">WEBGL</span>
                <span className="font-label-mono text-[10px] text-primary border border-primary px-2 py-1">GLSL</span>
              </div>
            </div>
            <div className="bento-overlay absolute inset-0 bg-primary/90 flex items-center justify-center z-20">
              <span className="font-label-mono text-label-mono text-on-primary tracking-widest border border-on-primary px-6 py-3 hover:bg-on-primary hover:text-primary transition-colors">INSPECT_SOURCE</span>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-primary dark:border-on-background bg-surface dark:bg-background flex flex-col md:flex-row justify-between items-center px-margin-lg py-margin-sm gap-gutter z-40 lg:ml-64 lg:w-[calc(100%-16rem)]">
        <div className="font-label-mono text-label-mono text-primary dark:text-on-background">
          ©2024 ARNAV KATYAL. BUILT ON TECHNICAL ESSENTIALISM.
        </div>
        <ul className="flex gap-6 font-label-mono text-label-mono">
          <li><a className="text-secondary dark:text-secondary-fixed hover:text-primary dark:hover:text-on-background hover:underline cursor-pointer" href="#">INSTAGRAM</a></li>
          <li><a className="text-secondary dark:text-secondary-fixed hover:text-primary dark:hover:text-on-background hover:underline cursor-pointer" href="#">GITHUB</a></li>
          <li><a className="text-secondary dark:text-secondary-fixed hover:text-primary dark:hover:text-on-background hover:underline cursor-pointer" href="#">READ.CV</a></li>
        </ul>
      </footer>
    </div>
  );
}
