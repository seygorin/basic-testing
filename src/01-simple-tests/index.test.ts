// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 3, action: Action.Add })).toBe(8);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 10, b: 4, action: Action.Subtract })).toBe(6);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 6, b: 7, action: Action.Multiply })).toBe(42);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 20, b: 5, action: Action.Divide })).toBe(4);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Exponentiate })).toBe(
      8,
    );
  });

  test('should return null for invalid action', () => {
    expect(
      simpleCalculator({ a: 5, b: 3, action: 'InvalidAction' }),
    ).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    expect(
      simpleCalculator({ a: 'not a number', b: 3, action: Action.Add }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: 5, b: 'not a number', action: Action.Subtract }),
    ).toBeNull();
  });

  test('should return Infinity when dividing by zero', () => {
    expect(simpleCalculator({ a: 10, b: 0, action: Action.Divide })).toBe(
      Infinity,
    );
  });
});
