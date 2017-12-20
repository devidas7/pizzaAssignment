import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpServiceService } from './services/http-service.service';
import { SharedServiceService } from './services/shared-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    PizzaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpClientModule, HttpServiceService, SharedServiceService],
  exports: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
