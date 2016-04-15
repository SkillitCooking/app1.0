import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {TEST_INGREDIENT_TYPES, TEST_RECIPE_ITEMS, TEST_RECIPES} from './mock-data';
import {IngredientType} from '../models/ingredient-type';

@Injectable()
export class BackendService {

  //Took out Promises to just get sample functionality for Mike to do work on
  //the visuals...
  private _apiURL = '';

  constructor(private http: Http){}

  getIngredientTypes() {
    return TEST_INGREDIENT_TYPES;
  }

  getRecipeListItems(ingredients: Array<IngredientType>) {
    //where will logic for this live? the acquisition of recipes
    //based on ingredients is a server-side task...
    //build function either here or in some mock-backend file
    //will want only limited set of needed data from the collection...
    return TEST_RECIPE_ITEMS;
  }

  fetchRecipes(selectedRecipeIds: Array<string>) {
    //fetches the whole objects of recipes with the
    //given ids
    return TEST_RECIPES;
  }

  private handleError(error: Response){
    //replace with some sort of logging service...
    console.error(error);

    return Observable.throw(error.json().error || 'Server Error');
  }

}