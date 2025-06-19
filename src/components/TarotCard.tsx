
import React from 'react';
import { motion } from 'framer-motion';
import { TarotCardData } from '@/types/tarot';

interface TarotCardProps {
  card: TarotCardData;
  isFlipped?: boolean;
  onClick?: () => void;
  className?: string;
}

const TarotCard: React.FC<TarotCardProps> = ({ 
  card, 
  isFlipped = false, 
  onClick, 
  className = "w-32 h-48" 
}) => {
  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        rotateY: isFlipped ? 0 : 5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        initial={false}
        animate={{ rotateY: isFlipped ? 0 : 180 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Card Back */}
        <div 
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-shadow duration-300"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border-2 border-primary/30 rounded-xl flex items-center justify-center relative overflow-hidden">
            {/* Mystical pattern overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-primary/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,215,0,0.1)_0%,_transparent_50%)]"></div>
            
            {/* Decorative elements */}
            <div className="relative z-10 text-center">
              <div className="text-primary/60 text-4xl mb-2 animate-pulse-soft">✨</div>
              <div className="text-primary/40 text-xs font-inter font-medium tracking-widest">MYSTICAL</div>
              <div className="text-primary/40 text-xs font-inter tracking-widest">TAROT</div>
            </div>
            
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 text-primary/30 text-xs">⟡</div>
            <div className="absolute top-2 right-2 text-primary/30 text-xs">⟡</div>
            <div className="absolute bottom-2 left-2 text-primary/30 text-xs">⟡</div>
            <div className="absolute bottom-2 right-2 text-primary/30 text-xs">⟡</div>
          </div>
        </div>

        {/* Card Front */}
        <div 
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-shadow duration-300"
        >
          <div className={`relative w-full h-full bg-gradient-to-br from-background to-background/95 border-2 border-primary/40 rounded-xl overflow-hidden ${card.reversed ? 'rotate-180' : ''}`}>
            {/* Card image or placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"></div>
            
            {/* Card content */}
            <div className="relative z-10 p-4 h-full flex flex-col">
              {/* Card number/type indicator */}
              <div className="text-xs font-inter text-primary/70 mb-2 text-center">
                {card.suit ? `${card.suit.toUpperCase()}` : 'MAJOR ARCANA'}
              </div>
              
              {/* Card name */}
              <div className="flex-1 flex items-center justify-center">
                <h3 className="font-playfair text-base font-bold text-center text-foreground leading-tight">
                  {card.name}
                </h3>
              </div>
              
              {/* Decorative element */}
              <div className="text-center text-primary/60 text-lg">
                {card.suit === 'cups' && '♰'}
                {card.suit === 'wands' && '⚡'}
                {card.suit === 'swords' && '⚔'}
                {card.suit === 'pentacles' && '⬟'}
                {!card.suit && '✦'}
              </div>
              
              {/* Bottom decoration */}
              <div className="text-xs text-primary/40 text-center mt-2 font-inter">
                {card.reversed ? 'REVERSED' : 'UPRIGHT'}
              </div>
            </div>
            
            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-xl ring-1 ring-primary/20 pointer-events-none"></div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TarotCard;
