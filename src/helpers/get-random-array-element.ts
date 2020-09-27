import { WordsDatabase } from '@/models';

export const getRandomArrayElement = (wordsData: WordsDatabase): string[] => {
  const index = Math.floor(Math.random() * wordsData.length);
  return wordsData[index];
};
