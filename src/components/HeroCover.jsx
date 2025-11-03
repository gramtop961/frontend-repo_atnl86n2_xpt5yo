import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative w-full h-[44vh] min-h-[360px]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white pointer-events-none" />
      <div className="relative h-full flex items-end">
        <div className="mx-auto max-w-6xl px-4 pb-10 w-full">
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-neutral-900">A calm space to write and publish</h1>
          <p className="mt-3 text-neutral-600 max-w-2xl">Minimal distractions, beautiful typography, and just enough structure to help your ideas flow.</p>
        </div>
      </div>
    </section>
  );
}
