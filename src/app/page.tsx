import Projects from "@/components/projects";
import Section from "@/components/section";

export default function Home() {
  return (
    <>
      <Section>Hero</Section>
      <Section full>
        <Projects />
      </Section>
      <Section>Contact Me</Section>
      <Section>Commentaires</Section>
      <div className="h-[200svh] absolute">{" "}</div>
    </>
  );
}
