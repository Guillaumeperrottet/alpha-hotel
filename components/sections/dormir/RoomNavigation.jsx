import React, { useState } from 'react';
import RoomDisplay from './RoomDisplay';

export default function RoomNavigation({ rooms }) {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);

  const handleRoomChange = (index) => {
    if (index !== activeRoomIndex) {
      setActiveRoomIndex(index);
    }
  };

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-4 mb-8">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex space-x-8 justify-center">
            {rooms.map((room, index) => (
              <li key={index}>
                <button
                  className={`px-4 py-2 font-medium transition-colors ${
                    activeRoomIndex === index
                      ? 'text-amber-800 border-b-2 border-amber-800'
                      : 'text-gray-600 hover:text-amber-700'
                  }`}
                  onClick={() => handleRoomChange(index)}
                >
                  {room.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Affichage des chambres avec transition */}
      <div className="relative">
        {rooms.map((room, index) => (
          <RoomDisplay
            key={index}
            roomData={room}
            isVisible={activeRoomIndex === index}
          />
        ))}
      </div>
    </div>
  );
}
