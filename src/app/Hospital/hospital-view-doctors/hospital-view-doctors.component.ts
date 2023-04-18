import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/shared/hospital.service';

@Component({
  selector: 'app-hospital-view-doctors',
  templateUrl: './hospital-view-doctors.component.html',
  styleUrls: ['./hospital-view-doctors.component.scss']
})
export class HospitalViewDoctorsComponent implements OnInit{
  constructor(private service : HospitalService){}
  doctors:any
  ngOnInit(): void {
    this.service.ViewDoctors().subscribe((res:any)=>{
      this.doctors=res;
      console.log(res)
    })
  }

}
