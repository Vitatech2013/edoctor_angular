import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/shared/patient.service';
@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss']
})
export class PatientRegistrationComponent implements OnInit {
  constructor(private fb : FormBuilder,
    private service : PatientService){}
  PRegisterForm! : FormGroup
  ngOnInit(): void {
    this.PRegisterForm=this.fb.group({
      name:['',[Validators.required]],
      fathername:['',[Validators.required]],
      emailid:['',[Validators.required]],
      password:['',[Validators.required]],
      dob:['',[Validators.required]],
      phone:['',[Validators.required]],
      gender:['',[Validators.required]],
      address:['',[Validators.required]],

    })
  }
  AddPatient(){
    if(this.PRegisterForm.valid){
      this.service.AddPatient(this.PRegisterForm.value).subscribe((res)=>{
        alert('Registerd successfully')
        console.log(res)
      })
    }else{
      alert('something went wrong')
    }
    }

}
