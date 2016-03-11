import * as _ from 'underscore/underscore';

import {IONIC_DIRECTIVES, IonicApp, NavController, Alert} from 'ionic-angular';
import {Input, Output, Component, EventEmitter, Injectable, AfterViewInit} from 'angular2/core';
import {Ingredient} from '../../models/ingredient';
import {IngredientType} from '../../models/ingredient-type';
import {IngredientForm} from '../../models/ingredient-form';

@Component({
  selector: 'ingredient-selection',
  templateUrl: 'build/common/components/ingredient-selection/ingredient-selection.html',
  directives: [IONIC_DIRECTIVES]
})
export class IngredientSelection implements AfterViewInit {
    //need IngredientType type
    @Input() ingredientTypes: Array<IngredientType>;
    @Input() ingredientSelectionHeader: string;
    @Output() onDone = new EventEmitter<any>();
    app: IonicApp;
    nav: NavController;
    slides: Slides;
    curIndex: number;


  constructor(app: IonicApp, nav: NavController) {
    this.app = app;
    this.nav = nav;
  }

  ngAfterViewInit() {
    this.slides = this.app.getComponent("ingredient-slides");
  }

  //below is for trying to prevent swiping when the form is not correctly filled
  //out - will need to wait for update to use...
  swipeCheck() {
    if(this.slides !== undefined && this.slides.getSliderWidget() !== undefined){
      let slideIndex = this.slides.getIndex();
      if(slideIndex >= this.curIndex) {
        let currentSlideIngredients = this.ingredientTypes[this.curIndex].ingredients;
        if(slideIndex !== 0 && !this.ingredientFormsSelected(currentSlideIngredients)) {
          let alert = Alert.create({
            title: 'Select your Ingredient Form',
            subTitle: 'You need to pick a form for each Ingredient you select',
            buttons: ['OK']
          });
          this.nav.present(alert);
          return false;
        }
      }
      this.curIndex = slideIndex;
      return true;
    }
    return true;
  }


  ingredientFormsSelected(ingredients: Array<Ingredient>){
    return _.every(ingredients, (ingredient) => {
      if(!ingredient.checked){
        return true;
      }
      return _.some(ingredient.forms, (form) => {
        return form.checked;
      });
    });
  }

  slideNext(ingredients: Array<Ingredient>){
    if(!this.ingredientFormsSelected(ingredients)){
      let alert = Alert.create({
        title: 'Select your Ingredient Form',
        subTitle: 'You need to pick a form for each Ingredient you select',
        buttons: ['OK']
      });
      this.nav.present(alert);
    } else {
      if(this.slides.isAtEnd()){
        //check if adequate ingredients were chosen
        let ingredientFormErrFlag = false;
        for (var i = this.ingredientTypes.length - 1; i >= 0; i--) {
          if(!this.ingredientFormsSelected(this.ingredientTypes[i].ingredients)){
            let alert = Alert.create({
              title: 'Select your Ingredient Form',
              subTitle: 'You need to pick a form for each Ingredient you select',
              buttons: ['OK']
            });
            this.nav.present(alert);
            ingredientFormErrFlag = true;
            break;
          }
        }
        if(!this.adequateIngredientsChosen() && !ingredientFormErrFlag){
          let alert = Alert.create({
            title: 'Inadequate Ingredients',
            subTitle: 'You need to pick enough ingredients',
            buttons: ['OK']
          });
          this.nav.present(alert);
        } else {
          //emit event, along with needed selected ingredients list
          this.onDone.emit(this.getSelectedIngredients());
        }
      } else {
        this.slides.next();
      }
    }
  }

  getSelectedIngredients() {
    let theSelect = _.map(this.ingredientTypes, (type) => {
      let selected = {} as IngredientType;
      selected.name = type.name;
      selected.ingredients = _.filter(type.ingredients, (ingredient) => {
        return ingredient.checked;
      });
      return selected;
    });
    return theSelect;
  }

  adequateIngredientsChosen() {

    return _.every(this.ingredientTypes, (ingredientType) => {
      return ingredientType.minSelected === 0 || ingredientType.minSelected <=
        _.countBy(ingredientType.ingredients, (ingredient) => {
          return ingredient.checked;
      }).true;
    });
  }

  slidePrev() {
    this.slides.prev();
  }

}