import Image from "next/image";
import SinusoidBackground from "./components/sinusoidbackground";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import FloatingMenu from "./components/floating_menu";
import CardGrid from "./card_grid";
import { Metadata } from "next";
import ContactSection from "./components/contact_section";

export const metadata: Metadata = {
  title: 'Tanguy Pouriel',
  description: 'Freelance fullstack Mobile developer',
}


export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <SinusoidBackground /> */}
      <main className="flex flex-col gap-8 row-start-2 items-center z-10">
        <Card className="p-5 bg-black bg-opacity-20 backdrop-blur-xl text-white ">
          <CardHeader>
            <CardTitle>Tanguy Pouriel</CardTitle>
            <CardDescription>Fullstack software engineer</CardDescription>
            <CardDescription>Bordeaux, France</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>


        <CardGrid />
        <ContactSection />

      </main>
      <FloatingMenu />
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center z-10">
      </footer>
    </div>
  );
}
