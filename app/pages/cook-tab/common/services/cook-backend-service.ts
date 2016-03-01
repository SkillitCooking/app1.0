import {Injectable} from 'angular2/core';
import {TEST_INGREDIENT_TYPES} from './mock-data';

@Injectable()
export class CookBackendService {

  getIngredientTypes() {
      return TEST_INGREDIENT_TYPES;
  }

}