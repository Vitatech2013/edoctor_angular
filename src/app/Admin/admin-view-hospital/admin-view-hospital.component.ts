import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-admin-view-hospital',
  templateUrl: './admin-view-hospital.component.html',
  styleUrls: ['./admin-view-hospital.component.scss']
})
export class AdminViewHospitalComponent  implements OnInit {
  data: any;
  country:any
  id:any
  constructor(private fb: FormBuilder,
    private service : AdminService) { }
  HeditForm!: FormGroup
  hospitals :any
  ngOnInit(): void {
    this.HeditForm = this.fb.group({
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
       this.service.viewhospital().subscribe((res)=>{
        this.hospitals=res
        console.log(res)
       });
  }
  Edit(h:any){
    this.id=h._id
console.log(this.hospitals)
    this.HeditForm.patchValue({
      hospitalname:h.hospitalname,
    estyear:h.estyear,
    emailid:h.emailid,
    password: h.password,
    phoneno:h.phoneno,
    district: h.district,
    country:h.country,
    state: h.state,
    address: h.address,
     })
  }
  Edithospitals(){

           this.service.UpdateHospital(this.id, this.HeditForm.value).subscribe((res:any)=>{
            alert('Updated Successfully')
            window.location.reload()

            console.log(res);
            
           })
  }
  Deletehospitals(hospitals:any){
    this.service.deleteHospital(hospitals._id).subscribe((res:any)=>{
      alert('Deleted successfully')
      window.location.reload()
    })

  }
}



       


