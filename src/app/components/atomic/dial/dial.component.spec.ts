import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialComponent } from './dial.component';

describe('DialComponent', () => {
  let component: DialComponent;
  let fixture: ComponentFixture<DialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
