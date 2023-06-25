import { XOR } from '@core/helpers/types';
import { isUndefined } from '@core/helpers/guards';

type Price = number | 'free' | 'variable' | 'ignored';

type Serving = {
  price: Price;
  calories: number;
  //measured in grams
  size: number;
};

type Weight = {
  price: Price;
  //per 100 grams
  calories: number;
};

export interface Food {
  name: string;
  description: string;
  serving?: Serving;
  weight: Weight;
}

export const ServingToWeight = (serving: Serving): Weight => {
  let price: Price = serving.price;
  if (typeof price === 'number') {
    price = price / serving.size;
  }

  const calories = serving.calories / serving.size;

  return {
    price: price,
    calories: calories
  };
};

export const CreateFood = (
  name: string,
  description: string,
  data: XOR<{ serving: Serving }, { weight: Weight }>
): Food => {
  return {
    name: name,
    description: description,
    weight: data.weight ?? ServingToWeight(data.serving),
    serving: data.serving
  };
};
