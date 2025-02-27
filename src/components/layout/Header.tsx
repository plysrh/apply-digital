import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-neutral-200 w-full flex justify-center p-5">
      <div className="container flex">
        <div className="m-0" />
        <div className="m-0 ml-auto">
          <Link className="relative" href="/cart">
            <img src="/shop.svg" className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </header>
  );
}
