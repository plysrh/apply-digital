import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-neutral-200 w-full flex justify-center">
      <div className="container flex p-5">
        <div className="m-0">
          <Link href="/" className="text-2xl text-neutral-500">
            GamerShop
          </Link>
        </div>
        <div className="m-0 ml-auto">
          <Link className="relative" href="/cart">
            <img src="/shop.svg" className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </header>
  );
}
