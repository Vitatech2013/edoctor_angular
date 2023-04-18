import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAddMedicinesComponent } from './doctor-add-medicines.component';

describe('DoctorAddMedicinesComponent', () => {
  let component: DoctorAddMedicinesComponent;
  let fixture: ComponentFixture<DoctorAddMedicinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAddMedicinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorAddMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
