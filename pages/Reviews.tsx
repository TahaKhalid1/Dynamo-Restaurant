import React from 'react';
import { REVIEWS_DATA } from '../constants';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen pt-36 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Guest Reviews</h1>
          <p className="text-gray-400 font-light">See what people are saying about their Dynamo Room experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS_DATA.map((review) => (
            <div key={review.id} className="bg-white/[0.02] p-10 border border-white/5 hover:border-brand-gold/30 transition-colors duration-300">
              <div className="flex items-center gap-1 mb-6 text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "text-brand-gold" : "text-gray-700"} />
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 leading-loose font-light text-lg">"{review.text}"</p>
              <div className="flex justify-between items-center border-t border-white/5 pt-6">
                <span className="text-white font-medium tracking-wide uppercase text-sm">{review.name}</span>
                <span className="text-gray-600 text-xs tracking-widest">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
           <h3 className="text-xl text-white font-serif mb-6">Have you dined with us?</h3>
           <a href="#" className="text-brand-gold border-b border-brand-gold pb-1 hover:text-white hover:border-white transition-colors uppercase text-xs tracking-[0.2em]">Leave a review on Google</a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;