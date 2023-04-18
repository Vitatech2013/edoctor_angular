import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSearchDoctorsComponent } from './patient-search-doctors.component';

describe('PatientSearchDoctorsComponent', () => {
  let component: PatientSearchDoctorsComponent;
  let fixture: ComponentFixture<PatientSearchDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientSearchDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientSearchDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
