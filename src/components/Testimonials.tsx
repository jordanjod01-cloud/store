import { Star } from 'lucide-react';

interface TestimonialsProps {
  scrollY: number;
}

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Tirunelveli',
    text: 'Best quality pooja items in the region. Their Agarbatti and Camphor are pure and authentic.',
    rating: 5,
  },
  {
    name: 'Priya Selvam',
    location: 'Tenkasi',
    text: 'Kumar Pooja Store is our go-to place for all homam materials. Excellent service and genuine products.',
    rating: 5,
  },
  {
    name: 'Murugan Pandian',
    location: 'Alangulam',
    text: 'Very friendly staff and great collection. They have everything needed for traditional poojas.',
    rating: 5,
  },
];

export default function Testimonials({ scrollY }: TestimonialsProps) {
  return (
    <section id="testimonials" className="relative py-32 bg-[#FAF8F5] overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z' fill='%23F6A623'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-6 text-[#F6A623]">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Trusted by thousands of devotees across Tamil Nadu</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                opacity: Math.min(1, Math.max(0, (scrollY - 3000 - index * 100) / 300)),
                transform: `translateY(${Math.max(30, 30 - (scrollY - 3000 - index * 100) / 10)}px)`,
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F6A623] text-[#F6A623]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
