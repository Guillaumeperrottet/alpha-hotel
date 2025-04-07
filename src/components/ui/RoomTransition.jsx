import React, { useState, useEffect } from 'react';

export default function RoomTransition({ children, currentRoom, isTransitioning }) {
  const [displayedRoom, setDisplayedRoom] = useState(currentRoom);
  const [previousRoom, setPreviousRoom] = useState(null);
  const [transitionState, setTransitionState] = useState('idle'); // 'idle', 'fadeOut', 'fadeIn'

  useEffect(() => {
    if (currentRoom !== displayedRoom) {
      // Commence la transition en gardant l'ancien contenu
      setPreviousRoom(displayedRoom);
      setTransitionState('fadeOut');

      // Après la disparition de l'ancien contenu, change pour le nouveau
      const timer = setTimeout(() => {
        setDisplayedRoom(currentRoom);
        setTransitionState('fadeIn');

        // Transition terminée
        setTimeout(() => {
          setPreviousRoom(null);
          setTransitionState('idle');
        }, 500);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [currentRoom, displayedRoom]);

  return (
    <div className="relative min-h-[500px]">
      {/* Ancien contenu en cours de disparition */}
      {previousRoom && (
        <div className="absolute w-full transition-opacity duration-500 ease-in-out opacity-0">
          {React.cloneElement(children, { roomData: previousRoom })}
        </div>
      )}

      {/* Contenu actuel */}
      <div className={`transition-opacity duration-500 ease-in-out
        ${transitionState === 'fadeOut' ? 'opacity-0' : 'opacity-100'}`}>
        {React.cloneElement(children, { roomData: displayedRoom })}
      </div>
    </div>
  );
}
