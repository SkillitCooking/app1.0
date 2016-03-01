import {Page} from 'ionic-framework/ionic';
import {IngredientType} from '../../../common/models/ingredient-type';

import {IngredientSelection} from 
  '../../../common/components/ingredient-selection/ingredient-selection';
import {CookBackendService} from '../common/services/cook-backend-service';

@Page({
  templateUrl: 'build/pages/cook-tab/cook-home/cook-home.html',
  providers: [CookBackendService],
  directives: [IngredientSelection]
})
export class CookHomePage {

    ingredientTypes: Array<IngredientType>;
    ingredientSelectionHeader: string;
    backendService: CookBackendService;

  constructor(backendService: CookBackendService) {
      this.backendService = backendService;
      this.ingredientSelectionHeader = "Let's Get Cooking!";
      this.ingredientTypes = this.backendService.getIngredientTypes();
  }
}