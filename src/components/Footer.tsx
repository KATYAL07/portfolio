export default function Footer() {
  return (
    <footer className="bg-background dark:bg-background border-t border-primary dark:border-on-surface flat no shadows w-full">
      <div className="w-full bg-background pt-12 pb-margin-lg px-margin-sm md:px-margin-lg">
        {/* Large Logo Section */}
        <div className="relative overflow-hidden mb-12">
          <h1 className="text-[20vw] md:text-[25vw] font-black leading-[0.8] tracking-tighter text-primary lowercase select-none -mb-[5vw]">
            arnav
          </h1>
        </div>
        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter border-t border-primary pt-12">
          {/* Tagline */}
          <div className="md:col-span-4">
            <p className="font-headline-lg-mobile md:font-headline-lg text-primary leading-tight">
              Crafted with precision.<br />Built for the future.
            </p>
            <p className="font-label-mono text-label-mono text-secondary mt-4">
              Technical essentialism in digital form.
            </p>
          </div>
          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 md:mt-0">
            {/* Navigation */}
            <div className="flex flex-col gap-2">
              <h3 className="font-label-mono text-label-mono text-primary font-bold mb-2">Navigation</h3>
              <a className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" href="/projects">Work</a>
              <a className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" href="/internships">Archive</a>
              <a className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" href="/about">Info</a>
            </div>
            {/* Socials */}
            <div className="flex flex-col gap-2">
              <h3 className="font-label-mono text-label-mono text-primary font-bold mb-2">Socials</h3>
              <a className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" href="#">Instagram</a>
              <a className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" href="#">GitHub</a>
              <a className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" href="#">Read.cv</a>
              <a className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" href="#">LinkedIn</a>
            </div>
            {/* System */}
            <div className="flex flex-col gap-2">
              <h3 className="font-label-mono text-label-mono text-primary font-bold mb-2">System</h3>
              <a className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" href="#">Status</a>
              <a className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" href="#">Encrypted Feed</a>
            </div>
          </div>
        </div>
        {/* Bottom Copyright */}
        <div className="mt-24 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-label-mono text-label-mono text-secondary">
            © 2024 ARNAV KATYAL. BUILT ON TECHNICAL ESSENTIALISM.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary">terminal</span>
            <span className="material-symbols-outlined text-primary">deployed_code</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
