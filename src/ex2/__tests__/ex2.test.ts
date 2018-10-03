import { addNumbersArray, concatStringArray, add } from '../ex2_sol';
describe('Exercise 2', () => {

  it('1 + 1 is still 2', () => {
    expect(add(1, 1)).toBe(2);
  })

  it('string 1 and string 1 gives us string 1, 1', () => {
    expect(add('1', '1')).toBe('1, 1');
  })

  it('Empty array returns 0', () => {
    expect(addNumbersArray([])).toEqual(0);
  })

  it('Sum of Array [1, 2, 3, 4, 5] = 15', () => {
    const numsArray = [1, 2, 3, 4, 5];
    const total = numsArray.reduce(add, 0);
    expect(addNumbersArray(numsArray)).toEqual(total);
  })

  it('concatStringArray: ["Hello", "World"] returns "Hello, World"', () => {
    const stringArr = ['Hello', 'World'];
    expect(concatStringArray(stringArr)).toBe('Hello, World');
  })

  it('concatStringArray: returns empty string if empty array', () => {
    const stringArr: string[] = [];
    expect(concatStringArray(stringArr)).toBe('');
  })
})
