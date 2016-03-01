import {IngredientForm} from './ingredient-form';

'use strict';

export interface Ingredient {
  
  name: string;
  forms: Array<IngredientForm>;
}