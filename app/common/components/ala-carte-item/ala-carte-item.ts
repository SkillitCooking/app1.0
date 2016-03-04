import {IONIC_DIRECTIVES} from 'ionic-framework/ionic';
import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {AlaCarteListItem} from '../../models/ala-carte-list-item';

@Component({
  selector: 'ala-carte-item',
  templateUrl: 'build/common/components/ala-carte-item/ala-carte-item.html',
  directives: [IONIC_DIRECTIVES]
})
export class AlaCarteItem {
  _alaCarteItem: AlaCarteListItem;
  @Output() onToggle = new EventEmitter<any>();

  @Input()
  set alaCarteItem(alaCarteItem: AlaCarteListItem){
    this._alaCarteItem = alaCarteItem;
  }
  get alaCarteItem(){
    return this._alaCarteItem;
  }

  constructor() {
    
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
    this.onToggle.emit(this._alaCarteItem._id);
  }
}