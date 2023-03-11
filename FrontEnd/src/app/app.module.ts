import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertylistComponent } from './property/propertylist/propertylist.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertycardComponent } from './property/propertycard/propertycard.component';


@NgModule({
  declarations: [
    AppComponent,

    PropertylistComponent,
     NavBarComponent,
     PropertycardComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
