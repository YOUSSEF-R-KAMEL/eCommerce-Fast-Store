import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IBrand } from '../brands/models/IBrands';
import { BrandsService } from '../brands/services/brands.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-brand-details',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './brand-details.component.html',
  styleUrl: './brand-details.component.scss'
})
export class BrandDetailsComponent {
  brandId: string  = '';
  brand: WritableSignal<IBrand | null> = signal(null)
  private readonly _brandsService = inject(BrandsService)
  private readonly route = inject(ActivatedRoute)

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
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsive: {
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
    this.brandId = this.route.snapshot.paramMap.get('id')!;
    this.getbrandById()
  }

  getbrandById() {
    if (this.brandId){
      this._brandsService.getBrandById(this.brandId).subscribe({
        next: (res) => {
          this.brand.set(res.data)
        }
      });
    }
  }
}

