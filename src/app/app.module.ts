import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminViewHospitalComponent } from './Admin/admin-view-hospital/admin-view-hospital.component';
import { AdminViewDoctorComponent } from './Admin/admin-view-doctor/admin-view-doctor.component';
import { AdminViewPatientComponent } from './Admin/admin-view-patient/admin-view-patient.component';
import { AdminViewAppointmentComponent } from './Admin/admin-view-appointment/admin-view-appointment.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminChangepasswordComponent } from './Admin/admin-changepassword/admin-changepassword.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { DoctorLoginComponent } from './Doctor/doctor-login/doctor-login.component';
import { DoctorRegistrationComponent } from './Doctor/doctor-registration/doctor-registration.component';
import { DoctorDashboardComponent } from './Doctor/doctor-dashboard/doctor-dashboard.component';
import { DoctorProfileComponent } from './Doctor/doctor-profile/doctor-profile.component';
import { DoctorDoctorsComponent } from './Doctor/doctor-doctors/doctor-doctors.component';
import { DoctorAppointmentsComponent } from './Doctor/doctor-appointments/doctor-appointments.component';
import { DoctorAddMedicinesComponent } from './Doctor/doctor-add-medicines/doctor-add-medicines.component';
import { DoctorViewMedicinesComponent } from './Doctor/doctor-view-medicines/doctor-view-medicines.component';
import { DoctorAddHomeremediesComponent } from './Doctor/doctor-add-homeremedies/doctor-add-homeremedies.component';
import { DoctorViewHomeremediesComponent } from './Doctor/doctor-view-homeremedies/doctor-view-homeremedies.component';
import { DoctorChangepasswordComponent } from './Doctor/doctor-changepassword/doctor-changepassword.component';
import { PatientLoginComponent } from './Patient/patient-login/patient-login.component';
import { PatientRegistrationComponent } from './Patient/patient-registration/patient-registration.component';
import { PatientProfileComponent } from './Patient/patient-profile/patient-profile.component';
import { PatientSearchDoctorsComponent } from './Patient/patient-search-doctors/patient-search-doctors.component';
import { PatientViewAppointmentsComponent } from './Patient/patient-view-appointments/patient-view-appointments.component';
import { PatientChangepasswordComponent } from './Patient/patient-changepassword/patient-changepassword.component';
import { HospitalLoginComponent } from './Hospital/hospital-login/hospital-login.component';
import { HospitalRegistrationComponent } from './Hospital/hospital-registration/hospital-registration.component';
import { HospitalHomeComponent } from './Hospital/hospital-home/hospital-home.component';
import { HospitalProfileComponent } from './Hospital/hospital-profile/hospital-profile.component';
import { HospitalViewDoctorsComponent } from './Hospital/hospital-view-doctors/hospital-view-doctors.component';
import { HospitalViewPatientsComponent } from './Hospital/hospital-view-patients/hospital-view-patients.component';
import { HospitalViewAppointmentsComponent } from './Hospital/hospital-view-appointments/hospital-view-appointments.component';
import { SearchMedicineComponent } from './welcome/search-medicine/search-medicine.component';
import { SearchRemediesComponent } from './welcome/search-remedies/search-remedies.component';
import { PatientDashboardComponent } from './Patient/patient-dashboard/patient-dashboard.component';
import { HospitalDashboardComponent } from './Hospital/hospital-dashboard/hospital-dashboard.component';
import { HospitalChangepasswordComponent } from './Hospital/hospital-changepassword/hospital-changepassword.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
  
    AppComponent,
    WelcomeComponent,
    AdminHomeComponent,
    AdminViewHospitalComponent,
    AdminViewDoctorComponent,
    AdminViewPatientComponent,
    AdminViewAppointmentComponent,
    AdminDashboardComponent,
    AdminChangepasswordComponent,
    AdminLoginComponent,
    DoctorLoginComponent,
    DoctorRegistrationComponent,
    DoctorDashboardComponent,
    DoctorProfileComponent,
    DoctorDoctorsComponent,
    DoctorAppointmentsComponent,
    DoctorAddMedicinesComponent,
    DoctorViewMedicinesComponent,
    DoctorAddHomeremediesComponent,
    DoctorViewHomeremediesComponent,
    DoctorChangepasswordComponent,
    PatientLoginComponent,
    PatientRegistrationComponent,
    PatientProfileComponent,
    PatientSearchDoctorsComponent,
    PatientViewAppointmentsComponent,
    PatientChangepasswordComponent,
    HospitalLoginComponent,
    HospitalRegistrationComponent,
    HospitalHomeComponent,
    HospitalProfileComponent,
    HospitalViewDoctorsComponent,
    HospitalViewPatientsComponent,
    HospitalViewAppointmentsComponent,
    SearchMedicineComponent,
    SearchRemediesComponent,
    PatientDashboardComponent,
    HospitalDashboardComponent,
    HospitalChangepasswordComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
