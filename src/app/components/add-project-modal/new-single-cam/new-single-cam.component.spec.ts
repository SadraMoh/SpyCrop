import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSingleCamComponent } from './new-single-cam.component';

describe('NewSingleCamComponent', () => {
  let component: NewSingleCamComponent;
  let fixture: ComponentFixture<NewSingleCamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSingleCamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSingleCamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
