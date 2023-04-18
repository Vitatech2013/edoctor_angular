import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/shared/doctor.service';

@Component({
  selector: 'app-doctor-view-medicines',
  templateUrl: './doctor-view-medicines.component.html',
  styleUrls: ['./doctor-view-medicines.component.scss']
})
export class DoctorViewMedicinesComponent implements OnInit {
  medicines:any
  constructor(private service:DoctorService){}
  
  ngOnInit(): void {
this.service.viewMedicines().subscribe((res)=>{
  this.medicines=res
})
  }

}
