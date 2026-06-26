import Link from "next/link";

export default function TopNavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-primary dark:border-on-surface flat no shadows">
      <div className="flex justify-between items-center px-margin-sm md:px-margin-lg py-6 w-full max-w-full">
        <div className="flex-1"></div>
        <div className="relative group">
          <Link href="/">
            <button className="font-dot-matrix-display text-headline-lg-mobile text-primary dark:text-on-surface hover:opacity-80 transition-opacity flex items-center gap-2">
              ARNAV KATYAL <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </button>
          </Link>
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <div className="glass-card hardware-border rounded-xl p-4 min-w-[200px] flex flex-col gap-4">
              <Link href="/projects" className="font-label-mono text-label-mono text-primary hover:bg-surface-variant p-2 rounded transition-colors cursor-crosshair">
                WORK
              </Link>
              <Link href="/internships" className="font-label-mono text-label-mono text-secondary opacity-60 hover:opacity-100 p-2 rounded transition-colors cursor-crosshair">
                INTERNSHIPS
              </Link>
              <Link href="/labs" className="font-label-mono text-label-mono text-secondary opacity-60 hover:opacity-100 p-2 rounded transition-colors cursor-crosshair">
                LABS
              </Link>
              <Link href="/about" className="font-label-mono text-label-mono text-secondary opacity-60 hover:opacity-100 p-2 rounded transition-colors cursor-crosshair">
                ABOUT
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <button className="flex items-center justify-center p-2 text-primary hover:bg-surface-variant rounded-md transition-colors">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>grid_view</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
