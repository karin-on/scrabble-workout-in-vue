type WordsDatabase = string[][];

export const drawAWord = (wordsData: WordsDatabase): string[] => {
  const wordsNumber = wordsData.length;
  const index = Math.floor(Math.random() * wordsNumber);
  return wordsData[index];
};
