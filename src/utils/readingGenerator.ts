
import { TarotCardData, ReadingCategory } from '@/types/tarot';
import { interpretations } from '@/data/interpretations';

interface ReadingContext {
  cards: TarotCardData[];
  category: ReadingCategory;
  positions: string[];
  majorArcanaCount: number;
  suitDistribution: { [key: string]: number };
  reversedCount: number;
}

// Enhanced summary templates with more variety
const summaryTemplates = {
  majorArcana: {
    high: [
      "The universe is speaking loudly through powerful archetypal forces. Major life themes and spiritual lessons dominate this reading.",
      "Significant karmic patterns and soul lessons are at work. The Major Arcana indicates this is a pivotal time in your journey.",
      "Divine forces are actively shaping your path. These cards speak of transformation on a deep, spiritual level.",
      "The cosmos has much to say - multiple Major Arcana cards suggest you're experiencing profound life changes.",
      "Archetypal energies are converging in your life. This reading reveals major spiritual and psychological themes.",
      "The universe is orchestrating significant changes. These powerful cards indicate a transformative period ahead.",
      "Your soul is being called to grow in important ways. The Major Arcana speaks of destiny and spiritual evolution."
    ],
    medium: [
      "A balanced mix of spiritual guidance and practical wisdom emerges. The cosmos offers both direction and actionable insights.",
      "Both higher purpose and earthly matters require your attention. The cards show a bridge between spiritual and material realms.",
      "Universal themes blend with practical concerns. Your reading combines cosmic guidance with down-to-earth wisdom.",
      "The sacred and mundane dance together in your reading. Both spiritual growth and practical action are highlighted.",
      "Your journey encompasses both earthly lessons and spiritual insights. Balance is key to your current path."
    ],
    low: [
      "Practical, everyday energies dominate this reading. The focus is on concrete actions and tangible outcomes.",
      "The cards speak to immediate concerns and practical matters. Ground-level wisdom guides your path forward.",
      "Earth energy is strong - your reading emphasizes practical steps and material world considerations.",
      "This reading is grounded in the here and now. Practical wisdom and tangible actions take precedence.",
      "The universe offers practical guidance for your current situation. Focus on concrete steps and real-world solutions."
    ]
  },
  suits: {
    Wands: [
      "Passionate fire energy blazes through your reading. Creativity, ambition, and dynamic action are your allies.",
      "The element of fire guides you - embrace your passions, take inspired action, and trust your creative spark.",
      "Entrepreneurial energy and creative force are prominent. Your enthusiasm and vision will light the way.",
      "Fire signs point to passion and creativity. Your inner flame is ready to ignite new possibilities.",
      "Creative fire burns bright in your reading. Channel this passionate energy into meaningful action.",
      "The spark of inspiration is strong. Let your creative fire illuminate new paths and possibilities."
    ],
    Cups: [
      "Emotional depths and intuitive wisdom flow through your cards. Hearts, feelings, and relationships take center stage.",
      "The water element speaks of emotional healing, deep connections, and trusting your intuitive guidance.",
      "Love, compassion, and emotional intelligence are your superpowers in this situation.",
      "Heart wisdom flows abundantly. Your emotions and intuition are powerful guides right now.",
      "The cups overflow with emotional insight. Trust your feelings and honor your heart's wisdom.",
      "Water energy brings healing and connection. Your emotional world holds important keys to understanding."
    ],
    Swords: [
      "Mental clarity and communication are essential themes. Truth, justice, and clear thinking cut through confusion.",
      "The air element demands honest communication and intellectual approach. Think clearly and speak your truth.",
      "Challenges of the mind require sharp focus and honest assessment. Truth may be difficult but necessary.",
      "Sword energy cuts to the heart of matters. Mental clarity and honest communication are your tools.",
      "The power of thought and word are emphasized. Your intellect and communication skills are highlighted.",
      "Air signs point to mental challenges and breakthroughs. Think clearly and communicate with precision."
    ],
    Pentacles: [
      "Material prosperity and earthly wisdom ground your reading. Focus on practical matters, resources, and tangible results.",
      "The earth element speaks of building lasting foundations, managing resources wisely, and creating material security.",
      "Patience, persistence, and practical action will manifest the abundance you seek.",
      "Earth energy emphasizes stability and material progress. Build solid foundations for lasting success.",
      "Pentacles point to practical abundance and earthly achievement. Your efforts in the material world are highlighted.",
      "Grounded energy supports material manifestation. Focus on practical steps and tangible progress."
    ]
  },
  reversed: {
    high: [
      "Many reversed cards suggest internal work is needed. Turn inward to find the wisdom that external circumstances are reflecting.",
      "The abundance of reversed energy indicates blocks that need clearing. Self-reflection and inner healing are priorities.",
      "Upside-down energies call for a different perspective. What seems like obstacles may be redirections toward your highest good.",
      "Internal landscapes need attention. These reversed cards point to inner healing and perspective shifts.",
      "Shadow work and inner exploration are emphasized. Look within to understand what's blocking your progress.",
      "The universe calls for introspection. Many reversed cards indicate internal processing is required."
    ],
    medium: [
      "Some cards appear reversed, suggesting a balance between external action and internal reflection is needed.",
      "Mixed energies indicate both progress and pause are necessary. Trust the rhythm of advance and retreat.",
      "Balance between action and reflection is key. Some energies flow forward while others require inner work.",
      "The dance between internal and external is highlighted. Honor both your need for action and for contemplation."
    ],
    low: [
      "Clear, upright energy flows freely through your reading. The path ahead is illuminated and obstacles are minimal.",
      "Positive momentum and clear direction characterize this reading. Trust the forward flow of energy.",
      "Energy flows smoothly in your favor. The cards show clear paths and positive momentum.",
      "Upright energy indicates alignment and flow. Move forward with confidence in your chosen direction."
    ]
  },
  // Card combination patterns
  combinations: {
    majorMinor: [
      "The blend of archetypal and practical energies creates a powerful synthesis in your reading.",
      "Universal themes intersect with daily life, creating opportunities for meaningful growth."
    ],
    courtCards: [
      "The presence of court cards indicates important people or personality aspects affecting your situation.",
      "Different aspects of yourself or influential people are highlighted in this reading."
    ],
    aces: [
      "New beginnings and fresh potential are strongly indicated by the presence of Aces.",
      "Seeds of possibility are being planted. Multiple Aces suggest powerful new starts."
    ]
  }
};

// Position-specific interpretation logic
const positionMeanings = {
  threeCard: {
    "Past": ["foundation", "lessons", "history", "root", "background"],
    "Present": ["current", "situation", "now", "today", "immediate"],
    "Future": ["outcome", "potential", "coming", "ahead", "destiny"]
  },
  fiveCard: {
    "Situation": ["current", "now", "immediate", "present"],
    "Challenge": ["obstacle", "difficulty", "test", "opposition"],
    "Past": ["foundation", "history", "lessons", "background"],
    "Future": ["potential", "outcome", "coming", "ahead"],
    "Outcome": ["result", "conclusion", "final", "resolution"]
  },
  sevenCard: {
    "Self": ["identity", "current", "you", "personal"],
    "Challenge": ["obstacle", "difficulty", "test", "opposition"],
    "Past": ["foundation", "history", "lessons", "background"],
    "Future": ["potential", "coming", "ahead", "timeline"],
    "Advice": ["guidance", "divine", "wisdom", "counsel"],
    "Hopes/Fears": ["desires", "anxieties", "expectations", "concerns"],
    "Outcome": ["result", "conclusion", "final", "resolution"]
  }
};

// Enhanced narrative connectors
const narrativeConnectors = [
  "This foundation leads us to consider",
  "Building upon this energy, we see",
  "The next layer reveals",
  "Complementing this wisdom,",
  "In harmony with this message,",
  "Expanding on this theme,",
  "The cards further illuminate",
  "Adding depth to this insight,",
  "Weaving together with this energy,",
  "The cosmic tapestry continues with",
  "Following this thread, we discover",
  "The story deepens as we explore",
  "Connecting to this wisdom,",
  "The universal message continues",
  "Building on this revelation"
];

// Category-specific introductions with more variety
const categoryIntros = {
  love: [
    "In matters of the heart, the cosmos reveals",
    "The universe speaks to your romantic journey through",
    "Your heart's path is illuminated by",
    "Love's mysteries unfold through",
    "The divine guidance for your romantic life emerges in",
    "Your soul's approach to love is reflected in",
    "The cosmic dance of romance shows itself through",
    "Your heart's wisdom is revealed by"
  ],
  career: [
    "Your professional path is guided by",
    "In the realm of career and ambition, the cards show",
    "The universe illuminates your work life through",
    "Your calling and purpose emerge through",
    "Professional wisdom flows through",
    "Your career journey is revealed by",
    "The cosmos speaks to your vocational path via",
    "Your work-life destiny unfolds through"
  ],
  spiritual: [
    "On your sacred journey, the divine reveals",
    "Your soul's evolution is reflected in",
    "The spiritual realm communicates through",
    "Your higher purpose unfolds via",
    "Sacred wisdom emerges through",
    "Your spiritual awakening is guided by",
    "The divine consciousness speaks through",
    "Your soul's journey is illuminated by"
  ],
  general: [
    "The tapestry of your life is woven with",
    "Your current chapter is illuminated by",
    "The universe guides your path through",
    "Life's wisdom emerges through",
    "Your journey's direction is revealed by",
    "The cosmic guidance for your life appears in",
    "Your soul's current lesson unfolds through",
    "The universal wisdom for your path shows itself via"
  ]
};

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function analyzeSuits(cards: TarotCardData[]): { [key: string]: number } {
  const suits = { Wands: 0, Cups: 0, Swords: 0, Pentacles: 0 };
  cards.forEach(card => {
    if (card.name.includes('Wands')) suits.Wands++;
    else if (card.name.includes('Cups')) suits.Cups++;
    else if (card.name.includes('Swords')) suits.Swords++;
    else if (card.name.includes('Pentacles')) suits.Pentacles++;
  });
  return suits;
}

function getMajorArcanaCount(cards: TarotCardData[]): number {
  const majorArcana = ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit', 'Wheel of Fortune', 'Justice', 'The Hanged Man', 'Death', 'Temperance', 'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgement', 'The World'];
  return cards.filter(card => majorArcana.includes(card.name)).length;
}

// Smart interpretation selection based on position and context
function selectBestInterpretation(card: TarotCardData, position: string, category: ReadingCategory): string {
  const cardInterpretation = interpretations[card.name];
  
  if (!cardInterpretation || !cardInterpretation[category]) {
    // Fallback to basic meaning
    return card.reversed ? card.meaning_rev : card.meaning_up;
  }
  
  const categoryInterpretation = cardInterpretation[category]!;
  const interpretation = card.reversed ? categoryInterpretation.reversed : categoryInterpretation.upright;
  
  // Select the most appropriate aspect based on position
  const posLower = position.toLowerCase();
  
  if (posLower.includes('past') || posLower.includes('history') || posLower.includes('foundation')) {
    return interpretation.current; // Past contexts use "current" to describe what was
  } else if (posLower.includes('future') || posLower.includes('outcome') || posLower.includes('ahead') || posLower.includes('coming')) {
    return interpretation.future;
  } else if (posLower.includes('advice') || posLower.includes('guidance') || posLower.includes('divine') || posLower.includes('counsel')) {
    return interpretation.divine;
  } else {
    // For present, situation, self, challenge, etc., use current
    return interpretation.current;
  }
}

// Enhanced summary generation with card combination analysis
export function generateDynamicSummary(context: ReadingContext): string {
  const { cards, majorArcanaCount, suitDistribution, reversedCount } = context;
  
  let summary = "";
  
  // Major Arcana analysis
  const majorRatio = majorArcanaCount / cards.length;
  let majorLevel: 'high' | 'medium' | 'low';
  if (majorRatio >= 0.6) majorLevel = 'high';
  else if (majorRatio >= 0.3) majorLevel = 'medium';
  else majorLevel = 'low';
  
  summary += getRandomElement(summaryTemplates.majorArcana[majorLevel]) + " ";
  
  // Suit analysis - only mention if there's a clear dominance
  const dominantSuit = Object.keys(suitDistribution).reduce((a, b) => 
    suitDistribution[a] > suitDistribution[b] ? a : b
  );
  
  if (suitDistribution[dominantSuit] >= 2 && cards.length >= 3) {
    summary += getRandomElement(summaryTemplates.suits[dominantSuit]) + " ";
  }
  
  // Card combination insights
  const aceCount = cards.filter(card => card.name.startsWith('Ace')).length;
  if (aceCount >= 2) {
    summary += getRandomElement(summaryTemplates.combinations.aces) + " ";
  }
  
  // Reversed card analysis
  const reversedRatio = reversedCount / cards.length;
  let reversedLevel: 'high' | 'medium' | 'low';
  if (reversedRatio >= 0.5) reversedLevel = 'high';
  else if (reversedRatio >= 0.3) reversedLevel = 'medium';
  else reversedLevel = 'low';
  
  summary += getRandomElement(summaryTemplates.reversed[reversedLevel]);
  
  return summary.trim();
}

// Enhanced contextual reading with position awareness
export function generateContextualReading(context: ReadingContext): string {
  const { cards, category, positions } = context;
  
  let reading = getRandomElement(categoryIntros[category]) + " ";
  
  cards.forEach((card, index) => {
    const position = positions[index];
    
    if (index > 0) {
      reading += getRandomElement(narrativeConnectors) + " ";
    }
    
    const cardName = `${card.name}${card.reversed ? ' (Reversed)' : ''}`;
    const interpretation = selectBestInterpretation(card, position, category);
    
    // Create more natural, position-aware descriptions
    let positionText = "";
    const posLower = position.toLowerCase();
    
    if (posLower.includes('past') || posLower.includes('history')) {
      positionText = `reflecting on your past, ${interpretation.toLowerCase()}`;
    } else if (posLower.includes('future') || posLower.includes('outcome') || posLower.includes('ahead')) {
      positionText = `looking toward what's coming, ${interpretation.toLowerCase()}`;
    } else if (posLower.includes('present') || posLower.includes('situation') || posLower.includes('now')) {
      positionText = `in your current situation, ${interpretation.toLowerCase()}`;
    } else if (posLower.includes('advice') || posLower.includes('guidance')) {
      positionText = `as divine guidance, ${interpretation.toLowerCase()}`;
    } else if (posLower.includes('challenge') || posLower.includes('obstacle')) {
      positionText = `regarding your challenges, ${interpretation.toLowerCase()}`;
    } else if (posLower.includes('self') || posLower.includes('you')) {
      positionText = `about yourself, ${interpretation.toLowerCase()}`;
    } else if (posLower.includes('hopes') || posLower.includes('fears')) {
      positionText = `concerning your deepest hopes and fears, ${interpretation.toLowerCase()}`;
    } else {
      positionText = `in the ${position.toLowerCase()}, ${interpretation.toLowerCase()}`;
    }
    
    reading += `the ${cardName} appears, suggesting that ${positionText} `;
    reading += "\n\n";
  });
  
  // Enhanced conclusions with more variety
  const conclusions = [
    "Together, these cards weave a story of transformation and growth, encouraging you to trust the journey ahead.",
    "The threads of destiny revealed here remind you that every challenge contains the seeds of wisdom.",
    "This cosmic guidance invites you to embrace both the known and unknown aspects of your path.",
    "The universe speaks through these symbols, offering both comfort and challenge as you move forward.",
    "These sacred messages remind you that you have the power to shape your destiny through conscious choice.",
    "The wisdom in these cards forms a map for your journey, highlighting both opportunities and important lessons.",
    "This reading reveals the beautiful complexity of your current path, honoring both your challenges and your strength.",
    "The cards have spoken with one voice, revealing the underlying patterns that shape your experience.",
    "Through these sacred symbols, the universe offers both practical guidance and spiritual insight for your journey.",
    "This divination creates a bridge between your inner wisdom and outer circumstances, illuminating the path forward."
  ];
  
  reading += getRandomElement(conclusions);
  
  return reading;
}
