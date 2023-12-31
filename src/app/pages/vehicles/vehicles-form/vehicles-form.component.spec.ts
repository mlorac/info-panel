import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesFormComponent } from './vehicles-form.component';

describe('VehiclesFormComponent', () => {
  let component: VehiclesFormComponent;
  let fixture: ComponentFixture<VehiclesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiclesFormComponent]
    });
    fixture = TestBed.createComponent(VehiclesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
