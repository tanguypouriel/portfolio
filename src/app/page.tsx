
import FloatingMenu from "./components/floating_menu";
import { Metadata } from "next";
import ContactSection from "./components/contact_section";
import AboutMeSection from "./components/about_me_section";
import WorkSection from "./components/work_section";
import SkillsSection from "./components/skills_section";

export const metadata: Metadata = {
  title: 'Tanguy Pouriel',
  description: 'Freelance fullstack Mobile developer',
}


export default async function Home() {
  return (
    <div className="bg-gray-900 min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col items-center z-10 text-white">
        <AboutMeSection />

        <SkillsSection />

        <WorkSection />

        <ContactSection />
        <FloatingMenu />
      </main>
    </div>
  );
}
