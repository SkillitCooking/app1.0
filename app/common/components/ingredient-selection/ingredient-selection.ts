import * as _ from 'underscore/underscore';

import {IONIC_DIRECTIVES, IonicApp, NavController, Alert} from 'ionic-framework/ionic';
import {Input, Component, Injectable, AfterViewInit} from 'angular2/core';
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

  selectIngredient(ingredient: Ingredient, isChecked: boolean) {
      //need to alter "checked" property of ingredient
      //console.log(ingredient, isChecked);
  }

  selectIngredientForm(ingredient: Ingredient, ingredientForm: IngredientForm, isChecked: boolean) {
      //console.log(ingredient, ingredientForm, isChecked);
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
        for (var i = this.ingredientTypes.length - 1; i >= 0; i--) {
          if(!this.ingredientFormsSelected(this.ingredientTypes[i].ingredients)){
            let alert = Alert.create({
              title: 'Select your Ingredient Form',
              subTitle: 'You need to pick a form for each Ingredient you select',
              buttons: ['OK']
            });
            this.nav.present(alert);
            break;
          }
        }
        else if(!this.adequateIngredientsChosen()){
          let alert = Alert.create({
            title: 'Inadequate Ingredients',
            subTitle: 'You need to pick enough ingredients',
            buttons: ['OK']
          });
          this.nav.present(alert);
        } else {
          //then take it to the next page in the series,
          //passing on selected ingredients and forms
        }
      } else {
        this.slides.next();
      }
    }
  }

  adequateIngredientsChosen() {

    return _.every(this.ingredientTypes, (ingredientType) => {
      console.log(_.countBy(ingredientType.ingredients, (ingredient) => {
          return ingredient.checked;
      }));
      console.log(ingredientType.minSelected);
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