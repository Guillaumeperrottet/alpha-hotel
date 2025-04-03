import Image from 'next/image';

export default function HeroSection() {
  // Cette section est dédiée à la présentation de l'hôtel et de ses chambres
  // Elle utilise une image d'arrière-plan pour créer une ambiance accueillante
  // Le texte au centre de l'image met en avant le thème "DORMIR"
return(
    <div className="relative w-full h-[60vh]">
      <Image
        src="/images/rooms/hero-bedroom.jpg"
        alt="Vue panoramique de nos chambres d'hôtel luxueuses"
        fill
        priority
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h1 className="text-5xl md:text-6xl text-white font-light">DORMIR</h1>
      </div>
    </div>
  );
}
