import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/shared/doctor.service';

@Component({
  selector: 'app-doctor-doctors',
  templateUrl: './doctor-doctors.component.html',
  styleUrls: ['./doctor-doctors.component.scss']
})
export class DoctorDoctorsComponent implements OnInit{
  constructor(private service : DoctorService){}
  doctors:any
  ngOnInit(): void {
this.service.viewDoctor().subscribe((res)=>{
  this.doctors=res
})
  }

}
