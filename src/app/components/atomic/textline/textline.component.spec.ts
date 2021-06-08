import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextlineComponent } from './textline.component';

describe('TextlineComponent', () => {
  let component: TextlineComponent;
  let fixture: ComponentFixture<TextlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
