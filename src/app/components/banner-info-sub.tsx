import Image from "next/image";
import BannerAstronautMask from "../../assets/mask-banner.png";
import BannerAstronaut from "../../assets/banner-info-subinscre.png";
import Link from "next/link";

export default function BannerInfoSub() {
  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <Image
        className="max-h-60 object-cover opacity-100 transition-all duration-300"
        src={BannerAstronautMask}
        alt="BANNER-ASTRONAUTA"
        priority
        quality={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
      />
      <Image
        className="max-h-60 object-cover opacity-100 transition-all duration-300 absolute"
        src={BannerAstronaut}
        alt="BANNER-ASTRONAUTA"
        priority
        quality={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
      />
      <div className="flex items-center mx-auto px-10">
        <p className="absolute text-5xl w-1/2 text-emerald-950 font-bold left-5 top-12 tracking-tighter">
          Conheca mais sobre nos e veja tecnologia por outro angulo
        </p>
        <Link
          href={"/conteudo"}
          className="flex items-center justify-center gap-6 w-96 h-14 right-10 top-5 text-2xl font-semibold  bg-zinc-100 dark:text-zinc-950 
                            mt-20 rounded-tr-xl rounded-bl-xl shadow-md ring-2 ring-zinc-950 absolute tracking-tighter"
        >
          Conheça
          <span></span>
        </Link>
      </div>
    </div>
  );
}
