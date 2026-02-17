import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Platform", "Features", "How It Works", "Leaderboard", "For Universities"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-primary/[0.08]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
            Z
          </div>
          <span className="font-display font-bold text-foreground text-lg">
            Zentro<span className="text-primary"> Workmark</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, "-")}`}
              className="text-text-secondary text-[15px] font-body hover:text-foreground transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-5 py-2.5 text-sm font-body font-medium text-text-secondary border border-primary/25 rounded-lg hover:border-primary/50 hover:text-foreground transition-all">
            Log In
          </button>
          <button className="px-5 py-2.5 text-sm font-body font-semibold text-primary-foreground bg-primary rounded-lg hover:shadow-[0_0_24px_hsl(211_100%_61%/0.45)] hover:scale-[1.02] transition-all">
            Get Started Free →
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-primary/[0.08] p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, "-")}`}
              className="text-text-secondary text-lg font-body hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <button className="w-full py-3 text-sm font-body font-medium text-text-secondary border border-primary/25 rounded-lg">
              Log In
            </button>
            <button className="w-full py-3 text-sm font-body font-semibold text-primary-foreground bg-primary rounded-lg">
              Get Started Free →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
