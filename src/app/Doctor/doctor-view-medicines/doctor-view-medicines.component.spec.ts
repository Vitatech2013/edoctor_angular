import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorViewMedicinesComponent } from './doctor-view-medicines.component';

describe('DoctorViewMedicinesComponent', () => {
  let component: DoctorViewMedicinesComponent;
  let fixture: ComponentFixture<DoctorViewMedicinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorViewMedicinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorViewMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
