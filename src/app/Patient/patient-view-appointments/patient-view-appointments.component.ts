import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/patient.service';

@Component({
  selector: 'app-patient-view-appointments',
  templateUrl: './patient-view-appointments.component.html',
  styleUrls: ['./patient-view-appointments.component.scss']
})
export class PatientViewAppointmentsComponent implements OnInit {
  constructor(private service : PatientService){}
  appoinments:any
  ngOnInit(): void {
    let p =JSON.parse(localStorage.getItem('patients')!)
    this.service.ViewAppointments(p.name).subscribe((res:any)=>{
      this.appoinments=res;
      console.log(res)
    })

  }

}
