interface ToolProps {
  icon: React.ElementType;
  title: string;
}

export const ToolCard = ({ icon: Icon, title }: ToolProps) => (
  <div className="flex items-center justify-center dark:bg-zinc-900 w-64 h-60 rounded-lg shadow-lg">
    <div className="relative w-72 h-72 overflow-hidden bg-gradient-to-br from-customGreen to-blue-600 dark:from-zinc-800 dark:to-zinc-800 shadow-lg rounded-lg">
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-25 bg-gray-900"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <Icon size={64} className="text-white" />
        <span className="mt-4 text-white text-2xl font-semibold">{title}</span>
        <button className="mt-6 px-8 py-4 bg-white text-blue-600 dark:text-zinc-800 rounded-full text-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          Saiba mais
        </button>
      </div>
    </div>
  </div>
);
