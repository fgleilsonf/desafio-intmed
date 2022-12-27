import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Specialty} from "../../Specialty";
import {ModalService} from "../../modal.service";
import {SpecialtyService} from "../../services/specialty.service";

@Component({
  selector: 'app-select-specialty',
  templateUrl: './select-specialty.component.html',
  styleUrls: ['./select-specialty.component.css']
})
export class SelectSpecialtyComponent implements OnInit {
  specialties: Specialty[] = [];
  specialty: string = '';
  loading: boolean = false;
  @Output() onChangeSpecialty: EventEmitter<any> = new EventEmitter();
  constructor(private specialtyService: SpecialtyService) {}

  ngOnInit() {
    this.loading = true;
    this.specialtyService.getSpecialties().subscribe((items) => {
      this.specialties = items;
      this.loading = false;
    });
  }

  onSelectSpecialty(value: any) {
    this.onChangeSpecialty.emit(value);
  }
}
