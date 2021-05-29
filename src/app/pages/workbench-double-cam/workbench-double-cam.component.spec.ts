import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbenchDoubleCamComponent } from './workbench-double-cam.component';

describe('WorkbenchDoubleCamComponent', () => {
  let component: WorkbenchDoubleCamComponent;
  let fixture: ComponentFixture<WorkbenchDoubleCamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkbenchDoubleCamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbenchDoubleCamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
