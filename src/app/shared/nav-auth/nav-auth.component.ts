import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MainTranslateService } from '../../core/services/main-translate.service';

@Component({
  selector: 'app-nav-auth',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './nav-auth.component.html',
  styleUrl: './nav-auth.component.scss'
})
export class NavAuthComponent implements OnInit {
    private readonly _mainTranslateService = inject(MainTranslateService)
    readonly _translateService = inject(TranslateService)
  ngOnInit(): void {
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
  changeLang(lang: string) {
    this._mainTranslateService.changeLang(lang)
  }
}

