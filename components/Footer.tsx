import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-brand-gold uppercase tracking-widest">The Dynamo Room</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A modern American steakhouse & oyster bar bringing culinary excellence and vibrant atmosphere to the heart of NYC.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white uppercase tracking-widest text-sm font-semibold mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><Link to="/menu" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">Full Menu</Link></li>
              <li><Link to="/reservations" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">Reservations</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">Private Events</Link></li>
              <li><Link to="/reviews" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">Guest Reviews</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white uppercase tracking-widest text-sm font-semibold mb-6">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>{CONTACT_INFO.address}</p>
              <p><a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-brand-gold">{CONTACT_INFO.phone}</a></p>
              <p>Mon - Thu: 5:00 PM - 10:00 PM</p>
              <p>Fri - Sat: 5:00 PM - 11:00 PM</p>
              <p>Sun: 4:00 PM - 9:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} The Dynamo Room. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;