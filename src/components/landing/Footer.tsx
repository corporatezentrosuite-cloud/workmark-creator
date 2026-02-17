export default function Footer() {
  return (
    <footer className="border-t border-primary/[0.07] pt-20 pb-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-sm">Z</div>
              <span className="font-display font-bold text-foreground">Zentro<span className="text-primary"> Workmark</span></span>
            </div>
            <p className="font-body text-text-muted text-sm mb-4">The innovation ecosystem for every student.</p>
            <div className="flex gap-2">
              {["Li", "X", "Ig"].map((s) => (
                <a key={s} href="#" className="w-8 h-8 rounded-full bg-foreground/[0.06] flex items-center justify-center text-text-muted text-xs hover:bg-primary/[0.15] hover:text-primary transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <p className="font-mono text-[10px] text-text-ghost uppercase tracking-wider mb-4">PLATFORM</p>
            {["Home Feed", "Challenges", "Leaderboard", "Project Repository", "My Ideas"].map((l) => (
              <a key={l} href="#" className="block text-text-muted text-sm font-body py-1 hover:text-text-secondary transition-colors">{l}</a>
            ))}
          </div>

          {/* Company */}
          <div>
            <p className="font-mono text-[10px] text-text-ghost uppercase tracking-wider mb-4">COMPANY</p>
            {["About", "Blog", "For Universities", "Privacy Policy", "Terms of Use"].map((l) => (
              <a key={l} href="#" className="block text-text-muted text-sm font-body py-1 hover:text-text-secondary transition-colors">{l}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] text-text-ghost uppercase tracking-wider mb-4">GET IN TOUCH</p>
            <p className="text-text-muted text-sm font-body mb-3">hello@zentroworkmark.com</p>
            <a href="#" className="text-primary text-sm font-body hover:underline">Get Started Free →</a>
          </div>
        </div>

        <div className="border-t border-foreground/[0.06] pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-text-ghost text-[13px] font-body">© 2025 Zentro Workmark. All rights reserved.</p>
          <div className="flex gap-4">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <a key={l} href="#" className="text-text-ghost text-[13px] font-body hover:text-text-muted transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
