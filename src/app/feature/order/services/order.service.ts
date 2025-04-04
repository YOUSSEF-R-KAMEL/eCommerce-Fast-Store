import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrder } from '../model/IOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly _httpClient = inject(HttpClient)
  order(data:IOrder, cartId:string){
    const returnUrl = window.location.origin;
    return this._httpClient.post(`orders/checkout-session/${cartId}?url=${returnUrl}`, data)
  }
}
