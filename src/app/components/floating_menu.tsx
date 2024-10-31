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
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-full shadow-lg flex items-center p-2 space-x-4 z-20">
      {/* GitHub Icon */}
      <Button variant="ghost" size="icon">
        <a href="https://github.com/tanguypouriel" target="_blank" rel="noopener noreferrer">
          {/* <Github className="w-5 h-5 text-black dark:text-white" /> */}

            <Image
              className="dark:invert"
              src="https://github.githubassets.com/favicons/favicon.png"
              alt="github logomark"
              width={24}
              height={24}
            />
        </a>
      </Button>

      <Button variant="ghost" size="icon">
        <a href="https://www.linkedin.com/in/tanguy-pouriel-020300159/" target="_blank" rel="noopener noreferrer">
          <Image src="/linkedIn.png" alt="LinkedIn" width={24} height={24} />
        </a>
      </Button>


    </div>
  );
};

export default FloatingMenu;
