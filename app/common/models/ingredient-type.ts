import {Ingredient} from './ingredient';

'use strict';

export interface IngredientType {
  
  name: string;
  ingredients: Array<Ingredient>;
  minSelected: number;
}