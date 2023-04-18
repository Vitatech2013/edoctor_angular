import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AdminService } from 'src/app/shared/admin.service'

@Component({
  selector: 'app-admin-view-patient',
  templateUrl: './admin-view-patient.component.html',
  styleUrls: ['./admin-view-patient.component.scss']
})
export class AdminViewPatientComponent implements OnInit {
  patients:any
  PeditForm!: FormGroup
  id: any
  doctors: any
  constructor(private service : AdminService,
    private fb :FormBuilder,
  ){}
  ngOnInit(): void {
    this.PeditForm=this.fb.group({
      name:['',[Validators.required]],
      fathername:['',[Validators.required]],
      emailid:['',[Validators.required]],
      password:['',[Validators.required]],
      dob:['',[Validators.required]],
      phone:['',[Validators.required]],
      gender:['',[Validators.required]],
      address:['',[Validators.required]],

    })
       this.service.viewPatients().subscribe((res)=>{
        this.patients=res
       })
  }
  Edit(p:any){
    this.id=p._id
    console.log(this.doctors)
    this.PeditForm.patchValue({
      name:p.name,
      fathername:p.fathername,
      emailid:p.emailid,
      password:p.password,
      dob:p.dob,
      phone:p.phone,
      gender:p.gender,
      address:p.address
    })
   }
   EditPatients(){
   
     this.service.UpdatePatients(this.id,this.PeditForm.value).subscribe((res:any)=>{
      alert('Updated Successfully')
      window.location.reload()
      console.log(res);
     })
   }


Deletepatients(patients:any){
  this.service.deletePatients(patients._id).subscribe((res:any)=>{
    alert('Deleted successfully')
    window.location.reload()
  })
}
}