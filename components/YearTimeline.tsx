import Sticker from "@/components/Sticker";
import type { TimelineItem } from "@/components/Timeline";

type Side = "education" | "experience";

export type YearTimelineItem = TimelineItem & {
  year: number;
  side: Side;
};

function ItemCard({
  it,
  align,
  delayMs,
}: {
  it: YearTimelineItem;
  align: "left" | "right";
  delayMs: number;
}) {
  const wrapperAlign =
    align === "left" ? "md:justify-self-end md:text-right" : "md:justify-self-start md:text-left";

  const connectorLine =
    align === "left"
      ? "hidden md:block absolute right-[-2rem] top-6 h-[2px] w-8 bg-foreground/80"
      : "hidden md:block absolute left-[-2rem] top-6 h-[2px] w-8 bg-foreground/80";

  const connectorDot =
    align === "left"
      ? "hidden md:block absolute right-[-1px] top-[22px] h-4 w-4 translate-x-1/2 rounded-full border-2 border-foreground bg-background shadow-[2px_2px_0_var(--foreground)]"
      : "hidden md:block absolute left-[-1px] top-[22px] -translate-x-1/2 h-4 w-4 rounded-full border-2 border-foreground bg-background shadow-[2px_2px_0_var(--foreground)]";

  return (
    <div
      className={["relative", wrapperAlign, "animate-timeline-in"].join(" ")}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className={connectorLine} />
      <div className={connectorDot} />

      <div className="rounded-2xl border-2 border-foreground bg-card/60 p-5 shadow-[4px_4px_0_var(--foreground)] backdrop-blur transition-transform hover:-translate-y-[1px]">
        <div className={`flex flex-wrap items-center gap-2 ${align === "left" ? "md:justify-end" : ""}`}>
          <Sticker tone={it.tone ?? (it.side === "education" ? "teal" : "coral")}>
            {it.period}
          </Sticker>
          {it.location ? (
            <span className="text-sm font-semibold text-foreground/80">
              {it.location}
            </span>
          ) : null}
        </div>

        <div className="mt-2">
          <h3 className="text-base font-extrabold">{it.title}</h3>
          {it.subtitle ? (
            <p className="text-sm font-semibold text-foreground/80">
              {it.subtitle}
            </p>
          ) : null}

          {it.bullets?.length ? (
            <ul className={`mt-3 list-disc space-y-1.5 text-sm font-semibold ${align === "left" ? "md:ml-auto pl-5" : "pl-5"}`}>
              {it.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function YearTimeline({
  title = "Education & Experience",
  items,
}: {
  title?: string;
  items: YearTimelineItem[];
}) {
  // group by year (descending)
  const years = Array.from(new Set(items.map((i) => i.year))).sort((a, b) => b - a);

  const byYear = (year: number, side: Side) =>
    items
      .filter((i) => i.year === year && i.side === side)
      // stable-ish ordering inside a year: education first by period, etc. (optional)
      .sort((a, b) => String(b.period).localeCompare(String(a.period)));

  return (
    <section className="comic-card p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-extrabold tracking-tight">{title}</h2>
        <div className="flex flex-wrap gap-2">
          <Sticker tone="teal">Education</Sticker>
          <Sticker tone="coral">Experience</Sticker>
        </div>
      </div>

      <div className="relative mt-8">
        {/* center rail (md+) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-foreground/80" />

        <div className="space-y-10">
          {years.map((year, yi) => {
            const edu = byYear(year, "education");
            const exp = byYear(year, "experience");

            return (
              <div key={year} className="relative">
                {/* year badge in the middle */}
                <div className="hidden md:flex absolute left-1/2 top-2 -translate-x-1/2 items-center justify-center">
                  <span className="rounded-full border-2 border-foreground bg-background px-3 py-1 text-sm font-extrabold shadow-[4px_4px_0_var(--foreground)]">
                    {year}
                  </span>
                </div>

                {/* Mobile year label */}
                <div className="md:hidden mb-4">
                  <Sticker tone="ink">{year}</Sticker>
                </div>

                {/* row layout: left / right */}
                <div className="grid gap-6 md:grid-cols-2 md:gap-x-16">
                  {/* left: education */}
                  <div className="space-y-6">
                    {edu.length ? (
                      edu.map((it, idx) => (
                        <ItemCard
                          key={`edu-${year}-${idx}`}
                          it={it}
                          align="left"
                          delayMs={(yi * 6 + idx) * 90}
                        />
                      ))
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                  {/* right: experience */}
                  <div className="space-y-6">
                    {exp.length ? (
                      exp.map((it, idx) => (
                        <ItemCard
                          key={`exp-${year}-${idx}`}
                          it={it}
                          align="right"
                          delayMs={(yi * 6 + edu.length + idx) * 90}
                        />
                      ))
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
