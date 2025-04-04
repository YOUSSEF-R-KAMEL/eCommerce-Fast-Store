import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CategoriesService } from '../../shared/services/categories/categories.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ICategory } from '../../shared/models/ICategories';
import { CardsComponent } from "../../shared/cards/cards.component";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CardsComponent
],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categoriesList:WritableSignal<ICategory[]> = signal([])
  searchVal:string = ''
  getAllCategoriesSubscribe!:Subscription
  private _CategoriesService = inject(CategoriesService);
  ngOnInit(): void {
    this.getAllCategories()
  }
  getAllCategories(){
    this.getAllCategoriesSubscribe = this._CategoriesService.getAllCategories().subscribe({
      next: (res) => {
        this.categoriesList.set(res.data);
      }
    });
  }
  ngOnDestroy(){
    this.getAllCategoriesSubscribe?.unsubscribe()
  }
}
