import { motion } from "framer-motion";
import { useScrollReveal } from "./useScrollReveal";
import GlowCard from "./GlowCard";

export default function Problem() {
  const ref = useScrollReveal();

  return (
    <section className="relative section-padding overflow-hidden bg-surface-1">
      <div className="absolute inset-0 glow-red pointer-events-none" />
      <div
        ref={ref}
        className="container relative z-10 grid md:grid-cols-2 gap-12 items-center [&:not(.revealed)]:opacity-0 [&.revealed]:animate-[fade-in_0.5s_ease-out_forwards]"
      >
        {/* Left copy */}
        <div>
          <span className="eyebrow text-destructive mb-4 block">THE PROBLEM</span>
          <h2 className="font-display font-bold text-4xl md:text-[48px] text-foreground leading-[1.1] mb-6">
            You've done the work.
            <br />
            The resume hasn't caught up.
          </h2>
          <p className="font-body text-text-secondary text-lg leading-[1.8] mb-6">
            You've built projects at 2am. You've cracked problems nobody asked you to crack. You've won arguments in seminars and built things that actually worked. But when you sit in front of a recruiter — all of that becomes a single bullet point on a one-page PDF. That's not your story. Zentro Workmark is.
          </p>
          <div className="flex flex-wrap gap-3">
            {["❌ Resume = 1 page", "❌ Grades don't show capability", "❌ Projects disappear after submission"].map((chip) => (
              <span key={chip} className="px-3 py-1.5 rounded-full text-xs font-body text-destructive border border-destructive/20 bg-destructive/[0.06]">
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Right comparison card */}
        <GlowCard className="p-8 border-destructive/[0.12]">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-6">
            {/* Resume side */}
            <div className="space-y-3 opacity-50">
              <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider">📄 Resume</p>
              <div className="space-y-2">
                {[80, 60, 90, 50, 70, 40].map((w, i) => (
                  <div key={i} className="h-2.5 rounded bg-foreground/[0.06] animate-pulse" style={{ width: `${w}%` }} />
                ))}
              </div>
              <div className="text-destructive/30 text-6xl font-bold text-center mt-4">✕</div>
            </div>

            {/* Divider */}
            <div className="flex flex-col items-center">
              <div className="flex-1 w-px bg-foreground/[0.08]" />
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center my-2">
                <span className="text-primary text-sm">→</span>
              </div>
              <div className="flex-1 w-px bg-foreground/[0.08]" />
            </div>

            {/* Workmark side */}
            <div className="space-y-3 bg-primary/[0.03]">
              <p className="font-mono text-[10px] text-primary uppercase tracking-wider">✦ Workmark</p>
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-display font-bold text-primary text-sm">SK</div>
              <p className="text-sm text-foreground font-medium">Sambram K S</p>
              <p className="font-mono text-accent text-lg">⚡ Score: 847</p>
              <div className="w-full h-2 rounded-full bg-foreground/[0.06] overflow-hidden">
                <div className="h-full bg-success rounded-full" style={{ width: "78%" }} />
              </div>
              <p className="text-xs text-text-muted">Industry Readiness: 78%</p>
              <div className="flex flex-wrap gap-1.5">
                {["🥇 Finalist", "12 Projects", "3 Certs"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono text-primary border border-primary/20">{t}</span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-primary">✓ Verified</span>
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}
