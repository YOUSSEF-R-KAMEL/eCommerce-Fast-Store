import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { IAllOrdersRes } from '../model/AllOrders';

@Injectable({
  providedIn: 'root'
})
export class AllOrdersService {
  userId:string | null = null
  private readonly _httpClient = inject(HttpClient)

  constructor() {
    this.initializeUserId()
  }

  private initializeUserId(): void {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const decoded: any = jwtDecode(token);
        this.userId = decoded?.id || decoded?.userId || null;
      }
    } catch (error) {
      this.userId = null;
    }
  }

  getUserOrders(): Observable<IAllOrdersRes[]>{
    return this._httpClient.get<IAllOrdersRes[]>('orders/user/' + this.userId)
  }
}
