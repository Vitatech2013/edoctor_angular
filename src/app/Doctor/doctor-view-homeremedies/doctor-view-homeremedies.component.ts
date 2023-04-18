import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/shared/doctor.service';

@Component({
  selector: 'app-doctor-view-homeremedies',
  templateUrl: './doctor-view-homeremedies.component.html',
  styleUrls: ['./doctor-view-homeremedies.component.scss']
})
export class DoctorViewHomeremediesComponent implements OnInit{
  remedies:any
  constructor(private service : DoctorService){}
  ngOnInit(): void {
    this.service.viewRemedies().subscribe((res)=>{
       this.remedies=res
    })
  }


}
