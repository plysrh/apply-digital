import { useCallback, useEffect, useState } from "react";
import { checkGameIfExistsInCart, updateCart } from "@/services/cart";
import { type Game as GameType } from "@/utils/endpoint";
import { classNames } from "@/utils/styles";

interface GameProps {
  game: GameType;
  cart: GameType[];
  onCartChange: (updatedCart: GameType[]) => void;
}

export default function Game({ game, cart, onCartChange }: GameProps) {
  const [gameExistsInCart, setGameExistsInCart] = useState(false);
  const handleAddToCart = useCallback(() => {
    const updatedCart = [game, ...cart];

    updateCart(updatedCart);
    onCartChange(updatedCart);
  }, [cart])
  const handleRemoveFromCart = useCallback(() => {
    const updatedCart = cart.filter((item: GameType) => item.id !== game.id);

    updateCart(updatedCart);
    onCartChange(updatedCart);
  }, [cart, game.id]);

  useEffect(() => {
    setGameExistsInCart(checkGameIfExistsInCart(game.id));
  }, [cart])

  return (
    <div className={classNames(
      gameExistsInCart ? 'outline outline-4 outline-sky-500 border-sky-100' : 'border-neutral-300',
      'flex flex-col rounded-xl border p-6',
    )}>
      <div className="relative w-full h-52 mb-5 bg-neutral-200 rounded-tl-xl rounded-tr-xl bg-cover bg-center" style={{ backgroundImage: `url(${game.image})` }}>
        {game.isNew && <span className="absolute px-3 py-2 rounded-md bg-neutral-100 text-neutral-800 top-3 left-3 text-base">New</span>}
      </div>
      <div className="mb-3 font-bold text-neutral-500 text-base">{game.genre}</div>
      <div className="flex mb-5 text-neutral-800">
        <div className="font-bold text-lg">{game.name}</div>
        <div className="ml-auto font-bold text-lg">{game.price}</div>
      </div>
      {gameExistsInCart && <button className="mt-auto w-full text-neutral-800 text-center font-bold text-base p-5 border rounded-lg border-neutral-500 hover:bg-neutral-100" type="button" onClick={handleRemoveFromCart}>REMOVE FROM CART</button>}
      {!gameExistsInCart && <button className="mt-auto w-full text-neutral-800 text-center font-bold text-base p-5 border rounded-lg border-neutral-500 hover:bg-neutral-100" type="button" onClick={handleAddToCart}>ADD TO CART</button>}
    </div>
  );
}
