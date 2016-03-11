import {Page, NavController} from 'ionic-angular';
import {IngredientType} from '../../../common/models/ingredient-type';
import {Ingredient} from '../../../common/models/ingredient';

import {IngredientSelection} from 
  '../../../common/components/ingredient-selection/ingredient-selection';
import {IngredientsService} from '../../../common/services/ingredients-service';
import {CookSelectPage} from '../cook-select/cook-select';

@Page({
  templateUrl: 'build/pages/cook-tab/cook-home/cook-home.html',
  providers: [IngredientsService],
  directives: [IngredientSelection]
})
export class CookHomePage {

    ingredientTypes: Array<IngredientType>;
    ingredientSelectionHeader: string;
    ingredientsService: IngredientsService;
    nav: NavController;


  constructor(ingredientsService: IngredientsService, nav: NavController) {
    this.nav = nav;
      this.ingredientsService = ingredientsService;
      this.ingredientSelectionHeader = "Let's Get Cooking!";
      this.ingredientTypes = this.ingredientsService.getIngredientTypes();
  }

  onDone(ingredientsChosen: Array<IngredientType>) {
    this.nav.push(CookSelectPage, {
      ingredients: ingredientsChosen
    });
  }
}