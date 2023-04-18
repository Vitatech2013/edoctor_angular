import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalViewDoctorsComponent } from './hospital-view-doctors.component';

describe('HospitalViewDoctorsComponent', () => {
  let component: HospitalViewDoctorsComponent;
  let fixture: ComponentFixture<HospitalViewDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalViewDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalViewDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
