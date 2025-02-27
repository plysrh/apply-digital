import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-700 w-full p-16 flex justify-center">
      <Link className="text-neutral-600" href="/">
        <img src="/logo.svg" />
      </Link>
    </footer>
  );
}
