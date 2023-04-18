import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/shared/doctor.service';


@Component({
  selector: 'app-doctor-add-medicines',
  templateUrl: './doctor-add-medicines.component.html',
  styleUrls: ['./doctor-add-medicines.component.scss']
})
export class DoctorAddMedicinesComponent implements OnInit{
  constructor( private fb : FormBuilder,
    private service : DoctorService){}
  MedicineForm !: FormGroup;
  ngOnInit(): void {
    this.MedicineForm=this.fb.group({
      Problem : ['',[Validators.required]],
      Precautions :  ['',[Validators.required]],
      Medicienes :  ['',[Validators.required]],
    })
  }
  addmedicine(){
    if(this.MedicineForm.valid){
      this.service.AddMedicine(this.MedicineForm.value).subscribe((res)=>{        console.log(res)
        alert("Added successfully");
        window.location.reload()
      })
    }else{
       alert("something went wrong")
        }
  }


}

