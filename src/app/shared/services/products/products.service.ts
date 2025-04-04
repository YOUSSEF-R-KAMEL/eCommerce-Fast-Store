import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct, IProductResponse } from '../../models/IProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly _httpClient = inject(HttpClient);
  getAllProducts(limit:number = 100):Observable<IProductResponse>{
    return this._httpClient.get<IProductResponse>('products', {
      params: {limit: limit}
    })
  }
  getProductById(id:string):Observable<{data:IProduct}>{
    return this._httpClient.get<{data:IProduct}>('products/' + id)
  }
}
