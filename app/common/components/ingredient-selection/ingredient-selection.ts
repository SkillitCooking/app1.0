import {IONIC_DIRECTIVES} from 'ionic-framework/ionic';
import {Input, Component} from 'angular2/core';
import {Ingredient} from '../../models/ingredient';
import {IngredientType} from '../../models/ingredient-type';
import {IngredientForm} from '../../models/ingredient-form';

@Component({
  selector: 'ingredient-selection',
  templateUrl: 'build/common/components/ingredient-selection/ingredient-selection.html',
  directives: [IONIC_DIRECTIVES]
})
export class IngredientSelection {
    //need IngredientType type
    @Input() ingredientTypes: Array<IngredientType>;
    @Input() ingredientSelectionHeader: string;


  constructor() {

  }

// need to make Ingredient type
  selectIngredient(ingredient: Ingredient, isChecked: boolean) {
      console.log(ingredient, isChecked);
  }

// need to make IngredientForm type
  selectIngredientForm(ingredient: Ingredient, ingredientForm: IngredientForm, isChecked: boolean) {
      console.log(ingredient, ingredientForm, isChecked);
  }
}