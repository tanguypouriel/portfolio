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
import CardGridItem from './card_grid_item';

export interface CardData {
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
      'Flutter', 'Firebase', 'Typescript', 'E2E testing', 'CI/CD', 'Python', 'Bash', 'Docker',
    ],
    imageUrl: '/marveen.jpg',
    buttonText: 'website',
    buttonUrl: 'https://www.classifid.fr/',
    buttonIconUrl: "/marveen_favicon.png",
  },
  {
    title: 'Askinator',
    description: 'A reverse Akinator game powered by IA',
    tags: [
      'Flutter', 'Web app', 'Javascript', 'Appwrite'
    ],
    imageUrl: '/askinator.jpg',
    buttonText: 'Play the game',
    buttonUrl: 'https://askinator-c6fe5.web.app/',
    buttonIconUrl: "/askinator-favicon.png",
  },
  {
    title: 'Golfbook',
    description: 'A fullstack side-project that allows golfers to share their scores in real-time',
    tags: [
      'Android', 'Kotlin', 'Ktor', 'PostgreSQL', 'Jetpack Compose'
    ],
    imageUrl: '/golfbook.jpg',
    buttonText: 'Github repo',
    buttonUrl: 'https://github.com/tanguypouriel/golfbook',
    buttonIconUrl: "https://github.githubassets.com/favicons/favicon.png",
  },
  {
    title: 'Nexcoin',
    description: 'A lean Fintech mobile app UI built with Flutter',
    tags: [
      'Flutter', 'Design reproduction'
    ],
    imageUrl: '/nexcoin.jpg',
    buttonText: 'Github repo',
    buttonUrl: 'https://github.com/tanguypouriel/nexcoin',
    buttonIconUrl: "https://github.githubassets.com/favicons/favicon.png",
  },
];

const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 lg:w-3/5 ">
      {cards.map((card, index) => <CardGridItem card={card} index={index}/>)}
    </div>
  );
};

export default CardGrid;
