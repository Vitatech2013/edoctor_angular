import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalChangepasswordComponent } from './hospital-changepassword.component';

describe('HospitalChangepasswordComponent', () => {
  let component: HospitalChangepasswordComponent;
  let fixture: ComponentFixture<HospitalChangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalChangepasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalChangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
