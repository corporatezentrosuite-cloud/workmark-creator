import { motion } from "framer-motion";
import platformMockup from "@/assets/platform-mockup.png";
import FloatingBadge from "./FloatingBadge";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute inset-0 glow-blue pointer-events-none" />
      <div className="absolute inset-0 glow-cyan pointer-events-none" />

      <motion.div
        className="container relative z-10 flex flex-col items-center text-center max-w-[860px]"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* Badge pill */}
        <motion.a
          href="#features"
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/[0.28] mb-8"
          style={{ background: "hsl(211 100% 61% / 0.08)" }}
        >
          <span className="text-primary">✦</span>
          <span className="font-mono text-xs text-primary">Introducing Zentro Workmark</span>
          <span className="text-primary">→</span>
        </motion.a>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-display font-extrabold text-[44px] md:text-[80px] leading-[1.05] text-foreground mb-6"
        >
          Your Work Speaks
          <br />
          Louder Than Your{" "}
          <span className="relative inline-block">
            <span className="animate-strikethrough relative">Resume</span>
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          className="font-body text-text-secondary text-lg md:text-[19px] max-w-[580px] leading-[1.75] mb-8"
        >
          Zentro Workmark connects students with real challenges, AI&#8209;powered feedback, and a verified proof&#8209;of&#8209;work trail that goes far beyond any resume. Built for every student. For every discipline.
        </motion.p>

        {/* CTA row */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3.5 mb-6 w-full sm:w-auto">
          <button className="px-7 py-3.5 font-display font-semibold text-[15px] text-primary-foreground bg-primary rounded-[10px] hover:shadow-[0_0_24px_hsl(211_100%_61%/0.5)] hover:scale-[1.02] transition-all">
            Start Building Your Workmark →
          </button>
          <button className="px-7 py-3.5 font-body font-medium text-[15px] text-text-secondary border border-foreground/[0.12] rounded-[10px] hover:border-foreground/25 hover:text-foreground transition-all">
            See How It Works
          </button>
        </motion.div>

        {/* Trust line */}
        <motion.p variants={fadeUp} className="font-mono text-[11px] text-text-muted mb-12">
          ✦ Free for students · No credit card · Join 2,000+ students across 12 universities
        </motion.p>

        {/* Platform mockup */}
        <motion.div
          variants={fadeUp}
          className="relative w-full max-w-[1000px]"
        >
          <div className="rounded-2xl border border-primary/[0.15] overflow-hidden shadow-[0_40px_140px_hsl(211_100%_61%/0.14),0_0_0_1px_hsl(211_100%_61%/0.08)]">
            {/* Chrome bar */}
            <div className="h-9 flex items-center gap-2 px-4" style={{ background: "hsl(220 35% 8%)" }}>
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-warning/60" />
              <div className="w-3 h-3 rounded-full bg-success/60" />
              <div className="flex-1 mx-8 h-5 rounded-md" style={{ background: "hsl(220 30% 14%)" }} />
            </div>
            <img src={platformMockup} alt="Zentro Workmark Platform Dashboard" className="w-full" />
          </div>

          {/* Floating badges */}
          <FloatingBadge className="-top-4 -left-8" animationClass="animate-float">
            <p className="text-xs text-text-muted mb-1">⚡ Innovation Score</p>
            <p className="font-mono text-[28px] text-accent font-bold leading-none">847</p>
            <p className="text-xs text-success mt-1">↑ +14 this week</p>
          </FloatingBadge>

          <FloatingBadge className="-top-4 -right-8" animationClass="animate-float-delayed-1">
            <p className="text-xs text-text-muted mb-1">🏆 Leaderboard</p>
            <p className="font-mono text-sm text-foreground font-bold">Rank #3 of peers</p>
            <p className="text-xs text-success mt-1">↑ Up 5 spots this week</p>
          </FloatingBadge>

          <FloatingBadge className="bottom-12 left-1/2 -translate-x-1/2" animationClass="animate-float-delayed-2">
            <p className="text-xs text-text-muted mb-1">👁 Eyes on Your Work</p>
            <p className="font-mono text-sm text-foreground font-bold">49 views this week</p>
            <p className="text-xs text-text-secondary">IntelliCampus Project</p>
          </FloatingBadge>
        </motion.div>
      </motion.div>
    </section>
  );
}
