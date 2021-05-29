import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbenchSingleCamComponent } from './workbench-single-cam.component';

describe('WorkbenchSingleCamComponent', () => {
  let component: WorkbenchSingleCamComponent;
  let fixture: ComponentFixture<WorkbenchSingleCamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkbenchSingleCamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbenchSingleCamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
