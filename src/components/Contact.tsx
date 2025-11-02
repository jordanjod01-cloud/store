import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-gradient-to-br from-[#F6A623] to-[#e89515] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl opacity-90">Visit us or reach out for your pooja needs</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Call / WhatsApp</h3>
                <p className="text-lg opacity-90">+91 94898 30438</p>
                <p className="text-lg opacity-90">+91 94896 57260</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Email</h3>
                <p className="text-lg opacity-90">kumarpoojastore@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Store Address</h3>
                <p className="text-lg opacity-90">
                  Kumar Pooja Store<br />
                  Ambai Road, Opp. TPV Multiplex<br />
                  Alangulam, Tamil Nadu
                </p>
                <a
                  href="https://maps.app.goo.gl/jsHqrF89j5cmVFXn8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-white text-[#F6A623] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Working Hours</h3>
                <p className="text-lg opacity-90">Monday – Sunday</p>
                <p className="text-lg opacity-90">7:00 AM – 10:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-6 py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-6 py-4 rounded-3xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-[#F6A623] px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
