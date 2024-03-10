import Link from "next/link";
import Header from "./components/header";
import Image from "next/image";
import ImgSun from "../assets/Sun.png";
import ImgMoon from "../assets/Moon.png";
import { MdArrowForwardIos, MdKeyboardArrowDown } from "react-icons/md";
import About from "./components/about";
import Languages from "./components/languages";
import BannerInfo from "./components/banner-info";
import Footer from "./components/footer";
import BannerInfoSub from "./components/banner-info-sub";
import Img from "../assets/capa.jpg";
import ImgDia from "../assets/dia (2).png";
import ImgNoite from "../assets/noite.png";
import { Inter } from "next/font/google";

const font = Inter({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
});

export default function Page() {
  return (
    <div className={font.className}>
      <Header />

      <main
        className="main flex flex-col bg-gradient-to-br w-full 
                from-customGreen to-blue-500  dark:from-zinc-950 dark:to-zinc-950 relative"
      >
        <Image
          src={Img}
          alt=""
          layout="fill"
          objectFit="cover"
          className="w-full hidden dark:flex"
        />
        <div className="container px-10 py-16 flex items-center mx-auto z-10">
          <section className="w-full flex flex-col items-center">
            <div className="flex w-full items-center">
              <span className="text-6xl font-bold flex mr-4">
                Um Univers
                <Image
                  src={ImgSun}
                  alt="SOL"
                  className="flex dark:hidden w-16 right-32 duration-300 top-8"
                  style={{ animation: "spin 8s linear infinite" }}
                  width={100}
                  height={22}
                />
                <Image
                  src={ImgMoon}
                  alt="Lua"
                  className="hidden dark:flex w-14 right-[136px] top-10"
                  style={{ animation: "spin 8s linear infinite" }}
                  width={100}
                  height={22}
                />
              </span>
              <span className="dark:text-cyan-500 text-6xl font-bold">
                de Vantagens
              </span>
            </div>
            <div className=" flex items-center justify-between relative">
              <div className="flex flex-col lg:flex-row mt-6">
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl mt-6 font-normal text-zinc-950 dark:text-zinc-100/50">
                    Venha ser um AstroWinner e aprender com o que tem de melhor
                    no Mercado!
                  </h2>
                  <Link
                    href={"/register"}
                    className="flex items-center justify-center gap-6  lg:w-auto h-14 text-xl font-semibold 
                          bg-zinc-100 dark:bg-black dark:text-zinc-100 ring-2 ring-zinc-100/75
                          dark:ring-cyan-500 mt-4 lg:mt-10 rounded-tr-xl rounded-bl-xl shadow-2xl  z-50"
                  >
                    CADASTRE-SE
                    <span>
                      <MdArrowForwardIos size={20} />
                    </span>
                  </Link>
                </div>
                <div className="flex justify-center items-center w-full lg:w-1/2">
                  <Image
                    src={ImgDia}
                    alt="cdcdc"
                    className="flex dark:hidden duration-700 transition-all w-full h-full"
                  />
                  <Image
                    src={ImgNoite}
                    alt="cdcdc"
                    width={600}
                    height={480}
                    className="hidden dark:flex duration-700 transition-all"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="w-full flex items-center justify-center mt-20">
          <MdKeyboardArrowDown className="animate-bounce" size={60} />
        </div>
      </main>
      <Languages />
      <BannerInfoSub />
      <About />
      <BannerInfo />
      <Footer />
    </div>
  );
}
