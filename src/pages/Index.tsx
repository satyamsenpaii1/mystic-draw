import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import Stars from "@/components/Stars";
import TarotCard from '@/components/TarotCard';
import { tarotDeckData } from '@/data/tarot-deck';
import { TarotCardData, ReadingCategory, InterpretationDetail } from '@/types/tarot';
import { interpretations } from '@/data/interpretations';
import { shuffle } from 'lodash';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Briefcase, Star, CrystalBall } from 'lucide-react';

type GameState = 'welcome' | 'category' | 'draw' | 'reading';

const readingCategories: { name: ReadingCategory; label: string; icon: React.ReactNode }[] = [
  { name: 'love', label: 'Love & Relationships', icon: <Heart className="w-8 h-8 mb-2" /> },
  { name: 'career', label: 'Career & Finance', icon: <Briefcase className="w-8 h-8 mb-2" /> },
  { name: 'spiritual', label: 'Spiritual Growth', icon: <Star className="w-8 h-8 mb-2" /> },
  { name: 'general', label: 'General Guidance', icon: <CrystalBall className="w-8 h-8 mb-2" /> },
];

const readingPositions = ["The Foundation", "The Path", "The Destiny"];

const Index = () => {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [deck, setDeck] = useState<TarotCardData[]>([]);
  const [selectedCards, setSelectedCards] = useState<TarotCardData[]>([]);
  const [revealedCards, setRevealedCards] = useState<boolean[]>([]);
  const [category, setCategory] = useState<ReadingCategory | null>(null);

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
    setGameState('category');
  };

  const handleCategorySelect = (selectedCategory: ReadingCategory) => {
    setCategory(selectedCategory);
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
    setCategory(null);
    setGameState('welcome');
  };

  const getInterpretation = (card: TarotCardData): InterpretationDetail | { meaning: string } => {
    if (!category) return { meaning: card.reversed ? card.meaning_rev : card.meaning_up };
    
    const cardInterpretation = interpretations[card.name];
    if (!cardInterpretation) return { meaning: card.reversed ? card.meaning_rev : card.meaning_up };
    
    const categoryInterpretation = cardInterpretation[category];
    if (!categoryInterpretation) return { meaning: card.reversed ? card.meaning_rev : card.meaning_up };
    
    return card.reversed ? categoryInterpretation.reversed : categoryInterpretation.upright;
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
      
      case 'category':
        return (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center flex flex-col items-center justify-center h-full p-4"
          >
            <h1 className="text-4xl md:text-5xl font-cinzel text-primary mb-2 animate-glow">Choose Your Focus</h1>
            <p className="mt-2 mb-8 text-lg text-foreground/80 font-lato max-w-2xl">
              Select the area of your life you'd like insight into.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {readingCategories.map((cat, index) => (
                    <motion.div
                        key={cat.name}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
                    >
                        <Button 
                            variant="outline"
                            className="h-auto w-48 flex-col p-6 bg-background/50 backdrop-blur-sm border-primary/30 hover:bg-primary/10 hover:border-primary/70 transition-all duration-300 group shadow-lg hover:shadow-primary/30"
                            onClick={() => handleCategorySelect(cat.name)}
                        >
                           <div className="text-primary/70 group-hover:text-primary transition-colors duration-300">{cat.icon}</div>
                           <span className="font-cinzel text-lg text-foreground group-hover:text-primary transition-colors duration-300">{cat.label}</span>
                        </Button>
                    </motion.div>
                ))}
            </div>
          </motion.div>
        );

      case 'draw':
        const cardsToDisplay = deck.slice(0, 21); // Show a subset for visual appeal
        return (
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h2 className="text-3xl font-cinzel text-primary/90 mb-8 animate-fade-in">Choose 3 cards that call to you.</h2>
                <div className="relative w-full h-[30rem] flex items-center justify-center">
                    {cardsToDisplay.map((card, index) => {
                        const angle = (index - (cardsToDisplay.length - 1) / 2) * 7;
                        const isSelected = selectedCards.includes(card);
                        
                        return (
                             <motion.div
                                key={card.name}
                                initial={{ y: 200, opacity: 0, rotate: angle }}
                                animate={{ 
                                    y: isSelected ? -40 : 0, 
                                    opacity: 1,
                                    rotate: angle,
                                }}
                                whileHover={{ scale: 1.1, zIndex: 50, y: isSelected ? -40 : -10 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20, delay: index * 0.05 }}
                                style={{
                                    transformOrigin: '50% 25rem',
                                    zIndex: isSelected ? 100 : index,
                                    position: 'absolute',
                                }}
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
            <h2 className="text-3xl md:text-4xl font-cinzel text-primary mb-2 text-center">Your {category ? readingCategories.find(c => c.name === category)?.label : ''} Reading</h2>
            <p className="font-lato text-foreground/70 mb-6 text-center">Here lies the wisdom you seek.</p>
            <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-8 mb-8">
              {selectedCards.map((card, index) => {
                const interpretation = getInterpretation(card);
                return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 }}
                  className="flex flex-col items-center gap-4"
                >
                  <h4 className="font-cinzel text-xl text-primary/80">{readingPositions[index]}</h4>
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
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="text-center max-w-xs bg-black/20 p-4 rounded-lg w-full"
                     >
                       <h3 className="font-cinzel text-xl text-primary">{card.name} {card.reversed ? '(Reversed)' : ''}</h3>
                       {'meaning' in interpretation ? (
                          <p className="font-lato text-sm text-foreground/80 mt-2">
                             {interpretation.meaning}
                          </p>
                       ) : (
                         <div className="font-lato text-sm text-left text-foreground/80 mt-2 space-y-3">
                           <p><strong>Current Situation:</strong> {interpretation.current}</p>
                           <p><strong>Future Guidance:</strong> {interpretation.future}</p>
                           <p><strong>Divine Message:</strong> {interpretation.divine}</p>
                         </div>
                       )}
                     </motion.div>
                  )}
                  </AnimatePresence>
                </motion.div>
                )
              })}
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
