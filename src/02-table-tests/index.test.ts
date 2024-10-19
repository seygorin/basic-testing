// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  {
    a: 5,
    b: 3,
    action: Action.Add,
    expected: 8,
    description: 'should add two numbers',
  },
  {
    a: 10,
    b: 4,
    action: Action.Subtract,
    expected: 6,
    description: 'should subtract two numbers',
  },
  {
    a: 6,
    b: 7,
    action: Action.Multiply,
    expected: 42,
    description: 'should multiply two numbers',
  },
  {
    a: 20,
    b: 5,
    action: Action.Divide,
    expected: 4,
    description: 'should divide two numbers',
  },
  {
    a: 2,
    b: 3,
    action: Action.Exponentiate,
    expected: 8,
    description: 'should exponentiate two numbers',
  },
  {
    a: 5,
    b: 3,
    action: 'InvalidAction' as Action,
    expected: null,
    description: 'should return null for invalid action',
  },
  {
    a: 'not a number',
    b: 3,
    action: Action.Add,
    expected: null,
    description: 'should return null for invalid first argument',
  },
  {
    a: 5,
    b: 'not a number',
    action: Action.Subtract,
    expected: null,
    description: 'should return null for invalid second argument',
  },
  {
    a: 10,
    b: 0,
    action: Action.Divide,
    expected: Infinity,
    description: 'should return Infinity when dividing by zero',
  },
];

describe('simpleCalculator', () => {
  test.each(testCases)('$description', ({ a, b, action, expected }) => {
    const result = simpleCalculator({ a, b, action });
    if (expected === null) {
      expect(result).toBeNull();
    } else if (Number.isNaN(expected)) {
      expect(result).toBeNaN();
    } else {
      expect(result).toBe(expected);
    }
  });
});
