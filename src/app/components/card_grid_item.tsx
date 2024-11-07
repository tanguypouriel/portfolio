'use client'

import { useState } from 'react';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { CardData } from './card_grid';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface AssetsDisplayerProps {
    assetsUrl: string[];
}

export function AssetsDisplayer({ assetsUrl }: AssetsDisplayerProps) {
    return (
        <div className='flex justify-center w-4/5 h-full p-8'>
            <Carousel className='flex justify-center size-full p-4 md:p-8 bg-gray-900 rounded-2xl' opts={{ align: "center", loop: true }}>
                <CarouselContent className='size-full'>
                    {assetsUrl.map((url, index) => {
                        let child = <p>Missing content</p>;

                        if (url.includes("jpg")) {
                            child =
                                <div className='p-8'>
                                    <Image
                                        key={index}
                                        src={url}
                                        alt="alt"
                                        className="flex rounded-xl items-center justify-center"
                                        width={1600}
                                        height={1200}
                                        quality={100}
                                    />
                                </div>;
                        }

                        else if (url.includes('youtube')) {
                            child = <iframe
                                src={url}
                                className="flex size-full items-center justify-center p-4 md:p-16"
                                allowFullScreen
                            />;
                        }

                        return <CarouselItem key={index} className='flex items-center h-full'>{child}</CarouselItem>
                    }
                    )}
                </CarouselContent>
                <CarouselPrevious className='bg-primary' />
                <CarouselNext className='bg-primary' />
            </Carousel>

        </div>
    );
}

function CardGridItem({ card }: { card: CardData }) {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <Card className='flex flex-col items-start bg-transparent overflow-hidden  backdrop-blur-xl rounded-3xl text-white border-2 border-teal-100 transform transition-transform duration-200 hover:scale-[1.02]'>
                <CardHeader className="p-0">
                    <Image
                        src={card.imageUrl}
                        alt={card.title}
                        className="w-full cursor-pointer"
                        objectFit='contain'
                        width={1600}
                        height={1200}
                        onClick={openModal}
                        quality={100}
                    />
                </CardHeader>
                <CardContent className="pt-4">
                    <CardTitle>{card.title}</CardTitle>
                    <p className="text-teal-50 dark:text-gray-300 mt-4">{card.description}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {card.tags.map((tag, tagIndex) => (
                            <span
                                key={tagIndex}
                                className="text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                </CardContent>
                <CardFooter className='flex-grow'>
                    <Button asChild variant="outline" className='mt-4 self-end bg-transparent'>
                        <a href={card.buttonUrl} target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center justify-center gap-2">
                                <Image src={card.buttonIconUrl} alt="" width={16} height={16} />
                                <span className="text-sm">{card.buttonText}</span>
                            </div>
                        </a>
                    </Button>
                </CardFooter>
            </Card>

            {/* Modal for Large Image View */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                    <div className="absolute inset-0" onClick={closeModal}></div>
                    <AssetsDisplayer assetsUrl={card.assetsUrl} />
                </div>
            )}
        </>
    );
}

export default CardGridItem;
