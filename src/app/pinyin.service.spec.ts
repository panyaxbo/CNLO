/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PinyinService } from './pinyin.service';

describe('Service: Pinyin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PinyinService]
    });
  });

  it('should ...', inject([PinyinService], (service: PinyinService) => {
    expect(service).toBeTruthy();
  }));
});
