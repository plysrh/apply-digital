"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Game from "@/components/catalog/Game";
import { getCart } from "@/services/cart";
import { type Game as GameType } from "@/utils/endpoint";
import Pagination from "./Pagination";

interface GamesProps {
  availableFilters: string[];
  games: GameType[]
  totalPages: number;
  currentPage: number;
}

export default function Games({ availableFilters, games, totalPages, currentPage }: GamesProps) {
  const [cart, setCart] = useState<GameType[]>([]);
  const [filter, setFilter] = useState('All');
  const router = useRouter();
  const handleCartChange = useCallback((updatedCart: GameType[]) => {
    setCart(updatedCart);
  }, [cart])
  const handleFilterChange = (index: number) => () => {
    const searchParams = new URLSearchParams(window.location.search);

    if (searchParams.has("genre")) {
      searchParams.delete("genre");
    }

    if (availableFilters[index]) {
      searchParams.delete("page");
      searchParams.set("genre", availableFilters[index]);
    }

    setFilter(availableFilters[index] ? availableFilters[index] : 'All');

    // TODO: Find a better way to improving the route change performance.
    router.push(`?${searchParams.toString()}`, { scroll: true });
  };

  useEffect(() => {
    setCart(getCart());

    const searchParams = new URLSearchParams(window.location.search);

    setFilter(searchParams.get("genre") || 'All');
  }, []);

  return (
    <>
      <div className="flex text-2xl justify-end text-neutral-500 mb-10">
        <div className="font-bold text-lg">Genre</div>
        <div className="text-lg mx-6">|</div>
        <Menu>
          <MenuButton className="inline-flex items-center text-lg focus:outline-none data-[active]:text-neutral-400 data-[hover]:text-meutral-400">
            {filter}
            <ChevronDownIcon className="size-5 ml-2" />
          </MenuButton>
          <MenuItems
            transition
            anchor="bottom end"
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            {availableFilters.map((filter: string, index) => (
              <MenuItem key={filter}>
                <span className="cursor-pointer block px-4 py-2 text-sm text-neutral-700 data-[focus]:bg-neutral-100 data-[focus]:text-neutral-900 data-[focus]:outline-none" onClick={handleFilterChange(index)}>
                  {filter}
                </span>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-12">
        {games.map((game: GameType) => <Game key={game.id} game={game} cart={cart} onCartChange={handleCartChange} />)}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </>
  );
}
