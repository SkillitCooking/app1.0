import {IONIC_DIRECTIVES} from 'ionic-angular';
import {Component, Input} from 'angular2/core';
import {FullRecipeListItem} from '../../models/full-recipe-list-item';

@Component({
  selector: 'full-recipe-item',
  templateUrl: 'build/common/components/full-recipe-item/full-recipe-item.html',
  directives: [IONIC_DIRECTIVES]
})
export class FullRecipeItem {
  @Input() fullRecipeItem: FullRecipeListItem;

  constructor() {

  }
}