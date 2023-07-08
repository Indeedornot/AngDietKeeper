export interface Card {
  name: string;
  description: string;
  calories: number;
  amount: number;
  unit: 'servings' | 'g';
}

export const SampleCards: Card[] = [
  {
    name: 'Apple',
    description: 'A sweet, delicious fruit',
    calories: 95,
    amount: 1,
    unit: 'servings'
  },
  {
    name: 'Banana',
    description: 'A sweet, delicious fruit',
    calories: 105,
    amount: 1,
    unit: 'servings'
  }
];
