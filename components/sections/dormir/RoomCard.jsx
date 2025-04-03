import React from 'react';
import Image from 'next/image';

export default function RoomCard({ title, description, price, imageUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-64 relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{objectFit: "cover"}}
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-lg font-bold">À partir de {price} / nuit</p>
      </div>
    </div>
  );
}
