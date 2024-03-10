import Image from "next/image";
import ImgVideoLessons from "../../../assets/img-video-aula.png";
import { ReactNode } from "react";

interface IVideeoProps {
  children: ReactNode;
}

export default function VideoLessons({ children }: IVideeoProps) {
  return (
    <article className=" w-full flex items-center justify-center">
      <div className="flex items-center justify-center w-full sm:w-3/4 h-screen-header bg-zinc-700">
        <Image
          width={700}
          height={480}
          src={ImgVideoLessons}
          alt="IMG-VIDEO-AULA"
        />
      </div>
      {children}
    </article>
  );
}
