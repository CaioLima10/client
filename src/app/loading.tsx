"use client";

import Image from "next/image";
import ImgAstronautSaturn from "../assets/astronauta-sentado-no-planeta (1).png";
import { useEffect, useState } from "react";
import ImgAstronautDark from "../assets/astronauta noite.png";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {isLoading && (
        <>
          <Image
            src={ImgAstronautSaturn}
            alt="ASTRONAUTA-SATURNO"
            width={140}
            height={140}
            loading="lazy"
            className="animate-bounce flex dark:hidden"
          />
          <Image
            src={ImgAstronautDark}
            alt="ASTRONAUTA-NOITE-PC"
            width={120}
            height={120}
            loading="lazy"
            className="animate-bounce hidden dark:flex"
          />
        </>
      )}
    </div>
  );
}
