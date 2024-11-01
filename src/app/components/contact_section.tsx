import Link from 'next/link';

export default function ContactSection() {
    return (
        <section className="flex flex-col items-center gap-4 p-6">
            <button className="bg-black text-white py-1 px-4 rounded-md text-sm">
                Contact
            </button>
            <h2 className="text-4xl font-bold">Get in Touch</h2>
            <p className="text-center text-xl text-gray-600">
                Want to chat? Just send me a message<br/> on{' '}
                <Link href="https://www.linkedin.com/in/tanguy-pouriel-020300159/" target="_blank" rel="noopener noreferrer" className="text-cyan-700 underline">
                    Linked
                </Link>{' '}
                or via{' '}
                <Link href="mailto:pourieltanguy@gmail.com" className="text-cyan-700 underline">
                    email
                </Link>{' '}
                and I'll respond as fast as I can.
            </p>
        </section>
    );
}
