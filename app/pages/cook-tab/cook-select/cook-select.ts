import {Page, NavParams, IONIC_DIRECTIVES, NavController} from 'ionic-framework/ionic';
import {CookBackendService} from '../common/services/cook-backend-service';
import {IngredientType} from '../../../common/models/ingredient-type';
import {AlaCarteItem} from '../../../common/components/ala-carte-item/ala-carte-item';
import {AlaCarteListItem} from '../../../common/models/ala-carte-list-item';


@Page({  
  templateUrl: 'build/pages/cook-tab/cook-select/cook-select.html',
  providers: [CookBackendService],
  directives: [IONIC_DIRECTIVES, AlaCarteItem]
})
export class CookSelectPage {
    mealType: string;
    params: NavParams;
    ingredients: Array<IngredientType>;
    //fullRecipeItems
    //buildYourOwnItems
    //could get better typing on below...
    alaCarte: any;
    backendService: CookBackendService;

  constructor(params: NavParams, nav: NavController, backendService: CookBackendService) {
    //possible loading concerns? What is the return of the API call for the various sorts of recipes?
    //All types at once?
      this.mealType = "alacarte";
      this.params = params;
      this.ingredients = this.params.get('ingredients');
      this.backendService = backendService;
      let allRecipes = this.backendService.getRecipeItems(this.ingredients);
      this.alaCarte = allRecipes["alaCarte"];

  }
}