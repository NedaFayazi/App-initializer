import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {PatternsBridgeModule} from "./patterns-bridge/patterns-bridge.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InitializerModule } from './initializer/initializer.module';
import {HttpClientModule} from "@angular/common/http";
// Imports for loading & configuring the in-memory web api
import {AppData} from "./app-data";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PatternsBridgeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InitializerModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),//npm install --save angular-in-memory-web-api --legacy-peer-deps
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
