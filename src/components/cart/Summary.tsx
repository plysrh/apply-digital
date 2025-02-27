import { Game } from "@/utils/endpoint";

interface SummaryProps {
  cart: Game[];
}

export default function Summary({ cart }: SummaryProps) {
  const total = cart.reduce((acc, game) => acc + game.price, 0).toFixed(2);

  return (
    <>
      <div className="rounded-xl border border-neutral-300 px-6 py-8 mb-8">
        <p className="text-neutral-800 text-2xl mb-3">Order Summary</p>
        <p className="text-neutral-500 text-lg mb-8">{`${cart.length} item(s)`}</p>
        <div className="pt-5 pb-6">
          {cart.map(game => (
            <div key={game.id} className="flex text-neutral-500 text-lg mb-3">
              <span className="m-0">{game.name}</span>
              <span className="ml-auto">${game.price}</span>
            </div>
          ))}
        </div>
        <div className="relative mb-6">
          <div aria-hidden="true" className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
        </div>
        <div className="flex mb-5 text-xl text-neutral-800">
          <span className="m-0">Order Total</span>
          <span className="ml-auto">${total}</span>
        </div>
      </div>
      <button className="w-full text-white bg-neutral-600 text-center font-bold text-base p-5 border rounded-lg hover:bg-neutral-500" type="button">Checkout</button>
    </>
  );
}
