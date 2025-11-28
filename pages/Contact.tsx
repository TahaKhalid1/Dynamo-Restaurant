import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=2+Pennsylvania+Plaza,+New+York,+NY+10121";

  return (
    <div className="bg-brand-dark min-h-screen pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-12">
            <div>
              <span className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-4 block">Connect</span>
              <h1 className="text-5xl font-serif text-white mb-8">Get in Touch</h1>
              <p className="text-gray-400 font-light text-lg leading-relaxed">
                Have a question? We are here to help. Reach out to us for reservations, event inquiries, or general information.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="bg-white/5 p-4 rounded-sm group-hover:bg-brand-gold transition-colors duration-300">
                  <MapPin className="text-brand-gold group-hover:text-black transition-colors" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1 text-lg">Location</h3>
                  <p className="text-gray-400 font-light">{CONTACT_INFO.address}</p>
                  <p className="text-gray-600 text-sm mt-1 uppercase tracking-wide">(Near Madison Square Garden)</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-white/5 p-4 rounded-sm group-hover:bg-brand-gold transition-colors duration-300">
                  <Phone className="text-brand-gold group-hover:text-black transition-colors" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1 text-lg">Phone</h3>
                  <p className="text-gray-400 font-light text-xl">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-white/5 p-4 rounded-sm group-hover:bg-brand-gold transition-colors duration-300">
                  <Mail className="text-brand-gold group-hover:text-black transition-colors" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1 text-lg">Email</h3>
                  <p className="text-gray-400 font-light">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white/[0.02] h-[500px] border border-white/10 flex items-center justify-center relative overflow-hidden group">
             {/* Simulating a map embed */}
             <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center text-gray-500">
                <div className="text-center">
                    <MapPin size={48} className="mx-auto mb-4 text-brand-gold" />
                    <p className="tracking-widest uppercase text-xs">Google Maps Embed</p>
                    <p className="text-sm mt-2 text-gray-600">{CONTACT_INFO.address}</p>
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                      <button className="mt-6 border border-white/20 px-6 py-2 text-xs uppercase hover:bg-white hover:text-black transition-colors">
                        View on Google Maps
                      </button>
                    </a>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;