import { add, subtract, multiply } from '../ex1';

describe('Exercise One', () => {
  it('1 + 1 = 2', () => {
    expect(add(1, 1)).toBe(2);
  });

  it('2 + 3  = 5', () => {
    expect(add(2, 3)).toBe(5)
  })

  it('5 - 3 = 2', () => {
    expect(subtract(5,3)).toEqual(2)
  })

  it('1 - 5 = -4', () => {
    expect(subtract(1, 5)).toEqual(-4);
  })

  it('1 * 1 = 1', () => {
    expect(multiply(1, 1)).toEqual(1);
  })

  it('5 * 5 = 25', () => {
    expect(multiply(5, 5)).toEqual(25);
  })

  it('-5 * -5', () => {
    expect(multiply(-5, -5)).toBe(25);
  })

});