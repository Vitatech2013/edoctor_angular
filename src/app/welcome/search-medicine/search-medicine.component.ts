import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/shared/doctor.service';
@Component({
  selector: 'app-searchmedicine',
  templateUrl: './search-medicine.component.html',
  styleUrls: ['./search-medicine.component.scss']
})
export class SearchMedicineComponent implements OnInit{
  PsearchdrForm!: FormGroup;
  problemsList: any;
constructor( private fb : FormBuilder,
  private service : DoctorService){}
  problems:any

ngOnInit(): void {
  this.PsearchdrForm=this.fb.group({
    Problem : ['',[Validators.required]]
  })
  
}
search(){
  this.service.SearchMedicine(this.PsearchdrForm.value.Problem).subscribe((res:any)=>{
    this.problems=res
    console.log(res,"get")
  })
  let p = this.PsearchdrForm.value.Problem
}

}

