"use client";

import React, { useState } from "react";
import Dialog1 from "./Dialog1";

type Post = {
  id: string | number;
  title: string;
};

type HomeWidgetProps = {
  data: Post[];
};

export default function PostsWidget({ data }: HomeWidgetProps) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (post: Post) => {
    setSelectedPost(post);
    setIsOpen(true);
  };

  return (
    <>
      <Dialog1
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        post={selectedPost}
      />

      <div className="bg-black text-white p-6 rounded-2xl shadow-lg w-full max-w-md border border-white/10">
        <h1 className="text-2xl font-extrabold mb-5 border-b border-white/20 pb-3 tracking-wide">
          🧠 Posts Feed
        </h1>
        <ul className="space-y-3">
          {data?.map((post) => (
            <li key={post.id}>
              <div
                onClick={() => handleClick(post)}
                className="cursor-pointer px-5 py-3 rounded-lg bg-black text-white font-semibold border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-150 ease-in-out"
              >
                {post.title}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
