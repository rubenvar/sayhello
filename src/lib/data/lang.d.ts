export type TListedLanguage = { name: string; slug: string };

export type TLanguage = {
  language: string;
  name: string;
  notes?: string;
  words: {
    hello: string;
    hi?: string;
    'good morning'?: string;
    'good afternoon'?: string;
    'good evening'?: string;
    'good night'?: string;
    'good bye'?: string;
    bye?: string;
    'hello on the phone'?: string;
    yes?: string;
    no?: string;
    please?: string;
    'thank you'?: string;
    'answer thank you'?: string;
    'excuse me'?: string;
    "i'm sorry"?: string;
    'how are you?'?: string;
  };
};
