
import FloatingMenu from "./components/floating_menu";
import { Metadata } from "next";
import ContactSection from "./components/contact_section";
import Animation from "./components/animation";
import AboutMeSection from "./components/about_me_section";
import WorkSection from "./components/work_section";
import SkillsSection from "./components/skills_section";

export const metadata: Metadata = {
  title: 'Tanguy Pouriel',
  description: 'Freelance fullstack Mobile developer',
}


export default async function Home() {
  return (
    <>
      <div className="fixed bg-pixels inset-0 bg-contain opacity-15 " />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center bg-gray-900/90 min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <main className="flex flex-col gap-8 row-start-2 items-center z-10 text-white">

          <div className="flex flex-col-reverse md:flex-row ">
            <AboutMeSection className="flex-[5_5_0%]" />
            <Animation className="flex-[2_2_0%] self-start mb-8" />
          </div>

          <SkillsSection />

          <WorkSection />

          <ContactSection />
          <FloatingMenu />
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center z-10">
        </footer>
      </div>
    </>
  );
}
