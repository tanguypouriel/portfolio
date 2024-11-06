import Link from 'next/link';

export default function ContactSection() {
    return (
        <section className="flex flex-col items-center gap-4 p-6 w-full">
            <h1 className="text-4xl font-bold mx-16 pb-6 text-teal-100">Get in touch</h1>

            <p className="text-center text-xl text-white-600">
                Want to chat? Just send me a message<br/> on{' '}
                <Link href="https://www.linkedin.com/in/tanguy-pouriel-020300159/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">
                    LinkedIn
                </Link>{' '}
                or via{' '}
                <Link href="mailto:pourieltanguy@gmail.com" className="text-cyan-400 underline">
                    email
                </Link>{' '}
                and I&apos;ll respond as fast as I can.
            </p>
        </section>
    );
}
