import {Injectable} from 'angular2/core';
import {TEST_INGREDIENT_TYPES, TEST_RECIPES} from './mock-data';
import {IngredientType} from '../../../../common/models/ingredient-type';

@Injectable()
export class CookBackendService {

  getIngredientTypes() {
      return TEST_INGREDIENT_TYPES;
  }

  getRecipeItems(ingredients: Array<IngredientType>){
    //where will logic for this live? the acquisition of recipes
    //based on ingredients is a server-side task...
    //build function either here or in some mock-backend file
    //will want only limited set of needed data from the collection...
    return TEST_RECIPES;
  }

}