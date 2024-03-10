interface IProgressLists {
  progress: number;
}

export default function ListsMenu({ progress }: IProgressLists) {
  return (
    <div>
      <div className="w-96 h-[110px] bg-zinc-300/30 ring-1 ring-zinc-300 dark:bg-zinc-600 flex items-start justify-center gap-1 flex-col px-5">
        <div className="flex items-center justify-between gap-5 px-5">
          <h1 className="text-xl">Introduão ao aprendizado</h1>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="list-checkbox"
              className="w-5 h-5 bg-zinc-50 rounded-full ring-1 ring-zinc-800 dark:ring-zinc-100
                        appearance-none border-none outline-none cursor-pointer checked:bg-teal-400"
            />
          </div>
        </div>
        <small className="px-5 text-zinc-600">Tempo-total: 30min</small>
        <div className="w-full h-2 rounded-lg ring-2 ring-zinc-900">
          <div
            className={`bg-teal-400 h-2 rounded-lg relative`}
            style={{ width: `${progress}%` }}
          >
            <div
              className="flex items-center w-4 h-4 ring-1 ring-zinc-900 bg-zinc-600 dark:bg-zinc-300
                            right-0 bottom-0.5 -top-1 rounded-full absolute"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
