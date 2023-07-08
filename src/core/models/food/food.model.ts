import { XOR } from '@core/helpers/types';

type Serving = {
  calories: number;
  size: number;
};

type Weight = {
  calories: number;
};

export interface Food {
  name: string;
  description: string;
  serving?: Serving;
  weight: Weight;
}

export const ServingToWeight = (serving: Serving): Weight => {
  return {
    calories: serving.calories / serving.size
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
