import { Game as GameType } from "@/utils/endpoint";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface GameProps {
  game: GameType;
  onRemoveFromCart: () => void;
}

export default function Game({ game, onRemoveFromCart }: GameProps) {
  return (
    <div className="relative flex flex-col lg:flex-row px-4 py-5 border-b border-neutral-300 last-of-type:border-none">
      <div className="inline-flex">
        <div className="w-full lg:w-64 h-36 lg:h-40 bg-neutral-200 mr-9 bg-cover bg-center" style={{ backgroundImage: `url(${game.image})` }} />
        <XMarkIcon className="absolute top-5 right-4 size-5 text-neutral-500 cursor-pointer" onClick={onRemoveFromCart} />
      </div>
      <div className="py-4 lg:py-2 lg:pl-6 lg:pr-16 flex flex-col w-full">
        <div className="m-0" />
        <p className="mb-3 font-bold text-neutral-500 text-base">{game.genre}</p>
        <p className="text-xl mb-2 text-neutral-800">{game.name}</p>
        {game.description && <p className="text-base text-neutral-500">{game.description}</p>}
      </div>
      <div className="m-0 mt-auto">
        <p className="text-xl text-neutral-800 text-right">${game.price}</p>
      </div>
    </div>
  );
}
