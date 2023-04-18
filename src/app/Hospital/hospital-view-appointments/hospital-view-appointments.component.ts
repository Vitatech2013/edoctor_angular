import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/shared/hospital.service';

@Component({
  selector: 'app-hospital-view-appointments',
  templateUrl: './hospital-view-appointments.component.html',
  styleUrls: ['./hospital-view-appointments.component.scss']
})
export class HospitalViewAppointmentsComponent implements OnInit{
  appointmemts:any
  constructor( private service : HospitalService){}
  ngOnInit(): void {
    let h =JSON.parse(localStorage.getItem('hospitals')!)
    this.service.ViewAppointments(h.hospitalname).subscribe((res:any)=>{
      this.appointmemts=res;
    console.log(this.appointmemts);
    
    })
  }

}
