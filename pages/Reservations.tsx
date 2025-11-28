import React, { useState } from 'react';
import Button from '../components/Button';
import { CONTACT_INFO } from '../constants';
import { Calendar, Clock, Users } from 'lucide-react';

const Reservations: React.FC = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '7:00 PM',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Reservation request received! We will confirm your table via email shortly.");
    setFormData({
      date: '',
      time: '7:00 PM',
      guests: '2',
      name: '',
      email: '',
      phone: '',
      notes: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Info */}
        <div className="space-y-10">
          <div>
            <span className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-4 block">Join Us</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-8">Reserve a Table</h1>
            <p className="text-gray-400 leading-loose mb-6 font-light">
              Reservations are highly recommended, especially on event nights at Madison Square Garden. 
              We accept reservations up to 30 days in advance.
            </p>
            <p className="text-gray-400 leading-loose font-light">
              For parties larger than 8, please contact our events team directly.
            </p>
          </div>

          <div className="bg-brand-charcoal p-8 border border-white/5">
            <h3 className="text-xl font-serif text-white mb-4">Contact Direct</h3>
            <p className="text-brand-gold text-2xl mb-2">{CONTACT_INFO.phone}</p>
            <p className="text-gray-500 text-xs uppercase tracking-wider">Call us daily after 2 PM</p>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-semibold uppercase tracking-[0.2em] text-xs border-b border-white/10 pb-4">Opening Hours</h4>
            <div className="grid grid-cols-2 gap-4 text-gray-400 text-sm font-light">
              <div>Mon - Thu</div>
              <div className="text-right text-white">5:00 PM - 10:00 PM</div>
              <div>Fri - Sat</div>
              <div className="text-right text-white">5:00 PM - 11:00 PM</div>
              <div>Sunday</div>
              <div className="text-right text-white">4:00 PM - 9:00 PM</div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-white/[0.02] p-8 md:p-12 border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <h3 className="text-2xl font-serif text-white mb-6">Book Online</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-[10px] text-brand-gold uppercase tracking-[0.2em] flex items-center gap-2">
                  <Calendar size={12} /> Date
                </label>
                <input 
                  type="date" 
                  name="date" 
                  required
                  value={formData.date}
                  className="w-full bg-brand-dark border-b border-white/20 text-white p-3 focus:border-brand-gold focus:outline-none transition-colors rounded-none placeholder-gray-600"
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] text-brand-gold uppercase tracking-[0.2em] flex items-center gap-2">
                  <Clock size={12} /> Time
                </label>
                <select 
                  name="time" 
                  value={formData.time}
                  className="w-full bg-brand-dark border-b border-white/20 text-white p-3 focus:border-brand-gold focus:outline-none transition-colors rounded-none"
                  onChange={handleChange}
                >
                  <option>5:00 PM</option>
                  <option>5:30 PM</option>
                  <option>6:00 PM</option>
                  <option>6:30 PM</option>
                  <option>7:00 PM</option>
                  <option>7:30 PM</option>
                  <option>8:00 PM</option>
                  <option>8:30 PM</option>
                  <option>9:00 PM</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] text-brand-gold uppercase tracking-[0.2em] flex items-center gap-2">
                <Users size={12} /> Guests
              </label>
              <select 
                name="guests" 
                className="w-full bg-brand-dark border-b border-white/20 text-white p-3 focus:border-brand-gold focus:outline-none transition-colors rounded-none"
                onChange={handleChange}
                value={formData.guests}
              >
                {[...Array(8)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1} {i === 0 ? 'Person' : 'People'}</option>
                ))}
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] text-brand-gold uppercase tracking-[0.2em]">Full Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="John Doe" 
                required
                value={formData.name}
                className="w-full bg-brand-dark border-b border-white/20 text-white p-3 focus:border-brand-gold focus:outline-none transition-colors rounded-none placeholder-gray-700"
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-[10px] text-brand-gold uppercase tracking-[0.2em]">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="john@example.com" 
                  required
                  value={formData.email}
                  className="w-full bg-brand-dark border-b border-white/20 text-white p-3 focus:border-brand-gold focus:outline-none transition-colors rounded-none placeholder-gray-700"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] text-brand-gold uppercase tracking-[0.2em]">Phone</label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="(555) 555-5555" 
                  required
                  value={formData.phone}
                  className="w-full bg-brand-dark border-b border-white/20 text-white p-3 focus:border-brand-gold focus:outline-none transition-colors rounded-none placeholder-gray-700"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] text-brand-gold uppercase tracking-[0.2em]">Special Requests</label>
              <textarea 
                name="notes" 
                rows={3}
                placeholder="Allergies, special occasion, seating preference..." 
                value={formData.notes}
                className="w-full bg-brand-dark border-b border-white/20 text-white p-3 focus:border-brand-gold focus:outline-none transition-colors rounded-none placeholder-gray-700"
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="pt-4">
              <Button type="submit" fullWidth>Confirm Reservation</Button>
            </div>
            
            <p className="text-[10px] text-center text-gray-600 uppercase tracking-widest">
              Powered by Resy
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Reservations;