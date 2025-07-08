
import galleryImages from "../data/galleryData";

const Gallery = () => {
  return (
    <div className="bg-white font-[Poppins] pt-[6rem]">
      {/* Video Section */}
      <section className="w-full h-[80vh] relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src="/videos/36 MB.mp4" // 🔁 Replace with your actual video path in public/videos/
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Our Glimpses
          </h1>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-10">
          Memories at Gokul Computers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow hover:shadow-xl transition">
              <img
                src={img.url}
                alt={img.alt || `Gallery ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
