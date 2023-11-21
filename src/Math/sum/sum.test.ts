import {Sum } from './sum';

test('sum two numbers correctly', () => {
  const result = Sum(1.2, 1.8);
  expect(result).toBe(3);
});