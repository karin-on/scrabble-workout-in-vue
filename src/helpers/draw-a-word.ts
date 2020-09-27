type WordsDatabase = string[][];

export const drawAWord = (wordsData: WordsDatabase): string[] => {
  const index = Math.floor(Math.random() * wordsData.length);
  return wordsData[index];
};
