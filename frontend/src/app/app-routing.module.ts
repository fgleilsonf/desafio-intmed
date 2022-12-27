import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {ListConsultationComponent} from "./components/pages/list-consultation/list-consultation.component";
import {AuthComponent} from "./auth/auth.component";

const routes: Routes = [
  { path: '', component: ListConsultationComponent },
  { path: 'sign-in', component: AuthComponent },
  { path: 'list-consultation', component: ListConsultationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
