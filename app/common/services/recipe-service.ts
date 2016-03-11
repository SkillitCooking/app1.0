import {Injectable} from 'angular2/core';
import {CombineRecipesService} from './combine-recipes-service';
import {BackendService} from './backend-service';
import {IngredientType} from '../models/ingredient-type';

@Injectable()
export class RecipeService {

  combineRecipesService: CombineRecipesService;
  backendService: BackendService;

  constructor(combineRecipesService: CombineRecipesService, backendService: BackendService) {
    this.combineRecipesService = combineRecipesService;
    this.backendService = backendService;

  }

  getRecipeListItems(ingredients: Array<IngredientType>) {
    return this.backendService.getRecipeListItems(ingredients);
  }
}