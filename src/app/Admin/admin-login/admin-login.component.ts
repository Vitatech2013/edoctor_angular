import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  
  constructor( private fb : FormBuilder,
    private route :Router,
    private service :AdminService){}
  ALoginForm !: FormGroup;
  ngOnInit(): void {
    this.ALoginForm=this.fb.group({
      username : ['',[Validators.required]],
      password :  ['',[Validators.required]],
      emailid :  ['',[Validators.required]],

    })
}

adminlogin() {
  let username =this.ALoginForm.get('username')?.value;
  let password = this.ALoginForm.get('password')?.value;
  this.service.adminLogin(username,password).subscribe((res)=>{
    if(res){
      localStorage.setItem('admin',JSON.stringify(res));
      alert('Login success')
          this.route.navigate(['/admin-dashboard'])
          }else{
            alert("invalid credentials")
          }
        })
      }
}

  




//   this.adminservice.adminLogin(username,password).subscribe((res)=>{
//     console.log(res)
//     if(res){
//     localStorage.setItem('admin',JSON.stringify(res.body));
//     alert('Login success')
//     this.router.navigate(['/admin-home'])
//     }else{
//       alert("invalid credentials")
//     }
//   })
 