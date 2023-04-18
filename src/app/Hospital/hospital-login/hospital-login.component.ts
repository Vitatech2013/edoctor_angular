import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HospitalService } from 'src/app/shared/hospital.service';

@Component({
  selector: 'app-hospital-login',
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.scss']
})
export class HospitalLoginComponent implements OnInit {
  constructor( private fb:FormBuilder,
    private service : HospitalService,
    private route:Router){}
  HLoginForm !: FormGroup
  ngOnInit(): void {
    this.HLoginForm=this.fb.group({
      hospitalname:['',[Validators.required]],
      password:['',[Validators.required]]

    })
  }
  hospitallogin() {
    let hospitalname =this.HLoginForm.get('hospitalname')?.value;
    let password = this.HLoginForm.get('password')?.value;
    this.service.hospitalLogin(hospitalname,password).subscribe((res)=>{console.log(res)
      if(res){
        localStorage.setItem('hospitals',JSON.stringify(res));
        alert('Login success')
            this.route.navigate(['/hospital-dashboard'])
            }else{
              alert("invalid credentials")
            }
          })
        }

}