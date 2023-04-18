import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewHospitalComponent } from './admin-view-hospital.component';

describe('AdminViewHospitalComponent', () => {
  let component: AdminViewHospitalComponent;
  let fixture: ComponentFixture<AdminViewHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewHospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
