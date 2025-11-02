interface GalleryProps {
  scrollY: number;
}

const galleryItems = [
  { title: 'Agarbatti Collection', color: 'bg-gradient-to-br from-amber-400 to-orange-500' },
  { title: 'Homam Sets', color: 'bg-gradient-to-br from-orange-400 to-red-500' },
  { title: 'Sacred Items', color: 'bg-gradient-to-br from-yellow-400 to-amber-500' },
  { title: 'Fresh Flowers', color: 'bg-gradient-to-br from-amber-500 to-orange-600' },
  { title: 'Pooja Oils', color: 'bg-gradient-to-br from-orange-500 to-yellow-500' },
  { title: 'Store Display', color: 'bg-gradient-to-br from-yellow-500 to-amber-600' },
];

export default function Gallery({ scrollY }: GalleryProps) {
  return (
    <section id="gallery" className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-6 text-[#F6A623]">Gallery</h2>
          <p className="text-xl text-gray-600">Explore our collection of premium pooja items</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              style={{
                opacity: Math.min(1, Math.max(0, (scrollY - 2400 - index * 50) / 300)),
                transform: `translateY(${Math.max(50, 50 - (scrollY - 2400 - index * 50) / 5)}px)`,
              }}
            >
              <div className={`absolute inset-0 ${item.color} transition-transform duration-500 group-hover:scale-110`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full blur-2xl" />
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
