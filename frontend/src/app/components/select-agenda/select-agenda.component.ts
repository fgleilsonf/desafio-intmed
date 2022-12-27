import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange} from '@angular/core';
import {Doctor} from "../../Doctor";
import {DoctorService} from "../../services/doctor.service";
import {Specialty} from "../../Specialty";
import {Agenda} from "../../Agenda";
import {AgendaService} from "../../services/agenda.service";

@Component({
  selector: 'app-select-agenda',
  templateUrl: './select-agenda.component.html',
  styleUrls: ['./select-agenda.component.css']
})
export class SelectAgendaComponent implements OnInit {
  agendas: Agenda[] = [];
  loading: boolean = false;
  isDisabled: boolean = true;
  agenda: string = '';
  @Output() onChangeAgenda: EventEmitter<any> = new EventEmitter();
  @Input() specialtyId!: string;
  @Input() doctorId!: string;

  constructor(private agendaService: AgendaService) {
  }

  ngOnInit() {
  }

  loadAgendas() {
    this.loading = true;
    this.isDisabled = true;
    this.agenda = '';

    this.agendaService
      .getAgendas(Number(this.specialtyId), Number(this.doctorId))
      .subscribe((items) => {
        this.agendas = items;
        this.loading = false;
        this.isDisabled = false;
      });
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('ngOnChanges this.specialtyId && this.doctorId', this.specialtyId, this.doctorId);
    if (this.specialtyId && this.doctorId) {
      this.loadAgendas();
    }
  }

  onSelectAgenda(value: any) {
    this.onChangeAgenda.emit(value);
  }
}
