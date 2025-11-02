import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-[#F6A623] mb-4">Kumar Pooja Store</h3>
            <p className="text-gray-400 mb-6">
              Serving devotion with authenticity and purity. Your trusted destination for all traditional and spiritual pooja supplies in Tamil Nadu.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F6A623] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919489830438"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F6A623] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F6A623] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#F6A623]">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Products', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-[#F6A623] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#F6A623]">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+91 94898 30438</li>
              <li>+91 94896 57260</li>
              <li>kumarpoojastore@gmail.com</li>
              <li>Ambai Road, Alangulam</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Kumar Pooja Store — Serving Devotion Since 2015</p>
        </div>
      </div>
    </footer>
  );
}
