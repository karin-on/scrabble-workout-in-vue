import { LetterObject } from '@/models';

export const joinLetters = (letters: LetterObject[]): string => (
  letters.reduce((a, b): string => a + b.value, '')
);
