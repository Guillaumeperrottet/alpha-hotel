export default function ParallaxSection({ title, children, imageSrc }) {
  return (
    <section className="relative py-20">
      {/* Image de fond avec effet parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: `url(${imageSrc || "/placeholder-image.jpg"})` }}
      ></div>

      {/* Overlay pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Contenu */}
      <div className="container mx-auto relative z-20">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <div className="prose prose-invert max-w-none">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
