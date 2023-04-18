import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/shared/patient.service';
@Component({
  selector: 'app-patient-changepassword',
  templateUrl: './patient-changepassword.component.html',
  styleUrls: ['./patient-changepassword.component.scss']
})
export class PatientChangepasswordComponent implements OnInit{
  pName:any
  constructor( private fb : FormBuilder,
    private service :PatientService,
    private router:Router
    ){}
  PchangepswForm !: FormGroup;
  ngOnInit(): void {
    this.pName = JSON.parse(localStorage.getItem('patients')!)
    this.PchangepswForm=this.fb.group({
      username : ['',[Validators.required]],
      password :  ['',[Validators.required]],
      newpassword :  ['',[Validators.required]],
      emailid :  ['',[Validators.required]],
    })
    this.PchangepswForm.patchValue({
      username:this.pName.name
    })

  }
  changePWD(){
let pwd=this.PchangepswForm.value.password
let npwd=this.PchangepswForm.value.newpassword
if(this.pName.password==pwd){
let data={
  password:npwd
}
this.service.EditPatient(this.pName._id,data).subscribe((res:any)=>{
  localStorage.removeItem('patients')
  this.router.navigate(['welcome/patient-login'])
})
}else{
  alert('old password not matched')
}

  }

}