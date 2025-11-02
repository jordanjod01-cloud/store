import { useEffect, useRef, useState } from 'react';

interface ProductsProps {
  scrollY: number;
}

const productCategories = [
  {
    name: 'Incense & Aroma',
    items: ['Agarbatti', 'Dhoop', 'Sambrani', 'Dasangam'],
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    name: 'Sacred Essentials',
    items: ['Camphor', 'Kunkumam', 'Vibhuti', 'Rudraksha'],
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    name: 'Offerings & Rituals',
    items: ['Betel Leaves', 'Flowers', 'Ganga Jal', 'Darbha Grass'],
    color: 'from-yellow-500/20 to-amber-500/20',
  },
  {
    name: 'Pooja Food & Natural',
    items: ['Dry Coconut', 'Honey', 'Ghee', 'Jaggery'],
    color: 'from-amber-600/20 to-orange-600/20',
  },
  {
    name: 'Oils & Powders',
    items: ['Pooja Oil', 'Shikakai Powder', 'Vetiver', 'Panchagavyam'],
    color: 'from-orange-600/20 to-yellow-600/20',
  },
  {
    name: 'Special Sets',
    items: ['27/54/108 Homam Sets', 'Homam Sticks', 'Cotton Wicks', 'Paper Cups'],
    color: 'from-yellow-600/20 to-amber-600/20',
  },
];

export default function Products({ scrollY }: ProductsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionTop, setSectionTop] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      setSectionTop(sectionRef.current.offsetTop);
    }
  }, []);

  return (
    <section id="products" ref={sectionRef} className="relative py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center">
          <h2 className="text-6xl font-bold mb-6 text-[#F6A623]">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium quality pooja supplies for all your spiritual needs
          </p>
        </div>
      </div>

      <div className="space-y-0">
        {productCategories.map((category, index) => {
          const offset = scrollY - (sectionTop + index * 400);
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative min-h-screen flex items-center ${
                index % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'
              }`}
            >
              <div className="max-w-7xl mx-auto px-6 w-full">
                <div className={`grid md:grid-cols-2 gap-16 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div
                    className={`${!isEven ? 'md:order-2' : ''}`}
                    style={{
                      opacity: Math.min(1, Math.max(0, (offset + 200) / 300)),
                      transform: `translateX(${isEven ? Math.max(-100, -100 + offset / 3) : Math.max(100, 100 - offset / 3)}px)`,
                    }}
                  >
                    <div className={`aspect-square bg-gradient-to-br ${category.color} rounded-3xl shadow-2xl relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64 bg-[#F6A623]/20 rounded-full blur-3xl" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center text-[#F6A623] text-6xl font-bold opacity-10">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${!isEven ? 'md:order-1' : ''}`}
                    style={{
                      opacity: Math.min(1, Math.max(0, (offset + 300) / 300)),
                      transform: `translateX(${isEven ? Math.max(100, 100 - offset / 3) : Math.max(-100, -100 + offset / 3)}px)`,
                    }}
                  >
                    <h3 className="text-4xl font-bold mb-8 text-[#F6A623]">{category.name}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                          <p className="text-gray-700 font-medium">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
