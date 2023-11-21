import { Multiplication } from './multiplication';

test('multiplication two numbers correctly', () => {
  const result = Multiplication(3, 3);
  expect(result).toBe(9);
});