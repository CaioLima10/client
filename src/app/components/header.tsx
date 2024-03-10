import Link from "next/link";
import { FaUserAstronaut } from "react-icons/fa";
import { ThemeSwitcher } from "../dashboard/components/theme-switcher";

export default function Header() {
  return (
    <header
      className="text-font w-full flex flex-col md:flex-row items-center justify-center 
                md:justify-between h-44 sm:h-40 md:h-[92px] px-8 
              bg-zinc-100 dark:bg-zinc-950 dark:ring-1 dark:ring-zinc-800 shadow-md relative z-10"
    >
      <div className=" flex item-center gap-1 w-full">
        <p className={`font-bold text-2xl`}>
          REACT{" "}
          <span className="text-cyan-600 dark:text-cyan-500 to-blue-500 tracking-widest">
            NOW
          </span>
        </p>
      </div>
      <div className="flex items-center justify-end w-[50%] gap-2 md:gap-3 mr-3.5 mb-4 md:mb-0 ">
        <Link
          className="flex items-center justify-center rounded-xl text-lg w-32 h-12 
                hover:text-cyan-600 hover:dark:text-cyan-500 duration-500 hover:bg-zinc-400/20 text-zinc-900
                dark:text-zinc-400 tracking-widest"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="flex items-center justify-center rounded-xl text-lg w-32 h-12  hover:bg-zinc-400/20 
                    hover:text-cyan-600 hover:dark:text-cyan-500 duration-500 text-zinc-900 dark:text-zinc-400 
                    tracking-widest"
          href={"/blog"}
        >
          Conteudo
        </Link>
        <Link
          className="flex items-center justify-center rounded-xl text-lg w-32 h-12  hover:bg-zinc-400/20 
                  hover:text-cyan-600 hover:dark:text-cyan-500 duration-500 text-zinc-900 dark:text-zinc-400 
                  tracking-widest"
          href={"/about"}
        >
          Sobre mim
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-4">
          <div className="w-[1px] h-12 bg-zinc-600" />
          <Link
            href={"/login"}
            className="flex items-center justify-center rounded-xl w-40 h-12 gap-3 text-base font-semibold 
            hover:bg-zinc-400/20 duration-500 transition-all
            py-2"
          >
            <FaUserAstronaut
              size={24}
              className="text-cyan-600 dark:text-cyan-500"
            />
            FAZER LOGIN
          </Link>

          <Link
            href={"/register"}
            className="flex items-center justify-center text-base font-semibold ring-2 ring-zinc-800 rounded-xl dark:ring-cyan-500
            hover:bg-zinc-400/20 duration-500 
            w-60 h-12 mr-4"
          >
            <button>CRIE SUA CONTA</button>
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
