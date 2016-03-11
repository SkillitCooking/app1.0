import {Page} from 'ionic-angular';

import {AccountHomePage} from './account-tab/account-home/account-home';
import {CookHomePage} from './cook-tab/cook-home/cook-home';
import {LearnHomePage} from './learn-tab/learn-home/learn-home';
import {RecipesHomePage} from './recipes-tab/recipes-home/recipes-home';
import {TipsHomePage} from './tips-tab/tips-home/tips-home';

@Page({
  templateUrl: 'build/pages/tabs.html'
})
export class TabsPage {
    cookTabRoot: any;
    tipsTabRoot: any;
    recipesTabRoot: any;
    learnTabRoot: any;
    accountTabRoot: any;

  constructor() {
    this.cookTabRoot = CookHomePage;
    this.tipsTabRoot = TipsHomePage;
    this.recipesTabRoot = RecipesHomePage;
    this.learnTabRoot = LearnHomePage;
    this.accountTabRoot = AccountHomePage;
  }
}