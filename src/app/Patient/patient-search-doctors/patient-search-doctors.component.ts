import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/shared/patient.service';

@Component({
  selector: 'app-patient-search-doctors',
  templateUrl: './patient-search-doctors.component.html',
  styleUrls: ['./patient-search-doctors.component.scss']
})
export class PatientSearchDoctorsComponent  implements OnInit{
  PsearchdrForm!: FormGroup;
  doctors:any
  doctorsList:any
  kkl:any
AddAppointment!: FormGroup;
  id: any;
  patients: any;
constructor( private fb : FormBuilder,
  private service :PatientService){}
ngOnInit(): void {
  this.service.viewDoctor().subscribe((res:any)=>{
    this.doctorsList=res
  })
  this.doctors=JSON.parse(localStorage.getItem('doctors')!)
  this.patients=JSON.parse(localStorage.getItem('patients')!)


  this.PsearchdrForm=this.fb.group({
    sd : ['',[Validators.required]]
  })
  this.AddAppointment=this.fb.group({
    name :['',[Validators.required]],
    HospitalName:['',[Validators.required]],
    dname :['',[Validators.required]],
    time :['',[Validators.required]],
    date :['',[Validators.required]],

  }),
    this.getdoctors()
}
geteditdata(a:any){
let myname=JSON.parse(localStorage.getItem('patients')!).name
  this.id=a._id
  console.log(myname);
  this.AddAppointment.patchValue({
    name:myname,
    HospitalName:a.HospitalName,
     dname:a.dname,
  })
}
getdoctors(){
  this.service.viewDoctor().subscribe((res:any)=>{
    this.doctors=res
    console.log(res)
  })
}
search(){
  let d=this.PsearchdrForm.value.sd
  this.kkl=this.doctorsList.filter((x:any)=>x.dspecilization==d)
  
}
BookAppointment(){
  if(this.AddAppointment.valid){
    this.service.AddAppointment(this.AddAppointment.value).subscribe((res)=>{
      alert('Appointment Booked')
    })
  }else{
    alert('something went wrong')
  }
 
}
}



  