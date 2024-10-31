// components/CardGrid.tsx

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CardData {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  buttonText: string;
  buttonUrl: string;
  buttonIconUrl: string;
}

const cards: CardData[] = [
  {
    title: 'Marveen',
    description: 'A secure and eco-responsible solution for your file management and sharing usescases',
    tags: [
      'Flutter', 'Firebase', 'Typescript', 'E2E testing', 'CI/CD', 'Python', 'Bash',
    ],
    imageUrl: '/marveen-banner.png',
    buttonText: 'Website',
    buttonUrl: 'https://www.classifid.fr/',
    buttonIconUrl: "/marveen_favicon.png",
  },
];

const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {cards.map((card, index) => (
        <Card key={index}>
          <CardHeader className="p-0">
            <Image src={card.imageUrl} alt={card.title} className="w-full rounded-t-lg"  width={300} height={400}/>
          </CardHeader>
          <CardContent className='pt-4'>
            <CardTitle>{card.title}</CardTitle>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{card.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {card.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="mt-4">
              <Button asChild variant="outline">
                <a href={card.buttonUrl} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center justify-center gap-2">
                    <Image src={card.buttonIconUrl} alt='' width={16} height={16} />
                    <span className="text-sm">{card.buttonText}</span>
                  </div>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardGrid;
