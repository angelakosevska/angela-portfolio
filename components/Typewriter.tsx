"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  text: string;
  as?: keyof JSX.IntrinsicElements; // "h1", "h2", etc.
  className?: string;
  speedMs?: number; // typing speed
  startDelayMs?: number;
  showCaret?: boolean;
};

export default function Typewriter({
  text,
  as = "h1",
  className = "",
  speedMs = 22,
  startDelayMs = 200,
  showCaret = true,
}: Props) {
  const Tag = as as any;

  const safeText = useMemo(() => String(text ?? ""), [text]);
  const [i, setI] = useState(0);

  useEffect(() => {
    let t1: any;
    let t2: any;

    t1 = setTimeout(() => {
      t2 = setInterval(() => {
        setI((prev) => {
          if (prev >= safeText.length) {
            clearInterval(t2);
            return prev;
          }
          return prev + 1;
        });
      }, speedMs);
    }, startDelayMs);

    return () => {
      clearTimeout(t1);
      clearInterval(t2);
    };
  }, [safeText, speedMs, startDelayMs]);

  const shown = safeText.slice(0, i);

  return (
    <Tag className={["relative", className].join(" ")}>
      <span>{shown}</span>
      {showCaret ? (
        <span className="ml-1 inline-block w-[10px] align-baseline">
          <span className="inline-block h-[1.15em] w-[3px] translate-y-[2px] bg-foreground animate-caret-blink" />
        </span>
      ) : null}
    </Tag>
  );
}
