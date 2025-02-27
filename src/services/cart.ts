import { CART_KEY } from "@/config/constants";
import { Game } from "@/utils/endpoint";

export function getCart() {
  const stringifiedCart = localStorage.getItem(CART_KEY);

  return JSON.parse(stringifiedCart ?? "[]");
}

export function updateCart(cart: Game[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function checkGameIfExistsInCart(id: string) {
  const stringifiedCart = localStorage.getItem(CART_KEY);
  const cart = JSON.parse(stringifiedCart ?? "[]");

  return cart.some((game: Game) => game.id === id);
}
