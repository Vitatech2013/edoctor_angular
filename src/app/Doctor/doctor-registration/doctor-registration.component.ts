import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/shared/doctor.service';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.scss']
})
export class DoctorRegistrationComponent implements OnInit {
  hospitals: any;
  constructor( private fb :FormBuilder ,
    private service : DoctorService){}
  DRegisterForm ! : FormGroup
  ngOnInit(): void {
    this.DRegisterForm=this.fb.group({
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
    this.service.ViewHospitals().subscribe((res)=>{
      this.hospitals=res
      console.log(res)
    })
  }
AddDoctor(){
  if(this.DRegisterForm.valid){
    this.service.AddDoctor(this.DRegisterForm.value).subscribe((res)=>{
      alert('Registerd successfully')
      console.log(res)
    })
  }else{
    alert('something went wrong')
  }
  }
}

