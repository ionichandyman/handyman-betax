import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPage} from '../pages/signin/signin';
import { ConsolePage } from '../pages/console/console';
import { WorkorderPage } from '../pages/workorder/workorder';
import { SearchPage } from '../pages/search/search';
import { SearchResultPage } from '../pages/search-result/search-result';
import { ListingsProvider } from '../providers/listings/listings';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StaticsProvider } from '../providers/statics/statics';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


export const config = {
  apiKey: "AIzaSyAXsDELhdLC_YJDtKlybap1MTd6NLw2BPs",
  authDomain: "ionic-handyman.firebaseapp.com",
  databaseURL: "https://ionic-handyman.firebaseio.com",
  projectId: "ionic-handyman",
  storageBucket: "ionic-handyman.appspot.com",
  messagingSenderId: "1030790357735"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    ConsolePage,
    WorkorderPage,
    SearchPage,
    SearchResultPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    ConsolePage,
    WorkorderPage,
    SearchPage,
    SearchResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListingsProvider,
    StaticsProvider
    
  ]
})
export class AppModule {}
