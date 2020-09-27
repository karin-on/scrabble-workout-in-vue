export const shuffleAnArray = (array: any[]): any[] => {
  /* eslint-disable no-plusplus */
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    /* eslint-disable no-param-reassign */
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};
