import {Page, NavController} from 'ionic-framework/ionic';
import {IngredientType} from '../../../common/models/ingredient-type';
import {Ingredient} from '../../../common/models/ingredient';

import {IngredientSelection} from 
  '../../../common/components/ingredient-selection/ingredient-selection';
import {CookBackendService} from '../common/services/cook-backend-service';
import {CookSelectPage} from '../cook-select/cook-select';

@Page({
  templateUrl: 'build/pages/cook-tab/cook-home/cook-home.html',
  providers: [CookBackendService],
  directives: [IngredientSelection]
})
export class CookHomePage {

    ingredientTypes: Array<IngredientType>;
    ingredientSelectionHeader: string;
    backendService: CookBackendService;
    nav: NavController;


  constructor(backendService: CookBackendService, nav: NavController) {
    this.nav = nav;
      this.backendService = backendService;
      this.ingredientSelectionHeader = "Let's Get Cooking!";
      this.ingredientTypes = this.backendService.getIngredientTypes();
  }

  onDone(ingredientsChosen: Array<IngredientType>) {
    this.nav.push(CookSelectPage, {
      ingredients: ingredientsChosen
    });
  }
}