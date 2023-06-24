export interface Card {
  name: string;
  description: string;
  price: number | 'free';
  calories: number;
  amount: number;
  unit: 'servings' | 'g';
}

export const SampleCards: Card[] = [
  {
    name: 'Apple',
    description: 'A sweet, delicious fruit',
    price: 0.5,
    calories: 95,
    amount: 1,
    unit: 'servings'
  },
  {
    name: 'Banana',
    description: 'A sweet, delicious fruit',
    price: 0.5,
    calories: 105,
    amount: 1,
    unit: 'servings'
  }
];
