import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDoctorsComponent } from './doctor-doctors.component';

describe('DoctorDoctorsComponent', () => {
  let component: DoctorDoctorsComponent;
  let fixture: ComponentFixture<DoctorDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
