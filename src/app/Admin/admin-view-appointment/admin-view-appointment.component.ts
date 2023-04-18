import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AdminService } from 'src/app/shared/admin.service'

@Component({
  selector: 'app-admin-view-appointment',
  templateUrl: './admin-view-appointment.component.html',
  styleUrls: ['./admin-view-appointment.component.scss']
})
export class AdminViewAppointmentComponent implements OnInit {
  appointments:any
  id: any
  data: any
  constructor(private http:HttpClient,
    private service:AdminService,
    private fb :FormBuilder){}
    Appointment!:FormGroup
    a:any
  ngOnInit(): void {
    this.Appointment=this.fb.group({
      name :['',[Validators.required]],
      dname :['',[Validators.required]],
      time :['',[Validators.required]],
      date :['',[Validators.required]],
      HospitalName:['',[Validators.required]],
  
    })
    this.service.viewAppointments().subscribe((res)=>{
      this.appointments=res
      console.log(res)
    })
    
  }

  geteditdata(a:any){
    this.id=a._id
    this.Appointment.patchValue({
       name:a.name,
       dname:a.dname,
       time:a.time,
       date:a.date,
       HospitalName:a.HospitalName,
    })
 }
  EditAppointment(){
this.service.UpdateAppointments(this.id,this.Appointment.value).subscribe((res:any)=>{
   alert('updated Successfully')
   window.location.reload()
})
  }











  DeleteAppointments(appointments:any){
      this.service.deleteAppointments(appointments._id).subscribe((res:any)=>{
        alert('Deleted successfully')
        window.location.reload()
      })
  }
 
 
}