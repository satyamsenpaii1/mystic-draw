import React, { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TarotCard from '@/components/TarotCard';
import { tarotDeckData } from '@/data/tarot-deck';
import { TarotCardData, ReadingCategory } from '@/types/tarot';
import { interpretations } from '@/data/interpretations';
import { shuffle } from 'lodash';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingSpinner } from "@/components/ui/loading-spinner";

type GameState = 'welcome' | 'category' | 'reading' | 'result';

const Index = () => {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [selectedCards, setSelectedCards] = useState<TarotCardData[]>([]);
  const [category, setCategory] = useState<ReadingCategory | null>(null);
  const [aiReading, setAiReading] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const readingTypes = {
    love: {
      title: 'Love & Relationships',
      description: 'Explore matters of the heart, romantic connections, and emotional bonds',
      positions: ['Your Heart', 'Their Heart', 'The Connection'],
      icon: '💕',
      gradient: 'from-rose-500/20 to-pink-500/20'
    },
    career: {
      title: 'Career & Success',
      description: 'Navigate your professional path, ambitions, and material goals',
      positions: ['Current Situation', 'Challenges', 'Outcome'],
      icon: '⭐',
      gradient: 'from-amber-500/20 to-yellow-500/20'
    },
    personal: {
      title: 'Personal Growth',
      description: 'Journey of self-discovery, inner wisdom, and spiritual development',
      positions: ['Past Influence', 'Present Moment', 'Future Path'],
      icon: '🌟',
      gradient: 'from-purple-500/20 to-indigo-500/20'
    }
  };

  const readingPositions = category ? readingTypes[category].positions : ['Past', 'Present', 'Future'];

  const resetReading = () => {
    setSelectedCards([]);
    setAiReading('');
    setCategory(null);
    setGameState('welcome');
  };

  const getInterpretation = (card: TarotCardData, position: string): string => {
    if (!category) return card.reversed ? card.meaning_rev : card.meaning_up;
    
    const cardInterpretation = interpretations[card.name];
    if (!cardInterpretation) return card.reversed ? card.meaning_rev : card.meaning_up;
    
    const categoryInterpretation = cardInterpretation[category];
    if (!categoryInterpretation) return card.reversed ? card.meaning_rev : card.meaning_up;
    
    const interpretation = card.reversed ? categoryInterpretation.reversed : categoryInterpretation.upright;
    
    const posLower = position.toLowerCase();
    let selectedMeaning = "";
    
    if (posLower.includes('past') || posLower.includes('influence')) {
      selectedMeaning = interpretation.past;
    } else if (posLower.includes('future') || posLower.includes('outcome') || posLower.includes('path')) {
      selectedMeaning = interpretation.future;
    } else if (posLower.includes('advice') || posLower.includes('guidance')) {
      selectedMeaning = interpretation.advice;
    } else {
      selectedMeaning = interpretation.current;
    }
    
    return selectedMeaning;
  };

  const generateAIReading = useCallback(() => {
    if (!category || selectedCards.length === 0) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      const readingType = readingTypes[category];
      let reading = `Your ${readingType.title} Reading reveals profound insights:\n\n`;
      
      selectedCards.forEach((card, index) => {
        const position = readingPositions[index];
        const interpretation = getInterpretation(card, position);
        reading += `**${position}** - ${card.name} ${card.reversed ? '(Reversed)' : ''}:\n${interpretation}\n\n`;
      });
      
      const themes = selectedCards.map(card => card.suit || 'Major Arcana').filter((v, i, arr) => arr.indexOf(v) === i);
      const energyLevel = selectedCards.filter(card => !card.reversed).length;
      
      reading += `**Overall Theme**: The presence of ${themes.join(' and ')} energies suggests `;
      if (energyLevel >= 2) {
        reading += `a period of positive momentum and forward movement. `;
      } else if (energyLevel === 1) {
        reading += `a time of careful consideration and measured progress. `;
      } else {
        reading += `an opportunity for deep reflection and internal transformation. `;
      }
      
      reading += `Trust your intuition as you navigate this journey, and remember that every card contains both challenges and gifts.`;
      
      setAiReading(reading);
      setIsLoading(false);
    }, 2000);
  }, [category, selectedCards, readingPositions]);

  const selectCategory = (selectedCategory: ReadingCategory) => {
    setCategory(selectedCategory);
    setGameState('reading');
  };

  const performReading = () => {
    const shuffledDeck = shuffle([...tarotDeckData]);
    const drawn = shuffledDeck.slice(0, 3).map(card => ({
      ...card,
      reversed: Math.random() < 0.3
    }));
    
    setSelectedCards(drawn);
    setGameState('result');
    generateAIReading();
  };

  const WelcomeScreen = () => (
    <motion.div 
      className="text-center max-w-4xl mx-auto px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="mb-8"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-glow">
          Mystical Tarot
        </h1>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
        <p className="font-inter text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
          Step into the ancient wisdom of the cards. Discover insights, guidance, and clarity 
          through the mystical art of tarot reading.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Button 
          onClick={() => setGameState('category')}
          size="lg"
          className="group relative overflow-hidden bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90 text-primary-foreground font-inter font-medium px-8 py-4 rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
        >
          <span className="relative z-10">Begin Your Journey</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Button>
      </motion.div>

      <motion.div 
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {Object.entries(readingTypes).map(([key, type], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
          >
            <Card className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-elegant bg-gradient-to-br ${type.gradient} backdrop-blur-sm border-primary/20 hover:border-primary/40`}>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  {type.icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">
                  {type.title}
                </h3>
                <p className="font-inter text-sm text-foreground/70 leading-relaxed">
                  {type.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );

  const CategoryScreen = () => (
    <motion.div 
      className="text-center max-w-4xl mx-auto px-4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Choose Your Path
      </motion.h2>
      <motion.p 
        className="font-inter text-lg text-foreground/70 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Select the area of life you'd like to explore through the wisdom of the cards.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {Object.entries(readingTypes).map(([key, type], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
          >
            <Card 
              className={`group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-elegant bg-gradient-to-br ${type.gradient} backdrop-blur-sm border-primary/20 hover:border-primary/60 overflow-hidden relative`}
              onClick={() => selectCategory(key as ReadingCategory)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform -skew-x-12 translate-x-full group-hover:translate-x-[-100%]"></div>
              <CardContent className="p-8 text-center relative z-10">
                <motion.div 
                  className="text-4xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {type.icon}
                </motion.div>
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {type.title}
                </h3>
                <p className="font-inter text-foreground/70 leading-relaxed mb-6">
                  {type.description}
                </p>
                <div className="space-y-2">
                  {type.positions.map((position, i) => (
                    <div key={i} className="font-inter text-sm text-foreground/60 bg-background/50 rounded-full px-3 py-1">
                      {position}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Button 
          onClick={() => setGameState('welcome')}
          variant="outline"
          className="font-inter border-primary/30 text-foreground/70 hover:border-primary hover:text-foreground transition-all duration-300"
        >
          Back to Welcome
        </Button>
      </motion.div>
    </motion.div>
  );

  const ReadingScreen = () => (
    <motion.div 
      className="text-center max-w-3xl mx-auto px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="text-4xl mb-4 animate-pulse-soft">
          {readingTypes[category!].icon}
        </div>
        <h2 className="font-playfair text-4xl font-bold mb-4 text-foreground">
          {readingTypes[category!].title}
        </h2>
        <p className="font-inter text-lg text-foreground/70 mb-8">
          {readingTypes[category!].description}
        </p>
      </motion.div>

      <motion.div 
        className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h3 className="font-playfair text-xl font-semibold mb-6 text-foreground">Your Reading Positions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {readingPositions.map((position, index) => (
            <motion.div
              key={position}
              className="bg-background/60 border border-primary/10 rounded-lg p-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
            >
              <div className="text-2xl mb-2 text-primary font-bold">{index + 1}</div>
              <div className="font-inter text-sm font-medium text-foreground">{position}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Button 
          onClick={performReading}
          size="lg"
          className="group relative overflow-hidden bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90 text-primary-foreground font-inter font-medium px-8 py-4 rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
        >
          <span className="relative z-10">Draw Your Cards</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Button>
        
        <div>
          <Button 
            onClick={() => setGameState('category')}
            variant="ghost"
            className="font-inter text-foreground/70 hover:text-foreground transition-colors duration-300"
          >
            Choose Different Path
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );

  const ResultScreen = () => (
    <motion.div 
      className="max-w-6xl mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="text-3xl mb-4">
          {readingTypes[category!].icon}
        </div>
        <h2 className="font-playfair text-4xl font-bold mb-4 text-foreground">
          Your {readingTypes[category!].title} Reading
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
      </motion.div>
      
      <div className="flex flex-wrap justify-center items-start gap-8 mb-12">
        {selectedCards.map((card, index) => {
          const interpretationText = getInterpretation(card, readingPositions[index]);
          return (
          <motion.div 
            key={index}
            className="flex flex-col items-center max-w-sm"
            initial={{ opacity: 0, y: 50, rotateY: 180 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ 
              delay: 0.3 + index * 0.2, 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
          >
            <div className="relative mb-6 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative">
                <TarotCard 
                  card={card} 
                  isFlipped={true}
                  className="w-48 h-80 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
            
            <Card className="w-full bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full text-sm font-bold mb-2">
                    {index + 1}
                  </div>
                  <h4 className="font-playfair text-lg font-semibold text-primary mb-1">
                    {readingPositions[index]}
                  </h4>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3 text-center">
                  {card.name} {card.reversed ? '(Reversed)' : ''}
                </h3>
                <p className="font-inter text-sm text-foreground/80 leading-relaxed mb-4">
                  {interpretationText}
                </p>
                <div className="border-t border-primary/20 pt-4">
                  <p className="font-inter text-xs text-foreground/60 leading-relaxed">
                    <strong className="text-foreground/80">Essence:</strong> {card.desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Card className="bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-md border-primary/30 shadow-elegant">
          <CardContent className="p-8">
            <h3 className="font-playfair text-2xl font-bold mb-6 text-center text-foreground flex items-center justify-center gap-3">
              <span className="text-primary">✨</span>
              Your Personal Reading
              <span className="text-primary">✨</span>
            </h3>
            
            {isLoading ? (
              <div className="flex justify-center py-12">
                <LoadingSpinner size="lg" text="Channeling cosmic insights..." />
              </div>
            ) : (
              <motion.div 
                className="prose prose-invert max-w-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="font-inter text-foreground/90 leading-relaxed space-y-4 text-center">
                  {aiReading.split('\n\n').map((paragraph, index) => (
                    <motion.p 
                      key={index}
                      className={paragraph.startsWith('**') ? 'font-semibold text-primary text-lg' : ''}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      {paragraph.replace(/\*\*(.*?)\*\*/g, '$1')}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div 
        className="text-center mt-12 space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <Button 
          onClick={resetReading}
          size="lg"
          className="group relative overflow-hidden bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90 text-primary-foreground font-inter font-medium px-8 py-4 rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 mr-4"
        >
          <span className="relative z-10">New Reading</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Button>
        
        <Button 
          onClick={() => setGameState('category')}
          variant="outline"
          className="font-inter border-primary/30 text-foreground/70 hover:border-primary hover:text-foreground transition-all duration-300"
        >
          Different Path
        </Button>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Enhanced background with subtle patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      
      <div className="relative z-10 container mx-auto py-12 md:py-20">
        <AnimatePresence mode="wait">
          {gameState === 'welcome' && <WelcomeScreen key="welcome" />}
          {gameState === 'category' && <CategoryScreen key="category" />}
          {gameState === 'reading' && <ReadingScreen key="reading" />}
          {gameState === 'result' && <ResultScreen key="result" />}
        </AnimatePresence>
      </div>

      {/* Enhanced FAQ Section */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="font-playfair text-3xl font-bold text-center mb-8 text-foreground">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                id: "accuracy",
                question: "How accurate are tarot readings?",
                answer: "Tarot readings offer guidance and insights rather than concrete predictions. They help you reflect on your current situation and explore different perspectives. The accuracy depends on your openness to the messages and how well you connect with the symbolism of the cards."
              },
              {
                id: "reversed",
                question: "What do reversed cards mean?",
                answer: "Reversed cards often represent internal energies, blocked potential, or lessons that need more attention. They're not necessarily negative - they can indicate a need for introspection or a different approach to the situation at hand."
              },
              {
                id: "frequency",
                question: "How often should I get a reading?",
                answer: "There's no set rule, but many people find weekly or monthly readings helpful for guidance. For specific questions or major life decisions, you might want a reading when you feel the need for clarity. Trust your intuition about timing."
              },
              {
                id: "interpretation",
                question: "How should I interpret my reading?",
                answer: "Consider how the cards relate to your current situation and feelings. Look for patterns, themes, and connections between the cards. Trust your intuition - often your first impression holds important insights. Remember that you have the power to shape your future."
              }
            ].map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-all duration-300"
              >
                <AccordionTrigger className="font-playfair text-lg font-medium text-foreground hover:text-primary transition-colors duration-300 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-inter text-foreground/80 leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.div>

      {/* Premium Footer */}
      <footer className="relative z-10 border-t border-primary/20 bg-card/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="font-inter text-sm text-foreground/60 mb-2">
              Created with cosmic energy and digital magic
            </p>
            <div className="flex justify-center items-center gap-4 text-xs text-foreground/40">
              <span>✨ Trust the Journey</span>
              <span>•</span>
              <span>🌙 Embrace the Mystery</span>
              <span>•</span>
              <span>⭐ Follow Your Intuition</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
