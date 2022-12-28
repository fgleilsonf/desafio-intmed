import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTService } from './jwt.service';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewConsultationComponent } from './components/pages/new-consultation/new-consultation.component';
import { ListConsultationComponent } from './components/pages/list-consultation/list-consultation.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/ui/modal/modal.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { SelectSpecialtyComponent } from './components/select-specialty/select-specialty.component';
import { SelectDoctorComponent } from './components/select-doctor/select-doctor.component';
import { SelectAgendaComponent } from './components/select-agenda/select-agenda.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputPasswordComponent } from './components/ui/input-password/input-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewConsultationComponent,
    ListConsultationComponent,
    AuthComponent,
    ModalComponent,
    ButtonComponent,
    SelectSpecialtyComponent,
    SelectDoctorComponent,
    SelectAgendaComponent,
    SelectAgendaComponent,
    InputPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JWTService, multi: true },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
