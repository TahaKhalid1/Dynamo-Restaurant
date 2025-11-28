import React, { useState } from 'react';
import Button from '../components/Button';

const Events: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! Our events team will contact you shortly.");
    setFormData({ name: '', email: '', phone: '', date: '', message: '' });
  };

  return (
    <div className="w-full bg-brand-dark">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1519671482538-5810a2d45836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Private Dining" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Private Events</h1>
            <p className="text-xl text-gray-300 font-light">Celebrate in style at The Dynamo Room</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-brand-gold text-xs tracking-widest uppercase mb-2 block">The Experience</span>
            <h2 className="text-3xl font-serif text-white mb-6">Unforgettable Gatherings</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              From intimate dinner parties to large corporate receptions, The Dynamo Room offers a variety of 
              options for your private event needs. Our culinary team will create a custom menu highlighting 
              our prime steaks and fresh seafood, while our sommelier curates the perfect wine pairings.
            </p>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-brand-gold rounded-full"></span>
                Full venue buyouts available
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-brand-gold rounded-full"></span>
                Private dining room (up to 20 guests)
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-brand-gold rounded-full"></span>
                Custom catering menus
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-brand-gold rounded-full"></span>
                AV capabilities for presentations
              </li>
            </ul>
          </div>
          <div className="relative h-80 md:h-full">
             <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Plated Dinner" 
              className="w-full h-full object-cover rounded-sm shadow-xl"
            />
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-brand-charcoal p-8 md:p-12 border border-white/5">
          <h3 className="text-2xl font-serif text-white text-center mb-8">Inquire About An Event</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
             <div className="space-y-2">
                <label className="text-xs text-brand-gold uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-brand-dark border border-white/10 p-3 text-white focus:border-brand-gold focus:outline-none"
                />
             </div>
             <div className="space-y-2">
                <label className="text-xs text-brand-gold uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-brand-dark border border-white/10 p-3 text-white focus:border-brand-gold focus:outline-none"
                />
             </div>
             <div className="space-y-2">
                <label className="text-xs text-brand-gold uppercase tracking-wider">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-brand-dark border border-white/10 p-3 text-white focus:border-brand-gold focus:outline-none"
                />
             </div>
             <div className="space-y-2">
                <label className="text-xs text-brand-gold uppercase tracking-wider">Date</label>
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-brand-dark border border-white/10 p-3 text-white focus:border-brand-gold focus:outline-none"
                />
             </div>
             <div className="space-y-2 md:col-span-2">
                <label className="text-xs text-brand-gold uppercase tracking-wider">Event Details / Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-brand-dark border border-white/10 p-3 text-white focus:border-brand-gold focus:outline-none"
                ></textarea>
             </div>
             <div className="md:col-span-2 text-center mt-4">
                <Button type="submit">Submit Inquiry</Button>
             </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Events;