import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBlockViewerComponent } from './book-block-viewer.component';

describe('BookBlockViewerComponent', () => {
  let component: BookBlockViewerComponent;
  let fixture: ComponentFixture<BookBlockViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookBlockViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBlockViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
