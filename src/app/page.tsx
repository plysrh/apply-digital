import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <header className="bg-neutral-200 w-full flex justify-center p-5">
        <div className="container flex">
          <div className="m-0" />
          <div className="m-0 ml-auto">
            <Link href="/cart">
              <img src="/shop.svg" className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </header>
      <div className="container w-full px-4 py-12">
        <h1 className="font-bold mb-10 text-4xl">Top Sellers</h1>
        <div className="flex text-2xl justify-end text-gray-500 mb-10">
          <div className="font-bold text-lg">Genre</div>
          <div className="text-lg mx-6">|</div>
          <Menu>
            <MenuButton className="inline-flex items-center text-lg focus:outline-none data-[active]:text-gray-400 data-[hover]:text-gray-400">
              All
              <ChevronDownIcon className="size-5 ml-2" />
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom end"
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  Account settings
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  Support
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  License
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-12">
          <div className="rounded-xl border-gray-500 p-6 outline outline-4 outline-neutral-500" style={{ borderWidth: "1px" }}>
            <div className="w-full h-52 mb-5" />
            <div className="mb-3 font-bold text-neutral-500 text-base">GENRE</div>
            <div className="flex mb-5">
              <div className="m-0 font-bold text-lg">Product name</div>
              <div className="m-0 ml-auto font-bold text-lg">Price</div>
            </div>
            <button className="w-full text-center font-bold text-base p-5 border-2 rounded-lg border-gray-500 hover:bg-neutral-100" type="button">ADD TO CART</button>
          </div>
          <div className="rounded-xl border-gray-500 p-6" style={{ borderWidth: "1px" }}>
            <div className="w-full h-52 mb-5" />
            <div className="mb-3 font-bold text-neutral-500 text-base">GENRE</div>
            <div className="flex mb-5">
              <div className="m-0 font-bold text-lg">Product name</div>
              <div className="m-0 ml-auto font-bold text-lg">Price</div>
            </div>
            <button className="w-full text-center font-bold text-base p-5 border-2 rounded-lg border-gray-500 hover:bg-neutral-100" type="button">ADD TO CART</button>
          </div>
          <div className="rounded-xl border-gray-500 p-6" style={{ borderWidth: "1px" }}>
            <div className="w-full h-52 mb-5" />
            <div className="mb-3 font-bold text-neutral-500 text-base">GENRE</div>
            <div className="flex mb-5">
              <div className="m-0 font-bold text-lg">Product name</div>
              <div className="m-0 ml-auto font-bold text-lg">Price</div>
            </div>
            <button className="w-full text-center font-bold text-base p-5 border-2 rounded-lg border-gray-500 hover:bg-neutral-100" type="button">ADD TO CART</button>
          </div>
          <div className="rounded-xl border-gray-500 p-6" style={{ borderWidth: "1px" }}>
            <div className="w-full h-52 mb-5" />
            <div className="mb-3 font-bold text-neutral-500 text-base">GENRE</div>
            <div className="flex mb-5">
              <div className="m-0 font-bold text-lg">Product name</div>
              <div className="m-0 ml-auto font-bold text-lg">Price</div>
            </div>
            <button className="w-full text-center font-bold text-base p-5 border-2 rounded-lg border-gray-500 hover:bg-neutral-100" type="button">ADD TO CART</button>
          </div>
          <div className="rounded-xl border-gray-500 p-6" style={{ borderWidth: "1px" }}>
            <div className="w-full h-52 mb-5" />
            <div className="mb-3 font-bold text-neutral-500 text-base">GENRE</div>
            <div className="flex mb-5">
              <div className="m-0 font-bold text-lg">Product name</div>
              <div className="m-0 ml-auto font-bold text-lg">Price</div>
            </div>
            <button className="w-full text-center font-bold text-base p-5 border-2 rounded-lg border-gray-500 hover:bg-neutral-100" type="button">ADD TO CART</button>
          </div>
          <div className="rounded-xl animate-pulse" style={{ borderWidth: "1px" }}>
            <div className="w-full h-96 bg-neutral-200 rounded-xl" />
          </div>
        </div>
        <div className="flex justify-center my-10">
          <svg
            className="mr-3 -ml-1 size-8 animate-spin outline-neutral-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        </div>
      </div>
      <footer className="bg-neutral-700 w-full p-16 flex justify-center">
        <a
          href="https://applydigital.co/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="/logo.svg" />
        </a>
      </footer>
    </main>
  )
}
