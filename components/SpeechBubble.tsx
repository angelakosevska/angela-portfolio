// components/SpeechBubble.tsx
export default function SpeechBubble({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative rounded-2xl border-2 border-foreground bg-card/80 p-5",
        "shadow-[6px_6px_0_var(--foreground)] backdrop-blur",
        className,
      ].join(" ")}
    >
      {/* tail */}
      <div className="absolute -bottom-3 left-8 h-6 w-6 rotate-45 border-b-2 border-r-2 border-foreground bg-card/80" />
      {children}
    </div>
  );
}
