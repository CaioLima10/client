interface FontTextProps {
  className: string;
}

export const TextWhatIDo = ({ className }: FontTextProps) => {
  return (
    <div className="p-6 dark:shadow-black/40 shadow-zinc-400 dark:shadow-xl shadow-md bg-zinc-100 dark:bg-zinc-950">
      <h1 className={`${className} text-3xl mb-4`}>Sobre mim</h1>
      <p>
        Olá, meu nome é Caio Lima e sou um entusiasta da tecnologia. Tive a
        oportunidade de mergulhar no mundo da programação e aprender seus
        fundamentos. Atualmente, dedico-me diariamente aos estudos não apenas
        para me destacar no mercado de trabalho, mas também para aprimorar-me
        pessoalmente, pois reconheço a importância da lógica em nosso cotidiano.
        No momento, meu foco principal de estudo é o front-end, embora tenha
        conhecimentos básicos em backend. No front-end, sinto-me realizado ao
        estilizar interfaces e ver os componentes ganharem vida enquanto
        programo. Tenho especial apreço pelo framework Next.js, devido à sua
        flexibilidade que permite a utilização do React, ao mesmo tempo que
        facilita a criação de páginas dinâmicas de forma intuitiva.
      </p>
    </div>
  );
};
