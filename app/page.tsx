import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PerceptionGap } from "@/components/PerceptionGap";
import { HomeSections } from "@/components/HomeSections";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollAtmosphere } from "@/components/ScrollAtmosphere";

export default function Page() {
  return (
    <>
      <ScrollAtmosphere />
      <Header />
      <main id="main-content">
        <Hero />
        <PerceptionGap />
        <HomeSections />
      </main>
      <SiteFooter />
    </>
  );
}
