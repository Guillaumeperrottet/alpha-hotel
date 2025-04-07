export default function ContentSection({ title, children, reverse = false, imageSrc }) {
  return (
    <section className={`py-16 px-4`}>
      <div className="container mx-auto">
        <div
          className={`flex flex-col md:flex-row ${
            reverse ? "md:flex-row-reverse" : ""
          } gap-8 items-center`}
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <div className="prose max-w-none">
              {children}
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={imageSrc || "/placeholder-image.jpg"}
              alt={title}
              className="w-full h-auto object-cover rounded-md shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
