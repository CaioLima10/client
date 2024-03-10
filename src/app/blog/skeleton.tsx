"use client";

import React, { ReactNode, useEffect, useState } from "react";

export default function Skeleton({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="animate-pulse bg-zinc-500/30  w-full flex flex-col items-center justify-center">
              {children}
            </div>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
