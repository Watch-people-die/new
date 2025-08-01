"use client";

import React from "react";
import Link from "next/link";

type HomeWidgetProps = {
  data: Array<{ id: string | number; title: string }>;
};

export function PostsWidget({ data }: HomeWidgetProps) {
  return (
    <div className="bg-black text-white p-6 rounded-2xl shadow-lg w-full max-w-md border border-white/10">
      <h1 className="text-2xl font-extrabold mb-5 border-b border-white/20 pb-3 tracking-wide">
        🧠 Posts Feed
      </h1>
      <ul className="space-y-3">
        {data?.map((post) => (
          <li key={post.id}>
            <Link
              href={`/posts/${post.id}`}
              className="block px-5 py-3 rounded-lg bg-black text-white font-semibold border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-150 ease-in-out"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
