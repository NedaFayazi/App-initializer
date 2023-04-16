import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppConfigService} from "./app-config.service";
import {take, tap} from "rxjs";



@NgModule({
    providers: [{provide: APP_INITIALIZER,
      multi: true,
      useFactory: (config: AppConfigService) => { //should be a function return a promise or definite observable. as a side note behind the scene the observable is converted into a promise.
      return () => {
          config.fetchEndpoints();
          return config.dataAction$.pipe(tap(i => {
            console.log(i)}),take(1))
      }
      },
      deps: [AppConfigService]
    }]
}

 )
export class InitializerModule {

  constructor() {

  }
}
