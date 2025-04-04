import { inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from '../../shared/services/helpers/helper.service';

@Injectable({
  providedIn: 'root'
})
export class MainTranslateService {
  private readonly _translateService = inject(TranslateService)
  private readonly _helperService = inject(HelperService)
  private readonly _renderer2 = inject(RendererFactory2).createRenderer(null, null)

  constructor() {
    if(this._helperService){
      let savedLang = localStorage.getItem('lang')
      this._translateService.setDefaultLang('en')
      if(savedLang !== null){
        this._translateService.use(savedLang)
      }
      this.setLang()
    }
  }

  setLang(){
    let savedLang = localStorage.getItem('lang')
    if(savedLang !== null){
      this._translateService.use(savedLang)
    }
    if (savedLang == 'en') {
      this._renderer2.setAttribute(document.documentElement, 'dir', 'ltr')
      this._renderer2.setAttribute(document.documentElement, 'lang', 'en')
    }
    else if(savedLang == 'ar') {
      this._renderer2.setAttribute(document.documentElement, 'dir', 'rtl')
      this._renderer2.setAttribute(document.documentElement, 'lang', 'ar')

    }
  }

  changeLang(lang:string) {
    if(this._helperService){
      localStorage.setItem('lang', lang)
      this.setLang()
    }
  }
}
