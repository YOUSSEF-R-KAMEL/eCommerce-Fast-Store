import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart/cart.service';
import { CommonModule } from '@angular/common';
import { ICart, ICartResponse } from '../../shared/models/ICart';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgxSpinnerModule,
    TranslateModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  carts: ICart | null = null;
  isCartEmpty: boolean = false;
  isLoading: boolean = true;
  private readonly _cartService = inject(CartService)

  ngOnInit(): void {
    this.getProductsFromCart();
  }

  getProductsFromCart() {
    this.isLoading = true;
    this._cartService.getProductsFromCart().subscribe({
      next: (res: ICartResponse) => {
        this.carts = res.data;
        this.isCartEmpty = !this.carts || this.carts.totalCartPrice === 0;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  updateProductsInCart(id: string, count: number) {
    if (count < 1) return;
    this._cartService.updateProductsInCart(id, count).subscribe({
      next: (res) => {
        this.carts = res.data;
        this.isCartEmpty = !this.carts || this.carts.totalCartPrice === 0;
      }
    });
  }

  deleteProductsFromCart(id: string) {
    this._cartService.deleteProductsFromCart(id).subscribe({
      next: (res) => {
        this.carts = res.data;
        this._cartService.updateCartCount(res.numOfCartItems)
        this.isCartEmpty = !this.carts || this.carts.totalCartPrice === 0;
      }
    });
  }

  clearCart() {
    this._cartService.clearCart().subscribe({
      next: () => {
        this.carts = {} as ICart;
        this.isCartEmpty = true;
        this._cartService.updateCartCount(0)
      }
    });
  }

  showAlert() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clearCart();
        Swal.fire({
          title: 'Deleted!',
          text: 'Your cart has been deleted.',
          icon: 'success'
        });
      }
    });
  }
}
