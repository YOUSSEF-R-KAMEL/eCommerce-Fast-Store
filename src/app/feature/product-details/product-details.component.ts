import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../shared/services/products/products.service';
import { IProduct } from '../../shared/models/IProducts';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../shared/services/cart/cart.service';
import { ICartResponse } from '../../shared/models/ICart';
import { ToastrService } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, CarouselModule, TranslateModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  productId: string  = '';
  product: IProduct | null = null;
  private readonly _productsService = inject(ProductsService);
  private readonly route = inject(ActivatedRoute);
  private _cartService = inject(CartService);
  private _toastr = inject(ToastrService);

  customOptions: OwlOptions = {
    loop: true,
    rtl: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    dots: false,
    navSpeed: 700,
    navText: [
      '<span class="owl-nav-right"><i class="fa-solid fa-angle-right"></i></span>',
      '<span class="owl-nav-left"><i class="fa-solid fa-angle-left"></i></span>'
    ],    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.getProductById()
  }

  getProductById() {
    if (this.productId){
      this._productsService.getProductById(this.productId).subscribe({
        next: (res) => {
          this.product = res.data
        }
      });
    }
  }
  addPrdToCart(id:string){
    this._cartService.addProductToCart(id).subscribe({
      next: (res:ICartResponse) => {
        this._cartService.updateCartCount(res.numOfCartItems)
        this._toastr.success(res.message)
      }
    })
  }
}
