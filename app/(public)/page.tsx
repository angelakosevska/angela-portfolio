import Container from "@/components/Container";
import AboutHero from "@/components/AboutHero";
import YearTimeline, { YearTimelineItem } from "@/components/YearTimeline";

const items: YearTimelineItem[] = [
  // Education
  {
    side: "education",
    year: 2021,
    period: "2017 — 2021",
    title: "High School Diploma",
    subtitle: "Gimnazija 'Josip Broz Tito' — Bitola",
    location: "Natural & Mathematical Sciences Track",
    tone: "ink",
  },
  {
    side: "education",
    year: 2025,
    period: "2021 — 2025",
    title:
      "Bachelor of Science in Computer Science and Communications Engineering (BSc CSCE)",
    subtitle:
      "Faculty of Information and Communication Technologies — UKLO, Bitola",
    tone: "teal",
    bullets: [
      "Developed a web-based multiplayer game using the MERN architecture and Socket.io.",
    ],
  },
  {
    side: "education",
    year: 2021,
    period: "2021",
    title: "WordPress Development Course",
    tone: "teal",
    bullets: ["WordPress fundamentals and theme customization", "E-commerce development using WooCommerce"],
  },

  // Experience
  {
    side: "experience",
    year: 2025,
    period: "2025",
    title: "Intern Developer",
    subtitle: "Webiart",
    tone: "coral",
    bullets: ["Worked with WordPress, Laravel, and React", "Contributed to client projects"],
  },
  {
    side: "experience",
    year: 2026,
    period: "2025 — Present",
    title: "Full-Stack Developer",
    subtitle: "Webiart",
    tone: "coral",
    bullets: [
      "Developing structured admin systems and fintech software focused on real-world business logic",
    ],
  },
];

export default function HomePage() {
  return (
    <Container className="py-10 sm:py-14">
      <AboutHero />
      <div className="mt-8">
        <YearTimeline items={items} />
      </div>
    </Container>
  );
}
