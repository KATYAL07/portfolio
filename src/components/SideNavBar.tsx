import Link from "next/link";

export default function SideNavBar() {
  return (
    <>
      {/* TopNavBar (Mobile Only) */}
      <header className="fixed top-0 w-full bg-surface/80 dark:bg-background/80 backdrop-blur-xl border-b border-primary/10 dark:border-on-background/10 flex justify-between items-center px-margin-lg h-20 z-50 lg:hidden">
        <Link href="/" className="font-dot-matrix-display text-dot-matrix-display text-primary dark:text-on-background">
          ARNAV KATYAL
        </Link>
        <div className="flex gap-4">
          <span className="material-symbols-outlined cursor-crosshair active:scale-95 text-primary dark:text-on-background">qr_code_2</span>
          <span className="material-symbols-outlined cursor-crosshair active:scale-95 text-primary dark:text-on-background">grid_view</span>
        </div>
      </header>

      {/* SideNavBar (Desktop Only) */}
      <nav className="fixed left-0 top-0 h-full w-64 hidden lg:flex flex-col py-margin-md px-4 space-y-8 bg-surface dark:bg-background border-r border-primary/10 dark:border-on-background/10 z-50">
        <div>
          <Link href="/" className="font-headline-lg text-headline-lg text-primary dark:text-on-background">
            AK-PORTFOLIO
          </Link>
          <div className="font-label-mono text-label-mono text-secondary mt-2">V2.0.4-STABLE</div>
        </div>
        
        <ul className="flex flex-col gap-2 w-full font-label-mono text-label-mono">
          <li>
            <Link href="/projects" className="flex items-center gap-3 p-2 bg-primary dark:bg-on-background text-on-primary dark:text-background rounded-sm transition-colors duration-75">
              <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
              01/SELECTED
            </Link>
          </li>
          <li>
            <Link href="/internships" className="flex items-center gap-3 p-2 text-secondary dark:text-secondary-fixed hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-colors duration-75">
              <span className="material-symbols-outlined text-[16px]">science</span>
              02/EXPERIMENTAL
            </Link>
          </li>
          <li>
            <Link href="/labs" className="flex items-center gap-3 p-2 text-secondary dark:text-secondary-fixed hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-colors duration-75">
              <span className="material-symbols-outlined text-[16px]">memory</span>
              03/HARDWARE
            </Link>
          </li>
          <li>
            <Link href="/about" className="flex items-center gap-3 p-2 text-secondary dark:text-secondary-fixed hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-colors duration-75">
              <span className="material-symbols-outlined text-[16px]">alternate_email</span>
              04/CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
