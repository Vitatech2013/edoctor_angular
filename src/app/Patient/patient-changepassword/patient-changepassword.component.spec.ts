import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChangepasswordComponent } from './patient-changepassword.component';

describe('PatientChangepasswordComponent', () => {
  let component: PatientChangepasswordComponent;
  let fixture: ComponentFixture<PatientChangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientChangepasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientChangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
