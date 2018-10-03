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