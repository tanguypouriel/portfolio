'use client'

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const FloatingMenu = () => {
  const [mounted, setMounted] = useState(false);

  // To prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg rounded-full shadow-lg flex items-center p-2 space-x-4 z-20 transition-all duration-200 hover:p-4 hover:px-8"
    // className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md dark:bg-gray-800/80 backdrop-blur-lg rounded-full shadow-lg flex items-center p-2 space-x-4 z-20"
    >
      {/* GitHub Icon */}
      <Button
        variant="ghost"
        size="icon"
        className=" hover:bg-transparent"
      >
        <a href="https://github.com/tanguypouriel" target="_blank" rel="noopener noreferrer">
          {/* <Github className="w-5 h-5 text-black dark:text-white" /> */}

          <Image
            className="invert transform transition-transform duration-200 hover:scale-[1.5]"
            src="/github.png"
            alt="github logomark"
            width={24}
            height={24}
          />
        </a>
      </Button>

      <Button variant="ghost" size="icon" className='hover:bg-transparent'>
        <a href="https://www.linkedin.com/in/tanguy-pouriel-020300159/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/linkedIn.png"
            alt="LinkedIn"
            width={24}
            height={24}
            className="invert transform transition-transform duration-200 hover:scale-[1.5]"
          />
        </a>
      </Button>

      <Button variant="ghost" size="icon" className='hover:bg-transparent'>
        <a href="https://www.malt.fr/profile/tanguypouriel" target="_blank" rel="noopener noreferrer">
          <Image
            src="/malt.png"
            alt="malt"
            width={24}
            height={24}
            className="invert transform transition-transform duration-200 hover:scale-[1.5]"
          />
        </a>
      </Button>
    </div>
  );
};

export default FloatingMenu;
