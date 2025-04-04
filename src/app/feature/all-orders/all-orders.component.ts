import { Component, inject, OnInit } from '@angular/core';
import { AllOrdersService } from './services/all-orders.service';
import { CommonModule } from '@angular/common';
import { IAllOrdersRes } from './model/AllOrders';

@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent implements OnInit {
  orders:IAllOrdersRes[] = []
  private readonly _allOrdersService = inject(AllOrdersService)
  ngOnInit(): void {
    this.getUserOrders()
  }
  getUserOrders(){
    this._allOrdersService.getUserOrders().subscribe({
      next: (res:IAllOrdersRes[]) => {
        this.orders = res
      }
    })
  }

}
