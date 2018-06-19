import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './_store/Store';
import { getPersistState, persistState  } from './_session/Session';

import { AppComponent } from './app.component';
import { HeroesOverviewComponent } from './heroes-overview/heroes-overview.component';
import { HeroFormComponent } from './hero-form/hero-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesOverviewComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {

    const storeEnhaners = devTools.isEnabled() ? [ devTools.enhancer() ] : [];
    
    ngRedux.configureStore(rootReducer, getPersistState(), [], storeEnhaners);
    ngRedux.select<IAppState>().subscribe(
      currentState => {
        console.log(currentState);
        persistState(currentState);
      }
    );

  }
}
