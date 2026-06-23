"use client";
import Link from "next/link";
import Logo from "../ui/Logo";

export default function Header({ menu }: { menu: any }) {
  return (
    <header className="flex items-center gap-5 py-8 px-6">
      <Logo />

      <nav className="flex-1">
        <ul className="flex items-center justify-end gap-5">
          {menu.data.nav_links.map((link: any) => (
            <li key={link.link.id}>
              <Link href={link.link.url}>{link.link_text}</Link>
            </li>
          ))}
          <li className="hidden md:block flex-1">
            <form
              role="search"
              className="w-full flex gap-2 items-center bg-soft rounded-md p-2"
            >
              <button type="submit" className="flex">
                <span className="material-symbols-outlined">search</span>
              </button>
              <input
                type="search"
                placeholder="Rechercher par tags"
                className="flex-1"
              />
            </form>
          </li>
          <li>
            <Link href="/pins" className="flex items-center">
              13
              <span className="material-symbols-outlined">keep</span>
            </Link>
          </li>
          <li>
            <ul className="flex gap-1 border rounded p-1 text-tiny">
              <li className="pr-1 border-r">EN</li>
              <li className="font-bold">FR</li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
