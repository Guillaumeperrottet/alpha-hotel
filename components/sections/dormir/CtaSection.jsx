import React from 'react';

export default function CtaSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Les petits plus</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
          text
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div className="flex items-center gap-4">
            <img src="/icons/eco-friendly.svg" alt="Titre" className="w-12 h-12" />
            <div>
              <h3 className="font-bold text-lg">Titre</h3>
              <p className="text-sm text-gray-600">p</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src="/icons/safe.svg" alt="Titre" className="w-12 h-12" />
            <div>
              <h3 className="font-bold text-lg">Titre</h3>
              <p className="text-sm text-gray-600">p</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src="/icons/bed.svg" alt="Titre" className="w-12 h-12" />
            <div>
              <h3 className="font-bold text-lg">Titre</h3>
              <p className="text-sm text-gray-600">p</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src="/icons/baby-bed.svg" alt="Titre" className="w-12 h-12" />
            <div>
              <h3 className="font-bold text-lg">Titre</h3>
              <p className="text-sm text-gray-600">P</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src="/icons/check-in.svg" alt="Titre" className="w-12 h-12" />
            <div>
              <h3 className="font-bold text-lg">Titre</h3>
              <p className="text-sm text-gray-600">p</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src="/icons/check-out.svg" alt="Titre" className="w-12 h-12" />
            <div>
              <h3 className="font-bold text-lg">Titre</h3>
              <p className="text-sm text-gray-600">p</p>
            </div>
          </div>
        </div>
        <button className="bg-amber-800 hover:bg-amber-900 text-white py-3 px-8 rounded-lg transition">
          Réserver ?
        </button>
      </div>
    </div>
  );
}
