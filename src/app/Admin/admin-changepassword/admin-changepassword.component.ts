import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/admin.service';
@Component({
  selector: 'app-admin-changepassword',
  templateUrl: './admin-changepassword.component.html',
  styleUrls: ['./admin-changepassword.component.scss']
})
export class AdminChangepasswordComponent implements OnInit {
  Aname: any;

  constructor( private fb : FormBuilder,
    private service : AdminService,
    private router:Router){}
  AchangepswForm !: FormGroup;
  ngOnInit(): void {
    this.Aname =JSON.parse(localStorage.getItem('admin')!)
    this.AchangepswForm=this.fb.group({
      username : ['',[Validators.required]],
      password :  ['',[Validators.required]],
      newpassword :  ['',[Validators.required]],
      emailid :  ['',[Validators.required]],
    });
    this.AchangepswForm.patchValue({
      username:this.Aname.username
    })
  }

change(){
  let Password = this.AchangepswForm.get('password')?.value
  let newPassword = this.AchangepswForm.get('newpassword')?.value
  if(this.Aname.password == Password){
     let newData = {
      username : this.Aname.username,
      password : newPassword
     }
     this.service.ChangePassword(this.Aname._id,newData).subscribe((res:any)=>{
      localStorage.removeItem('admin')
      this.router.navigate(['welcome/admin-login'])
     
     })
  }else{
    alert('password And newpassword not matched')
  }
}

}
