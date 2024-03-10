import { BiSkipNext } from "react-icons/bi";
import {
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaNode,
  FaPhone,
  FaReact,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="w-full flex-col items-center bg-zinc-200 pb-20 pt-14 dark:bg-zinc-950">
      <div className="flex items-center justify-center py-6 gap-6 bg-zinc-100 dark:bg-zinc-900">
        <IoLogoJavascript size={28} />
        <FaCss3 size={28} />
        <FaHtml5 size={28} />
        <FaReact size={28} />
        <FaNode size={28} />
        <FaFigma size={28} />
        <BiSkipNext size={28} />
      </div>
      <div className="container px-20 pt-5 gap-16  flex  items-center justify-between mx-auto ">
        <div className="flex flex-col w-96 ">
          <span className="font-bold my-2">Rede Sociais</span>
          <span className="flex gap-2 items-center font-semibold">
            <FaGithub size={20} />
            Caiolima10
          </span>
          <span className="flex gap-2 items-center">
            <FaLinkedin size={20} />
            Caiolimadev10
          </span>
        </div>

        <div className="flex flex-col">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint expedita
          possimus hic accusantium sequi a fugit, deserunt inventore quisquam.
          Non quae nihil inventore ea, quod labore earum iusto eligendi
          asperiores.
        </div>

        <div className="flex flex-col ">
          <span className="font-bold my-2">Contato</span>
          <span className="flex gap-2 items-center font-semibold">
            <FaPhone />
            +55 (11) 98935-6304
          </span>
          <span className="flex gap-2 items-center">
            <FaMessage />
            Caiohenrys50@gmail.com
          </span>
        </div>
      </div>
      <div>
        <small className="w-full flex items-center justify-center mt-10 text-sm">
          © Caio Cursos
        </small>
      </div>
    </footer>
  );
}
