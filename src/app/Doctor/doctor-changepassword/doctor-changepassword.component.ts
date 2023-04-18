import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/shared/doctor.service';


@Component({
  selector: 'app-doctor-changepassword',
  templateUrl: './doctor-changepassword.component.html',
  styleUrls: ['./doctor-changepassword.component.scss']
})
export class DoctorChangepasswordComponent implements OnInit {
  Dname: any;
  constructor( private fb : FormBuilder,
    private service : DoctorService,
    private router:Router ){}
  DchangepswForm !: FormGroup;
  ngOnInit(): void {
    this.Dname=JSON.parse(localStorage.getItem('doctors')!)
    console.log(this.Dname,"check");
    
    this.DchangepswForm=this.fb.group({
      uname : ['',[Validators.required]],
      pwd :  ['',[Validators.required]],
      newpwd :  ['',[Validators.required]],
    })
    this.DchangepswForm.patchValue({
      uname:this.Dname.dname
    })
  }
change(){
  let password = this.DchangepswForm.get('pwd')?.value
  let newpassword = this.DchangepswForm.get('newpwd')?.value

  if(this.Dname.dpassword == password){
    let newData = {
      dpassword: newpassword
    }
    this.service.EditDoctor(this.Dname._id,newData).subscribe((res:any)=>{
      localStorage.removeItem('doctors')
      this.router.navigate(['welcome/doctor-login'])
    })
  }else{
    alert('password And newpassword not matched')
  }
}


}

