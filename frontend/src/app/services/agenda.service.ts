import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Agenda} from "../Agenda";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private apiUrl = `${environment.apiUrl}/agendas`;

  constructor(private http: HttpClient) {
  }

  getAgendas(specialtyId: number, doctorId: number): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(this.apiUrl, {
      params: {
        specialtyId, doctorId
      }
    });
  }
}
