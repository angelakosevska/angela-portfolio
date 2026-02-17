import Sticker from "@/components/Sticker";
import SpeechBubble from "@/components/SpeechBubble";
import Typewriter from "@/components/Typewriter";

export default function AboutHero() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="comic-card p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <Sticker tone="teal" className="delay-[0ms]">
            Full-stack
          </Sticker>

          <Sticker tone="coral" className="delay-[120ms]">
            Laravel • React • Wordpress
          </Sticker>

          <Sticker tone="ink" className="delay-[240ms]">
            Based in MK
          </Sticker>
        </div>
        <Typewriter
          as="h1"
          className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl"
          text="I build clear, structured software that feels intuitive to use."
          speedMs={18}
          startDelayMs={250}
        />
        <p className="mt-4 text-base font-semibold text-foreground/85">
          Hi, I’m Angela — a Computer Science graduate building my path in
          full-stack development. I enjoy turning complex ideas into structured,
          intuitive software, and I’m constantly improving how I design and
          build systems that make sense.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="comic-btn comic-btn-primary" href="/projects">
            BAM! Projects
          </a>
          <a className="comic-btn" href="/cv">
            Read CV
          </a>
          <a className="comic-btn comic-btn-accent" href="/contact">
            Contact
          </a>
        </div>
      </div>

      <SpeechBubble className="p-6 sm:p-8">
        <h2 className="text-lg font-extrabold">Right now</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm font-semibold">
          <li>Leveling up Next.js + building this portfolio as a real app</li>
          <li>Building accounting + workflow tools (Laravel/Inertia/React)</li>
          <li>Shipping small features weekly and documenting them</li>
        </ul>
      </SpeechBubble>
    </section>
  );
}
