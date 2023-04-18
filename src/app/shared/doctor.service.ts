import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor( private http :HttpClient) { }
  doctorLogin(u:any,p:any){
    return this.http.get<any>(`http://localhost:4000/doctor/doctorlogin?dname=${u}&dpassword=${p}`)
  }
  viewDoctor(){
    return this.http.get<any>("http://localhost:4000/Doctor/viewdoctors")
  }
  viewProfile(n:any){
    return this.http.get<any>(`http://localhost:4000/Doctor/doctorprofile?dname=${n}`)
  }
  viewMedicines(){
    return this.http.get<any>("http://localhost:4000/Doctor/viewMedecienes")
  }
  viewRemedies(){
    return this.http.get<any>("http://localhost:4000/Doctor/viewRemedies")
  }
  viewAppointments(u:any){
    return this.http.get<any>(`http://localhost:4000/Doctor/viewappoinments?dname=${u}`)
  }
  AddMedicine(data:any){
    return this.http.post<any>("http://localhost:4000/Doctor/addmedicien",data)
  }
  AddRemedie(data:any){
    return this.http.post<any>("http://localhost:4000/Doctor/addremedies",data)
  }
  ViewHospitals(){
    return this.http.get<any>("http://localhost:4000/Doctor/viewhospitals")
  }
  EditDoctor(id:any,data:any){
    return this.http.put<any>( "http://localhost:4000/admin/"+id,data)
  }
  AddDoctor(data:any){
    return this.http.post<any>("http://localhost:4000/Doctor/doctor",data)
  }
  SearchMedicine(P:any){
    return this.http.get<any>( `http://localhost:4000/Doctor/searchMedecienes?Problem=${P}`)
  }
  SearchRemedie(P:any){
    return this.http.get<any>(  `http://localhost:4000/Doctor/searchRemedies?Problem=${P}`)
  }


}