import { TestBed } from '@angular/core/testing';

import { ConsultationService } from './consultation.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { environment } from "../../environments/environment";

describe('#addConsultation()', () => {
  let service: ConsultationService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [service],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(ConsultationService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('returned Observable should match the right data', () => {
    const mockConsultation = {
      "id": 0,
      "dia": "2020-02-10",
      "horario": "14:00",
      "medico": {
        "id": 1,
        "crm": 3711,
        "nome": "Drauzio Varella",
        "especialidade": {
          "id": 2,
          "nome": "Pediatria"
        }
      },
      "data_agendamento": "2020-02-01T10:45:0-03:00"
    };

    service.addConsultation(mockConsultation)
      .subscribe(consultationData => {
        expect(consultationData.horario).toEqual('14:00');
      });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/consultas`);

    expect(req.request.method).toEqual('POST');

    req.flush(mockConsultation);
  });
});
