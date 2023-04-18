import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorChangepasswordComponent } from './doctor-changepassword.component';

describe('DoctorChangepasswordComponent', () => {
  let component: DoctorChangepasswordComponent;
  let fixture: ComponentFixture<DoctorChangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorChangepasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorChangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
