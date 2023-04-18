import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAddHomeremediesComponent } from './doctor-add-homeremedies.component';

describe('DoctorAddHomeremediesComponent', () => {
  let component: DoctorAddHomeremediesComponent;
  let fixture: ComponentFixture<DoctorAddHomeremediesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAddHomeremediesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorAddHomeremediesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
