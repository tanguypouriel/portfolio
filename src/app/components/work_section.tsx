
import CardGrid from './card_grid';

interface WorkProps {
    className?: string;
}

export default function WorkSection({ className }: WorkProps) {
    return (
        <section className={`flex flex-col items-center gap-4 p-6 ${className}`}>
            <h1 className="text-4xl font-bold self-start mx-16 text-teal-100">Projects</h1>

            <p className='text-justify p-4 mx-8 text-xl'>
                Here's a showcase of my mobile development journey—each project representing milestones in my growth and expertise.<br />
                From real-world case studies refining my skills to full-time projects with tangible impact, these works capture my dedication to creating seamless, high-performance mobile experiences.
            </p>
            <CardGrid />

        </section>
    );
}
