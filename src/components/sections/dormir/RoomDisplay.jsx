import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


export default function RoomDisplay({ roomData, isVisible = true }) {
  const {
    title,
    subtitle,
    image,
    description,
    features,
    capacity,
    price
  } = roomData;

  return (
    <div
      className={`max-w-7xl mx-auto px-4 py-12 transition-opacity duration-500 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* En-tête avec titre et capacité */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-5xl font-bold mb-2">{title}</h2>
          <p className="text-xl italic font-light">{subtitle}</p>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <div className="flex">
            {/* Icônes de personnes */}
            {Array(capacity).fill().map((_, i) => (
              <svg key={i} className="w-8 h-8 mx-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            ))}
          </div>
          <span className="ml-2">{capacity} personnes</span>
        </div>
      </div>

      {/* Description principale */}
      <div className="mb-12">
        <p className="text-gray-700">{description}</p>
      </div>

      {/* Titre "Détails" avec style manuscrit */}
      <h3 className="text-4xl font-light italic mb-8">Détails</h3>

      {/* Caractéristiques et image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Liste des caractéristiques avec icônes */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-amber-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-amber-800" viewBox="0 0 24 24" fill="currentColor">
                  <path d={feature.iconPath || "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8-8-3.59 8-8 8z"} />
                </svg>
              </div>
              <span>{feature.text}</span>
            </div>
          ))}

          {/* Bouton de réservation */}
          <div className="mt-12">
            <button
              className="bg-amber-800 hover:bg-amber-900 text-white py-3 px-8 rounded-lg transition mt-6"
              aria-label={`Réserver ${title.toLowerCase()}`}
            >
              RÉSERVER
            </button>
            {price && <span className="block mt-3 text-xl font-semibold">{price}</span>}
          </div>
        </div>

        {/* Image de la chambre */}
        <div className="relative aspect-[4/3] w-full">
          {/* Utilisation de Swiper pour afficher un carrousel d'images des chambres */}
          {/* Navigation activée et pagination cliquable */}
          <div className="mb-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={true}
              pagination={{ clickable: true,}}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              spaceBetween={10}
              slidesPerView={1}
            >
              {image.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Image ${index + 1} de ${title}`}
                    className="rounded-lg w-full h-[400px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
