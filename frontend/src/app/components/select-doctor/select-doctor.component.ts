import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange} from '@angular/core';
import {Doctor} from "../../Doctor";
import {DoctorService} from "../../services/doctor.service";
import {Specialty} from "../../Specialty";

@Component({
  selector: 'app-select-doctor',
  templateUrl: './select-doctor.component.html',
  styleUrls: ['./select-doctor.component.css']
})
export class SelectDoctorComponent implements OnInit {
  doctors: Doctor[] = [];
  loading: boolean = false;
  disabled: boolean = true;
  doctor: string = '';
  @Input() specialtyId!: string;
  @Output() onChangeDoctor: EventEmitter<any> = new EventEmitter();

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {}

  loadDoctors() {
    this.loading = true;
    this.disabled = true;
    this.doctor = '';

    this.doctorService.getDoctors().subscribe((items) => {
      this.doctors = items;
      this.loading = false;
      this.disabled = false;
    });
  }

  ngOnChanges(changes: SimpleChange) {
    if (this.specialtyId) {
      this.loadDoctors();
    }
  }

  onSelectDoctor(value: any) {
    this.onChangeDoctor.emit(value);
  }
}
