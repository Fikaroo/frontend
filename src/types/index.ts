export interface Category {
  id: number;
  name: string;
  children: Category[];
  slug: string;
}

export interface Questions {
  id: number;
  name: string;
  slug: string;
  questions: Question[];
}

export interface Question {
  id: number;
  answers: Answer[];
  text: string;
  image: null;
  language: Language;
  score: string;
}

export interface Answer {
  id: number;
  answer_text: string;
  correct_answer: boolean;
}

export enum Language {
  En = "en",
  Ru = "ru",
}
