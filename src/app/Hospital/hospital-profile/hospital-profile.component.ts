import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HospitalService } from 'src/app/shared/hospital.service';
@Component({
  selector: 'app-hospital-profile',
  templateUrl: './hospital-profile.component.html',
  styleUrls: ['./hospital-profile.component.scss']
})
export class HospitalProfileComponent implements OnInit{
  hospitals: any;
  constructor(private fb: FormBuilder,
    private service:HospitalService) { }
  HUpdateForm!: FormGroup
  ngOnInit(): void {
    this.HUpdateForm = this.fb.group({
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
    let p=JSON.parse(localStorage.getItem('hospitals')!)
    this.service.ViewProfile(p.hospitalname).subscribe((res)=>{
      console.log(res)
      this.hospitals=res;
      this.HUpdateForm.patchValue({
        hospitalname:this.hospitals.hospitalname,
        estyear:this.hospitals.estyear,
        emailid:this.hospitals.emailid,
        password:this.hospitals.password,
        phoneno:this.hospitals.phoneno,
        district:this.hospitals.district,
        country:this.hospitals.country,
        state:this.hospitals.state,
        address:this.hospitals.address,
      })
    })
  }
  EditProfile(){
   
    this.service.EditHospital(this.hospitals._id,this.HUpdateForm.value).subscribe((res:any)=>{
      alert('Updated Successfully')
      console.log(res)
    })
  }

}



