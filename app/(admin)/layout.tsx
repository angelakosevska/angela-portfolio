import Link from "next/link";
import Container from "@/components/Container";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <div className="border-b-2 border-[var(--ink)] bg-white/70 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" className="comic-btn bg-white">
            ← Back to site
          </Link>
          <div className="font-extrabold">
            Admin <span className="text-[var(--teal)]">Console</span>
          </div>
        </Container>
      </div>

      <Container className="py-8">{children}</Container>
    </div>
  );
}
