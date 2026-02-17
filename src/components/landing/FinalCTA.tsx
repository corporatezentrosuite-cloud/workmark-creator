import { useScrollReveal } from "./useScrollReveal";

export default function FinalCTA() {
  const ref = useScrollReveal();

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 glow-intense pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none" style={{ opacity: 0.8 }} />

      <div ref={ref} className="container relative z-10 flex flex-col items-center text-center max-w-[700px] [&:not(.revealed)]:opacity-0 [&.revealed]:animate-[fade-in_0.5s_ease-out_forwards]">
        {/* Badge */}
        <span
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/[0.28] mb-8 font-mono text-xs text-primary"
          style={{ background: "hsl(211 100% 61% / 0.08)" }}>

          ✦ FREE · NO CREDIT CARD · START TODAY
        </span>

        <h2 className="font-display text-[48px] text-foreground leading-[1.0] mb-6 font-bold md:text-7xl">Start building your
Workmark.
          <br />
          Start building your
          <br />
          <span className="text-primary" style={{ textShadow: "0 0 40px hsl(211 100% 61% / 0.4)" }}>
            Workmark.
          </span>
        </h2>

        <p className="font-body text-text-secondary text-xl max-w-[500px] leading-[1.75] mb-8">
          Every week you wait is a week your proof-of-work trail doesn't grow. Every challenge you skip is a story never told. Join Zentro Workmark today and start building what actually matters.
        </p>

        <button className="px-9 py-4 font-display font-semibold text-base text-primary-foreground bg-primary rounded-xl hover:shadow-[0_0_40px_hsl(211_100%_61%/0.55),0_0_80px_hsl(211_100%_61%/0.20)] hover:scale-[1.03] transition-all animate-shimmer">
          Get Your Workmark Now →
        </button>

        <p className="font-mono text-[11px] text-text-muted mt-6">
          No credit card required · No resume needed · Just your work
        </p>
      </div>
    </section>);

}