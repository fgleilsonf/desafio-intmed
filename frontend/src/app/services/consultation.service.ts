import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Doctor} from "../Doctor";
import {Consultation} from "../Consultation";

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  private apiUrl = `${environment.apiUrl}/consultas`;

  constructor(private http: HttpClient) {
  }

  getConsultations(): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(this.apiUrl);
  }

  remove(id: number): Observable<Consultation> {
    return this.http.delete<Consultation>(`${this.apiUrl}/${id}`);
  }

  addConsultation(consultation: Consultation): Observable<Consultation> {
    return this.http.post<Consultation>(this.apiUrl, consultation);
  }
}
