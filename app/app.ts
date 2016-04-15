import {App, IonicApp, Platform} from 'ionic-angular';

import {TabsPage} from './pages/tabs';
import {BackendService} from './common/services/backend-service';
import {HTTP_PROVIDERS, XHRBackend} from 'angular2/http';
import {provide} from 'angular2/core';

//rxjs operator imports
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

//in memory web api imports
//delete when not dev
import {InMemoryBackendService, SEED_DATA} from 'a2-in-memory-web-api/core';
//import {MockData} from './common/services/mock-data';



@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [BackendService, HTTP_PROVIDERS]
})
export class SkillitApp {
  // make TabsPage the root (or first) page
  rootPage: any = TabsPage;

  constructor(private app: IonicApp, private platform: Platform) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu -- NO MENU currently...
    //this.app.getComponent('leftMenu').close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
