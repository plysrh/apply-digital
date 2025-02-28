"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Game from "@/components/cart/Game";
import Summary from "@/components/cart/Summary";
import CartSkeleton from "@/components/skeletons/Cart";
import SummarySkeleton from "@/components/skeletons/Summary";
import TotalItemsSkeleton from "@/components/skeletons/TotalItems";
import { getCart, updateCart } from "@/services/cart";
import { type Game as GameType } from "@/utils/endpoint";

export default function CartPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [cart, setCart] = useState<GameType[]>([]);
  const handleBackToCatalog = useCallback(() => {
    router.back();
  }, []);
  const handleRemoveFromCart = (id: string) => () => {
    const updatedCart = cart.filter(item => item.id !== id);

    updateCart(updatedCart);
    setCart(updatedCart);
  };

  useEffect(() => {
    const cart = getCart();

    setCart(cart);
    setIsLoading(false);
  }, [cart.length]);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <div className="container w-full px-4 py-12">
        <p className="mb-12">
          <span className="cursor-pointer inline-flex items-center text-neutral-800 hover:text-neutral-500" onClick={handleBackToCatalog}>
            <ArrowLeftIcon className="size-5 mr-3" />
            <span className="text-base">Back to Catalog</span>
          </span>
        </p>
        <h1 className="font-bold mb-3 text-4xl text-neutral-800">Your Cart</h1>
        <div className="mb-12 text-2xl text-neutral-800">
          {!isLoading && `${cart.length} item(s)`}
          {isLoading && <TotalItemsSkeleton />}
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="inline-flex flex-col w-full mr-20">
            {isLoading && <CartSkeleton />}
            {!isLoading && cart.map((item) => (
              <Game key={item.id} game={item} onRemoveFromCart={handleRemoveFromCart(item.id)} />
            ))}
          </div>
          <div className="inline-flex w-full lg:w-2/4 flex-col">
            {isLoading && <SummarySkeleton />}
            {!isLoading && <Summary cart={cart} />}
          </div>
        </div>
      </div>
    </main>
  )
}
