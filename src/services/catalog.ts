import { BASE_URL } from "@/config/constants";
import { Game } from "@/utils/endpoint";

interface Catalog {
  games: Game[];
  availableFilters: string[];
  totalPages: number;
  currentPage: number;
}

export function getCatalog(searchParams: Record<string, string>): Promise<Catalog> {
  const query = Object.entries(searchParams)
    .reduce((acc, [key, value]) => acc.concat([`${key}=${value}` as never]), [])
    .join("&");

  return fetch(`${BASE_URL}/api/games?${query}`).then(response => response.json());
}
