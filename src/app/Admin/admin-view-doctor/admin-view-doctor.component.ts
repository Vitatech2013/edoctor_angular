import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-admin-view-doctor',
  templateUrl: './admin-view-doctor.component.html',
  styleUrls: ['./admin-view-doctor.component.scss']
})
export class AdminViewDoctorComponent implements OnInit {
  doctors : any
hospitals: any;
  DUpdateForm !: FormGroup;
  id: any;
  constructor(private http:HttpClient,
    private service :AdminService,
    private fb: FormBuilder){}
  ngOnInit(): void {
    this.DUpdateForm=this.fb.group({
      dname :['',[Validators.required]],
      dfathername :['',[Validators.required]],
      demailid :['',[Validators.required]],
      dpassword :['',[Validators.required]],
      ddoj :['',[Validators.required]],
      dspecilization :['',[Validators.required]],
      dphone :['',[Validators.required]],
      dschedule :['',[Validators.required]],
      Timings :['',[Validators.required]],
      daddress :['',[Validators.required]],
      HospitalName :['',[Validators.required]],
    })
    this.service.viewDoctors().subscribe((res)=>{
          this.doctors=res
    })
    this.service.viewhospital().subscribe((res)=>{
      this.hospitals=res
     })
  }
Edit(d:any){
  console.log(d,"d vlue");
  
  this.id=d._id
  console.log(d)
  this.DUpdateForm.patchValue({
    dname : d.dname,
    dfathername :d.dfathername,
    demailid :d.demailid,
    dpassword :d.dpassword,
    ddoj :d.ddoj,
    dspecilization :d.dspecilization,
    dphone : d.dphone,
    dschedule : d.dschedule,
    Timings :d.Timings,
    daddress :d.daddress,
    HospitalName :d.HospitalName
  })
}
EditDoctors(){
this.service.UpdateDoctors(this.id,this.DUpdateForm.value).subscribe((res:any)=>{
  alert('updated successfully')
  window.location.reload()

  console.log(res)
})
}

DeleteDoctors(doctors:any){
  this.service.deleteDoctors(doctors._id).subscribe((res:any)=>{
    alert('Deleted successfully')
    window.location.reload()
  })

}}