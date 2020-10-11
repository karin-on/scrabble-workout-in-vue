import { formatDuration } from './format-duration';

test.each([
  [0, '0:00'],
  [1, '0:00'],
  [100, '0:00'],
  [1110, '0:01'],
  [120000, '2:00'],
  [5999999, '99:59'],
  [6000000, '100:00'],
])('Duration %i gives time format of %s', (duration, expected) => {
  expect(formatDuration(duration)).toMatch(expected);
});

test('Negative duration gives a result of undefined', () => {
  expect(formatDuration(-1)).toBeUndefined();
});

test.each([
  [0.5, 'Error in formatDuration function: parameter is not an integer. Please provide a proper parameter'],
  [NaN, 'Error in formatDuration function: parameter is not an integer. Please provide a proper parameter'],
  [-NaN, 'Error in formatDuration function: parameter is not an integer. Please provide a proper parameter'],
  [Infinity, 'Error in formatDuration function: parameter is not an integer. Please provide a proper parameter'],
  [-Infinity, 'Error in formatDuration function: parameter is not an integer. Please provide a proper parameter'],
])('Duration %d throws an error: %s', (duration, expected) => {
  expect(() => formatDuration(duration)).toThrow(expected);
});
