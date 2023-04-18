import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/shared/doctor.service';


@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.scss']
})

export class DoctorAppointmentsComponent implements OnInit {
  appointments:any
  constructor(private service :DoctorService){}
  ngOnInit(): void {
    let d =JSON.parse(localStorage.getItem('doctors')!)
    this.service.viewAppointments(d.dname).subscribe((res)=>{
      this.appointments=res
      console.log(res)
    })

  }

}
