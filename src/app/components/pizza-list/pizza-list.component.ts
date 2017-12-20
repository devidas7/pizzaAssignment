import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './../../services/http-service.service';
import { Subscription } from 'rxjs/Subscription';
import { SharedServiceService } from './../../services/shared-service.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzaList: any[] = [];
  subscription: Subscription;
  constructor(
    private httpService: HttpServiceService,
    private sharedService: SharedServiceService
  ) { }

  ngOnInit() {
    // Getting Pizzas on list module init
    this.subscription = this.httpService.getPizzaList().subscribe(
      data => {
        this.pizzaList = data;
        console.log(this.pizzaList);
      }
    );
  }

  // Add pizza to Cart
  addPizzaToCart(pizzaIndex: number){
    for(let i=0;i<this.sharedService.cartItems.length;i++){
      if(this.sharedService.cartItems[i].id == this.pizzaList[pizzaIndex].id){
        return;
      }
    }
    let pushObject = this.pizzaList[pizzaIndex];
    pushObject.quantity = 1;
    this.sharedService.cartItems.push(pushObject);
  }
  //Destroying subscription 
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
