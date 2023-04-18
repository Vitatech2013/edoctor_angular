import { Component } from '@angular/core';

@Component({
  selector: 'app-hospital-dashboard',
  templateUrl: './hospital-dashboard.component.html',
  styleUrls: ['./hospital-dashboard.component.scss']
})
export class HospitalDashboardComponent {
  logout(){
    localStorage.removeItem('admin')
  }
}
