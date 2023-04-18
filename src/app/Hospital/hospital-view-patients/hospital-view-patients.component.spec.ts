import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalViewPatientsComponent } from './hospital-view-patients.component';

describe('HospitalViewPatientsComponent', () => {
  let component: HospitalViewPatientsComponent;
  let fixture: ComponentFixture<HospitalViewPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalViewPatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalViewPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
