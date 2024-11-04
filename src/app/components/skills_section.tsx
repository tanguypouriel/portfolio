
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";

interface SkillData {
    title: string;
    imageUrl: string;
}

// use 256 width source image
const skillsData: { [index: string]: SkillData[] } = {
    "Front-end": [
        {
            title: "Flutter",
            imageUrl: "/skills/flutter.png"
        },
        {
            title: "Android",
            imageUrl: "/skills/android.png"
        },
        {
            title: "Web",
            imageUrl: "/skills/web.png"
        },
        {
            title: "React",
            imageUrl: "/skills/react.png"
        },
        {
            title: "Next",
            imageUrl: "/skills/next.png"
        },
    ],
    "Back-end": [
        {
            title: "Firebase",
            imageUrl: "/skills/firebase.png"
        },
        {
            title: "Express",
            imageUrl: "/skills/express.png"
        },
        {
            title: "Appwrite",
            imageUrl: "/skills/appwrite.png"
        },
        {
            title: "Flask",
            imageUrl: "/skills/flask.png"
        },
        {
            title: "Ktor",
            imageUrl: "/skills/ktor.png"
        },
        {
            title: "PostgreSQL",
            imageUrl: "/skills/postgresql.png",
        },
        {
            title: "MariaDB",
            imageUrl: "/skills/mariadb.png",
        }
    ],
    "Langages": [
        {
            title: "Dart",
            imageUrl: "/skills/dart.png"
        },
        {
            title: "Kotlin",
            imageUrl: "/skills/kotlin.png"
        },
        {
            title: "Typescript",
            imageUrl: "/skills/typescript.png"
        },
        {
            title: "C",
            imageUrl: "/skills/C.png"
        },
        {
            title: "Java",
            imageUrl: "/skills/java.png"
        },
        {
            title: "Python",
            imageUrl: "/skills/python.png"
        },
        {
            title: "Bash",
            imageUrl: "/skills/bash.png"
        },
        {
            title: "PHP",
            imageUrl: "/skills/php.png"
        }
    ],
    "Design": [
        {
            title: "Figma",
            imageUrl: "/skills/figma.png"
        },
        {
            title: "Gimp",
            imageUrl: "/skills/gimp.png"
        },
        {
            title: "Rive",
            imageUrl: "/skills/rive.png",
        },
        {
            title: "Adobe XD",
            imageUrl: "/skills/adobexd.png",
        },
    ],
    "Tooling": [
        {
            title: "Docker",
            imageUrl: "/skills/docker.png",
        },
        {
            title: "Git",
            imageUrl: "/skills/git.png",
        },
        {
            title: "Codemagic",
            imageUrl: "/skills/codemagic.png",
        },
        {
            title: "Linux",
            imageUrl: "/skills/linux.png"
        },
        {
            title: "Maestro",
            imageUrl: "/skills/maestro.png",
        },
        {
            title: "Jira",
            imageUrl: "/skills/jira.png",
        },
        {
            title: "Sentry",
            imageUrl: "/skills/sentry.png",
        },
    ]
};

interface SkillsSectionProps {
    className?: string;
}

export default function SkillsSection({ className }: SkillsSectionProps) {
    return (
        <section className={`flex flex-col items-center w-full gap-4 p-6 ${className}`}>
            <h1 className="text-4xl font-bold self-start mx-16 text-teal-100">Skills</h1>

            <p className='text-justify p-4 mx-4 text-xl self-start'>
                A versatile skill set crafted to bring ideas to life—from intuitive UI design to robust backend integration, delivering mobile experiences that make an impact.
            </p>

            <Accordion type="multiple" className="w-full p-8" >
                {
                    Object.entries(skillsData).map(([categoryTitle, categorySkills], index) => (
                        <AccordionItem key={index} value={`catgory-${index}`}>
                            <AccordionTrigger>{categoryTitle}</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 p-4 pt-8">
                                    {categorySkills.map((skill, index) => <SkillItem key={index} skillData={skill} />)}
                                </div>
                            </AccordionContent>
                        </ AccordionItem >
                    ))}
            </Accordion>
        </section>
    );
}

interface SkillItemProps {
    skillData: SkillData;
}

function SkillItem({ skillData }: SkillItemProps) {
    return (
        <div className="flex flex-col items-center">
            <Image src={skillData.imageUrl} alt={skillData.title} width={48} height={48} className="flex-1 object-contain pb-4" />
            {skillData.title}
        </div>
    );
}
