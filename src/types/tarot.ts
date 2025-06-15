
export interface TarotCardData {
  name: string;
  meaning_up: string;
  meaning_rev: string;
  desc: string;
  reversed: boolean;
}

export type ReadingCategory = 'love' | 'career' | 'spiritual' | 'general';

export interface InterpretationDetail {
  current: string;
  future: string;
  divine: string;
}

export interface CategoryInterpretations {
  upright: InterpretationDetail;
  reversed: InterpretationDetail;
}

export type CardInterpretations = Partial<Record<ReadingCategory, CategoryInterpretations>>;
