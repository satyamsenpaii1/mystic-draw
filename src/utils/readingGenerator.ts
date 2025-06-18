
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

const summaryTemplates = {
  majorArcana: {
    high: [
      "The universe is speaking loudly through powerful archetypal forces. Major life themes and spiritual lessons dominate this reading.",
      "Significant karmic patterns and soul lessons are at work. The Major Arcana indicates this is a pivotal time in your journey.",
      "Divine forces are actively shaping your path. These cards speak of transformation on a deep, spiritual level."
    ],
    medium: [
      "A balanced mix of spiritual guidance and practical wisdom emerges. The cosmos offers both direction and actionable insights.",
      "Both higher purpose and earthly matters require your attention. The cards show a bridge between spiritual and material realms."
    ],
    low: [
      "Practical, everyday energies dominate this reading. The focus is on concrete actions and tangible outcomes.",
      "The cards speak to immediate concerns and practical matters. Ground-level wisdom guides your path forward."
    ]
  },
  suits: {
    Wands: [
      "Passionate fire energy blazes through your reading. Creativity, ambition, and dynamic action are your allies.",
      "The element of fire guides you - embrace your passions, take inspired action, and trust your creative spark.",
      "Entrepreneurial energy and creative force are prominent. Your enthusiasm and vision will light the way."
    ],
    Cups: [
      "Emotional depths and intuitive wisdom flow through your cards. Hearts, feelings, and relationships take center stage.",
      "The water element speaks of emotional healing, deep connections, and trusting your intuitive guidance.",
      "Love, compassion, and emotional intelligence are your superpowers in this situation."
    ],
    Swords: [
      "Mental clarity and communication are essential themes. Truth, justice, and clear thinking cut through confusion.",
      "The air element demands honest communication and intellectual approach. Think clearly and speak your truth.",
      "Challenges of the mind require sharp focus and honest assessment. Truth may be difficult but necessary."
    ],
    Pentacles: [
      "Material prosperity and earthly wisdom ground your reading. Focus on practical matters, resources, and tangible results.",
      "The earth element speaks of building lasting foundations, managing resources wisely, and creating material security.",
      "Patience, persistence, and practical action will manifest the abundance you seek."
    ]
  },
  reversed: {
    high: [
      "Many reversed cards suggest internal work is needed. Turn inward to find the wisdom that external circumstances are reflecting.",
      "The abundance of reversed energy indicates blocks that need clearing. Self-reflection and inner healing are priorities.",
      "Upside-down energies call for a different perspective. What seems like obstacles may be redirections toward your highest good."
    ],
    medium: [
      "Some cards appear reversed, suggesting a balance between external action and internal reflection is needed.",
      "Mixed energies indicate both progress and pause are necessary. Trust the rhythm of advance and retreat."
    ],
    low: [
      "Clear, upright energy flows freely through your reading. The path ahead is illuminated and obstacles are minimal.",
      "Positive momentum and clear direction characterize this reading. Trust the forward flow of energy."
    ]
  }
};

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
  "The final piece of this cosmic puzzle shows"
];

const categoryIntros = {
  love: [
    "In matters of the heart, the cosmos reveals",
    "The universe speaks to your romantic journey through",
    "Your heart's path is illuminated by",
    "Love's mysteries unfold through"
  ],
  career: [
    "Your professional path is guided by",
    "In the realm of career and ambition, the cards show",
    "The universe illuminates your work life through",
    "Your calling and purpose emerge through"
  ],
  spiritual: [
    "On your sacred journey, the divine reveals",
    "Your soul's evolution is reflected in",
    "The spiritual realm communicates through",
    "Your higher purpose unfolds via"
  ],
  general: [
    "The tapestry of your life is woven with",
    "Your current chapter is illuminated by",
    "The universe guides your path through",
    "Life's wisdom emerges through"
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
  
  // Suit analysis
  const dominantSuit = Object.keys(suitDistribution).reduce((a, b) => 
    suitDistribution[a] > suitDistribution[b] ? a : b
  );
  
  if (suitDistribution[dominantSuit] >= 2) {
    summary += getRandomElement(summaryTemplates.suits[dominantSuit]) + " ";
  }
  
  // Reversed card analysis
  const reversedRatio = reversedCount / cards.length;
  let reversedLevel: 'high' | 'medium' | 'low';
  if (reversedRatio >= 0.5) reversedLevel = 'high';
  else if (reversedRatio >= 0.2) reversedLevel = 'medium';
  else reversedLevel = 'low';
  
  summary += getRandomElement(summaryTemplates.reversed[reversedLevel]);
  
  return summary;
}

export function generateContextualReading(context: ReadingContext): string {
  const { cards, category, positions } = context;
  
  let reading = getRandomElement(categoryIntros[category]) + " ";
  
  cards.forEach((card, index) => {
    const position = positions[index];
    const cardInterpretation = interpretations[card.name];
    
    if (index > 0) {
      reading += getRandomElement(narrativeConnectors) + " ";
    }
    
    const cardName = `${card.name}${card.reversed ? ' (Reversed)' : ''}`;
    
    if (cardInterpretation && cardInterpretation[category]) {
      const interpretation = card.reversed 
        ? cardInterpretation[category]!.reversed 
        : cardInterpretation[category]!.upright;
      
      // Create position-specific interpretation
      let positionText = "";
      if (position.toLowerCase().includes('past')) {
        positionText = `reflecting on your past, ${interpretation.current.toLowerCase()}`;
      } else if (position.toLowerCase().includes('future') || position.toLowerCase().includes('outcome')) {
        positionText = `looking toward what's coming, ${interpretation.future.toLowerCase()}`;
      } else if (position.toLowerCase().includes('present') || position.toLowerCase().includes('situation') || position.toLowerCase().includes('self')) {
        positionText = `in your current situation, ${interpretation.current.toLowerCase()}`;
      } else if (position.toLowerCase().includes('advice') || position.toLowerCase().includes('guidance')) {
        positionText = `as guidance, ${interpretation.divine.toLowerCase()}`;
      } else {
        positionText = `in the ${position.toLowerCase()}, ${interpretation.current.toLowerCase()}`;
      }
      
      reading += `the ${cardName} in the ${position} position suggests that ${positionText} `;
    } else {
      // Fallback for cards without specific interpretations
      const basicMeaning = card.reversed ? card.meaning_rev : card.meaning_up;
      reading += `the ${cardName} in the ${position} position indicates ${basicMeaning.toLowerCase()} `;
    }
    
    reading += "\n\n";
  });
  
  // Add a meaningful conclusion
  const conclusions = [
    "Together, these cards weave a story of transformation and growth, encouraging you to trust the journey ahead.",
    "The threads of destiny revealed here remind you that every challenge contains the seeds of wisdom.",
    "This cosmic guidance invites you to embrace both the known and unknown aspects of your path.",
    "The universe speaks through these symbols, offering both comfort and challenge as you move forward.",
    "These sacred messages remind you that you have the power to shape your destiny through conscious choice."
  ];
  
  reading += getRandomElement(conclusions);
  
  return reading;
}
