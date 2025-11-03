import { User } from 'lucide-react';
import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-neutral-200/60">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-neutral-900 text-white flex items-center justify-center font-semibold">S</div>
          <span className="text-xl font-serif tracking-tight text-neutral-900">Studio</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-600">
          <a href="#" className="hover:text-neutral-900 transition-colors">Home</a>
          <a href="#" className="hover:text-neutral-900 transition-colors">My Posts</a>
          <a href="#" className="hover:text-neutral-900 transition-colors">Drafts</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="rounded-full bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800 transition-colors">New post</button>
          <div className="h-9 w-9 rounded-full bg-neutral-200 grid place-items-center overflow-hidden">
            <User className="h-5 w-5 text-neutral-600" />
          </div>
        </div>
      </div>
    </header>
  );
}
