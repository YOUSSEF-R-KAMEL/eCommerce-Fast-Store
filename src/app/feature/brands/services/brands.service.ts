import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBrand, IBrandsResponse } from '../models/IBrands';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  private readonly _httpClient = inject(HttpClient);
  getAllbrands():Observable<IBrandsResponse>{
    return this._httpClient.get<IBrandsResponse>('brands')
  }
  getBrandById(id:string):Observable<{data:IBrand}>{
    return this._httpClient.get<{data:IBrand}>('brands/' + id)
  }
}
