import Link from 'next/link';

export default function ContactSection() {
    return (
        <section className="flex flex-col items-center gap-4 w-full bg-indigo-50 p-16 pb-[200px] text-gray-900">
            <h1 className="text-4xl font-bold mx-16 pb-6">Get in touch</h1>

            <p className="text-center text-2xl">
                Want to chat? Just send me a message<br/> on{' '}
                <Link href="https://www.linkedin.com/in/tanguy-pouriel-020300159/" target="_blank" rel="noopener noreferrer" className="text-cyan-700 underline">
                    LinkedIn
                </Link>{' '}
                or via{' '}
                <Link href="mailto:pourieltanguy@gmail.com" className="text-cyan-700 underline">
                    email
                </Link>{' '}
                and I&apos;ll respond as fast as I can.
            </p>
        </section>
    );
}
