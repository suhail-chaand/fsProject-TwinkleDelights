import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentModule } from './content/content.module';

import { StaticBarsModule } from './static-bars/static-bars.module';
import { PopupsModule } from './popups/popups.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    StaticBarsModule,
    ContentModule,
    PopupsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
