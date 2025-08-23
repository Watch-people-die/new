import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-6 mt-8 border w-full min-">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()}
        </p>
        <nav className="flex gap-6 text-sm">
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/services" className="hover:text-white transition">Services</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
