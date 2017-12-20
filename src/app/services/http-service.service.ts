import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PizzaListComponent } from './../components/pizza-list/pizza-list.component';
import { SharedServiceService } from './../services/shared-service.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class HttpServiceService {

  constructor(private _http: HttpClient, private sharedService: SharedServiceService) { }

  // Getting pizza list from json file
  getPizzaList() {
    return this._http.get('server/pizzas.json')
      .map(res => {
        return res;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  //posting order
  postOrder() {
    return this._http.post('server/orders.json', this.sharedService.cartItems)
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }

  handleError(error: Response | any){
    alert("system error");
    return Observable.throw(error.message || error);
  }
}
