import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import Stars from "@/components/Stars";
import TarotCard from '@/components/TarotCard';
import { tarotDeckData } from '@/data/tarot-deck';
import { TarotCardData, ReadingCategory, InterpretationDetail } from '@/types/tarot';
import { interpretations } from '@/data/interpretations';
import { shuffle } from 'lodash';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Briefcase, Star, Sparkles, Wand, Swords, GlassWater } from 'lucide-react';
import { pipeline } from '@huggingface/transformers';

type SpreadType = 3 | 5 | 7;
type GameState = 'welcome' | 'spread' | 'category' | 'draw' | 'reading';

const readingCategories: { name: ReadingCategory; label: string; icon: React.ReactNode }[] = [
  { name: 'love', label: 'Love & Relationships', icon: <Heart className="w-8 h-8 mb-2" /> },
  { name: 'career', label: 'Career & Finance', icon: <Briefcase className="w-8 h-8 mb-2" /> },
  { name: 'spiritual', label: 'Spiritual Growth', icon: <Star className="w-8 h-8 mb-2" /> },
  { name: 'general', label: 'General Guidance', icon: <Sparkles className="w-8 h-8 mb-2" /> },
];

const spreadOptions: { name: string; count: SpreadType; positions: string[], icon: React.ReactNode }[] = [
  { name: '3-Card Spread', count: 3, positions: ["Past", "Present", "Future"], icon: <GlassWater className="w-8 h-8 mb-2" /> },
  { name: '5-Card Spread', count: 5, positions: ["Situation", "Challenge", "Past", "Future", "Outcome"], icon: <Wand className="w-8 h-8 mb-2" /> },
  { name: '7-Card Spread', count: 7, positions: ["Self", "Challenge", "Past", "Future", "Advice", "Hopes/Fears", "Outcome"], icon: <Swords className="w-8 h-8 mb-2" /> },
];

const Index = () => {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [deck, setDeck] = useState<TarotCardData[]>([]);
  const [selectedCards, setSelectedCards] = useState<TarotCardData[]>([]);
  const [revealedCards, setRevealedCards] = useState<boolean[]>([]);
  const [category, setCategory] = useState<ReadingCategory | null>(null);
  const [spread, setSpread] = useState<SpreadType>(3);
  const [readingPositions, setReadingPositions] = useState<string[]>(spreadOptions[0].positions);
  const [generator, setGenerator] = useState<any>(null);
  const [isModelLoading, setIsModelLoading] = useState<boolean>(true);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [aiReading, setAiReading] = useState<string>('');
  const [aiSummary, setAiSummary] = useState<string>('');

  useEffect(() => {
    const loadModel = async () => {
        try {
            // Using a smaller, conversational model suitable for this task
            const modelPipeline = await pipeline('text-generation', 'Xenova/distilgpt2');
            setGenerator(() => modelPipeline);
        } catch (error) {
            console.error("Failed to load AI model:", error);
            // Maybe add a toast here to inform the user
        } finally {
            setIsModelLoading(false);
        }
    };
    loadModel();
  }, []);

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
    setGameState('spread');
  };

  const handleSpreadSelect = (spreadCount: SpreadType) => {
    const selectedSpread = spreadOptions.find(s => s.count === spreadCount);
    if (selectedSpread) {
        setSpread(selectedSpread.count);
        setReadingPositions(selectedSpread.positions);
        setGameState('category');
    }
  };

  const handleCategorySelect = (selectedCategory: ReadingCategory) => {
    setCategory(selectedCategory);
    setGameState('draw');
  };

  const handleCardSelect = (card: TarotCardData, index: number) => {
    if (selectedCards.length < spread && !selectedCards.includes(card)) {
      setSelectedCards(prev => [...prev, card]);
    }
  };
  
  useEffect(() => {
    if (selectedCards.length === spread) {
      setTimeout(() => {
        setGameState('reading');
        setRevealedCards(Array(spread).fill(false));
      }, 1000);
    }
  }, [selectedCards, spread]);
  
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
    setAiReading('');
    setAiSummary('');
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

  const generateAIReading = useCallback(async () => {
    if (!generator || !category || isGenerating || aiReading || aiSummary) return;
    setIsGenerating(true);

    const cardDetails = selectedCards.map((card, index) => {
        const position = readingPositions[index];
        const interpretation = getInterpretation(card);
        let meaning;
        if ('meaning' in interpretation) {
            meaning = interpretation.meaning;
        } else {
            meaning = `Current situation: ${interpretation.current}, Future guidance: ${interpretation.future}, Divine message: ${interpretation.divine}`;
        }
        return `${index + 1}. ${position}: ${card.name} ${card.reversed ? '(Reversed)' : ''}. Traditional meaning: ${meaning}. Context: ${card.desc}`;
    }).join('\n');

    const prompt = `You are a wise, eloquent, and compassionate tarot reader named Mystica.
A querent has come to you seeking guidance about their ${category}.
You have drawn the following cards for them:
${cardDetails}

First, provide a very concise, 2-3 sentence summary of the entire reading. This summary should capture the core message and most important advice. Start this section with "SUMMARY:".

After the summary, provide a more detailed, insightful, and flowing narrative for their tarot reading. Weave the meanings of the cards and their positions together into a cohesive story. Address the querent directly. Structure your response into three distinct paragraphs:

1.  **Your Present Path:** Begin by analyzing their current situation, the energies surrounding them, and the immediate challenges or opportunities as revealed by the cards.

2.  **The Unfolding Future:** Look ahead to what is developing. Discuss the path forward, potential outcomes, and offer gentle, actionable advice based on the guidance from the cards.

3.  **Wisdom of the Cosmos:** Conclude with a profound, uplifting spiritual message. Synthesize the core lesson of the reading and offer a divine perspective to empower them on their journey.

Write in a mystical, yet clear and encouraging tone. Do not simply list the card meanings.`;

    try {
        const result = await generator(prompt, {
            max_new_tokens: 512,
            temperature: 0.75,
            top_k: 50,
            do_sample: true,
            repetition_penalty: 1.1,
        });
        const fullText = result[0].generated_text;
        
        const summaryMarker = "SUMMARY:";
        const detailedReadingMarker = "Your Present Path:";
        
        // Find the last occurence in case the marker is in the prompt
        const summaryStartIndex = fullText.lastIndexOf(summaryMarker);
        const detailedReadingStartIndex = fullText.lastIndexOf(detailedReadingMarker);

        if (summaryStartIndex !== -1 && detailedReadingStartIndex !== -1 && summaryStartIndex < detailedReadingStartIndex) {
            const summary = fullText.substring(summaryStartIndex + summaryMarker.length, detailedReadingStartIndex).trim();
            const detailed = fullText.substring(detailedReadingStartIndex).trim();
            setAiSummary(summary);
            setAiReading(detailed);
        } else {
            const readingTextStartIndex = fullText.lastIndexOf("Your Present Path:");
            const readingText = readingTextStartIndex > -1 ? fullText.substring(readingTextStartIndex) : "Could not parse the reading. The spirits are mysterious today.";
            setAiReading(readingText.trim());
            setAiSummary('');
        }
    } catch (error) {
        console.error("Failed to generate AI reading:", error);
        setAiReading("Apologies, the connection to the spirit world is unclear at this moment. The cosmos asks for a moment of peace. Please try again shortly.");
        setAiSummary('');
    } finally {
        setIsGenerating(false);
    }
  }, [generator, category, selectedCards, readingPositions, getInterpretation, aiReading, aiSummary, isGenerating]);
  
  useEffect(() => {
    if (gameState === 'reading' && revealedCards.every(r => r) && !aiReading && !aiSummary) {
        generateAIReading();
    }
  }, [gameState, revealedCards, aiReading, aiSummary, generateAIReading]);

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
            <Button onClick={startGame} size="lg" className="font-cinzel text-lg" disabled={isModelLoading}>
              {isModelLoading ? 'Warming up the cosmos...' : 'Start Reading'}
            </Button>
          </motion.div>
        );
      
      case 'spread':
        return (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center flex flex-col items-center justify-center h-full p-4"
          >
            <h1 className="text-4xl md:text-5xl font-cinzel text-primary mb-2 animate-glow">Choose Your Spread</h1>
            <p className="mt-2 mb-8 text-lg text-foreground/80 font-lato max-w-2xl">
              Select the layout that best fits your question.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {spreadOptions.map((opt, index) => (
                    <motion.div
                        key={opt.name}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
                    >
                        <Button 
                            variant="outline"
                            className="h-auto w-48 flex-col p-6 bg-background/50 backdrop-blur-sm border-primary/30 hover:bg-primary/10 hover:border-primary/70 transition-all duration-300 group shadow-lg hover:shadow-primary/30"
                            onClick={() => handleSpreadSelect(opt.count)}
                        >
                           <div className="text-primary/70 group-hover:text-primary transition-colors duration-300">{opt.icon}</div>
                           <span className="font-cinzel text-lg text-foreground group-hover:text-primary transition-colors duration-300">{opt.name}</span>
                        </Button>
                    </motion.div>
                ))}
            </div>
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
                <h2 className="text-3xl font-cinzel text-primary/90 mb-8 animate-fade-in">Choose {spread} cards that call to you.</h2>
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
          <div className="flex flex-col items-center w-full h-full p-4 overflow-y-auto pt-24 pb-12">
            <h2 className="text-3xl md:text-4xl font-cinzel text-primary mb-2 text-center">Your {category ? readingCategories.find(c => c.name === category)?.label : ''} Reading</h2>
            <p className="font-lato text-foreground/70 mb-6 text-center">Here lies the wisdom you seek.</p>
            <div className="flex flex-wrap justify-center items-start gap-6 md:gap-8 mb-8">
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
                           <p><strong>Current:</strong> {interpretation.current}</p>
                           <p><strong>Future:</strong> {interpretation.future}</p>
                           <p><strong>Divine:</strong> {interpretation.divine}</p>
                         </div>
                       )}
                     </motion.div>
                  )}
                  </AnimatePresence>
                </motion.div>
                )
              })}
            </div>

            <AnimatePresence>
                {revealedCards.every(r => r) && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="w-full max-w-3xl my-8"
                    >
                        {isGenerating && 
                            <div className="flex flex-col items-center gap-4 text-primary/80 animate-pulse">
                                <Sparkles className="w-10 h-10"/>
                                <p className="font-cinzel text-xl">The spirits are whispering...</p>
                            </div>
                        }
                        {aiSummary && (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="bg-primary/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-primary/30 mb-8"
                            >
                                <h3 className="font-cinzel text-2xl text-primary mb-4 text-center animate-glow">Your Reading's Essence</h3>
                                <p className="text-center font-lato text-lg text-foreground/90 whitespace-pre-wrap">{aiSummary}</p>
                            </motion.div>
                        )}
                        {aiReading && (
                            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-primary/20">
                                <h3 className="font-cinzel text-2xl text-primary mb-4 text-center animate-glow">A Message from the Cosmos</h3>
                                <div className="text-left font-lato text-lg text-foreground/90 whitespace-pre-wrap space-y-4">
                                  {aiReading.split('\n\n').map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {revealedCards.every(r => r) && !isGenerating && (
              <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}} className="mt-4">
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
