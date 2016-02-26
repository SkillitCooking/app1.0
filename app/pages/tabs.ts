import {Page} from 'ionic-framework/ionic';

import {AccountHomePage} from './account-tab/account-home';
import {CookHomePage} from './cook-tab/cook-home';
import {LearnHomePage} from './learn-tab/learn-home';
import {RecipesHomePage} from './recipes-tab/recipes-home';
import {TipsHomePage} from './tips-tab/tips-home';

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