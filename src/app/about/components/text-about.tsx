interface FontTextProps {
  className: string;
}

export const TextAbout = ({ className }: FontTextProps) => {
  return (
    <div className="p-6 dark:shadow-black/40 shadow-zinc-400 dark:shadow-xl shadow-md bg-zinc-200 dark:bg-zinc-900">
      <h1 className={`${className} text-3xl mb-4`}>O que eu faço</h1>
      <p>
        Atualmente, estudo Análise e Desenvolvimento de Sistemas, mas possuo
        conhecimento em programação há algum tempo. Durante essa jornada, tive a
        oportunidade de fazer grandes amizades, as quais me auxiliam com
        mentoria, ampliando meu entendimento sobre programação e me ajudando a
        escolher a linguagem que melhor se destacará no mercado. Além disso,
        tenho grande interesse em atividades físicas. Acredito que o exercício
        físico não só contribui para o controle do corpo e da saúde psicológica,
        mas também para manter uma postura adequada. Sabemos que a programação
        nos mantém sentados por longos períodos, e é importante combater o
        sedentarismo de forma ativa.
      </p>
    </div>
  );
};
