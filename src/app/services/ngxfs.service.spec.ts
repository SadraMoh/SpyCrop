import { TestBed } from '@angular/core/testing';

import { NgxfsService } from './ngxfs.service';

describe('NgxfsService', () => {
  let service: NgxfsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxfsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
