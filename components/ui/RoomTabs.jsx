import React from 'react';

export default function RoomTabs ({ activeRoom, changeRoom, menuOpen, roomOptions }){
  return (
    <nav
      className={`sticky top-[56px] z-30 bg-white shadow-md transition-opacity duration-300 ${
        menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Navigation des chambres"
    >
      <div className="container mx-auto px-4">
        {/* Version mobile avec défilement horizontal */}
        <div className="flex overflow-x-auto scrollbar-hide md:hidden">
          {roomOptions.map((room) => (
            <button
              key={room.id}
              onClick={() => changeRoom(room.id)}
              className={`py-4 px-4 whitespace-nowrap font-light text-sm transition-colors ${
                activeRoom === room.id
                  ? 'text-amber-800 border-b-2 border-amber-800'
                  : 'text-gray-600 hover:text-amber-800'
              }`}
              aria-current={activeRoom === room.id ? 'page' : undefined}
            >
              {room.title}
            </button>
          ))}
        </div>

        {/* Version desktop avec grille */}
        <div className="hidden md:grid md:grid-cols-4 md:text-center">
          {roomOptions.map((room) => (
            <button
              key={room.id}
              onClick={() => changeRoom(room.id)}
              className={`py-4 px-2 whitespace-nowrap font-light text-lg transition-colors ${
                activeRoom === room.id
                  ? 'text-amber-800 border-b-2 border-amber-800'
                  : 'text-gray-600 hover:text-amber-800'
              }`}
              aria-current={activeRoom === room.id ? 'page' : undefined}
            >
              {room.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
