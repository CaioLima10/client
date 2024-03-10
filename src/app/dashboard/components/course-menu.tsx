import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import ListsMenu from "./lists-menu";

interface ICourseMenuProps {
  title: string;
  time: string;
}

export default function CourseMenu({ title, time }: ICourseMenuProps) {
  const [showNav, setShowNav] = useState(false);
  const [openShowInfo, setOpenShowInfo] = useState(false);

  return (
    <nav
      className={`${showNav ? "w-96" : "w-0"} hidden xl:flex xl:flex-col`}
      onMouseLeave={() => setOpenShowInfo(false)}
    >
      <button
        onClick={() => setShowNav(!showNav)}
        className="absolute top-16 bg-emerald-400 ring-1"
      >
        {showNav ? (
          <span>
            <IoCloseCircleOutline size={28} />
          </span>
        ) : (
          <div className="flex hover:ring-2 hover:ring-emerald-950">
            <div
              className="w-8 h-12 flex gap-8 items-center justify-center"
              onMouseMove={() => setOpenShowInfo(true)}
            >
              <span className="flex items-center justify-center mx-auto">
                <IoIosArrowForward size={28} />
                <p className="h-full w-2 bg-zinc-400"></p>
              </span>
            </div>
            {openShowInfo && (
              <p className="bg-emerald-400 h-full w-28 m-auto flex items-center justify-center">
                AULA 00
              </p>
            )}
          </div>
        )}
      </button>
      {showNav && (
        <div
          className={`flex flex-col items-end justify-end h-full
                    bg-gray-800/80 dark:bg-gray-900/80 transition-all duration-300 ease-in-out`}
        >
          <div className="flex items-start justify-center px-5 pt-5">
            <h1 className="font-bold text-1xl">{title}</h1>
          </div>
          <div className="px-5">
            <small className="text-gray-300">{time}</small>
          </div>
          <div className="overflow-y-auto flex-grow">
            <>
              <ListsMenu progress={25} />
              <ListsMenu progress={75} />
              <ListsMenu progress={50} />
              <ListsMenu progress={100} />
            </>
          </div>
        </div>
      )}
    </nav>
  );
}
