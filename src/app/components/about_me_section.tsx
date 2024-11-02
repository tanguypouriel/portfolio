import { MapPin } from 'lucide-react';

interface AboutMeProps {
    className?: string;
}

export default function AboutMeSection({ className }: AboutMeProps) {
    return (
        <section className={`flex flex-col items-center gap-4 p-6 mr-8 ${className}`}>
            <div className='flex flex-col gap-3'>
                <h2 className="text-6xl font-bold">Tanguy Pouriel</h2>
                <h2 className="text-xl font-bold text-teal-100 mx-2">Fullstack Mobile developer</h2>
                <div className='flex flex-row text-teal-50 mt-2'>
                    <MapPin  className='mx-2' />
                    Bordeaux, France
                </div>
            </div>

            <p className="text-center text-2xl p-8 text-justify">
                With an engineering degree from a top-tier school and three years of mobile development experience,
                I empower businesses and individuals to create high-performing, visually appealing and innovative apps. <br /><br />
                My expertise spans full-cycle Flutter app development, backend integration, and seamless deployment.
            </p>
        </section>
    );
}
