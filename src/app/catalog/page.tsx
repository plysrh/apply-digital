import { Suspense } from "react";
import Catalog from "@/components/catalog/Catalog";
import CatalogSkeleton from "@/components/skeletons/Catalog";

interface HomeProps {
  searchParams: Record<string, string>;
}

export default async function CatalogPage({ searchParams }: HomeProps) {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <div className="container w-full px-6 py-12">
        <h1 className="font-bold mb-10 text-4xl text-neutral-800">Top Sellers</h1>
        <Suspense fallback={<CatalogSkeleton />}>
          <Catalog searchParams={searchParams} />
        </Suspense>
      </div>
    </main>
  )
}
