import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/shared/doctor.service';


@Component({
  selector: 'app-doctor-add-homeremedies',
  templateUrl: './doctor-add-homeremedies.component.html',
  styleUrls: ['./doctor-add-homeremedies.component.scss']
})
export class DoctorAddHomeremediesComponent implements OnInit{
  constructor( private fb : FormBuilder,
    private service : DoctorService){}
  RemedieForm !: FormGroup;
  ngOnInit(): void {
    this.RemedieForm=this.fb.group({
      Problem : ['',[Validators.required]],
      Ingredients :  ['',[Validators.required]],
      Procedure :  ['',[Validators.required]],
      Precautions :  ['',[Validators.required]],

    })
  }
  addremedie(){
    if(this.RemedieForm.valid){
      this.service.AddRemedie(this.RemedieForm.value).subscribe((res)=>{     
        alert("Added successfully");
        window.location.reload()
      })
    }else{
       alert("something went wrong")
        }
  }

}
