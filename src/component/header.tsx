import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-4 shadow-md border-b border-white/10">
      <nav className="flex gap-6 text-lg font-semibold">
        <Link
          href="/"
          className="hover:text-white hover:underline underline-offset-4 transition duration-150"
        >
          Home
        </Link>
        <Link
          href="/posts"
          className="hover:text-white hover:underline underline-offset-4 transition duration-150"
        >
          Posts
        </Link>
        <Link
          href="/posts1"
          className="hover:text-white hover:underline underline-offset-4 transition duration-150"
        >
          Posts1
        </Link>
      </nav>
    </header>
  );
}
