import React from 'react';

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-wider">
          Alpha Hôtel
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Peace and inspiration
        </p>
      </div>
    </section>
  );
}
