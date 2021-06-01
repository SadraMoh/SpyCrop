import { TestBed } from '@angular/core/testing';

import { BlockViewService } from './block-view.service';

describe('BlockViewService', () => {
  let service: BlockViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
