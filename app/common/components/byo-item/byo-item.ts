import {IONIC_DIRECTIVES} from 'ionic-framework/ionic';
import {Component, Input} from 'angular2/core';
import {BYOListItem} from '../../models/byo-list-item';

@Component({
  selector: 'byo-item',
  templateUrl: 'build/common/components/byo-item/byo-item.html',
  directives: [IONIC_DIRECTIVES]
})
export class BYOItem {
  @Input() byoItem: BYOListItem;

  constructor() {

  }
}