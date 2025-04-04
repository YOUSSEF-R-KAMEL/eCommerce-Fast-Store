import { TestBed } from '@angular/core/testing';

import { MainTranslateService } from './main-translate.service';

describe('MainTranslateService', () => {
  let service: MainTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
