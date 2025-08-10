import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-4 shadow-md border-b border-white/10">
      <nav className="flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wide">
          LOGO
        </div>

        <div className="flex gap-6 text-lg font-medium">
          <Link
            href="/"
            className="hover:text-white hover:underline underline-offset-4 transition duration-150 text-white/80"
          >
            Home
          </Link>
          <Link
            href="/posts"
            className="hover:text-white hover:underline underline-offset-4 transition duration-150 text-white/80"
          >
            Newest
          </Link>
          <Link
            href="/posts"
            className="hover:text-white hover:underline underline-offset-4 transition duration-150 text-white/80"
          >
            Updated
          </Link>
          <Link
            href="/posts"
            className="hover:text-white hover:underline underline-offset-4 transition duration-150 text-white/80"
          >
            Custom
          </Link>
          <Link
            href="/posts"
            className="hover:text-white hover:underline underline-offset-4 transition duration-150 text-white/80"
          >
            Types
          </Link>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search"
            className="bg-black border border-white/20 rounded-md px-3 py-1.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 transition duration-150"
          />
        </div>
      </nav>
    </header>
  );
}