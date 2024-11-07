import { MapPin } from 'lucide-react';
import Animation from "../components/animation";

interface AboutMeProps {
    className?: string;
}


export default function AboutMeSection({ className }: AboutMeProps) {
    return (
        <section className={`h-screen flex flex-col items-center p-6 ${className}`}>

            <div className="w-full md:h-2/3 flex flex-col-reverse md:flex-row items-center p-8">
                <div className='flex-[5_5_0%] flex flex-col items-center '>
                    <div className='flex flex-col gap-4'>
                        <h2 className="text-4xl md:text-8xl font-bold text-indigo-50">Tanguy Pouriel</h2>
                        <h2 className="text-md md:text-xl font-bold text-teal-100 mx-8">Fullstack Mobile developer</h2>
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


            <div className='flex justify-center h-full'>
                <p className="self-center justify-center text-center text-xl md:text-2xl px-2 md:px-8 text-justify md:mx-8">
                    With an engineering degree from a top-tier school and three years of mobile development experience,
                    I empower businesses and individuals to create high-performing, visually appealing and innovative apps. <br /><br />
                    My expertise spans full-cycle Flutter app development, backend integration, and seamless deployment.
                </p>
            </div>
        </section>
    );
}
