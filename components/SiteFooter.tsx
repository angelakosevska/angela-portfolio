import Container from "./Container";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t-2 border-[var(--ink)] bg-white/70">
      <Container className="py-10">
        <div className="comic-card px-6 py-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-bold">
              © {new Date().getFullYear()} Angela • Built like a tiny product.
            </p>
            <p className="text-sm">
              Teal + Coral. Bold outlines. Deployed on Vercel.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
