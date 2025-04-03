import React from 'react';
import Image from 'next/image';

export default function RoomDisplay({ roomData }) {
  const { title, image, description, features, price, imageOnLeft } = roomData;

  const imageBlock = (
    <div className="relative h-[500px]">
      <Image
        src={image}
        alt={`Vue de ${title.toLowerCase()}`}
        fill
        style={{ objectFit: "cover" }}
        className="rounded-lg"
        quality={85}
      />
    </div>
  );

  const contentBlock = (
    <div>
      <h3 className="text-3xl font-light mb-6">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <ul className="mb-8 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <p className="text-xl font-semibold mb-6">{price}</p>
      <button
        className="bg-amber-800 hover:bg-amber-900 text-white py-3 px-8 rounded-lg transition"
        aria-label={`Réserver ${title.toLowerCase()}`}
      >
        RÉSERVER
      </button>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {imageOnLeft ? (
        <>
          {imageBlock}
          {contentBlock}
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{contentBlock}</div>
          <div className="order-1 lg:order-2">{imageBlock}</div>
        </>
      )}
    </div>
  );
};
