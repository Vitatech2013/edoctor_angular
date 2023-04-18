import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalViewAppointmentsComponent } from './hospital-view-appointments.component';

describe('HospitalViewAppointmentsComponent', () => {
  let component: HospitalViewAppointmentsComponent;
  let fixture: ComponentFixture<HospitalViewAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalViewAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalViewAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
