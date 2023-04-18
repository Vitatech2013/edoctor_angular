import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HospitalService } from 'src/app/shared/hospital.service';
@Component({
  selector: 'app-hospital-changepassword',
  templateUrl: './hospital-changepassword.component.html',
  styleUrls: ['./hospital-changepassword.component.scss']
})
export class HospitalChangepasswordComponent implements OnInit{
  hospital:any
  constructor(
     private fb : FormBuilder,
     private router:Router,
     private service:HospitalService
     ){}
  HchangepswForm !: FormGroup;
  ngOnInit(): void {
    this.hospital=JSON.parse(localStorage.getItem('hospitals')!)
    this.HchangepswForm=this.fb.group({
      username : [this.hospital.hospitalname,[Validators.required]],
      password :  ['',[Validators.required]],
      newpassword :  ['',[Validators.required]],
    })
  }
  changePWD(){
    let pwd=this.HchangepswForm.value.password
    let npwd=this.HchangepswForm.value.newpassword
    
    
    if(this.hospital.password==pwd){
    let data={
      password:npwd
    }
    this.service.EditHospital(this.hospital._id,data).subscribe((res:any)=>{
      localStorage.removeItem('hospitals')
      this.router.navigate(['welcome/hospital-login'])
    })
    }else{
      alert('old password not matched')
    }
  }

}