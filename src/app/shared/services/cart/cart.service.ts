import { effect, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICartResponse } from '../../models/ICart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  numOfCartItems:WritableSignal<number> = signal(0)
  private readonly _httpClient = inject(HttpClient);
  constructor() {
    effect(() => {
      localStorage.setItem('cartCount', this.numOfCartItems().toString())
    })
  }
  addProductToCart(id:string): Observable<ICartResponse>{
    return this._httpClient.post<ICartResponse>('cart', {
      'productId': id
    })
  }
  getProductsFromCart(): Observable<ICartResponse>{
    return this._httpClient.get<ICartResponse>('cart')
  }
  updateProductsInCart(id:string, count:number): Observable<ICartResponse>{
    return this._httpClient.put<ICartResponse>('cart/' + id, {count: count})
  }
  deleteProductsFromCart(id:string): Observable<ICartResponse>{
    return this._httpClient.delete<ICartResponse>('cart/'+ id)
  }
  clearCart(){
    return this._httpClient.delete<ICartResponse>('cart')
  }
  updateCartCount(count: number) {
    this.numOfCartItems.set(count);
  }
}
