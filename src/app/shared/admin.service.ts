import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http :HttpClient) { }
  adminLogin(u:any,p:any){
    return this.http.get<any>(`http://localhost:4000/admin/adminlogin?username=${u}&password=${p}`)
  }
  viewhospital(){
    return this.http.get<any>("http://localhost:4000/Admin/viewhospitals")
  }
  viewDoctors(){
    return this.http.get<any>("http://localhost:4000/Admin/viewdoctors")
  }
  viewAppointments(){
    return this.http.get<any>("http://localhost:4000/Admin/viewappoinments")
  }
  viewPatients(){
    return this.http.get<any>("http://localhost:4000/Admin/viewpatients")
  }
  deleteHospital(id:any){
     return this.http.delete<any>("http://localhost:4000/Admin/deletehospital/"+id)
  }
  deleteDoctors(id:any){
    return this.http.delete<any>("http://localhost:4000/Admin/deletedoctor/"+id)
  }
  deleteAppointments(id:any){
    return this.http.delete<any>("http://localhost:4000/Admin/deleteappoinment/"+id)
  }
  deletePatients(id:any){
    return this.http.delete<any>("http://localhost:4000/Admin/deletepatient/"+id)
  }
  UpdateHospital(id:any,data:any){
    return this.http.put<any>("http://localhost:4000/Admin/update/"+id,data)
  }
  UpdateDoctors(id:any,data:any){
    return this.http.put<any>("http://localhost:4000/Admin/"+id,data)
  }
  UpdatePatients(id:any,data:any){
    return this.http.put<any>("http://localhost:4000/Admin/updatePatient/"+id,data)
  }
  UpdateAppointments(id:any,data:any){
    return this.http.put<any>("http://localhost:4000/Admin/updateAppoinment/"+id,data)
  }
  ChangePassword(id:any,data:any){
    return this.http.put<any>( "http://localhost:4000/Admin/updatepassword/"+id,data)
  }

}
