import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/admin.service';
import { DoctorService } from 'src/app/shared/doctor.service';
@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent implements OnInit {

  
  constructor( private fb :FormBuilder,
    private service :DoctorService,
    ){}
  DUpdateForm ! : FormGroup
  doctors:any
  hospitals:any
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
    let d =JSON.parse(localStorage.getItem('doctors')!)
    this.service.viewProfile(d.dname).subscribe((res)=>{
      this.doctors=res;
this.DUpdateForm.patchValue({
      dname:this.doctors.dname,
      dfathername:this.doctors.dfathername,
      demailid:this.doctors.demailid,
      dpassword:this.doctors.dpassword,
      ddoj:this.doctors.ddoj,
      dspecilization:this.doctors.dspecilization,
      dphone:this.doctors.dphone,
      dschedule:this.doctors.dschedule,
      Timings:this.doctors.Timings,
      daddress:this.doctors.daddress,
      HospitalName:this.doctors.HospitalName,
    })
    })
    this.service.ViewHospitals().subscribe((res)=>{
      this.hospitals=res
    })
  }
  EditProfile(){
     
      let d ={
      dname:this.DUpdateForm.get('dname')?.value,
      dfathername:this.DUpdateForm.get('dfathername')?.value,
      demailid:this.DUpdateForm.get('demailid')?.value,
      dpassword:this.DUpdateForm.get('dpassword')?.value,
      dspecilization:this.DUpdateForm.get('dspecilization')?.value,
      dschedule:this.DUpdateForm.get('dschedule')?.value,
      daddress:this.DUpdateForm.get('daddress')?.value,
      HospitalName:this.DUpdateForm.get('HospitalName')?.value,
      Timings:this.DUpdateForm.get('Timings')?.value,
      ddoj:this.DUpdateForm.get('ddoj')?.value,
      dphone:this.DUpdateForm.get('dphone')?.value,
    }
    this.service.EditDoctor(this.doctors._id,d).subscribe((res:any)=>{
      alert('updated successfully')
      window.location.reload()

      
      console.log(res)
    })
  }

}


