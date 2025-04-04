import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, WritableSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchPipe } from '../pipes/search.pipe';
import { TermTextPipe } from '../pipes/term-text.pipe';
import { IProduct } from '../models/ICart';
import { ICategory } from '../models/ICategories';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    RouterLink,
    TermTextPipe,
    SearchPipe,
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  searchVal: string = '';
  @Input() type = ''
  @Input() list: WritableSignal<IProduct[] | ICategory[]> = signal([])
  @Output() sendProductId = new EventEmitter<string>();

  onAddToCart(id: string) {
    this.sendProductId.emit(id);
  }
}
