import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import {HttpClientModule} from '@angular/common/http';
import{HosingService} from './service/hosing.service';
import { AddPropertyComponent } from './property/Add-property/Add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [HosingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
