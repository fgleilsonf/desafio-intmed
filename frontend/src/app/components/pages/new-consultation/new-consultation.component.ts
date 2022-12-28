import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalService } from "../../../modal.service";
import { Doctor } from "../../../Doctor";
import { Agenda } from "../../../Agenda";
import { ConsultationService } from "../../../services/consultation.service";
import { Consultation } from "../../../Consultation";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-new-consultation',
  templateUrl: './new-consultation.component.html',
  styleUrls: ['./new-consultation.component.css']
})
export class NewConsultationComponent implements OnInit {
  keyModal = 'form-new-consultation';

  consultationForm = this.fb.group({
    specialtyId: ['', Validators.required],
    doctorId: ['', Validators.required],
    agenda: ['', Validators.required],
    horario: ['', Validators.required],
  });

  agenda: Agenda | null = null;
  specialtyId: string = '';
  doctorId: string = '';
  doctor: Doctor | null = null;
  horario: string = '';
  horarios: string[] = [];
  isDisabledHorario: boolean = true;
  isDisable: boolean = true;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();

  constructor(private modalService: ModalService, private consultationService: ConsultationService, private fb: FormBuilder) {
  }

  ngOnInit(): void {}

  closeModal(id: string) {
    this.specialtyId = '';
    this.doctorId = '';

    this.modalService.close(id);
  }

  onChangeSpecialty(id: any) {
    this.specialtyId = id;
    this.isDisabledHorario = !(this.doctorId && this.specialtyId && this.agenda);
    this.isDisable = this.formIsInvalid();
  }
  onChangeDoctor(value: any) {
    this.doctor = value;
    this.doctorId = value.id;
    this.isDisabledHorario = !(this.doctorId && this.specialtyId && this.agenda);
    this.isDisable = this.formIsInvalid();
  }

  onChangeAgenda(value: any) {
    this.agenda = value;
    this.horario = '';
    this.isDisabledHorario = !(this.doctorId && this.specialtyId && this.agenda);
    this.isDisable = this.formIsInvalid();
  }

  onSelectHorario(value: any) {
    this.horario = value;
    this.isDisable = this.formIsInvalid();
  }

  formIsInvalid() {
    return !this.doctor || !this.agenda || !this.specialtyId || !this.horario;
  }

  async onConfirm() {
    if (this.formIsInvalid()) {
      return;
    }

    const payload = {
      id: 0,
      medico: this.doctor,
      dia: this.agenda?.dia,
      horario: this.horario,
    } as Consultation;

    await this.consultationService.addConsultation(payload).subscribe(()=> {
      this.modalService.close('form-new-consultation');
      this.modalService.open('alert-success-add-consultation');
      this.refreshList.emit();
    });
  }

}
