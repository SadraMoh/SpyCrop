import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDoubleCamComponent } from './new-double-cam.component';

describe('NewDoubleCamComponent', () => {
  let component: NewDoubleCamComponent;
  let fixture: ComponentFixture<NewDoubleCamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDoubleCamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDoubleCamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
