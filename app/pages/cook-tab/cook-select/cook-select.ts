import * as _ from 'underscore/underscore';

import {Page, NavParams, IONIC_DIRECTIVES, NavController} from 'ionic-angular';
import {RecipeService} from '../../../common/services/recipe-service';
import {IngredientType} from '../../../common/models/ingredient-type';
import {AlaCarteItem} from '../../../common/components/ala-carte-item/ala-carte-item';
import {BYOItem} from '../../../common/components/byo-item/byo-item';
import {FullRecipeItem} from '../../../common/components/full-recipe-item/full-recipe-item';
import {AlaCarteListItem} from '../../../common/models/ala-carte-list-item';
import {BYOListItem} from '../../../common/models/byo-list-item';
import {FullRecipeListItem} from '../../../common/models/full-recipe-list-item';


@Page({  
  templateUrl: 'build/pages/cook-tab/cook-select/cook-select.html',
  providers: [RecipeService],
  directives: [IONIC_DIRECTIVES, AlaCarteItem, BYOItem, FullRecipeItem]
})
export class CookSelectPage {
    mealType: string;
    params: NavParams;
    ingredients: Array<IngredientType>;
    fullRecipeItems: any;
    selectedFullRecipeId: any;
    //could get better typing on below...
    alaCarte: any;
    selectedAlaCarteIds: Array<string>;
    byoItems: Array<BYOListItem>;
    selectedBYOId: string;
    recipeService: RecipeService;

  constructor(params: NavParams, nav: NavController, recipeService: RecipeService) {
    //possible loading concerns? What is the return of the API call for the various sorts of recipes?
    //All types at once?
      this.mealType = "alacarte";
      this.params = params;
      this.ingredients = this.params.get('ingredients');
      this.recipeService = recipeService;
      let allRecipes = this.recipeService.getRecipeListItems(this.ingredients);
      this.alaCarte = allRecipes["alaCarte"];
      this.selectedAlaCarteIds = [];
      this.byoItems = allRecipes["buildYourOwn"];
      this.fullRecipeItems = allRecipes["fullRecipe"];
      this.selectedBYOId = "";
      this.selectedFullRecipeId = "";
  }

  onToggleAlaCarte(alaCarteId: string) {
    if(_.contains(this.selectedAlaCarteIds, alaCarteId)){
      this.selectedAlaCarteIds = 
        _.without(this.selectedAlaCarteIds, alaCarteId);
    } else {
      this.selectedAlaCarteIds.push(alaCarteId);
    }
  }

  useByoItem(byoId: string){
    this.selectedBYOId = byoId;
    //add passing on to next page behavior
    //will also need to pass on ingredient list
    //and whatever alaCarteIds were selected
  }

  useFullRecipeItem(fullRecipeId: string){
    this.selectedFullRecipeId = fullRecipeId;
    //add passing on to next page behavior
    //will also need to pass on ingredient list
    //and whatever alaCarteIds were selected
  }

  cookAlaCarte() {
    console.log("cook ala carte");
    //send to cook recipe page
  }
}