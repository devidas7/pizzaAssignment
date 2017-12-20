import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';




const routes: Routes = [
  { path: '', component: PizzaListComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
