import Link from "next/link";
import Container from "./Container";

const navItem = "comic-btn bg-white/80 hover:bg-white text-[var(--ink)]";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50">
      <div className="border-b-2 border-[var(--ink)] bg-[var(--paper)]/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-extrabold tracking-tight"
          >
            <span className="inline-block rounded-xl border-2 border-[var(--ink)] bg-[var(--teal)] px-2 py-1 shadow-[var(--shadow-sm)]">
              A
            </span>
            <span className="text-lg">
              Angela<span className="text-[var(--coral)]">.dev</span>
            </span>
          </Link>

          <nav className="flex items-center gap-3">
            <Link className={navItem} href="/projects">
              Projects
            </Link>
            <Link className={navItem} href="/cv">
              CV
            </Link>
            <Link
              className="comic-btn bg-[var(--coral)] text-white hover:opacity-90"
              href="/contact"
            >
              Contact
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}
