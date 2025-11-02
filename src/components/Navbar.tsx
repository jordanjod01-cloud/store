import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  scrollY: number;
}

export default function Navbar({ scrollY }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = scrollY > 50;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div
          className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-[#F6A623]' : 'text-white'
          }`}
        >
          Kumar Pooja Store
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['home', 'about', 'products', 'gallery', 'testimonials', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize text-sm font-medium transition-colors duration-300 hover:text-[#F6A623] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={isScrolled ? 'text-gray-700' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-700' : 'text-white'} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="flex flex-col p-6 gap-4">
            {['home', 'about', 'products', 'gallery', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize text-left text-gray-700 hover:text-[#F6A623] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
