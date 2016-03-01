import { TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS} from 'angular2/platform/testing/browser';
import { setBaseTestProviders } from 'angular2/testing';
import { IonicApp, Platform }   from 'ionic-framework/ionic';
import { SkillitApp } from '../app/app';

// this need doing once for the entire test suit, thus it exists below
setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

let skillitApp = null;

export function main() {

  describe('SkillitApp', () => {

      beforeEach(function() {
          let platform = new Platform();
          skillitApp = new SkillitApp(platform);
      });

      it('initializes with tab structure', () => {
          expect(skillitApp).not.toBeNull();
      })
  })
}