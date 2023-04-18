import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http :HttpClient) { }
  patientLogin(u:any,p:any){
    return this.http.get<any>(`http://localhost:4000/patient/patientlogin?name=${u}&password=${p}`)
}
viewDoctor(){
  return this.http.get<any>("http://localhost:4000/patient/viewdoctors")
}
AddAppointment(data:any){
  return this.http.post<any>("http://localhost:4000/Patient/appoinment",data)
}
ViewProfile(n:any){
  return this.http.get<any>(`http://localhost:4000/Patient/patientprofile?name=${n}`)
}
EditPatient(id:any,data:any){
  return this.http.put<any>("http://localhost:4000/admin/updatePatient/"+id,data)
}
ViewAppointments(name:any){
  return this.http.get<any>(`http://localhost:4000/Patient/viewappoinments?name=${name}`)
}
AddPatient(data:any){
  return this.http.post<any>("http://localhost:4000/Patient/patient",data)
}
}
