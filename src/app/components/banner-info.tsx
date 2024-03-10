import Image from "next/image";
import BannerAstronaut from "../../assets/Group 68.png";

export default function BannerInfo() {
  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <Image
        className="max-h-60 object-cover opacity-100 transition-all duration-300"
        src={BannerAstronaut}
        alt="BANNER-ASTRONAUTA"
        priority
        quality={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
      />
      <p className="absolute text-5xl text-zinc-100 font-bold left-5 top-12 w-3/4 tracking-tighter">
        Atendimento 24hrs pra vc ter os melhor suportes possiveis na sua jornada
        como programador.
      </p>
    </div>
  );
}
