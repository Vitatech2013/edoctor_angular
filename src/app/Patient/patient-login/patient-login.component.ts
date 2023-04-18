import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/shared/patient.service';
@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.scss']
})
export class PatientLoginComponent implements OnInit {
  constructor( private fb :FormBuilder,
    private service : PatientService,
    private route : Router){}
  PLoginForm! : FormGroup;
  ngOnInit(): void {
    this.PLoginForm=this.fb.group({
      name : ['',[Validators.required]],
      password : ['',[Validators.required]],

    })}
    patientLogin() {
      let name =this.PLoginForm.get('name')?.value;
      let password = this.PLoginForm.get('password')?.value;
      this.service.patientLogin(name,password).subscribe((res)=>{console.log(res)
        if(res){
          localStorage.setItem('patients',JSON.stringify(res));
          alert('Login success')
              this.route.navigate(['/patient-dashboard'])
              }else{
                alert("invalid credentials")
              }
            })
          }
  
  }