import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/auth/services/auth.service';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MainTranslateService } from '../../core/services/main-translate.service';
import { CartService } from '../services/cart/cart.service';
import { ICartResponse } from '../models/ICart';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, TranslateModule, FormsModule],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss'
})
export class NavBlankComponent implements OnInit {
  isNavbarOpen = false;
  numOfCartItems: Signal<number> = computed(() => this._cartService.numOfCartItems())
  private readonly _authService = inject(AuthService)
  private readonly _cartService = inject(CartService)
  private readonly _mainTranslateService = inject(MainTranslateService)
  readonly _translateService = inject(TranslateService)

  ngOnInit() {
    this.toggleNav();
    this.getProductsFromCart();
    this.toggleLang()
  }

  toggleLang(){
    const checkbox = document.getElementById("checkbox") as HTMLInputElement;
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add("dark");
      checkbox.checked = true;
    }
    checkbox.addEventListener("change", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem('darkMode', checkbox.checked ? 'true' : 'false');
    });
  }

  getProductsFromCart() {
    this._cartService.getProductsFromCart().subscribe({
      next: (res: ICartResponse) => {
        this._cartService.updateCartCount(res.numOfCartItems)
      }
    });
  }

  toggleNav() {
    const navbar = document.getElementById('navbarNav');
    if (navbar) {
      navbar.addEventListener('show.bs.collapse', () => {
        this.isNavbarOpen = true;
      });
      navbar.addEventListener('hidden.bs.collapse', () => {
        this.isNavbarOpen = false;
      });
    }
  }

  closeNavbar() {
    const navbar = document.getElementById('navbarNav');
    if (navbar?.classList.contains('show')) {
      this.isNavbarOpen = false;
      navbar.classList.remove('show');
    }
  }

  signOut() {
    this._authService.deleteInfo()
    this.closeNavbar();
  }

  changeLang(lang: string) {
    this._mainTranslateService.changeLang(lang)
  }
}
