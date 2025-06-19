
import React from 'react';
import { TarotCardData } from '@/types/tarot';
import { cn } from '@/lib/utils';

interface TarotCardProps {
  card?: TarotCardData;
  isFlipped: boolean;
  onClick?: () => void;
  className?: string;
  isRevealed?: boolean;
}

const TarotCard = ({ card, isFlipped, onClick, className, isRevealed }: TarotCardProps) => {
  const cardAspectRatio = 5 / 3;
  const cardWidth = 'w-32 md:w-48';

  return (
    <div
      className={cn(
        `perspective-1000 transform-style-3d transition-transform duration-1000`,
        cardWidth,
        { 'cursor-pointer': !!onClick },
        className
      )}
      style={{ aspectRatio: cardAspectRatio }}
      onClick={onClick}
    >
      <div
        className={cn(
          'relative w-full h-full transform-style-3d transition-transform duration-1000',
          { 'rotate-y-180': isFlipped }
        )}
      >
        {/* Card Back */}
        <div className="absolute w-full h-full backface-hidden rounded-lg bg-secondary border-2 border-primary/50 flex items-center justify-center p-2 shadow-[0_0_15px_hsl(var(--primary)/0.5)]">
           <div className="w-full h-full border-2 border-primary/30 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/50">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"></path>
              <path d="M12 10.5l1.85 3.76L18 14.77l-3 2.93L15.09 21 12 19.27 8.91 21 9.9 17.7l-3-2.93 4.15-.6L12 10.5z"></path>
            </svg>
          </div>
        </div>

        {/* Card Front */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-lg bg-card border-2 border-primary/70 flex flex-col justify-center items-center p-4 shadow-[0_0_20px_hsl(var(--primary)/0.7)]">
          {card && (
             <div className="text-center">
              <h3 className={cn("font-cinzel text-lg md:text-xl font-bold text-primary", { 'rotate-180': isRevealed && card.reversed })}>
                {card.name}
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Add custom CSS for 3D transform effects
const styles = `
.perspective-1000 { perspective: 1000px; }
.transform-style-3d { transform-style: preserve-3d; }
.backface-hidden { backface-visibility: hidden; }
.rotate-y-180 { transform: rotateY(180deg); }
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);


export default TarotCard;
