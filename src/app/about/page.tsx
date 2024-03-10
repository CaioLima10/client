import Image from "next/image";
import Header from "../components/header";
import ImgPerfil from "../../assets/caio-perfil.jpeg";
import Footer from "../components/footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { TextAbout } from "./components/text-about";
import { TextWhatIDo } from "./components/text-what-i-do";

import { Concert_One } from "next/font/google";

const concert = Concert_One({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  return (
    <>
      <Header />
      <section className="w-full flex flex-col items-center justify-center mx-auto bg-zinc-50 dark:bg-zinc-950">
        <div className="container px-20 py-4 flex flex-col items-center">
          <div className="w-full flex  justify-between p-4 bg-zinc-200 dark:bg-zinc-900">
            <Image
              src={ImgPerfil}
              alt="FOTO-DE-PERFIL"
              width={200}
              height={200}
            />
            <div className="flex space-x-3">
              <Link
                href={"https://www.linkedin.com/in/caiolimadev10/"}
                target="_blank"
              >
                <FaLinkedin size={32} />
              </Link>
              <Link href={"https://github.com/CaioLima10"} target="_blank">
                <FaGithub size={32} />
              </Link>
            </div>
          </div>
        </div>
        <div className="container px-20 py-16 flex space-x-6 items-center justify-center">
          <TextWhatIDo className={concert.className} />
          <TextAbout className={concert.className} />
        </div>
      </section>
      <Footer />
    </>
  );
}
