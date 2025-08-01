import React from "react";

type Post = {
  id: string | number;
  title: string;
};

type Dialog1Props = {
  isOpen: boolean;
  onClose: () => void;
  post: Post | null;
};

export default function Dialog1({ isOpen, onClose, post }: Dialog1Props) {
  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-black border border-white/20 text-white w-full max-w-md p-6 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-extrabold mb-4 tracking-wide">📝 {post.title}</h2>
        <p className="text-white/70 text-sm mb-6">Post ID: {post.id}</p>

        <button
          onClick={onClose}
          className="w-full mt-2 px-4 py-2 bg-white text-black font-semibold rounded hover:bg-zinc-200 transition-all duration-150 ease-in-out"
        >
          Close
        </button>
      </div>
    </div>
  );
}
