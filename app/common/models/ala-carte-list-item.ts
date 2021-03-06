'use strict';

export interface AlaCarteListItem {
  _id: string;
  title: string;
  prepTime: number;
  totalTime: number;
  pictureURL: string;
  checked: boolean;
}