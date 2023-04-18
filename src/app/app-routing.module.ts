import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { PatientLoginComponent } from './Patient/patient-login/patient-login.component';
import { HospitalLoginComponent } from './Hospital/hospital-login/hospital-login.component';
import { SearchMedicineComponent } from './welcome/search-medicine/search-medicine.component';
import { SearchRemediesComponent } from './welcome/search-remedies/search-remedies.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { DoctorLoginComponent } from './Doctor/doctor-login/doctor-login.component';
import { AdminViewHospitalComponent } from './Admin/admin-view-hospital/admin-view-hospital.component';
import { AdminViewDoctorComponent } from './Admin/admin-view-doctor/admin-view-doctor.component';
import { AdminViewPatientComponent } from './Admin/admin-view-patient/admin-view-patient.component';
import { AdminViewAppointmentComponent } from './Admin/admin-view-appointment/admin-view-appointment.component';
import { DoctorDashboardComponent } from './Doctor/doctor-dashboard/doctor-dashboard.component';
import { DoctorProfileComponent } from './Doctor/doctor-profile/doctor-profile.component';
import { DoctorDoctorsComponent } from './Doctor/doctor-doctors/doctor-doctors.component';
import { DoctorAppointmentsComponent } from './Doctor/doctor-appointments/doctor-appointments.component';
import { DoctorAddMedicinesComponent } from './Doctor/doctor-add-medicines/doctor-add-medicines.component';
import { DoctorViewMedicinesComponent } from './Doctor/doctor-view-medicines/doctor-view-medicines.component';
import { DoctorViewHomeremediesComponent } from './Doctor/doctor-view-homeremedies/doctor-view-homeremedies.component';
import { DoctorAddHomeremediesComponent } from './Doctor/doctor-add-homeremedies/doctor-add-homeremedies.component';
import { DoctorChangepasswordComponent } from './Doctor/doctor-changepassword/doctor-changepassword.component';
import { PatientDashboardComponent } from './Patient/patient-dashboard/patient-dashboard.component';
import { PatientProfileComponent } from './Patient/patient-profile/patient-profile.component';
import { PatientSearchDoctorsComponent } from './Patient/patient-search-doctors/patient-search-doctors.component';
import { PatientViewAppointmentsComponent } from './Patient/patient-view-appointments/patient-view-appointments.component';
import { PatientChangepasswordComponent } from './Patient/patient-changepassword/patient-changepassword.component';
import { HospitalDashboardComponent } from './Hospital/hospital-dashboard/hospital-dashboard.component';
import { HospitalProfileComponent } from './Hospital/hospital-profile/hospital-profile.component';
import { HospitalViewAppointmentsComponent } from './Hospital/hospital-view-appointments/hospital-view-appointments.component';
import { HospitalViewPatientsComponent } from './Hospital/hospital-view-patients/hospital-view-patients.component';
import { HospitalViewDoctorsComponent } from './Hospital/hospital-view-doctors/hospital-view-doctors.component';
import { HospitalChangepasswordComponent } from './Hospital/hospital-changepassword/hospital-changepassword.component';
import { AdminChangepasswordComponent } from './Admin/admin-changepassword/admin-changepassword.component';
import { DoctorRegistrationComponent } from './Doctor/doctor-registration/doctor-registration.component';
import { HospitalRegistrationComponent } from './Hospital/hospital-registration/hospital-registration.component';
import { PatientRegistrationComponent } from './Patient/patient-registration/patient-registration.component';

const routes: Routes = [
  {path:'',redirectTo:'welcome',pathMatch:"full"},
  {path:'welcome',component:WelcomeComponent,children:[
    {path:'admin-login',component:AdminLoginComponent},
    {path:'doctor-login',component:DoctorLoginComponent},
    {path:'patient-login',component:PatientLoginComponent},
    {path:'hospital-login',component:HospitalLoginComponent},
    {path:'search-medicines',component:SearchMedicineComponent},
    {path:'search-remedies',component:SearchRemediesComponent},
    {path:'doctor-register',component:DoctorRegistrationComponent},
    {path:'hospital-register',component:HospitalRegistrationComponent},
    {path:'patient-register',component:PatientRegistrationComponent},



  ]},

  {path:'admin-dashboard',component:AdminDashboardComponent,children:[
    {path:'view-hospital',component:AdminViewHospitalComponent},
    {path:'view-doctor',component:AdminViewDoctorComponent},
    {path:'view-patient',component:AdminViewPatientComponent},
    {path:'view-appointment',component:AdminViewAppointmentComponent}, 
    {path:'changepassword',component:AdminChangepasswordComponent}
  ]},
  {path:'doctor-dashboard',component:DoctorDashboardComponent,children:[
    {path:'doctor-profile',component:DoctorProfileComponent},
    {path:'Dview-doctors',component:DoctorDoctorsComponent},
    {path:'Dview-appointments',component:DoctorAppointmentsComponent},
    {path:'Dadd-medicine',component:DoctorAddMedicinesComponent},
    {path:'Dview-medicine',component:DoctorViewMedicinesComponent},
    {path:'Dview-homeremedies',component:DoctorViewHomeremediesComponent},
    {path:'Dadd-homeremedies',component:DoctorAddHomeremediesComponent},
    {path:'Dchangepassword',component:DoctorChangepasswordComponent},
  ]},
  {path:'patient-dashboard',component:PatientDashboardComponent,children:[
    {path:'patient-profile',component:PatientProfileComponent},
    {path:'Psearch-doctors',component:PatientSearchDoctorsComponent},
    {path:'Pview-appointments',component:PatientViewAppointmentsComponent},
    {path:'Pchangepassword',component:PatientChangepasswordComponent},
  ]},
  {path:'hospital-dashboard',component:HospitalDashboardComponent,children:[
    {path:'hospital-profile',component:HospitalProfileComponent},
    {path:'Hview-appointments',component:HospitalViewAppointmentsComponent},
    {path:'Hview-patients',component:HospitalViewPatientsComponent},
    {path:'Hview-doctors',component:HospitalViewDoctorsComponent},
    {path:'Hchangepassword',component:HospitalChangepasswordComponent},

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
