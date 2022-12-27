import {Component, EventEmitter, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {ModalService} from "../../../modal.service";
import {Specialty} from "../../../Specialty";
import {Doctor} from "../../../Doctor";
import {Agenda} from "../../../Agenda";
import {ConsultationService} from "../../../services/consultation.service";
import {Consultation} from "../../../Consultation";

@Component({
  selector: 'app-new-consultation',
  templateUrl: './new-consultation.component.html',
  styleUrls: ['./new-consultation.component.css']
})
export class NewConsultationComponent implements OnInit {
  keyModal = 'form-new-consultation';
  agenda : Agenda | null = null;
  specialtyId : string = '';
  doctorId : string = '';
  doctor : Doctor | null = null;
  horario : string = '';
  horarios : string[] = [];
  isDisabledHorario : boolean = true;

  constructor(private modalService: ModalService, private consultationService: ConsultationService) {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('11 ngOnChanges this.specialtyId && this.doctorId', this.specialtyId, this.doctorId);
  }

  closeModal(id: string) {
    this.specialtyId = '';
    this.doctorId = '';

    this.modalService.close(id);
  }

  onChangeDoctor(value: any) {
    this.doctor = value;
    this.doctorId = value.id;
    this.isDisabledHorario = !(this.doctorId && this.specialtyId && this.agenda);
  }
  onChangeSpecialty(id: any) {
    this.specialtyId = id;
    this.isDisabledHorario = !(this.doctorId && this.specialtyId && this.agenda);
  }

  onChangeAgenda(value: any) {
    this.agenda = value;
    this.isDisabledHorario = !(this.doctorId && this.specialtyId && this.agenda);
  }

  onSelectHorario(value: any) {
    this.horario = value;
  }

  async onConfirm() {
    const payload = {
        id: 0,
        medico: this.doctor,
        dia: this.agenda?.dia,
        horario: this.horario,
    } as Consultation;

    await this.consultationService.addConsultation(payload).subscribe();

    this.modalService.close('form-new-consultation');
  }

}
