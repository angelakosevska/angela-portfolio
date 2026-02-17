export default function Sticker({
  children,
  tone = "teal",
  className = "",
  animate = true,
}: {
  children: React.ReactNode;
  tone?: "teal" | "coral" | "ink";
  className?: string;
  animate?: boolean;
}) {
  const tint =
    tone === "teal"
      ? "bg-primary/25"
      : tone === "coral"
      ? "bg-accent/25"
      : "bg-foreground/10";

  return (
    <span
      className={[
        "relative inline-flex items-center gap-2 rounded-full px-3 py-1",
        "text-xs font-extrabold text-foreground",
        "border-2 border-foreground",
        "shadow-[4px_4px_0_var(--foreground)]",
        "backdrop-blur-md",
        "bg-card/40", // base glass
        "overflow-hidden",
        "transition-transform duration-200 hover:-translate-y-[1px] active:translate-y-[2px]",
        "will-change-transform",
        animate ? "animate-sticker-in" : "",
        className,
      ].join(" ")}
    >
      {/* tint overlay */}
      <span className={["pointer-events-none absolute inset-0", tint].join(" ")} />
      <span className="relative">{children}</span>
    </span>
  );
}
