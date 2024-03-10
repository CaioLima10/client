"use client";

import { ThemeSwitcher } from "./theme-switcher";
import { FaBell } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { UserDataContext } from "@/hooks/user-context-custom";
import { MouseEvent, useEffect, useState } from "react";

export default function Header() {
  const { user } = UserDataContext();
  const [showMenuUser, setShowMenuUser] = useState(false);

  const navigate = useRouter();

  useEffect(() => {
    let user = localStorage.getItem("site-courses:user");
    if (user) {
      JSON.parse(user);
    }
  }, [user]);

  const handleLogoutUser = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    localStorage.removeItem("site-courses:token");
    navigate.push("/login");
  };

  return (
    <header
      className="text-font w-full flex flex-col md:flex-row items-center justify-center 
              md:justify-between h-44 sm:h-40 md:h-[92px] px-8 
            bg-zinc-100 dark:bg-black dark:ring-1 dark:ring-zinc-800 shadow-md relative z-10"
    >
      <div className=" flex item-center gap-1">
        <p className={`font-bold text-2xl`}>
          REACT{" "}
          <span className="text-cyan-600 dark:text-cyan-500 to-blue-500 tracking-widest">
            NOW
          </span>
        </p>
      </div>

      <div className="w-full flex items-center justify-end gap-2">
        <div>
          <button className="bg-zinc-500/30 p-1 rounded-full">
            <FaBell />
          </button>
        </div>
        <div
          className="bg-zinc-500/30 flex items-center gap-2 p-1 px-4 rounded-3xl 
                      cursor-pointer hover:bg-zinc-600/30 hover:ring-1 hover:ring-zinc-500"
          onClick={() => setShowMenuUser(!showMenuUser)}
        >
          <Image
            width={30}
            height={30}
            src={
              user?.userImg
                ? user.userImg
                : "https://img.freepik.com/free-icon/user_318-159711.jpg"
            }
            alt="IMAGE-DO-PERFIL"
          />
          <div className=" flex flex-col relative">
            <span className="font-semibold text-sm">{user?.username}</span>
            <span className="text-xs">Area do Aluno(a)</span>
          </div>
          {showMenuUser && (
            <div
              onMouseLeave={() => setShowMenuUser(false)}
              className="absolute flex flex-col gap-1 top-16 bg-zinc-100 dark:bg-zinc-800 p-1 px-[22px]
                        border-[0.5px] border-zinc-400 dark:border-zinc-500 "
            >
              <button className="flex items-center justify-start p-2">
                Editar Perfil
              </button>
              <button
                className="flex items-center justify-start p-2"
                onClick={(event) => handleLogoutUser(event)}
              >
                Sair
              </button>
            </div>
          )}
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
