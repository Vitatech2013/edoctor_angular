import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http :HttpClient) { }
  
  hospitalLogin(u:any,p:any){
    return this.http.get<any>(`http://localhost:4000/hospital/hospitallogin?hospitalname=${u}&password=${p}`)
}
ViewProfile(hn:any){
  return this.http.get<any>(`http://localhost:4000/Hospital/hospitalprofile?hospitalname=${hn}`)
}
EditHospital(id:any,data:any){
  return this.http.put<any>("http://localhost:4000/admin/update/"+id,data)
}
ViewDoctors(){
  return this.http.get<any>("http://localhost:4000/hospital/viewdoctors")
}
ViewPatients(){
  return this.http.get<any>("http://localhost:4000/hospital/viewpatients")
}
ViewAppointments(hospitalname:any){
  return this.http.get<any>(`http://localhost:4000/Hospital/viewappoinments?HospitalName=${hospitalname}`)
}
AddHospital(data:any){
  return this.http.post<any>("http://localhost:4000/hospital/hospital",data)
}
}