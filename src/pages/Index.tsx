
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import Stars from "@/components/Stars";
import TarotCard from '@/components/TarotCard';
import { tarotDeckData } from '@/data/tarot-deck';
import { TarotCardData } from '@/types/tarot';
import { shuffle } from 'lodash';
import { motion, AnimatePresence } from 'framer-motion';

type GameState = 'welcome' | 'draw' | 'reading';

const Index = () => {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [deck, setDeck] = useState<TarotCardData[]>([]);
  const [selectedCards, setSelectedCards] = useState<TarotCardData[]>([]);
  const [revealedCards, setRevealedCards] = useState<boolean[]>([]);

  const shuffleDeck = useCallback(() => {
    const newDeck = shuffle(tarotDeckData).map(card => ({
      ...card,
      reversed: Math.random() < 0.5 // 50% chance of being reversed
    }));
    setDeck(newDeck);
  }, []);

  useEffect(() => {
    shuffleDeck();
  }, [shuffleDeck]);

  const startGame = () => {
    setGameState('draw');
  };

  const handleCardSelect = (card: TarotCardData, index: number) => {
    if (selectedCards.length < 3 && !selectedCards.includes(card)) {
      setSelectedCards(prev => [...prev, card]);
    }
  };
  
  useEffect(() => {
    if (selectedCards.length === 3) {
      setTimeout(() => {
        setGameState('reading');
        setRevealedCards(Array(3).fill(false));
      }, 1000);
    }
  }, [selectedCards]);
  
  const handleRevealCard = (index: number) => {
    setRevealedCards(prev => {
        const newRevealed = [...prev];
        newRevealed[index] = true;
        return newRevealed;
    });
  };

  const resetGame = () => {
    shuffleDeck();
    setSelectedCards([]);
    setRevealedCards([]);
    setGameState('welcome');
  };

  const renderGameState = () => {
    switch (gameState) {
      case 'welcome':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center flex flex-col items-center justify-center h-full animate-fade-in"
          >
            <h1 className="text-5xl md:text-7xl font-cinzel text-primary animate-glow">Mystic Draw</h1>
            <p className="mt-4 mb-8 text-lg md:text-xl max-w-2xl font-lato text-foreground/80">
              Ask the deck your question, clear your mind, and when you're ready, draw your cards to reveal the truth.
            </p>
            <Button onClick={startGame} size="lg" className="font-cinzel text-lg">
              Start Reading
            </Button>
          </motion.div>
        );
      
      case 'draw':
        const cardsToDisplay = deck.slice(0, 21); // Show a subset for visual appeal
        return (
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h2 className="text-3xl font-cinzel text-primary/90 mb-8 animate-fade-in">Choose 3 cards that call to you.</h2>
                <div className="relative w-full h-96 flex items-center justify-center">
                    {cardsToDisplay.map((card, index) => {
                        const angle = (index - (cardsToDisplay.length - 1) / 2) * 8;
                        const isSelected = selectedCards.includes(card);
                        return (
                             <motion.div
                                key={index}
                                initial={{ y: 200, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.05 }}
                                style={{
                                    transform: `rotate(${angle}deg) translateY(${isSelected ? '-20px' : '0px'})`,
                                    transformOrigin: 'bottom center',
                                    zIndex: isSelected ? 100 : index,
                                }}
                                className="absolute transition-transform duration-300 ease-in-out hover:!scale-110 hover:!z-50"
                            >
                                <TarotCard
                                    card={card}
                                    isFlipped={false}
                                    onClick={() => handleCardSelect(card, index)}
                                />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        );

      case 'reading':
        return (
          <div className="flex flex-col items-center justify-center w-full h-full p-4">
            <h2 className="text-3xl md:text-4xl font-cinzel text-primary mb-6 text-center">Your Reading</h2>
            <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-8 mb-8">
              {selectedCards.map((card, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 }}
                  className="flex flex-col items-center gap-4"
                >
                  <TarotCard
                    card={card}
                    isFlipped={true}
                    onClick={() => handleRevealCard(index)}
                    isRevealed={revealedCards[index]}
                  />
                  <AnimatePresence>
                  {revealedCards[index] && (
                     <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-center max-w-xs bg-black/20 p-4 rounded-lg"
                     >
                       <h3 className="font-cinzel text-xl text-primary">{card.name} {card.reversed ? '(Reversed)' : ''}</h3>
                       <p className="font-lato text-sm text-foreground/80 mt-2">
                        <strong>Meaning:</strong> {card.reversed ? card.meaning_rev : card.meaning_up}
                       </p>
                     </motion.div>
                  )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            {revealedCards.every(r => r) && (
              <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}}>
                <Button onClick={resetGame} size="lg" className="font-cinzel text-lg">
                  New Reading
                </Button>
              </motion.div>
            )}
             {!revealedCards.every(r => r) && (
                 <p className="font-lato text-foreground/70 mt-4 animate-pulse">Click each card to reveal its meaning.</p>
             )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full bg-background font-lato text-foreground flex items-center justify-center relative overflow-hidden">
      <Stars />
      <AnimatePresence mode="wait">
        <div key={gameState} className="w-full h-screen flex items-center justify-center">
            {renderGameState()}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Index;
