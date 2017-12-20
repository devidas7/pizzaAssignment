import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from './../../services/shared-service.service';
import { Subscription } from 'rxjs/Subscription';
import { HttpServiceService } from './../../services/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalAmount: number;
  subscription: Subscription;
  constructor(
    private router: Router,
    private httpService: HttpServiceService,
    private sharedService: SharedServiceService
  ) { }

  ngOnInit() {
    if(this.sharedService.cartItems.length == 0){
      this.router.navigate(['/']);
    }
  }

  ngDoCheck() {
  // Calculating total amount if cart items's array change
   this.totalAmount = 0;
   console.log(this.sharedService.cartItems);
   for(let i=0;i<this.sharedService.cartItems.length;i++){
     this.totalAmount += (this.sharedService.cartItems[i].price-((this.sharedService.cartItems[i].discunt/100)*this.sharedService.cartItems[i].price)) * this.sharedService.cartItems[i].quantity;
   }
  };

  // Remove item from cart
  removeItemFromCart(pizzaIndex: any){
    this.sharedService.cartItems.splice(pizzaIndex,1);
  }

  // checkout method
  checkoutCartItems(){
    this.subscription = this.httpService.postOrder().subscribe(
      data => {
        console.log(data);
        //Here will be order placed successful message
      },
      error => {
        console.log(error);
      }
    );
  }
}
