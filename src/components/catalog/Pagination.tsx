import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { classNames } from "@/utils/styles";
import { useRouter } from "next/navigation";

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({ totalPages, currentPage }: PaginationProps) {
  const router = useRouter();
  const handleChange = (page: number) => () => {
    if (page < 1 || page > totalPages) {
      return;
    }

    const searchParams = new URLSearchParams(window.location.search);

    if (searchParams.has("page")) {
      searchParams.delete("page");
    }

    if (page > 1) {
      searchParams.set("page", page.toString());
    }

    router.push(`?${searchParams.toString()}`, { scroll: true });
  };

  return (
    <nav className="flex items-center justify-between border-t border-neutral-200 px-4 sm:px-0 mt-9">
      <div className="-mt-px flex w-0 flex-1">
        <span
          className={classNames(
            currentPage <= 1 ? 'cursor-not-allowed pointer-events-none' : 'cursor-pointer hover:border-neutral-300 hover:text-neutral-700',
            'inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-neutral-500 ',
          )}
          onClick={handleChange(currentPage - 1)}
        >
          <ArrowLongLeftIcon aria-hidden="true" className="mr-3 size-5 text-gray-400" />
          Previous
        </span>
      </div>
      <div className="hidden md:-mt-px md:flex">
        <span className="inline-flex items-center border-t-2 border-neutral-800 px-4 pt-4 text-sm font-medium text-neutral-500">
          {currentPage}
        </span>
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <span
          className={classNames(
            currentPage >= totalPages ? 'cursor-not-allowed pointer-events-none' : 'cursor-pointer hover:border-neutral-300 hover:text-neutral-700',
            'inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-neutral-500',
          )}
          onClick={handleChange(currentPage + 1)}
        >
          Next
          <ArrowLongRightIcon aria-hidden="true" className="ml-3 size-5 text-neutral-400" />
        </span>
      </div>
    </nav>
  );
}
