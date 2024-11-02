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

function CardGridItem({ card, index }: { card: CardData, index: number }) {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <Card key={index} className='flex flex-col items-start bg-black overflow-hidden bg-opacity-20 backdrop-blur-xl rounded-3xl text-white border-2 border-teal-100'>
                <CardHeader className="p-0">
                    <Image
                        src={card.imageUrl}
                        alt={card.title}
                        className="w-full cursor-pointer"
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
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50" onClick={closeModal}>
                    <div className="relative">
                        <button className="absolute top-2 right-4 text-white text-2xl hover:text-black" onClick={closeModal}>
                            &times;
                        </button>
                        <Image src={card.imageUrl} alt={card.title} width={960} height={720} className="rounded-lg" quality={100}/>
                    </div>
                </div>
            )}
        </>
    );
}

export default CardGridItem;
