import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Specialty} from "../Specialty";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {
  private apiUrl = `${environment.apiUrl}/especialidades`;
  constructor(private http: HttpClient) {}

  getSpecialties(): Observable<Specialty[]> {
    return this.http.get<Specialty[]>(this.apiUrl);
  }
}
