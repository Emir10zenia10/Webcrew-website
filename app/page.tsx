import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PerceptionGap } from "@/components/PerceptionGap";
import { HomeSections } from "@/components/HomeSections";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <PerceptionGap />
      <HomeSections />
    </main>
  );
}
