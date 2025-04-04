import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { BrandsService } from './services/brands.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IBrand } from './models/IBrands';
import { Subscription } from 'rxjs';
import { CardsComponent } from '../../shared/cards/cards.component';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [
    CommonModule,
    CardsComponent,
    FormsModule,
    TranslateModule
  ],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {
  brandsList:WritableSignal<IBrand[]> = signal([])
  searchVal = ''
  getAllBrandsSubscribe!:Subscription
  private readonly _brandsServices = inject(BrandsService)

  ngOnInit(): void {
    this.getAllBrands()
  }
  getAllBrands(){
    this.getAllBrandsSubscribe = this._brandsServices.getAllbrands().subscribe(res => {
      this.brandsList.set(res.data)
    })
  }
  ngOnDestroy(): void {
    this.getAllBrandsSubscribe.unsubscribe()
  }
}
