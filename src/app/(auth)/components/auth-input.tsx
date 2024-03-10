interface IAuthInputProps {
  setNewState: (state: string) => void;
  label: string;
  placeholder: string;
  type: string;
}

export default function AuthInput({
  label,
  placeholder,
  setNewState,
  type,
}: IAuthInputProps) {
  return (
    <div className="flex flex-col w-full">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="dark:bg-zinc-800 rounded-md p-2 border-2 mb-3 border-emerald-900
                  dark:border-zinc-500 outline-none dark:focus-visible:border-zinc-400
                  focus-visible:border-emerald-500"
        onChange={(event) => setNewState(event.target.value)}
      />
    </div>
  );
}
