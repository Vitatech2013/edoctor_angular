import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorViewHomeremediesComponent } from './doctor-view-homeremedies.component';

describe('DoctorViewHomeremediesComponent', () => {
  let component: DoctorViewHomeremediesComponent;
  let fixture: ComponentFixture<DoctorViewHomeremediesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorViewHomeremediesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorViewHomeremediesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
