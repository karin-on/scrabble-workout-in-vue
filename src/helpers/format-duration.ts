export const formatDuration = (duration: number): string | undefined => {
  if (!Number.isInteger(duration)) {
    throw new Error('Error in formatDuration function: parameter is not an integer. Please provide a proper parameter');
  }

  if (duration < 0) {
    return undefined;
  }

  const minutes = Math.floor(duration / (60 * 1000)).toString();
  const seconds = (Math.floor(duration / 1000) % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};
