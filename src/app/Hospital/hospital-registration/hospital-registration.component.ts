import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HospitalService } from 'src/app/shared/hospital.service';
@Component({
  selector: 'app-hospital-registration',
  templateUrl: './hospital-registration.component.html',
  styleUrls: ['./hospital-registration.component.scss']
})
export class HospitalRegistrationComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private service :HospitalService) { }
  HRegisterForm!: FormGroup
  ngOnInit(): void {
    this.HRegisterForm = this.fb.group({
      hospitalname: ['', [Validators.required]],
      estyear: ['', [Validators.required]],
      emailid: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phoneno: ['', [Validators.required]],
      district: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      address: ['', [Validators.required]],


    })
  }

  AddHospital(){
    if(this.HRegisterForm.valid){
      this.service.AddHospital(this.HRegisterForm.value).subscribe((res)=>{
        alert('Registerd successfully')
        console.log(res)
      })
    }else{
      alert('something went wrong')
    }
    }
}
