import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TarotCard from '@/components/TarotCard';
import { tarotDeckData } from '@/data/tarot-deck';
import { TarotCardData, ReadingCategory, InterpretationDetail } from '@/types/tarot';
import { interpretations } from '@/data/interpretations';
import { shuffle } from 'lodash';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Briefcase, Star, Sparkles, Wand, Swords, GlassWater, Linkedin, Mail, User, Code, Zap } from 'lucide-react';

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
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [aiReading, setAiReading] = useState<string>('');
  const [aiSummary, setAiSummary] = useState<string>('');

  const shuffleDeck = useCallback(() => {
    const newDeck = shuffle(tarotDeckData).map(card => ({
      ...card,
      reversed: Math.random() < 0.5
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

  const generateAIReading = useCallback(() => {
    if (isGenerating || !category) return;
    setIsGenerating(true);

    setTimeout(() => {
        const majorArcana = tarotDeckData.slice(0, 22).map(c => c.name);
        const majorArcanaCount = selectedCards.filter(c => majorArcana.includes(c.name)).length;
        
        const suits: { [key: string]: number } = { Wands: 0, Cups: 0, Swords: 0, Pentacles: 0 };
        selectedCards.forEach(card => {
            if (card.name.includes('Wands')) suits.Wands++;
            else if (card.name.includes('Cups')) suits.Cups++;
            else if (card.name.includes('Swords')) suits.Swords++;
            else if (card.name.includes('Pentacles')) suits.Pentacles++;
        });

        let summary = "The cards offer a multifaceted perspective on your situation. ";
        if (majorArcanaCount / selectedCards.length >= 0.5) {
            summary += "Significant life lessons and major themes are at play, as indicated by the presence of several Major Arcana cards. ";
        }

        const dominantSuit = Object.keys(suits).reduce((a, b) => suits[a] > suits[b] ? a : b);
        if (suits[dominantSuit] > 0) {
            const suitThemes: { [key: string]: string } = {
                Wands: 'energy, passion, and creativity',
                Cups: 'emotions, relationships, and intuition',
                Swords: 'thoughts, challenges, and communication',
                Pentacles: 'material aspects, career, and finances'
            };
            summary += `There is a strong focus on ${suitThemes[dominantSuit]}.`;
        } else {
            summary += "Pay close attention to the interplay of forces in your life."
        }
        setAiSummary(summary);

        let reading = "";
        selectedCards.forEach((card, index) => {
            const position = readingPositions[index];
            const interpretation = getInterpretation(card);
            const cardName = `${card.name} ${card.reversed ? '(Reversed)' : ''}`;
            
            let meaning;
            if ('meaning' in interpretation) {
                meaning = interpretation.meaning;
            } else {
                meaning = `for your current situation, it speaks of '${interpretation.current}'. Looking to the future, it advises on '${interpretation.future}'. The divine message is to understand '${interpretation.divine}'.`;
            }

            const narrativeIntro = [
                `Your reading begins with the ${position}, represented by the ${cardName}. This card suggests that`,
                `Following this, the ${cardName} appears in the ${position} position, highlighting that`,
                `Next, the cards reveal the ${cardName} for your ${position}, indicating that`,
                `Moving on, the ${cardName} in the ${position} position sheds light on the fact that`,
                `Then, we see the ${cardName} in the ${position} position, which implies that`,
                `As we near the conclusion, the ${cardName} stands for the ${position}, suggesting`,
                `Finally, in the ${position} position, the ${cardName} points towards a potential outcome. It indicates that`
            ];

            reading += `${narrativeIntro[index] || `For the ${position}, the ${cardName} suggests that`} ${meaning}\n\n`;
        });
        
        reading += `This reading encourages you to reflect on these interconnected messages as you move forward.`;

        setAiReading(reading);
        setIsGenerating(false);
    }, 1500);
  }, [selectedCards, category, readingPositions, isGenerating, getInterpretation]);
  
  useEffect(() => {
    if (gameState === 'reading' && revealedCards.every(r => r) && !aiReading && !aiSummary && !isGenerating) {
        generateAIReading();
    }
  }, [gameState, revealedCards, aiReading, aiSummary, isGenerating, generateAIReading]);

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
            <h1 className="text-5xl md:text-7xl font-cinzel text-primary animate-glow backface-hidden">Mystic Draw</h1>
            <p className="mt-4 mb-2 text-lg md:text-xl max-w-2xl font-lato text-foreground/80">
              Ask the deck your question, clear your mind, and when you're ready, draw your cards to reveal the truth.
            </p>
            <p className="mb-8 text-sm text-foreground/60 font-lato italic">
              ✨ Created for entertainment and fun - let the cards inspire you!
            </p>
            <div className="flex flex-col gap-4 items-center">
              <Button onClick={startGame} size="lg" className="font-cinzel text-lg">
                Start Reading
              </Button>
            </div>
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
            <h1 className="text-4xl md:text-5xl font-cinzel text-primary mb-2 animate-glow backface-hidden">Choose Your Spread</h1>
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
            <h1 className="text-4xl md:text-5xl font-cinzel text-primary mb-2 animate-glow backface-hidden">Choose Your Focus</h1>
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
        const cardsToDisplay = deck.slice(0, 21);
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
                                className="backface-hidden"
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
          <div className="w-full min-h-full">
            <div className="flex flex-col items-center w-full p-4 pt-8 pb-12">
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
                    className="flex flex-col items-center gap-4 backface-hidden"
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
                         <p className="font-lato text-xs text-foreground/70 mt-4 border-t border-primary/20 pt-3">
                          <strong>In Context:</strong> {card.desc}
                         </p>
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
                                  <h3 className="font-cinzel text-2xl text-primary mb-4 text-center animate-glow backface-hidden">Your Reading's Essence</h3>
                                  <p className="text-center font-lato text-lg text-foreground/90 whitespace-pre-wrap">{aiSummary}</p>
                              </motion.div>
                          )}
                          {aiReading && (
                              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-primary/20">
                                  <h3 className="font-cinzel text-2xl text-primary mb-4 text-center animate-glow backface-hidden">A Message from the Cosmos</h3>
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
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full bg-background font-lato text-foreground flex items-center justify-center relative overflow-hidden">
      <div className="w-full h-screen flex flex-col">
        <Tabs defaultValue="home" className="w-full h-full flex flex-col">
          <TabsList className="mx-auto mt-4 bg-background/50 backdrop-blur-sm border border-primary/30">
            <TabsTrigger 
              value="home" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-cinzel text-lg px-6"
            >
              Home
            </TabsTrigger>
            <TabsTrigger 
              value="about" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-cinzel text-lg px-6"
            >
              About Us
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="home" className="flex-1 mt-0 overflow-y-auto">
            <AnimatePresence mode="wait">
              <div key={gameState} className="w-full min-h-full flex items-center justify-center">
                {renderGameState()}
              </div>
            </AnimatePresence>
          </TabsContent>
          
          <TabsContent value="about" className="flex-1 mt-0 overflow-y-auto">
            <div className="max-w-4xl mx-auto p-8 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-5xl font-cinzel text-primary mb-8 animate-glow backface-hidden">About Mystic Draw</h1>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-background/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-primary/30"
              >
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-6 h-6 text-primary" />
                  <h2 className="font-cinzel text-2xl text-primary">Meet the Creator</h2>
                </div>
                <div className="font-lato text-lg text-foreground/90 space-y-4 leading-relaxed">
                  <p>Hey, I'm <strong className="text-primary">Satyam Chaudhary</strong>.</p>
                  <p>I built Mystic Draw as a small side project while exploring new ways to create web apps using AI.</p>
                  <p>Thanks for trying it out :)</p>
                  <p className="text-right italic text-primary">— Satyam</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-background/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-primary/30"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-6 h-6 text-primary" />
                  <h2 className="font-cinzel text-2xl text-primary">How It Was Built</h2>
                </div>
                <div className="font-lato text-lg text-foreground/90 space-y-4 leading-relaxed">
                  <p>This app was made using <strong className="text-primary">Lovable.dev</strong>, a platform that lets you build by simply describing what you want — a method known as <strong className="text-primary">Vibe Coding</strong>. It's a fresh way to create, where you code less and feel more.</p>
                  <p>This project showcases the power of natural language development, where you describe what you want rather than writing traditional code line by line.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-background/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-primary/30"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-6 h-6 text-primary" />
                  <h2 className="font-cinzel text-2xl text-primary">Why Tarot + AI</h2>
                </div>
                <div className="font-lato text-lg text-foreground/90 space-y-4 leading-relaxed">
                  <p>For the AI tarot readings, I used <strong className="text-primary">Google's Gemini model</strong> to make sure each card gives a real, meaningful response based on your actual choice — not something random.</p>
                  <p>This project mixes something ancient (tarot) with something new (AI), and for me, it's just one way of learning by building — combining old ideas with modern tools.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="technical-details" className="border-primary/30">
                    <AccordionTrigger className="font-cinzel text-xl text-primary hover:text-primary/80">
                      🛠️ Technical Details
                    </AccordionTrigger>
                    <AccordionContent className="font-lato text-foreground/90 space-y-4 pt-4">
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-cinzel text-lg text-primary mb-2 flex items-center gap-2">
                            <Code className="w-5 h-5" />
                            Platform & Methodology
                          </h3>
                          <p>Built with <strong>Lovable.dev</strong>, an AI-powered platform that enables rapid web development through natural language descriptions. This project showcases the power of <strong>Vibe Coding</strong> - a development approach where you describe what you want rather than writing traditional code line by line.</p>
                        </div>
                        
                        <div>
                          <h3 className="font-cinzel text-lg text-primary mb-2 flex items-center gap-2">
                            <Star className="w-5 h-5" />
                            Tech Stack
                          </h3>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li><strong>React 18</strong> - Modern UI library with hooks and functional components</li>
                            <li><strong>TypeScript</strong> - Type-safe JavaScript for better development experience</li>
                            <li><strong>Tailwind CSS</strong> - Utility-first CSS framework for responsive design</li>
                            <li><strong>Framer Motion</strong> - Smooth animations and transitions</li>
                            <li><strong>shadcn/ui</strong> - Beautiful, accessible component library</li>
                            <li><strong>Radix UI</strong> - Unstyled, accessible UI primitives</li>
                            <li><strong>Vite</strong> - Fast build tool and development server</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-cinzel text-lg text-primary mb-2 flex items-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            AI Integration
                          </h3>
                          <p><strong>Google Gemini AI</strong> powers the tarot interpretations, providing contextual and meaningful readings based on your selected cards and chosen focus area. The AI generates personalized insights rather than generic responses.</p>
                        </div>
                        
                        <div>
                          <h3 className="font-cinzel text-lg text-primary mb-2 flex items-center gap-2">
                            <Wand className="w-5 h-5" />
                            Features
                          </h3>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Interactive tarot card selection with physics-based animations</li>
                            <li>Multiple spread options (3, 5, and 7 card layouts)</li>
                            <li>Category-specific interpretations (Love, Career, Spiritual, General)</li>
                            <li>AI-generated personalized readings</li>
                            <li>Fully responsive design for all devices</li>
                            <li>Mystical UI with custom animations and effects</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-background/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-primary/30"
              >
                <h2 className="font-cinzel text-2xl text-primary mb-6 text-center">Connect with Me</h2>
                <div className="flex justify-center gap-8">
                  <a 
                    href="https://linkedin.com/in/satyam-jat-374481338" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-lato">LinkedIn</span>
                  </a>
                  <a 
                    href="mailto:pcerror009@gmail.com"
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors duration-300 group"
                  >
                    <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-lato">Email</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
