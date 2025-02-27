import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default async function ShoppingCart() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <header className="bg-neutral-200 w-full flex justify-center p-5">
        <div className="container flex">
          <div className="m-0" />
          <div className="m-0 ml-auto relative">
            <img src="/shop.svg" />
            <span className="absolute flex size-2 top-0 right-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="absolute inline-flex size-2 rounded-full bg-red-500"></span>
            </span>
          </div>
        </div>
      </header>
      <div className="container w-full px-4 py-12">
        <p className="mb-12">
          <Link href="/" className="inline-flex items-center text-neutral-800 hover:text-neutral-500">
            <ArrowLeftIcon className="size-5 mr-3" />
            <span className="text-base">Back to Catalog</span>
          </Link>
        </p>
        <h1 className="font-bold mb-3 text-4xl text-neutral-800">Your Cart</h1>
        <p className="mb-12 text-2xl text-neutral-800">
          3 items
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="inline-flex flex-col w-full mr-20">
            <div className="relative flex flex-col lg:flex-row px-4 py-5 border-b border-neutral-300 last-of-type:border-none">
              <div className="inline-flex">
                <div className="w-full lg:w-64 h-36 lg:h-40 bg-neutral-200 mr-9" />
                <XMarkIcon className="absolute top-5 right-4 size-5 text-neutral-500 cursor-pointer" />
              </div>
              <div className="py-4 lg:py-2 lg:pl-6 lg:pr-16 flex flex-col w-full">
                <div className="m-0">
                  <p className="mb-3 font-bold text-neutral-500 text-base">GENRE</p>
                  <p className="text-xl mb-2 text-neutral-800">Product name</p>
                  <p className="text-base text-neutral-500">Description if necessary.</p>
                </div>
                <div className="m-0 mt-auto">
                  <p className="text-xl text-neutral-800 text-right">Price</p>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col lg:flex-row px-4 py-5 border-b border-neutral-300 last-of-type:border-none">
              <div className="inline-flex">
                <div className="w-full lg:w-64 h-36 lg:h-40 bg-neutral-200 mr-9" />
                <XMarkIcon className="absolute top-5 right-4 size-5 text-neutral-500 cursor-pointer" />
              </div>
              <div className="py-4 lg:py-2 lg:pl-6 lg:pr-16 flex flex-col w-full">
                <div className="m-0">
                  <p className="mb-3 font-bold text-neutral-500 text-base">GENRE</p>
                  <p className="text-xl mb-2 text-neutral-800">Product name</p>
                  <p className="text-base text-neutral-500">Description if necessary.</p>
                </div>
                <div className="m-0 mt-auto">
                  <p className="text-xl text-neutral-800 text-right">Price</p>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col lg:flex-row px-4 py-5 border-b border-neutral-300 last-of-type:border-none">
              <div className="inline-flex">
                <div className="w-full lg:w-64 h-36 lg:h-40 bg-neutral-200 mr-9" />
                <XMarkIcon className="absolute top-5 right-4 size-5 text-neutral-500 cursor-pointer" />
              </div>
              <div className="py-4 lg:py-2 lg:pl-6 lg:pr-16 flex flex-col w-full">
                <div className="m-0">
                  <p className="mb-3 font-bold text-neutral-500 text-base">GENRE</p>
                  <p className="text-xl mb-2 text-neutral-800">Product name</p>
                  <p className="text-base text-neutral-500">Description if necessary.</p>
                </div>
                <div className="m-0 mt-auto">
                  <p className="text-xl text-neutral-800 text-right">Price</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex w-full lg:w-2/4 flex-col">
            <div className="rounded-xl border border-neutral-300 px-6 py-8 mb-8">
              <p className="text-neutral-800 text-2xl mb-3">Order Summary</p>
              <p className="text-neutral-500 text-lg mb-8">3 items</p>
              <div className="pt-5 pb-6">
                <div className="flex text-neutral-500 text-lg mb-3">
                  <span className="m-0">Product Name</span>
                  <span className="ml-auto">Price</span>
                </div>
                <div className="flex text-neutral-500 text-lg mb-3">
                  <span className="m-0">Product Name</span>
                  <span className="ml-auto">Price</span>
                </div>
                <div className="flex text-neutral-500 text-lg mb-3">
                  <span className="m-0">Product Name</span>
                  <span className="ml-auto">Price</span>
                </div>
              </div>
              <div className="relative mb-6">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
              </div>
              <div className="flex mb-5 text-xl text-neutral-800">
                <span className="m-0">Product Name</span>
                <span className="ml-auto">Price</span>
              </div>
            </div>
            <button className="w-full text-white bg-neutral-600 text-center font-bold text-base p-5 border rounded-lg hover:bg-neutral-100" type="button">Checkout</button>
          </div>
        </div>
      </div>
      <footer className="bg-neutral-700 w-full p-16 flex justify-center">
        <a
          className="text-blue-600"
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
