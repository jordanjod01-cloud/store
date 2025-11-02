interface AboutProps {
  scrollY: number;
}

export default function About({ scrollY }: AboutProps) {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div
            className="relative"
            style={{
              opacity: Math.min(1, Math.max(0, (scrollY - 400) / 300)),
              transform: `translateX(${Math.max(-50, -50 + (scrollY - 400) / 10)}px)`,
            }}
          >
            <div className="aspect-square bg-gradient-to-br from-[#F6A623]/30 to-[#F5E6CF] rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-[#F6A623]/20 rounded-full blur-3xl" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-[#F6A623] text-8xl font-bold opacity-20">
                ॐ
              </div>
            </div>
          </div>

          <div
            style={{
              opacity: Math.min(1, Math.max(0, (scrollY - 500) / 300)),
              transform: `translateX(${Math.max(50, 50 - (scrollY - 500) / 10)}px)`,
            }}
          >
            <h2 className="text-5xl font-bold mb-8 text-[#F6A623]">About Us</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Kumar Pooja Store is your trusted destination for premium pooja and ritual items — from Agarbatti and Camphor to Rudraksha and Homam Sets.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              We serve devotion with authenticity and purity, providing traditional and spiritual supplies to communities across Tamil Nadu.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { number: '500+', label: 'Products' },
                { number: '10+', label: 'Years' },
                { number: '10k+', label: 'Customers' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[#F6A623] mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
