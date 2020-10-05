// TODO: better time type (no floats, no infinity)
export const formatDuration = (duration: number): string => {
  const minutes = Math.floor(duration / (60 * 1000)).toString();
  const seconds = (Math.floor(duration / 1000) % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};
