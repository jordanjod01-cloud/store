import { Phone, MessageCircle } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const parallaxSpeed = scrollY * 0.5;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#F6A623]/20 via-[#F5E6CF]/30 to-[#F6A623]/20"
        style={{
          transform: `translateY(${parallaxSpeed}px)`,
        }}
      />

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F6A623' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          transform: `translateY(${parallaxSpeed * 0.3}px)`,
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div
          className="overflow-hidden"
          style={{
            opacity: Math.max(0, 1 - scrollY / 400),
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-[#F6A623] leading-tight">
            Kumar Pooja Store
          </h1>
          <p className="text-xl md:text-3xl text-gray-700 mb-12 font-light">
            All Traditional & Spiritual Pooja Supplies in Tamil Nadu
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-[#F6A623] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#e89515] transition-all duration-300 hover:scale-105 shadow-lg">
              Shop Now
            </button>
            <button className="bg-white text-[#F6A623] px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg border-2 border-[#F6A623]">
              Contact Us
            </button>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="tel:+919489830438"
              className="flex items-center gap-2 text-gray-700 hover:text-[#F6A623] transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">+91 94898 30438</span>
            </a>
            <a
              href="https://wa.me/919489830438"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-[#F6A623] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#F6A623] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#F6A623] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
