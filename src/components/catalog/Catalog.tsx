import { getCatalog } from "@/services/catalog";
import Games from "./Games";

interface CatalogProps {
  searchParams: Record<string, string>;
}

export default async function Catalog({ searchParams }: CatalogProps) {
  const { games, availableFilters, totalPages, currentPage } = await getCatalog(searchParams);

  return <Games availableFilters={availableFilters} games={games} totalPages={totalPages} currentPage={currentPage} />;
}
