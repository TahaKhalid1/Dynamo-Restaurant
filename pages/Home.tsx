import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { MENU_DATA, CONTACT_INFO } from '../constants';
import { Utensils, GlassWater, PartyPopper, Leaf, MapPin, Clock, Phone, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  // Helpers to get specific menu items for display
  const featuredItems = [
    { ...MENU_DATA[4].items[6], image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Steaks" }, // Ribeye
    { ...MENU_DATA[0].items[3], image: "https://images.unsplash.com/photo-1594046243098-0fceea9d451e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Raw Bar" }, // Plateau
    { ...MENU_DATA[3].items[0], image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Entrees" }, // Burger
    { ...MENU_DATA[7].items[1], image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Cocktails" }, // Saturn
    { ...MENU_DATA[3].items[3], image: "https://images.unsplash.com/photo-1467003909585-2f8a7270028d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Entrees" }, // Salmon
    { ...MENU_DATA[6].items[0], image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Desserts" }, // Cheesecake
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1424847651672-bf202175b6d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=2+Pennsylvania+Plaza,+New+York,+NY+10121";

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="The Dynamo Room Interior" 
            className="w-full h-full object-cover scale-105 animate-[kenburns_20s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-dark"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h2 className="text-brand-gold text-sm md:text-lg tracking-[0.4em] uppercase mb-6 font-semibold animate-fade-in-up">
            Est. 2023 • NYC
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-6 leading-tight tracking-tight">
            THE DYNAMO ROOM
          </h1>
          <div className="h-1 w-24 bg-brand-gold mx-auto mb-8"></div>
          <p className="text-gray-100 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
            Modern Dining • Crafted Cocktails • Fine Experience
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/menu">
               <Button variant="outline" className="min-w-[180px]">View Menu</Button>
            </Link>
            <Link to="/reservations">
              <Button className="min-w-[180px]">Reserve a Table</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section className="py-24 bg-brand-dark px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-gold opacity-50"></div>
             <img 
               src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
               alt="Restaurant Interior"
               className="w-full h-[600px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 shadow-2xl"
             />
             <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-gold opacity-50"></div>
          </div>
          <div className="lg:pl-8 order-1 lg:order-2">
            <span className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              A Modern Twist on <br/> Classic Luxury
            </h2>
            <p className="text-gray-400 leading-loose mb-6 text-lg font-light">
              Located at 2 Pennsylvania Plaza, The Dynamo Room bridges the gap between classic New York steakhouse tradition and the contemporary energy of Midtown West.
            </p>
            <p className="text-gray-400 leading-loose mb-10 text-lg font-light">
              We offer dry-aged steaks, fresh seafood, craft cocktails, and a vibrant lounge atmosphere. Whether you're joining us for a pre-event dinner before a show at the Garden, or a relaxed evening of oysters and champagne, our room is yours.
            </p>
            <Link to="/about" className="inline-flex items-center text-brand-gold hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold group">
              Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform"/>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Specialties Section */}
      <section className="py-20 bg-brand-charcoal border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             <Link to="/menu" className="p-8 border border-white/5 bg-white/[0.02] hover:bg-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300 group text-center block">
                <div className="w-16 h-16 mx-auto bg-brand-dark rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <Utensils className="text-brand-gold w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">Fine Dining</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Exquisite cuts of dry-aged beef and chef-curated entrees.</p>
             </Link>
             <Link to="/events" className="p-8 border border-white/5 bg-white/[0.02] hover:bg-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300 group text-center block">
                <div className="w-16 h-16 mx-auto bg-brand-dark rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <PartyPopper className="text-brand-gold w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">Private Events</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Exclusive spaces for intimate gatherings and large celebrations.</p>
             </Link>
             <Link to="/menu" className="p-8 border border-white/5 bg-white/[0.02] hover:bg-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300 group text-center block">
                <div className="w-16 h-16 mx-auto bg-brand-dark rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <GlassWater className="text-brand-gold w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">Craft Cocktails</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Innovative mixology meeting classic techniques.</p>
             </Link>
             <div className="p-8 border border-white/5 bg-white/[0.02] hover:bg-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300 group text-center">
                <div className="w-16 h-16 mx-auto bg-brand-dark rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <Leaf className="text-brand-gold w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">Seasonal</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Fresh, locally sourced ingredients reflecting the season.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Dishes */}
      <section className="py-24 bg-brand-dark px-6">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <span className="text-brand-gold text-xs tracking-widest uppercase mb-2 block">Culinary Highlights</span>
               <h2 className="text-4xl md:text-5xl font-serif text-white">Signature Dishes</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {featuredItems.map((item, idx) => (
                  <Link to="/menu" key={idx} className="group cursor-pointer block">
                     <div className="relative overflow-hidden h-80 mb-6 border border-white/5">
                        <img 
                           src={item.image} 
                           alt={item.name} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                           <span className="text-brand-gold tracking-widest uppercase text-sm border border-brand-gold px-6 py-3 hover:bg-brand-gold hover:text-black transition-colors">View Details</span>
                        </div>
                     </div>
                     <div className="text-center px-4">
                        <span className="text-xs text-brand-gold uppercase tracking-wider mb-2 block">{item.category}</span>
                        <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-brand-gold transition-colors">{item.name}</h3>
                        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{item.description}</p>
                        <span className="text-white font-medium text-lg">{item.price}</span>
                     </div>
                  </Link>
               ))}
            </div>
            <div className="text-center mt-16">
               <Link to="/menu">
                  <Button variant="outline" className="px-10">View Full Menu</Button>
               </Link>
            </div>
         </div>
      </section>

      {/* 5. Menu Preview Section */}
      <section className="py-24 bg-brand-charcoal px-6 border-y border-white/5">
         <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
               {/* Steaks Column */}
               <div>
                  <h3 className="text-3xl font-serif text-white mb-8 pb-4 border-b border-brand-gold/30 text-center">Steaks</h3>
                  <div className="space-y-8">
                     {MENU_DATA[4].items.slice(0,3).map((item, i) => (
                        <div key={i} className="group">
                           <div className="flex justify-between items-baseline mb-2 border-b border-white/5 border-dashed pb-1 group-hover:border-white/20 transition-colors">
                              <h4 className="text-lg font-medium text-white">{item.name}</h4>
                              <span className="text-brand-gold">{item.price}</span>
                           </div>
                           <p className="text-gray-500 text-sm italic">{item.description}</p>
                        </div>
                     ))}
                  </div>
               </div>
               
               {/* Raw Bar Column */}
               <div>
                  <h3 className="text-3xl font-serif text-white mb-8 pb-4 border-b border-brand-gold/30 text-center">Raw Bar</h3>
                  <div className="space-y-8">
                     {MENU_DATA[0].items.slice(0,3).map((item, i) => (
                        <div key={i} className="group">
                           <div className="flex justify-between items-baseline mb-2 border-b border-white/5 border-dashed pb-1 group-hover:border-white/20 transition-colors">
                              <h4 className="text-lg font-medium text-white">{item.name}</h4>
                              <span className="text-brand-gold">{item.price}</span>
                           </div>
                           <p className="text-gray-500 text-sm italic">{item.description}</p>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Cocktails Column */}
               <div>
                  <h3 className="text-3xl font-serif text-white mb-8 pb-4 border-b border-brand-gold/30 text-center">Cocktails</h3>
                  <div className="space-y-8">
                     {MENU_DATA[7].items.slice(0,3).map((item, i) => (
                        <div key={i} className="group">
                           <div className="flex justify-between items-baseline mb-2 border-b border-white/5 border-dashed pb-1 group-hover:border-white/20 transition-colors">
                              <h4 className="text-lg font-medium text-white">{item.name}</h4>
                              <span className="text-brand-gold">{item.price}</span>
                           </div>
                           <p className="text-gray-500 text-sm italic">{item.description}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Gallery Grid Section */}
      <section className="py-0">
         <div className="grid grid-cols-2 md:grid-cols-4">
            {galleryImages.map((img, i) => (
               <Link to="/gallery" key={i} className="aspect-square relative group overflow-hidden cursor-pointer block">
                  <img src={img} alt="Gallery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               </Link>
            ))}
         </div>
         <div className="bg-brand-dark py-12 text-center border-t border-white/5">
            <Link to="/gallery" className="text-brand-gold hover:text-white uppercase tracking-[0.2em] text-sm font-semibold transition-colors border-b border-brand-gold pb-1 hover:border-white">
               View Full Gallery
            </Link>
         </div>
      </section>

      {/* 7. Reservation CTA */}
      <section className="py-24 relative bg-fixed bg-center bg-cover" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'}}>
         <div className="absolute inset-0 bg-black/80"></div>
         <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Experience The Dynamo Room</h2>
            <p className="text-xl text-gray-200 mb-12 font-light max-w-2xl mx-auto">
               Secure your table for an unforgettable evening of fine dining and exceptional service.
            </p>
            <Link to="/reservations">
               <Button className="px-12 py-5 text-lg">Reserve Your Table Today</Button>
            </Link>
         </div>
      </section>

      {/* 8. Contact & Location Info */}
      <section className="py-20 bg-brand-dark px-6 border-t border-white/10">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
               <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <MapPin className="text-brand-gold" />
                  <h3 className="text-xl font-serif text-white">Location</h3>
               </div>
               <p className="text-gray-400 mb-2 text-lg">{CONTACT_INFO.address}</p>
               <p className="text-gray-500 text-sm">Floor 1 (PENN 2)</p>
               <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mt-8 block h-48 w-full bg-gray-800 rounded-sm relative overflow-hidden group border border-white/10">
                  {/* Fake Map */}
                  <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Map" className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-500"/>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className="bg-brand-dark/90 text-brand-gold text-xs uppercase tracking-widest px-4 py-2 rounded border border-brand-gold">View on Maps</span>
                  </div>
               </a>
            </div>

            <div>
               <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <Clock className="text-brand-gold" />
                  <h3 className="text-xl font-serif text-white">Hours</h3>
               </div>
               <div className="space-y-4 text-gray-400">
                  <div className="flex justify-between md:justify-start md:gap-8 border-b border-white/5 pb-2">
                     <span className="w-24 font-semibold text-white">Mon - Thu</span>
                     <span>5:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between md:justify-start md:gap-8 border-b border-white/5 pb-2">
                     <span className="w-24 font-semibold text-white">Fri - Sat</span>
                     <span>5:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between md:justify-start md:gap-8 border-b border-white/5 pb-2">
                     <span className="w-24 font-semibold text-white">Sunday</span>
                     <span>4:00 PM - 9:00 PM</span>
                  </div>
               </div>
            </div>

            <div>
               <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <Phone className="text-brand-gold" />
                  <h3 className="text-xl font-serif text-white">Contact</h3>
               </div>
               <p className="text-2xl text-white mb-2">{CONTACT_INFO.phone}</p>
               <p className="text-gray-400 mb-8">{CONTACT_INFO.email}</p>
               <div className="flex gap-6 justify-center md:justify-start">
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 border-b border-gray-600 pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors uppercase text-sm tracking-wider cursor-pointer">Get Directions</a>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 border-b border-gray-600 pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors uppercase text-sm tracking-wider cursor-pointer">Email Us</a>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;