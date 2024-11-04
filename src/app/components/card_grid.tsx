
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
      'Flutter', 'Material 3', 'System Architecture', 'Firebase', 'Typescript', 'Express', 'NodeJS', 'TDD', 'E2E testing', 'CI/CD', 'Python', 'Bash', 'Docker', 'Sentry'
    ],
    imageUrl: '/projects/marveen.jpg',
    buttonText: 'Website',
    buttonUrl: 'https://www.classifid.fr/',
    buttonIconUrl: "/projects/marveen_favicon.png",
  },
  {
    title: 'Askinator',
    description: 'A reverse Akinator game powered by IA and build with Flutter',
    tags: [
      'Flutter', 'Web app', 'Javascript', 'NodeJS', 'Appwrite', 'Lottie', 'Rive', 'HuggingFace'
    ],
    imageUrl: '/projects/askinator.jpg',
    buttonText: 'Play the game',
    buttonUrl: 'https://askinator-c6fe5.web.app/',
    buttonIconUrl: "/projects/askinator-favicon.png",
  },
  {
    title: 'Golfbook',
    description: 'A fullstack side-project that allows golfers to share their scores in real-time',
    tags: [
      'Android', 'Kotlin', 'Ktor', 'PostgreSQL', 'Jetpack Compose'
    ],
    imageUrl: '/projects/golfbook.jpg',
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
    imageUrl: '/projects/nexcoin.jpg',
    buttonText: 'Github repo',
    buttonUrl: 'https://github.com/tanguypouriel/nexcoin',
    buttonIconUrl: "https://github.githubassets.com/favicons/favicon.png",
  },
];

const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 pt-8 lg:w-3/5 ">
      {cards.map((card, index) => <CardGridItem key={index} card={card} />)}
    </div>
  );
};

export default CardGrid;
