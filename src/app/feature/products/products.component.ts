import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ProductsService } from '../../shared/services/products/products.service';
import { ICartResponse } from '../../shared/models/ICart';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CartService } from '../../shared/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { IProduct } from '../../shared/models/IProducts';
import { CardsComponent } from '../../shared/cards/cards.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    FormsModule,
    CardsComponent,
    TranslateModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  productsList:WritableSignal<IProduct[]> = signal([])
  searchVal:string = ''
  getAllProductSubscribe!:Subscription
  private _productsService = inject(ProductsService);
  private _cartService = inject(CartService);
  private _toastr = inject(ToastrService);
  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this._productsService.getAllProducts().subscribe({
      next: (res) => {
        this.productsList.set(res.data)
      }
    })
  }
  addProductToCart(id:string){
    this.getAllProductSubscribe = this._cartService.addProductToCart(id).subscribe({
      next: (res:ICartResponse) => {
        this._cartService.updateCartCount(res.numOfCartItems)
        this._toastr.success(res.message)
      }
    })
  }
  ngOnDestroy(){
    this.getAllProductSubscribe?.unsubscribe()
  }
}
