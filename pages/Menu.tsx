import React, { useState } from 'react';
import { MENU_DATA } from '../constants';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].id);

  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-20">
      
      {/* Header */}
      <div className="text-center py-12 px-4 bg-brand-charcoal mb-10 border-y border-white/5">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Menu</h1>
        <p className="text-gray-400 max-w-xl mx-auto font-light">
          A culinary journey featuring dry-aged steaks, fresh seafood, and seasonal ingredients.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 sticky top-24 bg-brand-dark/95 backdrop-blur py-6 z-30 border-b border-white/5">
          {MENU_DATA.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-2 py-2 text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-300 relative group ${
                activeCategory === category.id
                  ? 'text-brand-gold'
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              {category.title}
              <span className={`absolute bottom-0 left-0 h-[2px] bg-brand-gold transition-all duration-300 ${activeCategory === category.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 animate-fade-in">
          {MENU_DATA.find(c => c.id === activeCategory)?.items.map((item, index) => (
            <div key={index} className="flex justify-between items-start group border-b border-white/5 pb-4 hover:border-white/10 transition-colors">
              <div className="pr-4 flex-1">
                <h3 className="text-xl font-serif text-white group-hover:text-brand-gold transition-colors mb-2">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="text-gray-500 text-sm font-light italic">{item.description}</p>
                )}
                {item.isVegetarian && (
                  <span className="inline-block mt-2 text-[9px] uppercase tracking-wider text-brand-gold border border-brand-gold/30 px-2 py-0.5 rounded-full">Vegetarian</span>
                )}
              </div>
              <div className="text-brand-gold font-medium whitespace-nowrap text-lg">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-600 text-xs">
          <p>Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.</p>
          <p className="mt-2">Prices and availability subject to change.</p>
        </div>

      </div>
    </div>
  );
};

export default Menu;