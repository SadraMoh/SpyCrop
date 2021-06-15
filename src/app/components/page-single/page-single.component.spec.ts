import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSingleComponent } from './page-single.component';

describe('PageSingleComponent', () => {
  let component: PageSingleComponent;
  let fixture: ComponentFixture<PageSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
