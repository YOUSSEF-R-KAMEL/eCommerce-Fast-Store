import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoriesResponse, ICategory } from '../../models/ICategories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private readonly _httpClient = inject(HttpClient);
  getAllCategories():Observable<ICategoriesResponse>{
    return this._httpClient.get<ICategoriesResponse>('categories')
  }
  getCategoryById(id:string):Observable<{data:ICategory}>{
    return this._httpClient.get<{data:ICategory}>('categories/' + id)
  }
}
