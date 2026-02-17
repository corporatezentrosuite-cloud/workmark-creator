interface FloatingBadgeProps {
  className?: string;
  children: React.ReactNode;
  animationClass?: string;
}

export default function FloatingBadge({ className = "", children, animationClass = "animate-float" }: FloatingBadgeProps) {
  return (
    <div
      className={`hidden lg:block absolute zentro-card backdrop-blur-xl p-4 border border-primary/20 rounded-xl shadow-xl ${animationClass} ${className}`}
      style={{ background: "hsl(220 35% 8% / 0.92)" }}
    >
      {children}
    </div>
  );
}
