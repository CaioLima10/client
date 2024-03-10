import { FaReact, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { ToolCard } from "./tool-card";

export default function Languages() {
  return (
    <section className="w-full flex items-center justify-center mx-auto bg-zinc-200 dark:bg-zinc-950">
      <div className="container px-20 pb-28 pt-16 flex flex-col items-center justify-center mx-auto">
        <h1 className="text-6xl font-bold tracking-tighter">
          com as melhores ferramentas
        </h1>
        <h2 className="text-4xl font-medium mb-24 tracking-tighter">
          Ensinamos o que a de melhor no mercado, e o que as Empresas utilizam
        </h2>

        <div className="w-full grid grid-cols-4 gap-8">
          <ToolCard icon={FaReact} title="ReactJs" />
          <ToolCard icon={FaNode} title="NodeJs" />
          <ToolCard icon={SiTailwindcss} title="TailwindCSS" />
          <ToolCard icon={SiNextdotjs} title="NextJs" />
        </div>
      </div>
    </section>
  );
}
