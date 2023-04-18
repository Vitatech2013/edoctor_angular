import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/shared/doctor.service';
@Component({
  selector: 'app-search-remedies',
  templateUrl: './search-remedies.component.html',
  styleUrls: ['./search-remedies.component.scss']
})
export class SearchRemediesComponent implements OnInit {
  searchremedie!: FormGroup;
  remedies: any;
  constructor( private fb : FormBuilder,
    private service :DoctorService){}
  ngOnInit(): void {
    this.searchremedie=this.fb.group({
      Problem : ['',[Validators.required]]
    })

 
  }
  search(){
    this.service.SearchRemedie(this.searchremedie.value.Problem).subscribe((res:any)=>{
      this.remedies=res
 })
  }
  
  }
