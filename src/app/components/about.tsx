import Image from "next/image";
import PC from "../../assets/sol1.png";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

export default function About() {
  return (
    <section className="w-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900">
      <div className="container px-20 py-16  flex flex-col items-center justify-between mx-auto">
        <h1
          className="flex items-center justify-center mx-auto px-2 py-4 text-4xl font-semibold 
                        tracking-wide bg-zinc-300 dark:bg-zinc-950 w-full"
        >
          O mundo não pode parar de girar, e você não pode ficar atrás
        </h1>
        <div className="flex">
          <div>
            <h2 className="text-3xl font-medium mt-28 tracking-tighter">
              Venha! conhecer um pouco mais sobre nosso curso!
            </h2>
            <Link
              href={"/register"}
              className="flex items-center justify-center gap-6 w-96 h-14 text-xl font-semibold
                      bg-cyan-500 dark:bg-black dark:text-zinc-100 ring-2 ring-cyan-500 
                      dark:ring-cyan-500  mt-14 rounded-tr-xl rounded-bl-xl shadow-2xl z-50"
            >
              COMEÇAR AGORA
              <span>
                <MdArrowForwardIos size={20} />
              </span>
            </Link>
          </div>
          <div>
            <Image src={PC} alt="ASTRONAUTA-SENTADO" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
}
