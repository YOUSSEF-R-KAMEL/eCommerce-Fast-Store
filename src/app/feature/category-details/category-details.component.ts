import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ICategory } from '../../shared/models/ICategories';
import { CategoriesService } from '../../shared/services/categories/categories.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [CommonModule, CarouselModule, TranslateModule],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.scss'
})
export class CategoryDetailsComponent {
  categoryId: string  = '';
  category: WritableSignal<ICategory | null> = signal(null)
  private readonly _categoriesService = inject(CategoriesService)
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
    this.categoryId = this.route.snapshot.paramMap.get('id')!;
    this.getcategoryById()
  }

  getcategoryById() {
    if (this.categoryId){
      this._categoriesService.getCategoryById(this.categoryId).subscribe({
        next: (res) => {
          this.category.set(res.data)
        }
      });
    }
  }
}

