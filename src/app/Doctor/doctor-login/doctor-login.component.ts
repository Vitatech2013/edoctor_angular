import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/shared/doctor.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.scss']
})
export class DoctorLoginComponent implements OnInit{
PLoginForm!: FormGroup;
  constructor( private fb : FormBuilder,
    private service : DoctorService,
    private route :Router){
  }
  ngOnInit(): void {
    this.PLoginForm=this.fb.group({
      dname : ['',[Validators.required]],
      dpassword : ['',[Validators.required]],
    })
  }
  doctorlogin() {
    let dname =this.PLoginForm.get('dname')?.value;
    let dpassword = this.PLoginForm.get('dpassword')?.value;
    this.service.doctorLogin(dname,dpassword).subscribe((res)=>{console.log(res)
      if(res){console.log(res,"chescl")
        localStorage.setItem('doctors',JSON.stringify(res));
        alert('Login success')
            this.route.navigate(['/doctor-dashboard'])
            }else{
              alert("invalid credentials")
            }
          })
        }

}
