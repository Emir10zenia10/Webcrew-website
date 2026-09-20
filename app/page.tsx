import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PerceptionGap } from "@/components/PerceptionGap";
import { HomeSections } from "@/components/HomeSections";
import { SiteFooter } from "@/components/SiteFooter";

export default function Page() {
  return (
    <>
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
