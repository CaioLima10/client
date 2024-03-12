"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Moon from "../../../assets/theme-moon.png";
import Sun from "../../../assets/sol 1.svg";
import Image from "next/image";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
        style={{
          backgroundColor: theme === "light" ? "" : "",
        }}
      >
        <div
          className="w-10 h-full flex items-center justify-center rounded-full absolute cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          style={{ border: theme === "light" ? "" : "#cccaca" }}
        >
          {theme === "light" && (
            <Image src={Sun} alt="sol" width={60} height={60} />
          )}
        </div>
        <div
          className="w-10 h-full flex items-center justify-center rounded-full absolute cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" && (
            <Image src={Moon} alt="lua" width={60} height={60} />
          )}
        </div>
      </div>
    </div>
  );
}
