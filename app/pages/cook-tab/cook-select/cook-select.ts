import {Page, NavParams} from 'ionic-framework/ionic';
import {CookBackendService} from '../common/services/cook-backend-service';
import {IngredientType} from '../../../common/models/ingredient-type';

@Page({  
  templateUrl: 'build/pages/cook-tab/cook-select/cook-select.html',
  providers: [CookBackendService]
})
export class CookSelectPage {
    mealType: string;
    params: NavParams;
    ingredients: Array<IngredientType>;

  constructor(params: NavParams) {
      this.mealType = "alacarte";
      this.params = params;
      this.ingredients = this.params.get('ingredients');
  }
}