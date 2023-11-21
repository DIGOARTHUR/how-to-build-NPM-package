import { Subtraction } from './subtraction';

test('subtraction two numbers correctly', () => {
  const result = Subtraction(5, 2);
  expect(result).toBe(3);
});