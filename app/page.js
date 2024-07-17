import AboutMe from "@/components/About";
import { DevAvatar } from "@/components/DevAvatar";
import { HeroHighlight } from "@/components/hero-highlight";
import HeroSection, { HeroHighlightDemo } from "@/components/HeroSection";
import { IconCloudSection } from "@/components/IconCloudSection";
import ProjectsListing from "@/components/ProjectsListing";
import { SkillsTooltip } from "@/components/Tolltip";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen py-12 gap-y-12">
      <HeroSection />
      <SkillsTooltip />
      <AboutMe />
      <ProjectsListing />
    </main>
  );
}
