import { ptBr } from './pt-br';
export type languages = 'ptBr';

export type languageKey = keyof typeof ptBr;

const translationsMap = {
  ptBr: ptBr,
};
export const t = (language: languages) => {
  const translations = translationsMap[language];

  return translations as typeof ptBr;
};
