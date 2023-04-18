import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/shared/hospital.service';

@Component({
  selector: 'app-hospital-view-patients',
  templateUrl: './hospital-view-patients.component.html',
  styleUrls: ['./hospital-view-patients.component.scss']
})
export class HospitalViewPatientsComponent implements OnInit{
  patients:any;
  constructor(private service : HospitalService){}
  ngOnInit(): void {
    this.service.ViewPatients().subscribe((res:any)=>{
      this.patients=res;
      console.log(res)
    })
  }

}
