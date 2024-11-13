import { MapPin } from 'lucide-react';
import Animation from "../components/animation";
import Image from 'next/image';
import flutterImage from '../../../public/flutter-app.png';
import { Separator } from "@/components/ui/separator"


interface AboutMeProps {
    className?: string;
}


export default function AboutMeSection({ className }: AboutMeProps) {
    return (
        <section className={`h-screen flex flex-col items-center p-6 ${className}`}>

            <div className="w-full md:h-2/5 flex flex-col-reverse md:flex-row items-center p-8">
                <div className='flex-[5_5_0%] flex flex-col items-center '>
                    <div className='flex flex-col gap-4'>
                        <h2 className="text-4xl md:text-8xl font-bold text-indigo-50">Tanguy Pouriel</h2>
                        <h2 className="text-md md:text-xl font-bold text-teal-100 mx-8">Fullstack Mobile developer - Expert Flutter</h2>
                        <div className='flex flex-row text-teal-50 mt-2'>
                            <MapPin className='mx-2 ml-8' />
                            Bordeaux, France
                        </div>
                    </div>
                </div>

                <div className="flex-[2_2_0%] mb-8">
                    <Animation />
                </div>
            </div>

            <div className='h-3/5'>
                <p className="self-center justify-center text-center text-xl md:text-xl px-2 md:px-8 text-justify md:mx-8">
                    Hi I&apos;m Tanguy ! A freelance developer based on Bordeaux. <br /> With an engineering degree from a top-tier school and 4 years in
                    mobile development, I have a solid experience in mobile development!
                </p>

                <div className='flex items-center justify-center w-full'>
                <Separator className='my-10 w-4/5' />
                </div>

                <div className='flex flex-row h-full mx-6'>
                    <div className='flex-[7_7_0%] justify-center text-center text-xl md:text-xl px-2 text-justify md:mx-8 h-full pr-10 mt-4'>
                        I use Flutter to build your app from the ground up or enhance your existing one, whether you&apos;re an individual or a business.
                        <br /><br />My services include:
                        <ul className='list-disc pl-8 pt-8 space-y-2'>
                            <li>UI design and prototyping with Figma 🎨</li>
                            <li>Maintenance of existing applications and bug resolution 🛠️</li>
                            <li>Full development of Flutter applications, from idea to finished product 🚀</li>
                            <li>Complete backend development with Firebase 🔥</li>
                            <li>Publishing on stores (iOS, Android) 📲</li>
                        </ul>
                    </div>

                    <Image
                        src={flutterImage}
                        alt="flutter image"
                        className='flex-[1_1_0%] p-16 pb-48'
                        quality={100}
                    />
                </div>

            </div>
        </section>
    );
}
