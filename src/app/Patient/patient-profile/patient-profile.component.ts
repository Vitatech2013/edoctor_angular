import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/shared/patient.service';
@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent implements OnInit {
  patients: any;
  constructor(private fb : FormBuilder,
    private service :PatientService){}
    PUpdateForm! : FormGroup
  ngOnInit(): void {
    this.PUpdateForm=this.fb.group({
      name:['',[Validators.required]],
      fathername:['',[Validators.required]],
      emailid:['',[Validators.required]],
      password:['',[Validators.required]],
      dob:['',[Validators.required]],
      phone:['',[Validators.required]],
      gender:['',[Validators.required]],
      address:['',[Validators.required]],

    })
    let p=JSON.parse(localStorage.getItem('patients')!)
    this.service.ViewProfile(p.name).subscribe((res)=>{
      this.patients=res;
      this.PUpdateForm.patchValue({
        name:this.patients.name,
        fathername:this.patients.fathername,
        emailid:this.patients.emailid,
        password:this.patients.password,
        dob:this.patients.dob,
        phone:this.patients.phone,
        gender:this.patients.gender,
        address:this.patients.address,

      })
    })
  }
  EditProfile(){
 
        this.service.EditPatient(this.patients._id,this.PUpdateForm.value).subscribe((res:any)=>{
          alert('updated successfully')
          window.location.reload()
          console.log(res)
        })
  }
}






