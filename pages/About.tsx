import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen pt-36 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-gold text-xs tracking-[0.3em] uppercase block mb-4">Est. 2023</span>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-10">Our Story</h1>
          <div className="h-[1px] w-24 bg-brand-gold mx-auto"></div>
        </div>

        <div className="prose prose-invert prose-lg mx-auto text-gray-300 font-light leading-loose text-justify">
          <p className="mb-10 first-letter:text-6xl first-letter:font-serif first-letter:text-brand-gold first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8]">
            The Dynamo Room was born from a desire to bring a truly modern, high-energy dining experience to the Penn District. 
            Located in the iconic 2 Pennsylvania Plaza, we bridge the gap between classic New York steakhouse tradition and the 
            contemporary energy of Midtown West.
          </p>
          <p className="mb-10">
            Our culinary philosophy centers on sourcing the finest USDA Prime cuts, dry-aged in-house for maximum depth of flavor. 
            But we are more than just steak. Our raw bar features a rotating selection of East and West Coast oysters, daily 
            fresh catches, and towering seafood plateaus designed for sharing.
          </p>
          <p className="mb-10">
            Designed with dark woods, plush leather, and warm brass accents, the space evokes a sense of timeless sophistication 
            while remaining welcoming and unpretentious. Whether you are closing a deal, celebrating a milestone, or grabbing 
            a pre-game burger and beer, The Dynamo Room is your destination.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-16">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif text-white mb-4">The Chef</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Executive Chef James Sterling brings over 20 years of experience in New York's top steakhouses to our kitchen, focusing on precision and creativity.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif text-white mb-4">The Bar</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our beverage program features an extensive whiskey library and a cocktail list that pays homage to the classics while embracing modern techniques.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;