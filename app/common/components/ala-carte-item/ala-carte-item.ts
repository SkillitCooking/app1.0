import {IONIC_DIRECTIVES} from 'ionic-framework/ionic';
import {Component, Input} from 'angular2/core';

import {AlaCarteListItem} from '../../models/ala-carte-list-item';

@Component({
  selector: 'ala-carte-item',
  templateUrl: 'build/common/components/ala-carte-item/ala-carte-item.html',
  directives: [IONIC_DIRECTIVES]
})
export class AlaCarteItem {
  _alaCarteItem: AlaCarteListItem;

  @Input()
  set alaCarteItem(alaCarteItem: AlaCarteListItem){
    this._alaCarteItem = alaCarteItem;
  }
  get alaCarteItem(){
    return this._alaCarteItem;
  }

  constructor() {
    console.log(this.alaCarteItem);
  }

  getIconName() {
    if(this.alaCarteItem.checked){
      return 'checkmark-circle';
    } else {
      return 'checkmark-circle-outline';
    }
  }

  toggleCheckItem() {
    this.alaCarteItem.checked = !this.alaCarteItem.checked;
  }
}