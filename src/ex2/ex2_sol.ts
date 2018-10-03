export function add(x: string, y: string): string;
export function add(x: number, y: number): number;

export function add(x: string | number, y: string | number) {
  if (typeof x === 'string' && typeof y === 'string') {
    return `${x}, ${y}`;
  }

  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  }
}

export function addNumbersArray(x: number[]): number {
  const reducedValue = x.reduce(add, 0);
  return reducedValue;
}

export function concatStringArray(x: string[]): string {
  let reducedValue = '';
  if (x.length > 0) {
    reducedValue = x.reduce(add);
  }
  return reducedValue;
}

function foo(oneThing: string, secondThing: string): string;
function foo(oneThing: number, secondThing: number, thirdThing: string): string;

function foo(oneThing: string | number, secondThing: string | number, thirdThing: string = ''): string {
  if (typeof oneThing === 'string' && typeof secondThing === 'string') {
    return `${oneThing} ${secondThing}`
  }

  if (typeof oneThing === 'number' && typeof secondThing == 'number') {
    return `${oneThing + secondThing} ${thirdThing}`;
  }

  return 'final return';
}

console.log(foo(2, 2, 'test'));
console.log(foo('2', '2'));