import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { ProductsService } from '../../shared/services/products/products.service';
import { IProduct } from '../../shared/models/IProducts';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../shared/services/categories/categories.service';
import { ICategory } from '../../shared/models/ICategories';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../shared/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { ICartResponse } from '../../shared/models/ICart';
import { TranslateModule } from '@ngx-translate/core';
import { CardsComponent } from "../../shared/cards/cards.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    RouterLink,
    FormsModule,
    TranslateModule,
    CardsComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  productsList:WritableSignal<IProduct[]> = signal([])
  CategoriesList:WritableSignal<ICategory[]> = signal([])
  searchVal:string = ''
  getAllProductSubscribe!:Subscription
  private _productsService = inject(ProductsService);
  private _categoriesService = inject(CategoriesService);
  private _cartService = inject(CartService);
  private _toastr = inject(ToastrService);
  categoriesOptions: OwlOptions = {
    loop: true,
    rtl: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      991: {
        items: 4
      },
      1200: {
        items: 6
      }
    },
    nav: false
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    rtl: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    smartSpeed: 1500,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: true
  }
  ngOnInit(): void {
    this.getAllProducts()
    this.getAllCategories()
  }
  getAllProducts(){
    this.getAllProductSubscribe = this._productsService.getAllProducts(12).subscribe({
      next: (res) => {
        this.productsList.set(res.data)
      }
    })
  }
  getAllCategories(){
    this.getAllProductSubscribe = this._categoriesService.getAllCategories().subscribe({
      next: (res) => {
        this.CategoriesList.set(res.data)
      }
    })
  }
  addProductToCart(id:string){
    this._cartService.addProductToCart(id).subscribe({
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
